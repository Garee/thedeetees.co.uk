import { Track } from "../lib/audio";
import styles from "./music.module.scss";

interface MusicProps {
  tracks: Track[];
}

export default function Music({ tracks }: MusicProps) {
  return (
    <>
      <h2>Music</h2>
      {tracks
        .sort((a, b) => a.label.localeCompare(b.label))
        .map(
          (
            t: {
              src: string;
              label: string;
            },
            index: number
          ) => (
            <figure key={index} className={styles.figure}>
              <figcaption className={styles.figCaption}>
                🎼 {t.label}
              </figcaption>
              <audio controls>
                <source src={t.src} />
                <p>Your browser does not support this audio player.</p>
              </audio>
            </figure>
          )
        )}
    </>
  );
}
