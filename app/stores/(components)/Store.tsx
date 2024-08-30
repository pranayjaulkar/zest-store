"use client";
import { Product, Store as StoreType, Image as ImageType } from "@/types";
import { useLoadingBarStore } from "@/hooks/useLoadingBarStore";

import Link from "next/link";
import Image from "next/image";

export default function Store({ store }: { store: StoreType & { products: (Product & { images: ImageType[] })[] } }) {
  const loadingBar = useLoadingBarStore();

  const handleClick = (event: any) => {
    try {
      loadingBar.start();
    } catch (error) {
      loadingBar.done();
    }
  };
  return (
    <Link
      onClick={handleClick}
      href={`/stores/${store.id}`}
      className="min-w-72 max-h-72 bg-white p-4 border rounded-lg"
    >
      <div className="flex flex-col h-full space-y-2">
        <Image
          className="object-contain bg-gray-50 w-full h-4/5"
          src={store.products[0]?.images[0]?.url}
          width={200}
          height={200}
          alt={store.name}
        />
        <div className="h-1/5 flex flex-col justify-center">
          <h3 className="text-lg font-semibold w-full">{store.name}</h3>
        </div>
      </div>
    </Link>
  );
}
