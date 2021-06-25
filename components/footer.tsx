import { appName } from "../lib/config";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.divider} />
      <small>
        © {new Date().getFullYear()}, {appName} 🎸
      </small>
    </footer>
  );
}
