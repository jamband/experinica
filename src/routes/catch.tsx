import { SectionDivider } from "~/components/section-divider";
import { Page } from "~/layouts/page";
import { router } from ".";

export default function Catch() {
  return (
    <Page title="Request Failed">
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1>Request Failed</h1>
          <p className="mb-10">Failed to get data.</p>
          <SectionDivider className="mb-10" />
          <router.Link
            to="/contact"
            className="text-gray-300 hover:text-yellow-500"
          >
            Go to Contact →
          </router.Link>
        </div>
      </div>
    </Page>
  );
}
