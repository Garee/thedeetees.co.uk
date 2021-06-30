import Image from "next/image";
import { social } from "../lib/config";
import instagram from "../public/social/instagram.svg";
import facebook from "../public/social/facebook.svg";
import twitter from "../public/social/twitter.svg";
import youtube from "../public/social/youtube.svg";
import styles from "./social.module.scss";

export default function Social() {
  return (
    <div className={styles.container}>
      <a href={social.instagram} target="_blank" rel="noreferrer">
        <Image src={instagram} width="30" height="30" alt="Instagram" />
      </a>
      <a href={social.facebook} target="_blank" rel="noreferrer">
        <Image src={facebook} width="30" height="30" alt="Facebook" />
      </a>
      <a href={social.twitter} target="_blank" rel="noreferrer">
        <Image src={twitter} width="33" height="33" alt="Twitter" />
      </a>
      <a href={social.youtube} target="_blank" rel="noreferrer">
        <Image src={youtube} width="30" height="30" alt="YouTube" />
      </a>
    </div>
  );
}
