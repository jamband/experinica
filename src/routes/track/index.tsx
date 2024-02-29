import { layoutRoute } from "@/layouts/layout";
import type { Track } from "@/types/track";
import { extractData, fetchDataNodes } from "@/utils/api";
import { createRoute } from "@tanstack/react-router";
import Component from "./component";

type Data = {
  tapeTitle: string;
  track: Track;
};

export const trackRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/$year/$month/$tape/$track",
  loader: async ({ params }): Promise<Data> => {
    const dataNodes = await fetchDataNodes(
      `/${params.year}/${params.month}/${params.tape}/${params.track}/`,
    );
    const data = extractData<Data>(dataNodes);
    data.track = { ...data.track };

    return {
      tapeTitle: data.tapeTitle,
      track: data.track,
    };
  },
  component: Component,
});
