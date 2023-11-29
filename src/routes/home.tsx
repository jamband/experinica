import { SectionDivider } from "@/components/section-divider";
import { TapeHeader } from "@/components/tape-header";
import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { Page } from "@/layouts/page";
import { extractProps } from "@/utils/api";
import { Loader, useLoaderInstance } from "@tanstack/react-loaders";
import { Link, Route } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import styles from "./home.module.css";

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
  component: Home,
});

export default function Home() {
  const { data } = useLoaderInstance({
    key: "home",
  });

  return (
    <Page title="">
      <TapeHeader title="Monthly Favorite Tracks" />
      <SectionDivider className={styles.sectionDivider} />
      <section className={styles.main}>
        {data.years.map((year) => (
          <Link
            key={year}
            to="/$year"
            params={{ year }}
            className={styles.link}
          >
            <span className={styles.linkSymbol}>#</span>
            {year}
          </Link>
        ))}
      </section>
    </Page>
  );
}
