import { ExternalLink } from "~/components/external-link";
import { Link } from "~/components/link";
import { APP_NAME } from "~/constants/app";
import { IconX } from "~/icons/x";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <footer className="fixed bottom-0 w-full bg-gray-700">
    {props.track.path && !props.isTrackRoute ? (
      <div className="my-3 flex items-center justify-center md:container md:mx-auto">
        <Link
          to={props.track.path}
          className="ml-4 mr-1 overflow-hidden text-ellipsis whitespace-nowrap py-1 text-sm font-semibold text-gray-100 no-underline hover:text-yellow-500"
        >
          {props.track.title}
        </Link>
        <button
          type="button"
          className="mr-2 rounded py-1 px-2 hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-yellow-500"
          onClick={props.resetTrack}
        >
          <IconX className="h-5 w-5 align-[-0.275em]" />
        </button>
      </div>
    ) : (
      <nav
        className="container mx-auto my-3 text-sm text-gray-300"
        aria-label="Footer navigation"
      >
        <div className="flex flex-row justify-center gap-2 md:gap-10">
          <Link
            to="about"
            className="rounded px-4 py-1 text-gray-400 no-underline hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-gray-100"
          >
            About
          </Link>
          <Link
            to="contact"
            className="rounded px-4 py-1 text-gray-400 no-underline hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-gray-100"
          >
            Contact
          </Link>
          <ExternalLink
            href={`https://github.com/jamband/${APP_NAME.toLowerCase()}`}
            className="rounded px-4 py-1 text-gray-400 no-underline hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-gray-100"
          >
            GitHub
          </ExternalLink>
        </div>
      </nav>
    )}
  </footer>
);
