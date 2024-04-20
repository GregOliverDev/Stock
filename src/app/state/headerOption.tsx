import { create } from "zustand";

interface HeaderState {
  headerOption: number;
  alter: (by: number) => void;
}

export const useHeaderState = create<HeaderState>()((set) => ({
    headerOption: 0,
  alter: (by) => set(() => ({ headerOption: by })),
}));
