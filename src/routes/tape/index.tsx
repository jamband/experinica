import { SectionDivider } from "@/components/section-divider";
import { TapeHeader } from "@/components/tape-header";
import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { useTrackState } from "@/hooks/track";
import { IconPause } from "@/icons/pause";
import { IconPlay } from "@/icons/play";
import { Page } from "@/layouts/page";
import type { Tape as TTape } from "@/types/tape";
import { extractProps } from "@/utils/api";
import { scrollToTop } from "@/utils/scroll";
import { Loader, useLoaderInstance } from "@tanstack/react-loaders";
import { Link, Route, useParams } from "@tanstack/react-router";
import { rootRoute } from "../root";
import { tapesRoute } from "../tapes";
import { trackRoute } from "../track";
import styles from "./styles.module.css";

type Params = {
  year: string;
  month: string;
  tape: string;
};

type LoaderData = {
  title: string;
  tape: TTape;
  year: string;
};

export const tapeLoader = new Loader({
  key: "tape",
  fn: async (params: Params) => {
    const tape = await fetch(
      `${API_URL}/${params.year}/${params.month}/${params.tape}/${API_URL_SUFFIX}`,
    );

    if (!tape.ok) {
      throw new Error("Failed to fetch");
    }

    const data = { ...extractProps(await tape.json()) };
    data.tape = { ...data.tape };

    data.tape.items = data.tape.items.map((item: TTape["items"]) => {
      return { ...item };
    });

    return {
      title: data.title,
      tape: data.tape,
      year: data.year,
    } as LoaderData;
  },
});

export const tapeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/$year/$month/$tape",
  component: Tape,
});

export default function Tape() {
  const params = useParams({
    from: tapeRoute.id,
  });

  const { data } = useLoaderInstance({
    key: "tape",
    variables: params,
  });

  const track = useTrackState();

  return (
    <Page title={data.title} className={styles.container}>
      <TapeHeader title={data.title} />
      <SectionDivider />
      <div className={styles.main}>
        {data.tape.items.map((item) => (
          <Link
            key={item.slug}
            to={trackRoute.id}
            params={{
              year: params.year,
              month: params.month,
              tape: params.tape,
              track: item.slug,
            }}
            className={styles.track}
          >
            <img
              className={`${styles.trackImage} ${
                item.image_aspect_ratio === "1/1" ? "aspect1x1" : ""
              } ${item.image_aspect_ratio === "4/3" ? "aspect4x3" : ""} ${
                item.image_aspect_ratio === "16/9" ? "aspect16x9" : ""
              } ${item.image_aspect_ratio === "21/9" ? "aspect21x9" : ""}`}
              src={item.image}
              loading="lazy"
              alt=""
            />
            <div className={styles.trackIconStatus}>
              {`${data.tape.path}/${item.slug}` === track.path ? (
                <IconPause className={styles.trackIcon} />
              ) : (
                <IconPlay className={styles.trackIcon} />
              )}
            </div>
            <div className={styles.trackFooter}>
              <h4 className={styles.trackFooterTitle}>{item.title}</h4>
              <div className={styles.trackFooterTapeTitle}>{data.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <SectionDivider />
      <div className={styles.backToTape}>
        <Link
          to={tapesRoute.id}
          params={{ year: params.year }}
          className={styles.backToTapeLink}
          onClick={scrollToTop}
        >
          <span className={styles.backToTapeLinkSymbol}>←</span> Monthly
          Favorite Tracks of {params.year}
        </Link>
      </div>
    </Page>
  );
}
