import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";
import { Track } from "@/layouts/track";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import styles from "./styles.module.css";

export default function Component() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Track />
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
