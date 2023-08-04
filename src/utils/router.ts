import { rootRoute } from "@/routes/__root";
import { aboutRoute } from "@/routes/about";
import { contactRoute } from "@/routes/contact";
import { homeRoute } from "@/routes/home";
import { tapeRoute } from "@/routes/tape";
import { tapesRoute } from "@/routes/tapes";
import { trackRoute } from "@/routes/track";
import { Router } from "@tanstack/router";
import { loaderClient } from "./loader-client";

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  contactRoute,
  trackRoute,
  tapeRoute,
  tapesRoute,
]);

export const router = new Router({
  routeTree,
  context: {
    loadClient: loaderClient,
  },
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
