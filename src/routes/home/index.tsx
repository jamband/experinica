import { layoutRoute } from "@/layouts/layout";
import { extractData, fetchDataNodes } from "@/utils/api";
import { createRoute } from "@tanstack/react-router";
import Component from "./component";
import type { LoaderData } from "./types";

export const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  loader: async (): Promise<LoaderData> => {
    const dataNodes = await fetchDataNodes("/");
    const data = extractData<LoaderData>(dataNodes);

    return {
      years: data.years,
    };
  },
  component: Component,
});
