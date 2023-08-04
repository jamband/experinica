import { SectionDivider } from "@/components/section-divider";
import { TapeHeader } from "@/components/tape-header";
import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { Page } from "@/layouts/page";
import { extractProps } from "@/utils/api";
import {
  Loader,
  useLoaderClient,
  useLoaderInstance,
} from "@tanstack/react-loaders";
import { Link, Route } from "@tanstack/router";
import { rootRoute } from "./__root";

type LoaderData = {
  years: Array<string>;
};

export const homeLoader = new Loader({
  key: "home",
  fn: async () => {
    const response = await fetch(`${API_URL}/${API_URL_SUFFIX}`);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = extractProps(await response.json());

    return {
      years: data.years,
    } as LoaderData;
  },
});

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: async ({ context }) => {
    await context.loadClient.load({ key: "home" });
    return () => useLoaderInstance({ key: "home" });
  },
  component: Home,
});

export default function Home() {
  const { data } = homeRoute.useLoader()();

  return (
    <Page title="">
      <TapeHeader title="Monthly Favorite Tracks" className="mb-10" />
      <SectionDivider className="mb-10" />
      <section className="flex items-center justify-center gap-5">
        {data.years.map((year) => (
          <Link
            key={year}
            to="/$year"
            params={{ year }}
            className="group rounded bg-gray-700 px-4 py-1 font-mono text-sm leading-7 text-gray-300 no-underline hover:bg-yellow-500 hover:text-gray-900 active:bg-yellow-500 active:text-gray-900"
          >
            <span className="align-top text-xs text-gray-500 group-hover:text-gray-600 group-active:text-gray-600">
              #
            </span>
            {year}
          </Link>
        ))}
      </section>
    </Page>
  );
}
