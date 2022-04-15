import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { StrictMode } from "react";
import { render } from "react-dom";
import "regenerator-runtime";
import { Track } from "./components/track";
import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";
import { Loading } from "./layouts/loading";
import routes from "./routes";
import NotFound from "./routes/not-found";
import "./styles/app.css";
import type { LocationGenerics } from "./types/location";

render(
  <StrictMode>
    <Router
      location={new ReactLocation<LocationGenerics>()}
      routes={routes}
      defaultPendingElement={<Loading />}
      defaultErrorElement={<NotFound />}
      defaultPendingMs={0}
    >
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="container mx-auto flex-grow pb-32 pt-28">
          <Track />
          <Outlet />
        </main>
        <Footer />
      </div>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
