import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Color, ProductVariationWithSizeAndColor, Size } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});


export function getRandomNumber(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


export const getColorsFromVariations = (variations: ProductVariationWithSizeAndColor[]) => {
  let colorsArray: Color[] = [];
  variations.forEach((v) => {
    if (!colorsArray.find((c) => c.id === v.color.id)) {
      colorsArray = [...colorsArray, v.color];
    }
  });
  return colorsArray;
};

export const getSizesFromVariations = (variations: ProductVariationWithSizeAndColor[]) => {
  let sizesArray: Size[] = [];
  variations.forEach((v) => {
    if (!sizesArray.find((s) => s.id === v.size.id)) {
      sizesArray = [...sizesArray, v.size];
    }
  });
  return sizesArray;
};

export const getSizeColors = (sizeId: string, variations: ProductVariationWithSizeAndColor[]) => {
  let colorsArray: (Color & { available: boolean })[] = [];

  variations.forEach((v) => {
    if (sizeId === v.size.id && !colorsArray.find((c) => c.id === v.color.id)) {
      colorsArray = [...colorsArray, { ...v.color, available: v.quantity > 0 }];
    }
  });

  return colorsArray;
};
