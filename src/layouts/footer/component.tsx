import { APP_NAME } from "@/constants/app";
import { IconX } from "@/icons/x";
import { Link } from "@tanstack/react-router";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <footer className="fixed bottom-0 w-full bg-gray-700">
    {props.showTrackTitle ? (
      <div className="my-3 flex items-center justify-center md:container md:mx-auto">
        <Link
          to="/$year/$month/$tape/$track"
          params={{
            year: props.trackParams[0],
            month: props.trackParams[1],
            tape: props.trackParams[2],
            track: props.trackParams[3],
          }}
          className="ml-4 mr-1 overflow-hidden text-ellipsis whitespace-nowrap py-1 text-sm font-semibold text-gray-100 no-underline"
        >
          {props.track.title}
        </Link>
        <button
          type="button"
          className="mr-2 rounded px-2 py-1 hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-yellow-500"
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
            to="/about"
            className="rounded px-4 py-1 text-gray-400 no-underline hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-gray-100"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="rounded px-4 py-1 text-gray-400 no-underline hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-gray-100"
          >
            Contact
          </Link>
          <a
            href={`https://github.com/jamband/${APP_NAME.toLowerCase()}`}
            className="rounded px-4 py-1 text-gray-400 no-underline hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-gray-100"
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
