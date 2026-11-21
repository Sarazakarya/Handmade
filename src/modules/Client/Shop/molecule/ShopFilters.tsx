import { InputWithIcon } from "@/shared/components/molecule/InputWithIcon";
import { Search } from "@/assets/icons/Icons";
import { Container } from "@/shared/components/atoms/Container";
import { Selectitem } from "./Selectitem";
import Text from "@/shared/components/atoms/Text";
import FeatureSelectItem from "./FeatureSelectItem";

type Props = {
  search: string;
  setSearch: (v: string) => void;
  price: string;
  setPrice: (v: string) => void;
  sort: string;
  setSort: (v: string) => void;
  total: number;
};
const ShopFilters = ({
  price,
  search,
  setPrice,
  setSearch,
  setSort,
  sort,
  total,
}: Props) => {
  return (
    <div className="cozy-bg-light-brown">
      <Container>
        <div className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between md:gap-4 md:py-5">
          <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
            <InputWithIcon
              icon={Search}
              placeholder="Search"
              className="w-full sm:w-56"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Selectitem setValue={setPrice} value={price} />
          </div>

          <div className="flex w-full min-w-0 items-center gap-3 md:w-auto md:justify-end">
            <Text size="sm" className="shrink-0 whitespace-nowrap">
              {total}
            </Text>
            <div className="min-w-0 flex-1 md:flex-none">
              <FeatureSelectItem  setValue={setSort} value={sort} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopFilters;
