import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { useTape } from "@/hooks/tape";
import { useTrack } from "@/hooks/track";
import { Page } from "@/layouts/page";
import type { Track as TTrack } from "@/types/track";
import { extractProps } from "@/utils/api";
import { Loader, useLoaderInstance } from "@tanstack/react-loaders";
import { Route, useParams } from "@tanstack/react-router";
import { useEffect } from "react";
import { rootRoute } from "./__root";

type Params = {
  year: string;
  month: string;
  tape: string;
  track: string;
};

type LoaderData = {
  tapeTitle: string;
  track: TTrack;
};

export const trackLoader = new Loader({
  key: "track",
  loader: async (params: Params) => {
    const track = await fetch(
      `${API_URL}/${params.year}/${params.month}/${params.tape}/${params.track}/${API_URL_SUFFIX}`
    );

    if (!track.ok) {
      throw new Error("Failed to fetch");
    }

    const data = extractProps(await track.json());
    data.track = { ...data.track };

    return {
      tapeTitle: data.tapeTitle,
      track: data.track,
    } as LoaderData;
  },
});

export const trackRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/$year/$month/$tape/$track",
  component: Track,
  onLoad: async ({ params }) => trackLoader.load({ variables: params }),
});

export default function Track() {
  const params = useParams({ from: trackRoute.id });

  const {
    state: { data },
  } = useLoaderInstance({
    key: trackLoader.key,
    variables: params,
  });

  const { setTape } = useTape();
  const { setTrack } = useTrack();

  useEffect(() => {
    if (data.track) setTape({ title: data.tapeTitle });
    if (data.track) setTrack(data.track);
  }, [setTape, setTrack, data.track, data.tapeTitle]);

  return <Page title={`${data.tapeTitle} ･ ${data.track.title}`}>{}</Page>;
}
