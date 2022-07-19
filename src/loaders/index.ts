import { ReactLocationSimpleCache } from "@tanstack/react-location-simple-cache";
import type { LocationGenerics } from "../types/location";

const routeCache = new ReactLocationSimpleCache<LocationGenerics>();

const api = {
  url: "https://jamband.github.io/tapes",
  suffix: "__data.json",
};

export const home = () =>
  routeCache.createLoader(
    async () => {
      const res = await fetch(`${api.url}/${api.suffix}`);
      const { years } = await res.json();
      return {
        years,
      };
    },
    {
      policy: "cache-first",
    }
  );

export const tapes = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const res = await fetch(`${api.url}/${params.year}/${api.suffix}`);
      const { tapes } = await res.json();
      return {
        tapes,
      };
    },
    {
      policy: "cache-first",
    }
  );

export const tape = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const res = await fetch(
        `${api.url}/${params.year}/${params.month}/${params.tape}/${api.suffix}`
      );
      const tape = await res.json();
      return {
        tape,
      };
    },
    {
      policy: "cache-first",
    }
  );

export const track = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const res = await fetch(
        `${api.url}/${params.year}/${params.month}/${params.tape}/${params.track}/${api.suffix}`
      );
      const track = await res.json();
      return {
        track,
      };
    },
    {
      policy: "cache-first",
    }
  );
