import Link from "next/link";
import Date from "./date";
import { Post } from "../lib/posts";
import utilStyles from "../styles/utils.module.scss";

interface LatestPostsProps {
  posts: Post[];
}

export default function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <>
      <h2>Latest Posts</h2>
      <ul className={utilStyles.list}>
        {posts.map((p: Post) => (
          <li className={utilStyles.listItem} key={p.id}>
            <Link href={`/posts/${p.id}`}>
              <a>
                <h3 className={utilStyles.headingMd}>{p.title}</h3>
              </a>
            </Link>
            <small>
              📰 <Date dateString={p.date} />
            </small>
          </li>
        ))}
      </ul>
    </>
  );
}
