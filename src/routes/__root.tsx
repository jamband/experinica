import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";
import { Track } from "@/layouts/track";
import "@/styles/app.css";
import type { loaderClient } from "@/utils/loader-client";
import { Outlet, rootRouteWithContext } from "@tanstack/react-router";

export const rootRoute = rootRouteWithContext<{
  loaderClient: typeof loaderClient;
}>()({
  component: () => {
    return (
      <>
        <Header />
        <main className="container mx-auto pb-32 pt-28">
          <Track />
          <Outlet />
        </main>
        <Footer />
      </>
    );
  },
});
