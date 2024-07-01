"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/useCart";
import { API } from "@/actions";
import useStore from "@/hooks/useStore";
import { useLoadingBarStore } from "@/hooks/useLoadingBarStore";

const Summary = () => {
  const searchParams = useSearchParams();
  const [disabled, setDisabled] = useState(false);
  const loadingBar = useLoadingBarStore();
  const { store } = useStore();
  const items = useCart((state) => state.items);
  const cart = useCart();
  const totalPrice = items.reduce((total, item) => total + Number(item.product.price), 0);
  const onCheckout = async () => {
    try {
      setDisabled(true);
      loadingBar.start();

      const data = items.map((item) => {
        const productVariation = item.product.productVariations.filter(
          (pv) => pv.colorId === item.color.id && pv.sizeId === item.size.id
        )[0];
        return {
          productId: item.product.id,
          product: item.product,
          productVariationId: productVariation.id,
          productVariation,
        };
      });

      const response = await API.post(`${store?.id}/checkout`, { orderItems: data });
      
      loadingBar.done();
      window.location = response.data.url;
    } catch (error) {
      loadingBar.done();
      // console.trace("error: ", error);
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      cart.removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams]);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4 ">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button disabled={items.length === 0 || disabled} onClick={onCheckout} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
};
export default Summary;
