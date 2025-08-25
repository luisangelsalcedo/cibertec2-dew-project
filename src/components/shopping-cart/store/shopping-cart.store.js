import { create } from "zustand";

export const useShoppingCartStore = create((set, get) => ({
  shoppingCarList: [],
  totalProductCount: 0,
  addProductToShoppingCart: (product) =>
    set((state) => {
      const currentList = [...state.shoppingCarList];
      const index = currentList.findIndex(
        (item) => item.product.id === product.id
      );

      if (index === -1) {
        currentList.push({ count: 1, product });
      } else {
        currentList[index] = {
          ...currentList[index],
          count: currentList[index].count + 1,
        };
      }

      const totalProductCount = get().calculateTotalCount(currentList);

      return { shoppingCarList: currentList, totalProductCount };
    }),

  removeProductToShoppingCart: (index) =>
    set((state) => {
      const currentList = [...state.shoppingCarList];

      if (currentList[index].count == 1) return state;

      currentList[index] = {
        ...currentList[index],
        count: currentList[index].count - 1,
      };

      const totalProductCount = get().calculateTotalCount(currentList);

      return { shoppingCarList: currentList, totalProductCount };
    }),

  deleteProductToShoppingCart: (index) =>
    set((state) => {
      const currentList = [...state.shoppingCarList];
      currentList.splice(index, 1);

      const totalProductCount = get().calculateTotalCount(currentList);

      return { shoppingCarList: currentList, totalProductCount };
    }),

  calculateTotalCount: (list) =>
    list.reduce((sum, item) => sum + item.count, 0),
}));
