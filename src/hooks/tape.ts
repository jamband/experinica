import type { Tape } from "@/types/tape";
import { useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";

export type TapeValue = Pick<Tape, "title">;

const anAtom = atomWithReset<TapeValue>({
  title: "",
});

export const useTape = () => {
  return {
    tape: useAtomValue(anAtom),
    setTape: useSetAtom(anAtom),
    resetTape: useResetAtom(anAtom),
  } as const;
};
