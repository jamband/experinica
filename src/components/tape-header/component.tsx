import { IconExternalLink } from "../../icons/external-link";
import { ExternalLink } from "../external-link";
import type { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <header className={props.className}>
    <h1 className="mb-0 text-center">{props.title}</h1>
    <p className="text-center text-sm">
      selected from{" "}
      <ExternalLink
        href="https://plusarchive.com"
        className="inline-flex items-center text-gray-400"
      >
        PlusArchive
        <IconExternalLink className="ml-0.5 h-4 w-4" />
      </ExternalLink>
    </p>
  </header>
);
