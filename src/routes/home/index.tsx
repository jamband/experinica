import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { layoutRoute } from "@/layouts/layout";
import { extractProps } from "@/utils/api";
import { queryOptions } from "@tanstack/react-query";
import { Route } from "@tanstack/react-router";
import Component from "./component";

export const homeQueryOptions = queryOptions({
  queryKey: ["home"],
  queryFn: async (): Promise<{ years: Array<string> }> => {
    const response = await fetch(`${API_URL}/${API_URL_SUFFIX}`);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = extractProps(await response.json());

    return {
      years: data.years,
    };
  },
});

export const homeRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "/",
  loader: async ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(homeQueryOptions),
  component: Component,
});
