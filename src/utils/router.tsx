import { layoutRoute } from "@/layouts/layout";
import { Loading } from "@/layouts/loading";
import { aboutRoute } from "@/routes/about";
import { contactRoute } from "@/routes/contact";
import ErrorComponent from "@/routes/error";
import { homeRoute } from "@/routes/home";
import { tapeRoute } from "@/routes/tape";
import { tapesRoute } from "@/routes/tapes";
import { trackRoute } from "@/routes/track";
import { createRouter } from "@tanstack/react-router";

export const router = createRouter({
  routeTree: layoutRoute.addChildren([
    homeRoute,
    aboutRoute,
    contactRoute,
    trackRoute,
    tapeRoute,
    tapesRoute,
  ]),
  defaultPendingMinMs: 300,
  defaultPendingMs: Infinity,
  defaultPendingComponent: () => <Loading />,
  defaultErrorComponent: () => <ErrorComponent />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
