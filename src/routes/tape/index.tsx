import { layoutRoute } from "@/layouts/layout";
import { extractData, fetchDataNodes } from "@/utils/api";
import { createRoute } from "@tanstack/react-router";
import Component from "./component";
import type { LoaderData } from "./types";

export const tapeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/$year/$month/$tape",
  loader: async ({ params }): Promise<LoaderData> => {
    const dataNodes = await fetchDataNodes(
      `/${params.year}/${params.month}/${params.tape}/`,
    );
    const data = { ...extractData<LoaderData>(dataNodes) };
    data.tape = { ...data.tape };

    data.tape.items = data.tape.items.map((item) => {
      return { ...item };
    });

    return {
      title: data.title,
      tape: data.tape,
      year: data.year,
    };
  },
  component: Component,
});
