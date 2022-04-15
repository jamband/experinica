import { Component } from "./component";
import type { Props } from "./types";

export const Link: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};
