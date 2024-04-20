import { create } from "zustand";

interface ItemPlan {
  itemOption: number;
  alter: (by: number) => void;
}

export const useItemPlanStore = create<ItemPlan>()((set) => ({
    itemOption: 0,
  alter: (by) => set(() => ({ itemOption: by })),
}));