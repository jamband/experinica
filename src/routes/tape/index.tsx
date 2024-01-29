import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { layoutRoute } from "@/layouts/layout";
import type { Tape } from "@/types/tape";
import { extractProps } from "@/utils/api";
import { createRoute } from "@tanstack/react-router";
import Component from "./component";

export const tapeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/$year/$month/$tape",
  loader: async ({
    params,
  }): Promise<{
    title: string;
    tape: Tape;
    year: string;
  }> => {
    const tape = await fetch(
      `${API_URL}/${params.year}/${params.month}/${params.tape}/${API_URL_SUFFIX}`,
    );

    if (!tape.ok) {
      throw new Error("Failed to fetch");
    }

    const data = { ...extractProps(await tape.json()) };
    data.tape = { ...data.tape };

    data.tape.items = data.tape.items.map((item: Tape["items"]) => {
      return { ...item };
    });

    return {
      title: data.title,
      tape: data.tape,
      year: data.year,
    };
  },
  component: Component,
});
