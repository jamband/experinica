import { BackToHome } from "@/components/back-to-home";
import { SectionDivider } from "@/components/section-divider";
import { TapeHeader } from "@/components/tape-header";
import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { Page } from "@/layouts/page";
import type { Tape, Tapes } from "@/types/tape";
import { extractProps } from "@/utils/api";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Link, Route } from "@tanstack/react-router";
import { rootRoute } from "../root";
import { tapeRoute } from "../tape";
import styles from "./styles.module.css";

const tapesQueryOptions = (params: { year: string }) =>
  queryOptions({
    queryKey: ["tapes"],
    queryFn: async (): Promise<{
      title: string;
      tapes: Tapes;
    }> => {
      const response = await fetch(
        `${API_URL}/${params.year}/${API_URL_SUFFIX}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = { ...extractProps(await response.json()) };

      const tapes = data.tapes.map((tape: Tape) => {
        return { ...tape };
      });

      return {
        title: data.title,
        tapes,
      };
    },
  });

export const tapesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/$year",
  loader: ({ context: { queryClient }, params }) =>
    queryClient.ensureQueryData(tapesQueryOptions(params)),
  component: function Tapes({ useParams }) {
    const params = useParams();
    const { data } = useSuspenseQuery(tapesQueryOptions(params));

    const extractParamsFromTapePath = (path: string) => {
      const params = path.split("/").filter(Boolean);

      return {
        year: params[0],
        month: params[1],
        tape: params[2],
      };
    };

    return (
      <Page title={data.title} className={styles.container}>
        <TapeHeader title={`Monthly Favorite Tracks of ${params.year}`} />
        <SectionDivider className={styles.sectionDivider} />
        <ul className={styles.main}>
          {data.tapes.map((tape) => (
            <li key={tape.id}>
              {tape.path === "" ? (
                <div className={styles.tape}>
                  <span className={styles.blankTitle}>:: {tape.title} ::</span>
                  <div className={styles.date}>{tape.date}</div>
                </div>
              ) : (
                <div className={styles.tape}>
                  <Link
                    to={tapeRoute.id}
                    params={extractParamsFromTapePath(tape.path)}
                    className={styles.title}
                  >
                    {tape.title}
                    <span className={styles.titleSymbol}>→</span>
                  </Link>
                  <div className={styles.date}>{tape.date}</div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <SectionDivider />
        <BackToHome />
      </Page>
    );
  },
});
