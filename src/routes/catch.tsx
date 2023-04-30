import { SectionDivider } from "@/components/section-divider";
import { Page } from "@/layouts/page";
import { Link } from "@tanstack/router";

export default function Catch() {
  return (
    <Page title="Request Failed">
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1>Request Failed</h1>
          <p className="mb-10">Failed to get data.</p>
          <SectionDivider className="mb-10" />
          <Link to="/contact" className="text-gray-300 hover:text-yellow-500">
            Go to Contact →
          </Link>
        </div>
      </div>
    </Page>
  );
}
