import { useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";
import type { Track } from "~/types/track";

export type TrackValue = Pick<
  Track,
  "title" | "provider" | "provider_key" | "embed_aspect_ratio" | "path"
>;

const anAtom = atomWithReset<TrackValue>({
  title: "",
  provider: "",
  provider_key: "",
  path: "",
  embed_aspect_ratio: "",
});

export const useTrack = () => {
  return {
    track: useAtomValue(anAtom),
    setTrack: useSetAtom(anAtom),
    resetTrack: useResetAtom(anAtom),
  } as const;
};
