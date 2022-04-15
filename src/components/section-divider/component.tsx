import type { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <div
    className={`${props.className || ""} flex items-center justify-center`}
    role="separator"
  >
    <span className="mr-1 h-1 w-1 rounded-[1px] bg-yellow-500" />
    <span className="mr-1 h-3 w-1 rounded-[1px] bg-yellow-600" />
    <span className="mr-1 h-6 w-1 rounded-[1px] bg-yellow-800" />
    <span className="mr-1 h-4 w-1 rounded-[1px] bg-yellow-700" />
    <span className="mr-1 h-7 w-1 rounded-[1px] bg-yellow-500" />
    <span className="mr-1 h-3 w-1 rounded-[1px] bg-yellow-600" />
    <span className="h-1 w-1 rounded-[1px] bg-yellow-400" />
  </div>
);
