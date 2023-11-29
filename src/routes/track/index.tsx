import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { useTapeAction } from "@/hooks/tape";
import { useTrackAction } from "@/hooks/track";
import { Page } from "@/layouts/page";
import type { Track as TTrack } from "@/types/track";
import { extractProps } from "@/utils/api";
import {
  Loader,
  createLoaderOptions,
  useLoaderInstance,
} from "@tanstack/react-loaders";
import { Route } from "@tanstack/react-router";
import { useEffect } from "react";
import { rootRoute } from "../root";

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
  fn: async (params: Params) => {
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
    } as LoaderData;
  },
});

export const trackRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/$year/$month/$tape/$track",
  beforeLoad: ({ params }) => ({
    loaderOpts: createLoaderOptions({
      key: "track",
      variables: params,
    }),
  }),
  loader: async ({ context: { loaderClient, loaderOpts } }) => {
    await loaderClient.load({ ...loaderOpts });
  },
  component: function Track({ useRouteContext }) {
    const { loaderOpts } = useRouteContext();
    const { data } = useLoaderInstance(loaderOpts);
    const { setTape } = useTapeAction();
    const { setTrack } = useTrackAction();

    useEffect(() => {
      if (data.track) {
        setTape({ title: data.tapeTitle });
        setTrack(data.track);
      }
    }, [data, setTape, setTrack]);

    return (
      <Page title={`${data.tapeTitle} ･ ${data.track.title}`}>
        <></>
      </Page>
    );
  },
});
