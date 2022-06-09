import { Component } from "./component";
import type { Props } from "./types";

export const Link: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
