import { SectionDivider } from "@/components/section-divider";
import { Link } from "@tanstack/react-router";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={`${props.isTrackRoute ? "" : styles.container}`}>
    <div className={styles.embedContainer}>
      <div
        className={`${styles.embedContainerInner} ${
          props.track.embed_aspect_ratio === "1/1"
            ? styles.embedContainerInnerAspect1x1
            : ""
        } ${
          props.track.embed_aspect_ratio === "4/3"
            ? styles.embedContainerInnerAspect4x3
            : ""
        }`}
      >
        <iframe
          key={props.track.path}
          src={props.src}
          className={`${styles.embed} ${
            props.track.embed_aspect_ratio === "1/1" ? "aspect1x1" : ""
          } ${props.track.embed_aspect_ratio === "4/3" ? "aspect4x3" : ""} ${
            props.track.embed_aspect_ratio === "16/9" ? "aspect16x9" : ""
          } ${props.track.embed_aspect_ratio === "21/9" ? "aspect21x9" : ""}`}
          title={props.track.title}
          allow="fullscreen"
        />
      </div>
    </div>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{props.track.title}</h1>
      <div className={styles.provider}>via {props.track.provider}</div>
    </div>
    <SectionDivider className={styles.sectionDivider} />
    <div className={styles.footer}>
      <Link
        to="/$year/$month/$tape"
        params={{
          year: props.tapeParams[0],
          month: props.tapeParams[1],
          tape: props.tapeParams[2],
        }}
        className={styles.backToTape}
      >
        <span className={styles.backToTapeSymbol}>←</span> {props.tapeTitle}
      </Link>
    </div>
  </div>
);
