export type Store = {
  id: string;
  name: string;
  userId: string;
  billboards?: Billboard[];
  categories?: Category[];
  sizes?: Size[];
  colors?: Color[];
  products?: Product[];
  orders?: Order[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type Billboard = {
  id: string;
  label: string;
  store?: Store;
  active?: boolean;
  imageUrl: string;
  imagePublicId: string;
  categories?: Category[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type Category = {
  id: string;
  storeId: string;
  name: string;
  billboardId: string;
  store?: Store;
  billboard?: Billboard;
  products?: Product[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type Image = {
  id: string;
  productId: string;
  product?: Product;
  url: string;
  cloudinaryPublicId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Size = {
  id: string;
  storeId: string;
  store?: Store;
  name: string;
  value: string;
  productVariations?: ProductVariation[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type Color = {
  id: string;
  storeId: string;
  store?: Store;
  name: string;
  value: string;
  productVariations?: ProductVariation[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductVariation = {
  id: string;
  sizeId: string;
  size?: Size;
  colorId: string;
  color?: Color;
  productId: string;
  product?: Product;
  name: string;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Product = {
  id: string;
  storeId: string;
  store?: Store;
  categoryId: string;
  category?: Category;
  name: string;
  price: string;
  isFeatured: Boolean;
  isArchived: Boolean;
  images?: Image[];
  orderItems?: OrderItem[];
  productVariations?: ProductVariation[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type Order = {
  id: string;
  storeId: string;
  store?: Store;
  orderItems?: OrderItem[];
  isPaid: Boolean;
  phone: string;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type OrderItem = {
  id: string;
  orderId: string;
  order?: Order;
  productId: string;
  product?: Product;
  productVariationId: string;
  productVariation?: ProductVariation;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductVariationWithSizeAndColor = {
  id: string;
  sizeId: string;
  size: Size;
  colorId: string;
  color: Color;
  productId: string;
  product?: Product;
  name: string;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductWithVarsAndImages = Product & { productVariations: ProductVariationWithSizeAndColor[] } & {
  images: Image[];
};

export interface CartItem {
  product: ProductWithVarsAndImages;
  size: Size;
  color: Color;
}
