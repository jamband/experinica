import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";
import { Track } from "@/layouts/track";
import "@/styles/app.css";
import type { QueryClient } from "@tanstack/react-query";
import {
  Outlet,
  ScrollRestoration,
  rootRouteWithContext,
} from "@tanstack/react-router";
import styles from "./styles.module.css";

export const rootRoute = rootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <Track />
          <ScrollRestoration />
          <Outlet />
        </main>
        <Footer />
      </>
    );
  },
});
