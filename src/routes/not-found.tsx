import { SectionDivider } from "@/components/section-divider";
import { Page } from "@/layouts/page";
import { Link } from "@tanstack/react-router";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <Page title="Not Found">
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <h1>Not Found</h1>
          <p className={styles.description}>This page does not exist.</p>
          <SectionDivider className={styles.sectionDivider} />
          <Link to="/" className={styles.link}>
            Go Digging →
          </Link>
        </div>
      </div>
    </Page>
  );
}
