import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { layoutRoute } from "@/layouts/layout";
import type { Tape, Tapes } from "@/types/tape";
import { extractProps } from "@/utils/api";
import { Route } from "@tanstack/react-router";
import Component from "./component";

export const tapesRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "/$year",
  loader: async ({
    params,
  }): Promise<{
    title: string;
    tapes: Tapes;
  }> => {
    const response = await fetch(`${API_URL}/${params.year}/${API_URL_SUFFIX}`);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = { ...extractProps(await response.json()) };

    const tapes = data.tapes.map((tape: Tape) => {
      return { ...tape };
    });

    return {
      title: data.title,
      tapes,
    };
  },
  component: Component,
});
