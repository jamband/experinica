import { BackToHome } from "../../components/back-to-home";
import { SectionDivider } from "../../components/section-divider";
import { Page } from "../../layouts/page";
import styles from "./styles.module.css";

export default function ErrorComponent() {
  return (
    <Page title="Request Failed" className={styles.container}>
      <div className={styles.containerInner}>
        <h1>Request Failed</h1>
        <p className={styles.description}>Failed to get data.</p>
        <SectionDivider className={styles.sectionDivider} />
        <BackToHome className={styles.link} />
      </div>
    </Page>
  );
}
