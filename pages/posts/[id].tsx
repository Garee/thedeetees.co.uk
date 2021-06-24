import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext
} from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData, Post as PostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.scss";

type PostProps = PostData;

export default function Post({ title, date, body }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
      <br />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <div>
        <Link href="/">
          <a>⬅ Go back</a>
        </Link>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params
}: GetStaticPropsContext) => {
  let post: PostProps = {
    id: "",
    title: "",
    date: "",
    body: ""
  };

  if (typeof params?.id === "string") {
    post = await getPostData(params.id);
  }

  return {
    props: post
  };
};

// The page paths depend on external data.
export const getStaticPaths: GetStaticPaths = async (
  _context: GetStaticPathsContext
) => {
  const paths = getAllPostIds();
  return {
    paths, // Pre-render these at build-time.
    fallback: false // Other routes should 404.
  };
};
