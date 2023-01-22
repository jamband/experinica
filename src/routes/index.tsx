import { ReactRouter } from "@tanstack/react-router";
import { aboutRoute } from "./about";
import { contactRoute } from "./contact";
import { homeRoute } from "./home";
import { tapeRoute } from "./tape";
import { tapesRoute } from "./tapes";
import { trackRoute } from "./track";
import { rootRoute } from "./__root";

const routeConfig = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  contactRoute,
  trackRoute,
  tapeRoute,
  tapesRoute,
]);

export const router = new ReactRouter({
  routeConfig,
});

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}
