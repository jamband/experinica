import { layoutRoute } from "@/layouts/layout";
import { extractData, fetchDataNodes } from "@/utils/api";
import { createRoute } from "@tanstack/react-router";
import Component from "./component";

type Data = {
  years: Array<string>;
};

export const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  loader: async (): Promise<Data> => {
    const dataNodes = await fetchDataNodes("/");
    const data = extractData<Data>(dataNodes);

    return {
      years: data.years,
    };
  },
  component: Component,
});
