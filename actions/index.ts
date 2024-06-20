import axios from "axios";
import { Category, Store, Size, Color, Billboard, ProductWithVarsAndImages, Order } from "@/types";

interface Query {
  colorId?: string;
  sizeId?: string;
  categoryId?: string;
  isFeatured?: boolean;
}

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getProduct = async (productId: string): Promise<ProductWithVarsAndImages> => {
  const res = await API.get(`/products/${productId}`);
  return res.data;
};

export const getProducts = async (query: Query): Promise<ProductWithVarsAndImages[]> => {
  const res = await API({
    method: "GET",
    url: "/products",
    params: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  return res.data;
};

export const getStore = async (): Promise<Store> => {
  const res = await API.get("/");
  return res.data;
};

export const getCategory = async (categoryId: string): Promise<Category & { billboard: Billboard }> => {
  const res = await API.get(`/categories/${categoryId}`);
  return res.data;
};

export const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await API.get(`/billboards/${id}`);
  return res.data;
};
export const getBillboards = async (): Promise<Billboard[]> => {
  const res = await API.get("/billboards");
  return res.data;
};
export const getColors = async (): Promise<Color[]> => {
  const res = await API.get("/colors");
  return res.data;
};
export const getSizes = async (): Promise<Size[]> => {
  const res = await API.get("/sizes");
  return res.data;
};
export const getCategories = async (): Promise<Category[]> => {
  const res = await API.get("/categories");
  return res.data;
};
