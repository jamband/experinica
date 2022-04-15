import type { Props } from "./types";

export const Component: React.VFC<Props> = (props) => (
  <a
    href={props.href}
    className={props.className}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
);
