import { IconExternalLink } from "~/icons/external-link";
import { ExternalLink } from "../external-link";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <header className={props.className}>
    <h1 className="mb-0 text-center">{props.title}</h1>
    <p className="text-center text-sm">
      selected from{" "}
      <ExternalLink
        href="https://plusarchive.com"
        className="text-gray-400 hover:text-yellow-500"
      >
        PlusArchive
        <IconExternalLink className="h-4 w-4 align-[-0.2em]" />
      </ExternalLink>
    </p>
  </header>
);
