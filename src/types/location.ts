import type { MakeGenerics } from "@tanstack/react-location";
import type { Tape, Tapes } from "./tape";
import type { Track } from "./track";

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    years: {
      years: Array<`${number}`>;
    };
    tapes: {
      title: string;
      tapes: Tapes;
    };
    tape: {
      title: string;
      tape: Tape;
    };
    track: {
      tapeTitle: string;
      track: Track;
    };
  };
  Params: {
    year: `${number}`;
    month: `${number}`;
    tape: string;
    track: string;
  };
}>;
