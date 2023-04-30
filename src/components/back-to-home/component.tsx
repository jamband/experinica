import { Link } from "@tanstack/router";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={`flex justify-center ${props.className || ""}`}>
    <Link
      to="/"
      className="group px-4 py-3 text-gray-300 decoration-gray-400/70 hover:text-yellow-500 hover:decoration-yellow-500/70"
    >
      <span className="text-gray-400 group-hover:text-yellow-500/70 group-active:text-yellow-500/70">
        ←
      </span>{" "}
      Back to Home
    </Link>
  </div>
);
