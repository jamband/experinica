import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";
import { Track } from "@/layouts/track";
import "@/styles/app.css";
import type { loaderClient } from "@/utils/loader-client";
import { Outlet, rootRouteWithContext } from "@tanstack/react-router";
import styles from "./__root.module.css";

export const rootRoute = rootRouteWithContext<{
  loaderClient: typeof loaderClient;
}>()({
  component: () => {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <Track />
          <Outlet />
        </main>
        <Footer />
      </>
    );
  },
});
