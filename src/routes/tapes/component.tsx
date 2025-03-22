import { Link } from "@tanstack/react-router";
import { tapesRoute } from ".";
import { BackToHome } from "../../components/back-to-home";
import { SectionDivider } from "../../components/section-divider";
import { TapeHeader } from "../../components/tape-header";
import { Page } from "../../layouts/page";
import { tapeRoute } from "../tape";
import styles from "./styles.module.css";

export default function Component() {
  const params = tapesRoute.useParams();
  const data = tapesRoute.useLoaderData();

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
                <div>
                  <Link
                    to={tapeRoute.id}
                    params={extractParamsFromTapePath(tape.path)}
                    className={styles.title}
                  >
                    {tape.title}
                    <span className={styles.titleSymbol}>→</span>
                  </Link>
                </div>
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
