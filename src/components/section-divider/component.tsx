import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div
    className={`flex items-center justify-center gap-x-1 ${
      props.className || ""
    }`}
    role="separator"
  >
    <span className="h-1 w-1 rounded-[1px] bg-yellow-500" />
    <span className="h-3 w-1 rounded-[1px] bg-yellow-600" />
    <span className="h-6 w-1 rounded-[1px] bg-yellow-800" />
    <span className="h-4 w-1 rounded-[1px] bg-yellow-700" />
    <span className="h-7 w-1 rounded-[1px] bg-yellow-500" />
    <span className="h-3 w-1 rounded-[1px] bg-yellow-600" />
    <span className="h-1 w-1 rounded-[1px] bg-yellow-400" />
  </div>
);
