"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/useCart";
import { MouseEventHandler } from "react";
import { CartItem } from "@/types";

const AddToCart: React.FC<CartItem> = ({ product, size, color }) => {
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.stopPropagation();
    cart.addItem({ product, size, color });
  };
  return (
    <div className="mt-10 flex items-center gap-x-3">
      <Button onClick={onAddToCart} className="flex items-center gap-x-2">
        Add to Cart
        <ShoppingCart />
      </Button>
    </div>
  );
};
export default AddToCart;
