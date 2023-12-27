import { BackToHome } from "@/components/back-to-home";
import { SectionDivider } from "@/components/section-divider";
import { APP_NAME } from "@/constants/app";
import { IconExternalLink } from "@/icons/external-link";
import { Page } from "@/layouts/page";
import styles from "./styles.module.css";

export default function Component() {
  return (
    <Page title="About" className={styles.container}>
      <div className={styles.containerInner}>
        <h1>About</h1>
        <p className={styles.description}>
          {APP_NAME} is my private playground for{" "}
          <a
            href="https://tanstack.com/router"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            TanStack Router
            <IconExternalLink className={styles.linkIcon} />
          </a>
          . This website is an open source project. See{" "}
          <a
            href={`https://github.com/jamband/${APP_NAME.toLowerCase()}`}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            GitHub: jamband/{APP_NAME.toLowerCase()}
            <IconExternalLink className={styles.linkIcon} />
          </a>{" "}
          for details.
        </p>
        <SectionDivider className={styles.sectionDivider} />
        <BackToHome className={styles.backToHome} />
      </div>
    </Page>
  );
}
