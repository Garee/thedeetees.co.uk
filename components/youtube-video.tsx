import styles from "./youtube-video.module.scss";

export default function YoutubeVideo() {
  return (
    <iframe
      className={styles.iframe}
      width="100%"
      height="315"
      src="https://www.youtube-nocookie.com/embed/SIUMdVyDD_8"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
