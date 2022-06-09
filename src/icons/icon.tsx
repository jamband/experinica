type Props = {
  className: string;
  children: React.ReactNode;
  fill?: "none";
  role?: string;
};

export type _Props = Pick<Props, "className" | "fill" | "role">;

export const Icon: React.FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`inline ${props.className || ""}`}
    viewBox="0 0 20 20"
    fill={props.fill ?? "currentColor"}
    role={props.role}
  >
    {props.children}
  </svg>
);
