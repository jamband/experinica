import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import * as loaders from "~/loaders";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Tape from "./tape";
import Tapes from "./tapes";
import Track from "./track";

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    element: <Home />,
    loader: loaders.home,
  }),
  createRoute({
    path: "about",
    element: <About />,
  }),
  createRoute({
    path: "contact",
    element: <Contact />,
  }),
  createRoute({
    path: "/:year/:month/:tape/:track",
    element: <Track />,
    loader: loaders.track,
  }),
  createRoute({
    path: "/:year/:month/:tape",
    element: <Tape />,
    loader: loaders.tape,
  }),
  createRoute({
    path: "/:year",
    element: <Tapes />,
    loader: loaders.tapes,
  }),
]);

export const router = createReactRouter({
  routeConfig,
});
