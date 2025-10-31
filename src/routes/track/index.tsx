import { createRoute } from "@tanstack/react-router";
import { layoutRoute } from "../../layouts/layout";
import { extractData, fetchDataNodes } from "../../utils/api";
import Component from "./component";
import type { LoaderData } from "./types";

export const trackRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/$year/$month/$tape/$track",
  loader: async ({ params }): Promise<LoaderData> => {
    const dataNodes = await fetchDataNodes(
      `/${params.year}/${params.month}/${params.tape}/${params.track}/`,
    );
    const data = extractData<LoaderData>(dataNodes);
    console.log(data);
    data.track = { ...data.track };

    return {
      track: data.track,
    };
  },
  component: Component,
});
