import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  // biome-ignore lint/a11y/useFocusableInteractive: <explanation>
  <div
    className={`${styles.container} ${props.className || ""}`}
    // biome-ignore lint/a11y/useSemanticElements: <explanation>
    role="separator"
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
