import Link from "next/link";
import Date from "./date";
import { Show } from "../lib/shows";
import styles from "./shows.module.scss";

interface ShowsProps {
  shows: Show[];
}

export default function Shows({ shows }: ShowsProps) {
  return (
    <>
      <h2>Shows</h2>
      {shows.map((s: Show, index: number) => (
        <ul key={index}>
          <li>
            <Link href={s.link}>
              <a target="_blank" rel="noreferrer">
                <h3 className={styles.venueHeading}>{s.venue}</h3>
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
