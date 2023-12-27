import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { layoutRoute } from "@/layouts/layout";
import type { Tape } from "@/types/tape";
import { extractProps } from "@/utils/api";
import { queryOptions } from "@tanstack/react-query";
import { Route } from "@tanstack/react-router";
import Component from "./component";

export const tapeQueryOptions = (params: {
  year: string;
  month: string;
  tape: string;
}) =>
  queryOptions({
    queryKey: ["tape", params],
    queryFn: async (): Promise<{
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
  });

export const tapeRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "/$year/$month/$tape",
  loader: ({ context: { queryClient }, params }) =>
    queryClient.ensureQueryData(tapeQueryOptions(params)),
  component: Component,
});
