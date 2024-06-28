import axios from "axios";
import { Category, Store, Size, Color, Billboard, ProductWithVarsAndImages, Order } from "@/types";

interface Query {
  colorId?: string;
  sizeId?: string;
  categoryId?: string;
  storeId?: string;
  isFeatured?: boolean;
}

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getProduct = async (storeId: string, productId: string): Promise<ProductWithVarsAndImages> => {
  const res = await API.get(`/${storeId}/products/${productId}`);
  return res.data;
};

export const getProducts = async (storeId: string, query: Query): Promise<ProductWithVarsAndImages[]> => {
  const res = await API({
    method: "GET",
    url: `/${storeId}/products`,
    params: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      storeId: query.storeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  return res.data;
};

export const getStore = async (storeId: string): Promise<Store> => {
  const res = await API.get(`/${storeId}`);
  return res.data;
};

export const getCategory = async (
  storeId: string,
  categoryId: string
): Promise<Category & { billboard: Billboard }> => {
  const res = await API.get(`/${storeId}/categories/${categoryId}`);
  return res.data;
};

export const getBillboard = async (storeId: string, id: string): Promise<Billboard> => {
  const res = await API.get(`/${storeId}/billboards/${id}`);
  return res.data;
};
export const getBillboards = async (storeId: string): Promise<Billboard[]> => {
  const res = await API.get(`/${storeId}/billboards`);
  return res.data;
};
export const getColors = async (storeId: string): Promise<Color[]> => {
  const res = await API.get(`/${storeId}/colors`);
  return res.data;
};
export const getSizes = async (storeId: string): Promise<Size[]> => {
  const res = await API.get(`/${storeId}/sizes`);
  return res.data;
};
export const getCategories = async (storeId: string): Promise<Category[]> => {
  const res = await API.get(`/${storeId}/categories`);
  return res.data;
};
