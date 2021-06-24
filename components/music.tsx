import styles from "./music.module.scss";

interface Track {
  src: string;
  label: string;
}

interface MusicProps {
  tracks: Track[];
}

export default function Music({ tracks }: MusicProps) {
  return (
    <>
      <h2>Music</h2>
      {tracks.map(
        (
          t: {
            src: string;
            label: string;
          },
          index: number
        ) => (
          <figure key={index} className={styles.figure}>
            <figcaption className={styles.figCaption}>🎼 {t.label}</figcaption>
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
