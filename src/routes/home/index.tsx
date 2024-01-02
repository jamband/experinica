import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { layoutRoute } from "@/layouts/layout";
import { extractProps } from "@/utils/api";
import { Route } from "@tanstack/react-router";
import Component from "./component";

export const homeRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "/",
  loader: async (): Promise<{ years: Array<string> }> => {
    const response = await fetch(`${API_URL}/${API_URL_SUFFIX}`);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = extractProps(await response.json());

    return {
      years: data.years,
    };
  },
  component: Component,
});
