import { Link } from "@tanstack/react-router";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={`${styles.container} ${props.className || ""}`}>
    <Link to="/" className={styles.link}>
      <span className={styles.linkSymbol}>←</span> Back to Home
    </Link>
  </div>
);
