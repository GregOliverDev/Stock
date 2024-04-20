import { create } from "zustand";

interface IntegrationsOption {
  intOption: number;
  alter: (by: number) => void;
}

export const useIntegrationsOption = create<IntegrationsOption>()((set) => ({
  intOption: 0,
  alter: (by) => set(() => ({ intOption: by })),
}));
