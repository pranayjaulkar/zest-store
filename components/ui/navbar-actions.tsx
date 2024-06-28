"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import { useLoadingBarStore } from "@/hooks/useLoadingBarStore";
import useStore from "@/hooks/useStore";
import axios from "axios";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const loadingBar = useLoadingBarStore();
  const store = useStore();

  const handleClick = (event: any) => {
    try {
      loadingBar.start(event);
    } catch (error) {
      loadingBar.done();

      console.trace(error);

      if (axios.isAxiosError(error))
        toast.error(
          error?.response?.status === 500 ? "Internal Server Error" : "Something went wrong. Please try again."
        );
      else toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Link onClick={handleClick} href={`/stores/${store.store?.id}/cart`}>
        <Button className="px-4 py-2 flex items-center justify-center rounded-full bg-black space-x-2 ">
          <ShoppingBag size={20} color="white" />
          <span className="text-md font-medium text-white">{cart.items.length}</span>
        </Button>
      </Link>
    </div>
  );
};
export default NavbarActions;
