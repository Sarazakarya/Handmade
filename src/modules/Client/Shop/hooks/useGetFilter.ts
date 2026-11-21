import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getShopFilters } from "../api/getShopFilters";
import { ShopFiltersResponse } from "../utils/ShopData";

export const useGetShopFilters = () =>
  useApiQuery<ShopFiltersResponse>({
    queryKey: ["shop-filters"],
    queryFn: getShopFilters,
  });
