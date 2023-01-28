import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";
import { Track } from "@/layouts/track";
import "@/styles/app.css";
import { Outlet, RootRoute } from "@tanstack/react-router";

export const rootRoute = new RootRoute({
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
