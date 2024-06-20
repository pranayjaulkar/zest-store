"use client";
import { Color, ProductWithVarsAndImages, Size } from "@/types";
import Currency from "@/components/ui/currency";
import { getSizeColors, getColorsFromVariations, getSizesFromVariations } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AddToCart from "@/app/product/[productId]/(components)/AddToCart";
import { useEffect, useState } from "react";

interface InfoProps {
  product: ProductWithVarsAndImages;
}

type size = Size & { available?: boolean };
type color = Color & { available?: boolean };

const Info: React.FC<InfoProps> = ({ product }) => {
  const sizes = getSizesFromVariations(product.productVariations);
  const [colors, setColors] = useState<color[]>(getColorsFromVariations(product.productVariations));
  const [size, setSize] = useState<size>(sizes[0]);
  const [color, setColor] = useState<color>(colors[0]);

  const handleSizeChange = (value: string) => {
    setSize(sizes.find((size) => size.id === value) || sizes[0]);
  };
  const handleColorChange = (value: string) => {
    setColor(colors.find((color) => color.id === value) || colors[0]);
  };

  useEffect(() => {
    const availableColors = getSizeColors(size.id, product.productVariations);
    setColors(availableColors);
    setColor(availableColors.find((color) => color.available) || colors[0]);
  }, [size]);

  return (
    <div>
      {/* Product Name */}

      <h1 className="text-3xl font-bold text-gray-400">{product.name}</h1>

      {/* Product Price */}

      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={product.price} />
        </p>
      </div>

      {/* Sizes And Colors */}

      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        {/* Sizes */}

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black min-w-12">Sizes:</h3>
          <Select defaultValue={size.id} onValueChange={handleSizeChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sizes</SelectLabel>
                {sizes.map((size, i) => (
                  <SelectItem key={i} value={size.id}>
                    {size.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Colors */}

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black min-w-12">Colors:</h3>
          <Select value={color.id} onValueChange={handleColorChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sizes</SelectLabel>
                {colors.map((color, i) => (
                  <SelectItem disabled={!color.available} key={i} value={color.id}>
                    {color.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div
            className="h-6 w-6 rounded-full"
            style={{
              backgroundColor: colors.filter((c) => c.id === color.id)[0]?.value,
            }}
          ></div>
        </div>
      </div>

      {/* Add to Cart */}

      <AddToCart size={size} color={color} product={product} />
    </div>
  );
};
export default Info;
