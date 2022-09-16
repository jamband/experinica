import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "regenerator-runtime";
import { Track } from "./layouts/track";
import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";
import { Loading } from "./layouts/loading";
import routes from "./routes";
import NotFound from "./routes/not-found";
import "./styles/app.css";
import type { LocationGenerics } from "./types/location";

const container = document.getElementById("app");
if (container === null) throw new Error("Root element does not exists.");

createRoot(container).render(
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
  </StrictMode>
);
