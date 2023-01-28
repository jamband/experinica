import { BackToHome } from "@/components/back-to-home";
import { SectionDivider } from "@/components/section-divider";
import { APP_NAME } from "@/constants/app";
import { IconExternalLink } from "@/icons/external-link";
import { Page } from "@/layouts/page";
import { Route } from "@tanstack/react-router";
import { rootRoute } from "./__root";

export const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

export default function Contact() {
  return (
    <Page title="Contact">
      <div className="grid lg:grid-cols-6 lg:gap-4">
        <div className="lg:col-span-4 lg:col-start-2">
          <h1>Contact</h1>
          <p className="mb-10">
            Please to the message via{" "}
            <a
              href="https://twitter.com/livejam_db"
              className="group text-yellow-500 decoration-yellow-500/70"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
              <IconExternalLink className="h-4 w-4 align-[-0.125em] text-yellow-500/70" />
            </a>{" "}
            or{" "}
            <a
              href={`https://github.com/jamband/${APP_NAME.toLowerCase()}/issues`}
              className="group text-yellow-500 decoration-yellow-500/70"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <IconExternalLink className="h-4 w-4 align-[-0.125em] text-yellow-500/70" />
            </a>{" "}
            issues. Thank you.
          </p>
          <SectionDivider className="mb-10" />
          <BackToHome />
        </div>
      </div>
    </Page>
  );
}
