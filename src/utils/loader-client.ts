import { homeLoader } from "@/routes/home";
import { tapeLoader } from "@/routes/tape";
import { tapesLoader } from "@/routes/tapes";
import { trackLoader } from "@/routes/track";
import { LoaderClient } from "@tanstack/react-loaders";

export const loaderClient = new LoaderClient({
  loaders: [homeLoader, tapesLoader, tapeLoader, trackLoader],
});

declare module "@tanstack/react-loaders" {
  interface Register {
    loaderClient: typeof loaderClient;
  }
}
