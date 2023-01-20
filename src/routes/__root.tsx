import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";
import { Track } from "@/layouts/track";
import "@/styles/app.css";
import { createRouteConfig, Outlet } from "@tanstack/react-router";

export const rootRoute = createRouteConfig({
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
