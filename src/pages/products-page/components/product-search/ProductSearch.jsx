import { SearchIcon } from "@/assets/svg";
import { useProductStore } from "../../store/product.store";
import { memo } from "react";
import "./product-search.scss";

export const ProductSearch = memo(({ children }) => {
  const searchValue = useProductStore((state) => state.searchValue);
  const setSearchValue = useProductStore((state) => state.setSearchValue);

  return (
    <div className="search">
      <input
        type="text"
        id="searchInput"
        placeholder={children}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <SearchIcon />
    </div>
  );
});
