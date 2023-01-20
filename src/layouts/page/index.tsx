import { APP_NAME } from "@/constants/app";
import { useEffect } from "react";
import { Component } from "./component";
import type { Props } from "./types";

export const Page: React.FC<Props> = (props) => {
  const title = props.title !== "" ? `${props.title} ･ ${APP_NAME}` : APP_NAME;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <Component {...props} />;
};
