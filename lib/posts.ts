import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  id: string;
  date: string;
  title: string;
  body: string;
  thumbnail?: string;
}

export async function getSortedPostsData(): Promise<Post[]> {
  const fileNames: string[] = fs.readdirSync(postsDirectory);

  const allPostsData: Promise<Post>[] = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, "");
    return await getPostData(id);
  });

  return Promise.all(allPostsData).then((allPostsData) => {
    return allPostsData.sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      }
      return 0;
    });
  });
}

export function getAllPostIds(): Array<{ params: { id: string } }> {
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const { date, title, thumbnail } = matterResult.data;

  // Get the post content HTML.
  const contentHtml = await (
    await remark().use(html).process(matterResult.content)
  ).toString();

  return {
    id,
    title,
    thumbnail,
    date: date.toISOString(),
    body: contentHtml,
  };
}
