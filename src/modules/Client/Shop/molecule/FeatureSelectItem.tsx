"use client";
import { SimpleSelect } from "@/shared/components/molecule/SimpleSelect";
import { useGetShopFilters } from "../hooks/useGetFilter";

interface Props {
  value: string;
  setValue: (v: string) => void;
}

const FeatureSelectItem = ({ setValue, value }: Props) => {
  const { data } = useGetShopFilters();

  const options =
    data?.sortOptions.map((s) => ({
      label: s.label,
      value: s.value,
    })) ?? [];

  return (
    <SimpleSelect
      label="Sort:"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
};

export default FeatureSelectItem;
