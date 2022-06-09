import { aspectRatio } from "../../styles/dynamic";
import { Link } from "../link";
import { SectionDivider } from "../section-divider";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={`${props.isTrackRoute ? "" : "hidden"}`}>
    <div className="mb-3 grid grid-cols-12">
      <div className={`col-span-12 ${props.responsiveCol}`}>
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
      <Link to={props.tapePath} className="px-4 py-3 text-gray-300">
        ← {props.tapeTitle}
      </Link>
    </div>
  </div>
);
