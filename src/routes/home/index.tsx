import { SectionDivider } from "@/components/section-divider";
import { TapeHeader } from "@/components/tape-header";
import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { Page } from "@/layouts/page";
import { extractProps } from "@/utils/api";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Link, Route } from "@tanstack/react-router";
import { rootRoute } from "../root";
import styles from "./styles.module.css";

const homeQueryOptions = queryOptions({
  queryKey: ["home"],
  queryFn: async (): Promise<{ years: Array<string> }> => {
    const response = await fetch(`${API_URL}/${API_URL_SUFFIX}`);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = extractProps(await response.json());

    return {
      years: data.years,
    };
  },
});

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: async ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(homeQueryOptions),
  component: function Home() {
    const { data } = useSuspenseQuery(homeQueryOptions);

    return (
      <Page title="" className={styles.container}>
        <TapeHeader title="Monthly Favorite Tracks" />
        <SectionDivider />
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
  },
});
