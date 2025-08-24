import { useShoppingCartStore } from "../store/shopping-cart.store";

export function useShoppingCart() {
  const addProductToShoppingCart = useShoppingCartStore(
    (state) => state.addProductToShoppingCart
  );
  const removeProductToShoppingCart = useShoppingCartStore(
    (state) => state.removeProductToShoppingCart
  );
  const deleteProductToShoppingCart = useShoppingCartStore(
    (state) => state.deleteProductToShoppingCart
  );
  const totalProductCount = useShoppingCartStore(
    (state) => state.totalProductCount
  );
  const shoppingCarList = useShoppingCartStore(
    (state) => state.shoppingCarList
  );

  return {
    shoppingCarList,
    addProductToShoppingCart,
    totalProductCount,
    removeProductToShoppingCart,
    deleteProductToShoppingCart,
  };
}
