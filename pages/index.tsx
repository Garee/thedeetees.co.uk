import fs from "fs";
import path from "path";
import { useEffect } from "react";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import Music from "../components/music";
import YoutubeVideo from "../components/youtube-video";
import Shows from "../components/shows";
import Social from "../components/social";
import Contact from "../components/contact";
import LatestPosts from "../components/latest-posts";
import { getSortedPostsData, Post } from "../lib/posts";
import { getAllAudioSrc, Track } from "../lib/audio";
import { getAllShows, Show } from "../lib/shows";
import utilStyles from "../styles/utils.module.scss";
import { redirectToAdminOnLogin } from "../lib/netlify-identity";

interface HomeProps {
  body: string;
  posts: Post[];
  tracks: Track[];
  shows: Show[];
}

export default function Home({
  body,
  posts,
  tracks,
  shows,
}: HomeProps): JSX.Element {
  useEffect(() => redirectToAdminOnLogin(), []);

  return (
    <Layout>
      <section>
        <YoutubeVideo />
      </section>
      <section className={utilStyles.headingMd} id="about">
        <p dangerouslySetInnerHTML={{ __html: body }}></p>
      </section>
      <section id="social">
        <Social />
      </section>
      <section id="music">
        <Music tracks={tracks} />
      </section>
      <section id="shows">
        <Shows shows={shows} />
      </section>
      <section id="posts">
        <LatestPosts posts={posts} />
      </section>
      <section id="contact">
        <Contact />
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
  const tracks = getAllAudioSrc();
  const shows = getAllShows();
  return { props: { body, posts, tracks, shows } };
};
