import { Link } from "@tanstack/react-router";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <header className={styles.container}>
    <nav aria-label="Header navigation" className={styles.nav}>
      <Link to="/" className={styles.link}>
        <span className={styles.account}>jamband/</span>
        <span className={styles.repository}>{props.repository}</span>
      </Link>
    </nav>
  </header>
);
