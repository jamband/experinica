import { createRouter } from "@tanstack/react-router";
import { layoutRoute } from "../layouts/layout";
import { Loading } from "../layouts/loading";
import { aboutRoute } from "../routes/about";
import { contactRoute } from "../routes/contact";
import ErrorComponent from "../routes/error";
import { homeRoute } from "../routes/home";
import NotFound from "../routes/not-found";
import { tapeRoute } from "../routes/tape";
import { tapesRoute } from "../routes/tapes";
import { trackRoute } from "../routes/track";

export const router = createRouter({
  routeTree: layoutRoute.addChildren([
    homeRoute,
    aboutRoute,
    contactRoute,
    trackRoute,
    tapeRoute,
    tapesRoute,
  ]),
  scrollRestoration: true,
  defaultPendingMinMs: 300,
  defaultPendingMs: 10,
  defaultPendingComponent: () => <Loading />,
  defaultErrorComponent: () => <ErrorComponent />,
  defaultNotFoundComponent: () => <NotFound />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
