import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div
    className={`${styles.container} ${props.className || ""}`}
    aria-hidden="true"
  >
    <span className={styles.bar1} />
    <span className={styles.bar2} />
    <span className={styles.bar3} />
    <span className={styles.bar4} />
    <span className={styles.bar5} />
    <span className={styles.bar6} />
    <span className={styles.bar7} />
  </div>
);
