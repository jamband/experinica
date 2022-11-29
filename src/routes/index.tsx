import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { aboutRoute } from "./about";
import { contactRoute } from "./contact";
import { homeRoute } from "./home";
import { tapeRoute } from "./tape";
import { tapesRoute } from "./tapes";
import { trackRoute } from "./track";

export const router = createReactRouter({
  routeConfig: createRouteConfig().addChildren([
    homeRoute,
    aboutRoute,
    contactRoute,
    trackRoute,
    tapeRoute,
    tapesRoute,
  ]),
});
