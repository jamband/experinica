import { Link } from "@tanstack/react-router";
import { tapeRoute } from ".";
import { SectionDivider } from "../../components/section-divider";
import { TapeHeader } from "../../components/tape-header";
import { useTrackState } from "../../hooks/track";
import { IconPause } from "../../icons/pause";
import { IconPlay } from "../../icons/play";
import { Page } from "../../layouts/page";
import { tapesRoute } from "../tapes";
import { trackRoute } from "../track";
import styles from "./styles.module.css";

export default function Component() {
  const params = tapeRoute.useParams();
  const data = tapeRoute.useLoaderData();
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
        >
          <span className={styles.backToTapeLinkSymbol}>←</span> Monthly
          Favorite Tracks of {params.year}
        </Link>
      </div>
    </Page>
  );
}
