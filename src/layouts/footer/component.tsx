import { Link } from "@tanstack/react-router";
import { APP_NAME } from "../../constants/app";
import { IconXMark } from "../../icons/xmark";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <footer className={styles.container}>
    {props.showTrackTitle ? (
      <div className={styles.title}>
        <Link
          to="/$year/$month/$tape/$track"
          params={{
            year: props.trackParams[0],
            month: props.trackParams[1],
            tape: props.trackParams[2],
            track: props.trackParams[3],
          }}
          className={styles.titleLink}
        >
          {props.track.title}
        </Link>
        <button
          type="button"
          className={styles.titleButton}
          onClick={props.resetTrack}
        >
          <IconXMark className={styles.titleButtonIcon} />
        </button>
      </div>
    ) : (
      <nav className={styles.nav} aria-label="Footer navigation">
        <div className={styles.links}>
          <Link to="/about" className={styles.link}>
            About
          </Link>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
          <a
            href={`https://github.com/jamband/${APP_NAME.toLowerCase()}`}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </nav>
    )}
  </footer>
);
