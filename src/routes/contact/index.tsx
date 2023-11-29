import { BackToHome } from "@/components/back-to-home";
import { SectionDivider } from "@/components/section-divider";
import { APP_NAME } from "@/constants/app";
import { IconExternalLink } from "@/icons/external-link";
import { Page } from "@/layouts/page";
import { Route } from "@tanstack/react-router";
import { rootRoute } from "../root";
import styles from "./styles.module.css";

export const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

export default function Contact() {
  return (
    <Page title="Contact" className={styles.container}>
      <div className={styles.containerInner}>
        <h1>Contact</h1>
        <p className={styles.description}>
          Please to the message via{" "}
          <a
            href="https://twitter.com/livejam_db"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
            <IconExternalLink className={styles.linkIcon} />
          </a>{" "}
          or{" "}
          <a
            href={`https://github.com/jamband/${APP_NAME.toLowerCase()}/issues`}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <IconExternalLink className={styles.linkIcon} />
          </a>{" "}
          issues. Thank you.
        </p>
        <SectionDivider className={styles.sectionDivider} />
        <BackToHome className={styles.backToHome} />
      </div>
    </Page>
  );
}
