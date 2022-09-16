import { ReactLocationSimpleCache } from "@tanstack/react-location-simple-cache";
import type { LocationGenerics } from "~/types/location";

const routeCache = new ReactLocationSimpleCache<LocationGenerics>();

const api = {
  url: "https://jamband.github.io/tapes",
  suffix: "__data.js",
};

const getData = async (response: Response) => {
  const window = {} as any; // eslint-disable-line
  new Function("window", await response.text())(window);
  return window.__sveltekit_data.nodes[1].data;
};

export const home = () =>
  routeCache.createLoader(
    async () => {
      const yearsResponse = await fetch(`${api.url}/${api.suffix}`);

      return {
        years: (await getData(yearsResponse)).years,
      };
    },
    {
      policy: "cache-first",
    }
  );

export const tapes = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const tapesResponse = await fetch(
        `${api.url}/${params.year}/${api.suffix}`
      );

      return {
        tapes: (await getData(tapesResponse)).tapes,
      };
    },
    {
      policy: "cache-first",
    }
  );

export const tape = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const tapeResponse = await fetch(
        `${api.url}/${params.year}/${params.month}/${params.tape}/${api.suffix}`
      );

      return {
        tape: await getData(tapeResponse),
      };
    },
    {
      policy: "cache-first",
    }
  );

export const track = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const trackResponse = await fetch(
        `${api.url}/${params.year}/${params.month}/${params.tape}/${params.track}/${api.suffix}`
      );

      return {
        track: await getData(trackResponse),
      };
    },
    {
      policy: "cache-first",
    }
  );
