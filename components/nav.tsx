/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { appName, appIcon } from "../lib/config";
import styles from "./nav.module.scss";
import utilStyles from "../styles/utils.module.scss";

export default function Nav() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img
            src={appIcon}
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={appName}
          />
        </a>
      </Link>
      <Link href="/">
        <a className={utilStyles.noDecoration}>
          <h1 className={utilStyles.heading2Xl}>{appName}</h1>
        </a>
      </Link>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        {" / "}
        <a href="#contact">Contact</a>
        {" / "}
        <a href="#music">Music</a>
        {" / "}
        <a href="#posts">Posts</a>
        {" / "}
        <a href="#shows">Shows</a>
      </nav>
    </header>
  );
}
