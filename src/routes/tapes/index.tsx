import { layoutRoute } from "@/layouts/layout";
import { extractData, fetchDataNodes } from "@/utils/api";
import { createRoute } from "@tanstack/react-router";
import Component from "./component";
import type { LoaderData } from "./types";

export const tapesRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/$year",
  loader: async ({ params }): Promise<LoaderData> => {
    const dataNodes = await fetchDataNodes(`/${params.year}/`);
    const data = { ...extractData<LoaderData>(dataNodes) };

    const tapes = data.tapes.map((tape) => {
      return { ...tape };
    });

    return {
      title: data.title,
      tapes,
    };
  },
  component: Component,
});
