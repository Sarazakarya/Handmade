"use client";
import ShopHeader from "../ShopHeader/organisms/ShopHeader";
import { useFilterShop } from "../hooks/useFilterShop";
import CategoriesCards from "../molecule/CategoriesCards";
import CategoryTabs from "../molecule/CategoryTabs";
import ShopFilters from "../molecule/ShopFilters";

const ShopSection = () => {
  const {
    category,
    setCategory,
    search,
    setSearch,
    price,
    setPrice,
    sort,
    setSort,
    data,
    isLoading,
    refetch,
    isError,
  } = useFilterShop();

  return (
    <div className="flex flex-col gap-8">
      <ShopHeader />
      <CategoryTabs active={category} onChange={setCategory} />
      <ShopFilters
        search={search}
        setSearch={setSearch}
        price={price}
        setPrice={setPrice}
        sort={sort}
        setSort={setSort}
        total={data?.total ?? 0}
      />
      <CategoriesCards
        products={data?.items ?? []}
        isLoading={isLoading}
        refetch={refetch}
        isError={isError}
      />
    </div>
  );
};

export default ShopSection;
