import { BackToHome } from "@/components/back-to-home";
import { SectionDivider } from "@/components/section-divider";
import { Page } from "@/layouts/page";
import styles from "./styles.module.css";

export default function NotFound() {
  return (
    <Page title="Not Found">
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <h1>Not Found</h1>
          <p className={styles.description}>This page does not exist.</p>
          <SectionDivider className={styles.sectionDivider} />
          <BackToHome className={styles.link} />
        </div>
      </div>
    </Page>
  );
}
