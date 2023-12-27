import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import type { Track } from "@/types/track";
import { extractProps } from "@/utils/api";
import { queryOptions } from "@tanstack/react-query";
import { Route } from "@tanstack/react-router";
import { rootRoute } from "../root";
import Component from "./component";

export const trackQueryOptions = (params: {
  year: string;
  month: string;
  tape: string;
  track: string;
}) =>
  queryOptions({
    queryKey: ["track", params],
    queryFn: async (): Promise<{
      tapeTitle: string;
      track: Track;
    }> => {
      const track = await fetch(
        `${API_URL}/${params.year}/${params.month}/${params.tape}/${params.track}/${API_URL_SUFFIX}`,
      );

      if (!track.ok) {
        throw new Error("Failed to fetch");
      }

      const data = extractProps(await track.json());
      data.track = { ...data.track };

      return {
        tapeTitle: data.tapeTitle,
        track: data.track,
      };
    },
  });

export const trackRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/$year/$month/$tape/$track",
  loader: async ({ context: { queryClient }, params }) =>
    queryClient.ensureQueryData(trackQueryOptions(params)),
  component: Component,
});
