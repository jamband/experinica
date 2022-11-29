import { Outlet, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "regenerator-runtime";
import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";
import { Track } from "./layouts/track";
import { router } from "./routes";
import "./styles/app.css";

const rootElement = document.getElementById("app");

if (rootElement === null) {
  throw new Error("Root element does not exists.");
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Header />
      <main className="container mx-auto pb-32 pt-28">
        <Track />
        <Outlet />
      </main>
      <Footer />
    </RouterProvider>
  </StrictMode>
);
