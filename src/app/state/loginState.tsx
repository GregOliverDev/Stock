import { create } from "zustand";

interface LoginState {
  loginComp: boolean;
  alter: (by: boolean) => void;
}

export const useLoginStore = create<LoginState>()((set) => ({
  loginComp: false,
  alter: (by) => set(() => ({ loginComp: by })),
}));
