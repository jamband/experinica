import { layoutRoute } from "@/layouts/layout";
import { aboutRoute } from "@/routes/about";
import { contactRoute } from "@/routes/contact";
import ErrorComponent from "@/routes/error";
import { homeRoute } from "@/routes/home";
import { tapeRoute } from "@/routes/tape";
import { tapesRoute } from "@/routes/tapes";
import { trackRoute } from "@/routes/track";
import { Router } from "@tanstack/react-router";
import { queryClient } from "./query-client";

export const router = new Router({
  routeTree: layoutRoute.addChildren([
    homeRoute,
    aboutRoute,
    contactRoute,
    trackRoute,
    tapeRoute,
    tapesRoute,
  ]),
  context: {
    queryClient,
  },
  defaultErrorComponent: () => <ErrorComponent />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
