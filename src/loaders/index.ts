import { ReactLocationSimpleCache } from "@tanstack/react-location-simple-cache";
import type { LocationGenerics } from "~/types/location";

const routeCache = new ReactLocationSimpleCache<LocationGenerics>();

const api = {
  url: "https://jamband.github.io/tapes",
  suffix: "__data.json",
};

const extractProps = (
  base: Array<number>,
  next?: any /* eslint-disable-line */
) => {
  const props: any = []; // eslint-disable-line
  for (const [key, index] of Object.entries<number>(next || base[5])) {
    props[key] =
      typeof base[index] === "object"
        ? extractProps(base, base[index])
        : base[index];
  }
  return props;
};

export const home = () =>
  routeCache.createLoader(
    async () => {
      const years = await fetch(`${api.url}/${api.suffix}`);

      return {
        years: extractProps(await years.json()),
      };
    },
    {
      policy: "cache-first",
    }
  );

export const tapes = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const tapes = await fetch(`${api.url}/${params.year}/${api.suffix}`);

      return {
        tapes: extractProps(await tapes.json()),
      };
    },
    {
      policy: "cache-first",
    }
  );

export const tape = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const tape = await fetch(
        `${api.url}/${params.year}/${params.month}/${params.tape}/${api.suffix}`
      );

      return {
        tape: extractProps(await tape.json()),
      };
    },
    {
      policy: "cache-first",
    }
  );

export const track = () =>
  routeCache.createLoader(
    async ({ params }) => {
      const track = await fetch(
        `${api.url}/${params.year}/${params.month}/${params.tape}/${params.track}/${api.suffix}`
      );

      return {
        track: extractProps(await track.json()),
      };
    },
    {
      policy: "cache-first",
    }
  );
