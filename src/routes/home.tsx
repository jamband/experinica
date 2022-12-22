import { createRouteConfig } from "@tanstack/react-router";
import { SectionDivider } from "~/components/section-divider";
import { TapeHeader } from "~/components/tape-header";
import { API_URL, API_URL_SUFFIX } from "~/constants/api";
import { Page } from "~/layouts/page";
import { extractProps } from "~/utils/api";
import { router } from ".";

export const homeRoute = createRouteConfig().createRoute({
  path: "/",
  component: Home,
  loader: async () => {
    const years = await fetch(`${API_URL}/${API_URL_SUFFIX}`);

    if (!years.ok) {
      throw new Error("Failed to fetch");
    }

    return {
      years: extractProps(await years.json()),
    };
  },
});

export default function Home() {
  const {
    loaderData: { years },
  } = router.useMatch(homeRoute.id);

  return (
    <Page title="">
      <TapeHeader title="Monthly Favorite Tracks" className="mb-10" />
      <SectionDivider className="mb-10" />
      <section className="flex items-center justify-center gap-5">
        {years?.years.map((year) => (
          <router.Link
            key={year}
            to={year}
            className="group rounded bg-gray-700 px-4 py-1 font-mono text-sm leading-7 text-gray-300 no-underline hover:bg-yellow-500 hover:text-gray-900 active:bg-yellow-500 active:text-gray-900"
          >
            <span className="align-top text-xs text-gray-500 group-hover:text-gray-600 group-active:text-gray-600">
              #
            </span>
            {year}
          </router.Link>
        ))}
      </section>
    </Page>
  );
}
