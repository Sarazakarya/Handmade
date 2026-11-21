"use client";
import { SimpleSelect } from "@/shared/components/molecule/SimpleSelect";
import { useGetShopFilters } from "../hooks/useGetFilter";

interface Props {
  value: string;
  setValue: (v: string) => void;
}

export function Selectitem({ value, setValue }: Props) {
  const { data } = useGetShopFilters();

  const options = [
    { label: "All Prices", value: "all" },
    ...(data?.priceRanges.map((r) => ({
      label: `${data.currencySymbol} ${r.label}`,
      value: r.id,
    })) ?? []),
  ];

  return (
    <SimpleSelect
      label="Price:"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
}
