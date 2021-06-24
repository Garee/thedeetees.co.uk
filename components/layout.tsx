// https://nextjs.org/docs/api-reference/next/head
import Head from "next/head";
// https://nextjs.org/docs/basic-features/image-optimization#image-component
import Image from "next/image";
import Link from "next/link";
import { appAuthor, appDescription, appName, appSite } from "../lib/config";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{appName}</title>
        <meta name="description" content={appDescription} />
        <meta property="og:image" content="/icon.png" />
        <meta name="og:title" content={appName} />
        <meta property="og:description" content={appDescription} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={appSite} />
        <meta name="twitter:creator" content={appAuthor} />
        <meta name="twitter:title" content={appName} />
        <meta name="twitter:description" content={appDescription} />
        <meta name="twitter:image" content="/icon.png" />
        <meta name="theme-color" content="#ec1b24" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>
      <header className={styles.header}>
        {
          <>
            <Image
              priority
              src="/images/icon.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={appName}
            />
            <Link href="/">
              <a>
                <h1 className={utilStyles.heading2Xl}>{appName}</h1>
              </a>
            </Link>
            <nav>
              <a href="#about">About</a>
              {" / "}
              <a href="#contact">Contact</a>
              {" / "}
              <a href="#music">Music</a>
              {" / "}
              <a href="#shows">Shows</a>
            </nav>
          </>
        }
      </header>
      <main>{children}</main>
    </div>
  );
}
