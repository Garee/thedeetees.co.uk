/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import Date from "../components/date";
import Music from "../components/music";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData, Post } from "../lib/posts";
import { getAllAudioSrc } from "../lib/audio";
import { getAllShows, Show } from "../lib/shows";
import { social } from "../lib/config";
import { useEffect } from "react";

declare global {
  interface Window {
    netlifyIdentity: any;
  }
}

interface HomeProps {
  body: string;
  posts: Post[];
  tracks: Array<{
    src: string;
    label: string;
  }>;
  shows: Show[];
}

function YoutubeVideo() {
  return (
    <>
      <iframe
        style={{ marginTop: "1rem" }}
        width="100%"
        height="315"
        src="https://www.youtube-nocookie.com/embed/SIUMdVyDD_8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

function Shows({ shows }: any) {
  return (
    <>
      <h2 style={{ marginBottom: 0 }}>Shows</h2>
      {shows.map((s: Show, index: number) => (
        <ul key={index}>
          <li>
            <Link href={s.link}>
              <a>
                <h4 style={{ marginBottom: 0 }}>{s.venue}</h4>
              </a>
            </Link>
            <small>
              📅 <Date dateString={s.date} fmt="E, d LLLL, yyyy @ hh:mma" />
            </small>
            <br />
            <small>📌 {s.location}</small>
          </li>
        </ul>
      ))}
    </>
  );
}

function Social() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <a href={social.instagram}>
        <img
          src="/social/instagram.svg"
          width="30"
          height="30"
          alt="Instagram"
        />
      </a>
      <a href={social.facebook}>
        <img src="/social/facebook.svg" width="30" height="30" alt="Facebook" />
      </a>
      <a href={social.twitter}>
        <img src="/social/twitter.svg" width="33" height="33" alt="Twitter" />
      </a>
      <a href={social.youtube}>
        <img src="/social/youtube.svg" width="30" height="30" alt="YouTube" />
      </a>
    </div>
  );
}

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <p>
        For any enquiries please send us an{" "}
        <a href={`mailto:${social.email}`}>email</a> or get in touch via social
        media.
      </p>
    </>
  );
}

export default function Home({
  body,
  posts,
  tracks,
  shows,
}: HomeProps): JSX.Element {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user: any) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin";
          });
        }
      });

      window.netlifyIdentity.init();
    }
  }, []);

  return (
    <>
      <Head>
        <script
          defer
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Head>
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
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Layout>
    </>
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
