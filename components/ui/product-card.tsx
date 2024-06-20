"use client";
import { ProductWithVarsAndImages } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/usePreviewModal";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/useCart";
import Link from "next/link";
import toast from "react-hot-toast";
interface ProductCardProps {
  product: ProductWithVarsAndImages;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.stopPropagation();
    previewModal.open(product);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.stopPropagation();
    const firstAvailable = product.productVariations.find((pv) => pv.quantity > 0);
    if (firstAvailable?.size && firstAvailable?.color)
      cart.addItem({ product, size: firstAvailable.size, color: firstAvailable.color });
    else toast("Currently not available");
  };

  return (
    <div className="bg-white group rounded-xl border p-3 space-y-4">
      <div className="aspect-square cursor-pointer rounded-xl bg-white relative">
        <Image className="object-contain" src={product.images[0].url} alt="" fill />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600" />} />
            <IconButton onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-gray-600" />} />
          </div>
        </div>
      </div>
      {/* Description */}
      <Link href={`/product/${product?.id}`}>
        <div>
          <p className="cursor-pointer font-semibold text-lg">{product.name}</p>
          <p className="text-sm text-gray-500">{product.category?.name}</p>
        </div>
      </Link>
      {/* Price  */}
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  );
};
export default ProductCard;
