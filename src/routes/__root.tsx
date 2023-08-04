import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";
import { Track } from "@/layouts/track";
import "@/styles/app.css";
import { routerContext } from "@/utils/router-context";
import { Outlet } from "@tanstack/router";

export const rootRoute = routerContext.createRootRoute({
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
