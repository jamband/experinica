import { Link } from "@tanstack/react-location";
import { scrollToTop } from "~/utils/scroll";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => {
  return (
    <Link {...props} onClick={scrollToTop}>
      {props.children}
    </Link>
  );
};
