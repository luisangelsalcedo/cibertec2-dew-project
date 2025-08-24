import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  searchValue: "",
  setProducts: (products) => set(() => ({ products })),
  setSearchValue: (value) => set(() => ({ searchValue: value })),
}));
