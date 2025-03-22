import { IconExternalLink } from "../../icons/external-link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <header className={styles.container}>
    <h1>{props.title}</h1>
    <p className={styles.description}>
      selected from{" "}
      <a
        href="https://plusarchive.com"
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        PlusArchive
        <IconExternalLink className={styles.linkIcon} />
      </a>
    </p>
  </header>
);
