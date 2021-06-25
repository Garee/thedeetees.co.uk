import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";
import {
  appAuthor,
  appDescription,
  appName,
  appSite,
  appIcon,
} from "../lib/config";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{appName}</title>
        <meta name="description" content={appDescription} />
        <meta property="og:image" content={appIcon} />
        <meta name="og:title" content={appName} />
        <meta property="og:description" content={appDescription} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={appSite} />
        <meta name="twitter:creator" content={appAuthor} />
        <meta name="twitter:title" content={appName} />
        <meta name="twitter:description" content={appDescription} />
        <meta name="twitter:image" content={appIcon} />
        <meta name="theme-color" content="#ec1b24" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href={appIcon} />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
