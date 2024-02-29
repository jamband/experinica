import { layoutRoute } from "@/layouts/layout";
import type { Tapes } from "@/types/tape";
import { extractData, fetchDataNodes } from "@/utils/api";
import { createRoute } from "@tanstack/react-router";
import Component from "./component";

type Data = {
  title: string;
  tapes: Tapes;
};

export const tapesRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/$year",
  loader: async ({ params }): Promise<Data> => {
    const dataNodes = await fetchDataNodes(`/${params.year}/`);
    const data = { ...extractData<Data>(dataNodes) };

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
