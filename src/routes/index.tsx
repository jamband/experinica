import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import * as loaders from "~/loaders";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Tape from "./tape";
import Tapes from "./tapes";
import Track from "./track";

const routeConfig = createRouteConfig().addChildren([
  createRouteConfig().createRoute({
    path: "/",
    component: Home,
    loader: loaders.home,
  }),
  createRouteConfig().createRoute({
    path: "about",
    component: About,
  }),
  createRouteConfig().createRoute({
    path: "contact",
    component: Contact,
  }),
  createRouteConfig().createRoute({
    path: "/$year/$month/$tape/$track",
    component: Track,
    loader: loaders.track,
  }),
  createRouteConfig().createRoute({
    path: "/$year/$month/$tape",
    component: Tape,
    loader: loaders.tape,
  }),
  createRouteConfig().createRoute({
    path: "/$year",
    component: Tapes,
    loader: loaders.tapes,
  }),
]);

export const router = createReactRouter({
  routeConfig,
});
