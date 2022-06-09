import { BackToHome } from "../components/back-to-home";
import { ExternalLink } from "../components/external-link";
import { SectionDivider } from "../components/section-divider";
import { APP_NAME } from "../constants/app";
import { IconExternalLink } from "../icons/external-link";
import { Page } from "../layouts/page";

export default function Contact() {
  return (
    <Page title="Contact">
      <div className="grid lg:grid-cols-6 lg:gap-4">
        <div className="lg:col-span-4 lg:col-start-2">
          <h1>Contact</h1>
          <p className="mb-10">
            Please to the message via{" "}
            <ExternalLink
              href="https://twitter.com/livejam_db"
              className="text-yellow-500"
            >
              Twitter
              <IconExternalLink className="h-4 w-4 align-[-0.125em]" />
            </ExternalLink>{" "}
            or{" "}
            <ExternalLink
              href={`https://github.com/jamband/${APP_NAME.toLowerCase()}/issues`}
              className="text-yellow-500"
            >
              GitHub
              <IconExternalLink className="h-4 w-4 align-[-0.125em]" />
            </ExternalLink>{" "}
            issues. Thank you.
          </p>
          <SectionDivider className="mb-10" />
          <BackToHome />
        </div>
      </div>
    </Page>
  );
}
