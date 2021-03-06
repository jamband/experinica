import { Link } from "../../components/link";
import { APP_NAME } from "../../constants/app";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <header className="fixed z-10 w-full bg-gray-700 text-center font-mono">
    <nav aria-label="Header navigation" className="my-1">
      <Link
        to="/"
        className="m-1 inline-block rounded px-4 py-2 no-underline active:bg-gray-600"
      >
        <span
          className={`text-xs font-semibold text-gray-400 ${
            props.isTrackRoute ? "!text-gray-100 duration-1000" : ""
          }`}
        >
          jamband/
        </span>
        <span
          className={`text-sm font-bold text-gray-100 ${
            props.isTrackRoute ? "!text-yellow-500 duration-1000" : ""
          }`}
        >
          {APP_NAME.toLowerCase()}
        </span>
      </Link>
    </nav>
  </header>
);
