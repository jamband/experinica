import { Link } from "@tanstack/react-router";
import { SectionDivider } from "../../components/section-divider";
import { TapeHeader } from "../../components/tape-header";
import { Page } from "../../layouts/page";
import { homeRoute } from ".";
import styles from "./styles.module.css";

export default function Component() {
  const data = homeRoute.useLoaderData();

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
}
