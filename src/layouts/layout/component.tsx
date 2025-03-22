import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Footer } from "../footer";
import { Header } from "../header";
import { Track } from "../track";
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
