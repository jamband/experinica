import { ReactLocationSimpleCache } from "@tanstack/react-location-simple-cache";
import type { LocationGenerics } from "../types/location";

const routeCache = new ReactLocationSimpleCache<LocationGenerics>();

const api = {
  url: "https://jamband.github.io/tapes",
  suffix: "__data.js",
};

export const home = () =>
  routeCache.createLoader(
    async () => {
      const response = await fetch(`${api.url}/${api.suffix}`);
      const { nodes } = eval(await response.text());

      return {
        years: nodes[1].data.years,
      };
    },
    {
      policy: "cache-first",
    }
  );

export const tapes = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const response = await fetch(`${api.url}/${params.year}/${api.suffix}`);
      const { nodes } = eval(await response.text());

      return {
        tapes: nodes[1].data.tapes,
      };
    },
    {
      policy: "cache-first",
    }
  );

export const tape = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const response = await fetch(
        `${api.url}/${params.year}/${params.month}/${params.tape}/${api.suffix}`
      );
      const { nodes } = eval(await response.text());

      return {
        tape: nodes[1].data,
      };
    },
    {
      policy: "cache-first",
    }
  );

export const track = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const response = await fetch(
        `${api.url}/${params.year}/${params.month}/${params.tape}/${params.track}/${api.suffix}`
      );
      const { nodes } = eval(await response.text());

      return {
        track: nodes[1].data,
      };
    },
    {
      policy: "cache-first",
    }
  );
