"use client";

import { Button } from "@/components/ui/button";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);
  const handleOnClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl({ url: window.location.href, query }, { skipNull: true });
    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div className="flex items-center" key={filter.id}>
            <Button
              className="rounded-md text-sm"
              style={{
                background: selectedValue === filter.id ? "black" : "white",
                color: selectedValue === filter.id ? "white" : "black",
                border: selectedValue === filter.id ? "" : "1px solid #d1d5db",
              }}
              onClick={() => {
                handleOnClick(filter.id);
              }}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Filter;
