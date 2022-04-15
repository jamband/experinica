import { Link } from "../components/link";
import { SectionDivider } from "../components/section-divider";
import { Page } from "../layouts/page";

export default function NotFound() {
  return (
    <Page title="Not Found">
      <div className="flex h-70vh items-center justify-center">
        <div className="text-center">
          <h1>Not Found</h1>
          <p className="mb-10">This page does not exist.</p>
          <SectionDivider className="mb-10" />
          <Link to="/" className="text-gray-300">
            Go Digging →
          </Link>
        </div>
      </div>
    </Page>
  );
}
