"use client";
import { Suspense } from "react";
import ShopHeader from "../ShopHeader/organisms/ShopHeader";
import { useFilterShop } from "../hooks/useFilterShop";
import CategoriesCards from "../molecule/CategoriesCards";
import CategoryTabs from "../molecule/CategoryTabs";
import ShopFilters from "../molecule/ShopFilters";
import {
  ProductCategory,
  ProductPriceRange,
  ProductSort,
} from "../utils/ShopData";
import { Container } from "@/shared/components/atoms/Container";
import ProductCardSkeleton from "../../Home/Popular/molecule/ProductCardSkeleton";

const ShopContent = () => {
  const {
    filters,
    setFilter,
    searchInput,
    setSearchInput,
    data,
    isLoading,
    refetch,
    isError,
  } = useFilterShop();

  return (
    <div className="flex flex-col gap-8">
      <ShopHeader />

      <CategoryTabs
        active={filters.category}
        onChange={(value) => setFilter({ category: value as ProductCategory })}
      />

      <ShopFilters
        search={searchInput}
        setSearch={setSearchInput}
        price={filters.price}
        setPrice={(value) => setFilter({ price: value as ProductPriceRange })}
        sort={filters.sort}
        setSort={(value) => setFilter({ sort: value as ProductSort })}
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

const ShopSection = () => {
  return (
    <Suspense
      fallback={
        <Container>
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </Container>
      }
    >
      <ShopContent />
    </Suspense>
  );
};

export default ShopSection;
