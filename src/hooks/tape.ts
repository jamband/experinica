import { useAtomValue } from "jotai";
import { atomWithReset, useResetAtom, useUpdateAtom } from "jotai/utils";
import type { Tape } from "../types/tape";

export type TapeValue = Pick<Tape, "title">;

const anAtom = atomWithReset<TapeValue>({
  title: "",
});

export const useTape = () => {
  return {
    tape: useAtomValue(anAtom),
    setTape: useUpdateAtom(anAtom),
    resetTape: useResetAtom(anAtom),
  } as const;
};
