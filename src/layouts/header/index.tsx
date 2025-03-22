import { APP_NAME } from "../../constants/app";
import { Component } from "./component";

export const Header: React.FC = () => {
  const repository = APP_NAME.toLowerCase();

  return <Component repository={repository} />;
};
