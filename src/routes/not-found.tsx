import { createRouteConfig } from "@tanstack/react-router";
import { SectionDivider } from "~/components/section-divider";
import { Page } from "~/layouts/page";
import { router } from ".";

export const notFoundRoute = createRouteConfig().createRoute({
  path: "*",
  element: <NotFound />,
});

function NotFound() {
  return (
    <Page title="Not Found">
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1>Not Found</h1>
          <p className="mb-10">This page does not exist.</p>
          <SectionDivider className="mb-10" />
          <router.Link to="/" className="text-gray-300 hover:text-yellow-500">
            Go Digging →
          </router.Link>
        </div>
      </div>
    </Page>
  );
}
