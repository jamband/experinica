import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { layoutRoute } from "@/layouts/layout";
import type { Track } from "@/types/track";
import { extractProps } from "@/utils/api";
import { Route } from "@tanstack/react-router";
import Component from "./component";

export const trackRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "/$year/$month/$tape/$track",
  loader: async ({
    params,
  }): Promise<{
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
  component: Component,
});
