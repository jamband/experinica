import { IconExternalLink } from "~/icons/external-link";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <header className={props.className}>
    <h1 className="text-center md:mb-1">{props.title}</h1>
    <p className="text-center text-sm">
      selected from{" "}
      <a
        href="https://plusarchive.com"
        className="group text-gray-400 decoration-gray-400/70 hover:text-yellow-500 hover:decoration-yellow-500/70"
        target="_blank"
        rel="noreferrer"
      >
        PlusArchive
        <IconExternalLink className="h-4 w-4 align-[-0.2em] text-gray-400/70 group-hover:text-yellow-500/70 group-active:text-yellow-500/70" />
      </a>
    </p>
  </header>
);
