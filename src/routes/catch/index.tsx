import { SectionDivider } from "@/components/section-divider";
import { Page } from "@/layouts/page";
import { Link } from "@tanstack/react-router";
import styles from "./styles.module.css";

export default function Catch() {
  return (
    <Page title="Request Failed">
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <h1>Request Failed</h1>
          <p className={styles.description}>Failed to get data.</p>
          <SectionDivider className={styles.sectionDivider} />
          <Link to="/contact" className={styles.link}>
            Go to Contact →
          </Link>
        </div>
      </div>
    </Page>
  );
}
