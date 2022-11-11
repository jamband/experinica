import { BackToHome } from "~/components/back-to-home";
import { ExternalLink } from "~/components/external-link";
import { SectionDivider } from "~/components/section-divider";
import { APP_NAME } from "~/constants/app";
import { IconExternalLink } from "~/icons/external-link";
import { Page } from "~/layouts/page";

export default function About() {
  return (
    <Page title="About">
      <div className="grid lg:grid-cols-6 lg:gap-4">
        <div className="lg:col-span-4 lg:col-start-2">
          <h1>About</h1>
          <p className="mb-10">
            {APP_NAME} is my private playground for{" "}
            <ExternalLink
              href="https://tanstack.com/router"
              className="text-yellow-500"
            >
              TanStack Router
              <IconExternalLink className="h-4 w-4 align-[-0.125em]" />
            </ExternalLink>
            . This website is an open source project. See{" "}
            <ExternalLink
              href={`https://github.com/jamband/${APP_NAME.toLowerCase()}`}
              className="text-yellow-500"
            >
              GitHub: jamband/{APP_NAME.toLowerCase()}
              <IconExternalLink className="h-4 w-4 align-[-0.125em]" />
            </ExternalLink>{" "}
            for details.
          </p>
          <SectionDivider className="mb-10" />
          <BackToHome />
        </div>
      </div>
    </Page>
  );
}
