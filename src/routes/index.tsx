import type { Route } from "@tanstack/react-location";
import {
  homeLoaderFn,
  tapeLoaderFn,
  tapesLoaderFn,
  trackLoaderFn,
} from "../loaders";
import type { LocationGenerics } from "../types/location";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import NotFound from "./not-found";
import Tape from "./tape";
import Tapes from "./tapes";
import Track from "./track";

const routes: Array<Route<LocationGenerics>> = [
  {
    path: "/",
    element: <Home />,
    loader: homeLoaderFn(),
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: ":year",
    children: [
      {
        path: "/",
        element: <Tapes />,
        loader: tapesLoaderFn(),
      },
      {
        path: ":month",
        children: [
          {
            path: ":tape",
            children: [
              {
                path: "/",
                element: <Tape />,
                loader: tapeLoaderFn(),
              },
              {
                path: ":track",
                children: [
                  {
                    path: "/",
                    element: <Track />,
                    loader: trackLoaderFn(),
                  },
                ],
              },
            ],
          },
          {
            element: <NotFound />,
          },
        ],
      },
    ],
  },
];

export default routes;
