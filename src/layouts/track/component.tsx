import { Link } from "@tanstack/react-router";
import { SectionDivider } from "~/components/section-divider";
import { aspectRatio } from "~/styles/dynamic";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={`${props.isTrackRoute ? "" : "hidden"}`}>
    <div className="mb-3 grid grid-cols-12">
      <div
        className={`col-span-12 ${
          props.track.embed_aspect_ratio === "1/1"
            ? "md:col-span-8 md:col-start-3"
            : ""
        } ${
          props.track.embed_aspect_ratio === "4/3"
            ? "md:col-span-10 md:col-start-2"
            : ""
        }`}
      >
        <iframe
          key={props.track.path}
          src={props.src}
          className={`w-full rounded bg-gray-700 ${aspectRatio(
            props.track.embed_aspect_ratio
          )}`}
          title={props.track.title}
          allowFullScreen
        />
      </div>
    </div>
    <div className="text-center">
      <h1 className="mb-0 text-2xl">{props.track.title}</h1>
      <div className="mb-10 text-sm text-gray-400">
        via {props.track.provider}
      </div>
      <SectionDivider className="mb-10" />
      <Link
        to="/$year/$month/$tape"
        params={{
          year: props.tapeParams[0],
          month: props.tapeParams[1],
          tape: props.tapeParams[2],
        }}
        className="group px-4 py-3 text-gray-300 decoration-gray-300/70 hover:text-yellow-500 hover:decoration-yellow-500/70"
      >
        <span className="text-gray-300/70 group-hover:text-yellow-500/70 group-active:text-yellow-500/70">
          ←
        </span>{" "}
        {props.tapeTitle}
      </Link>
    </div>
  </div>
);
