import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData, Post } from "../lib/posts";

interface HomeProps {
  body: string;
  posts: Post[];
}

export default function Home({ body, posts }: HomeProps): JSX.Element {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p dangerouslySetInnerHTML={{ __html: body }}></p>
      </section>
      <section>
        <h2>Latest Posts</h2>
        <ul className={utilStyles.list}>
          {posts.map((p: Post) => (
            <li className={utilStyles.listItem} key={p.id}>
              <Link href={`/posts/${p.id}`}>
                <a>
                  <h3 className={utilStyles.headingMd}>{p.title}</h3>
                </a>
              </Link>
              <Date dateString={p.date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const contentDirectory = path.join(process.cwd(), "pages/content");
  const about = fs.readFileSync(
    path.join(contentDirectory, "home.json"),
    "utf-8"
  );
  const { body } = JSON.parse(about);
  const posts = await getSortedPostsData();
  return { props: { body, posts } };
};
