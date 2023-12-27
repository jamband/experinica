import { BackToHome } from "@/components/back-to-home";
import { SectionDivider } from "@/components/section-divider";
import { TapeHeader } from "@/components/tape-header";
import { Page } from "@/layouts/page";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { tapesQueryOptions, tapesRoute } from ".";
import { tapeRoute } from "../tape";
import styles from "./styles.module.css";

export default function Component() {
  const params = tapesRoute.useParams();
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
}
