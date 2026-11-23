import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getShopFilters } from "../api/getShopFilters";
import { ShopFiltersResponse } from "../types/shopTypes";

export const useGetShopFilters = () =>
  useApiQuery<ShopFiltersResponse>({
    queryKey: ["shop-filters"],
    queryFn: getShopFilters,
  });
