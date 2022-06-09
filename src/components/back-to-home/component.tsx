import { Link } from "../link";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={`${props.className || ""} text-center`}>
    <Link to="/" className="px-4 py-3 text-gray-300">
      <span className="hover:text-yellow-500">←</span> Back to Home
    </Link>
  </div>
);
