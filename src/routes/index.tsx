import type { Route } from "@tanstack/react-location";
import type { LocationGenerics } from "~/types/location";
import * as loaders from "../loaders";
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
    loader: loaders.home(),
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
        loader: loaders.tapes(),
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
                loader: loaders.tape(),
              },
              {
                path: ":track",
                children: [
                  {
                    path: "/",
                    element: <Track />,
                    loader: loaders.track(),
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
