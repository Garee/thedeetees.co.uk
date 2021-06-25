/* eslint-disable @next/next/no-img-element */

import { social } from "../lib/config";
import styles from "./social.module.scss";

export default function Social() {
  return (
    <div className={styles.container}>
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
