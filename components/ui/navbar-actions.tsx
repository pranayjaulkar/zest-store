"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarActionsProps {}

const NavbarActions: React.FC<NavbarActionsProps> = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Link href="/cart">
        <Button className="px-4 py-2 flex items-center justify-center rounded-full bg-black space-x-2 ">
          <ShoppingBag size={20} color="white" />
          <span className="text-md font-medium text-white">{cart.items.length}</span>
        </Button>
      </Link>
    </div>
  );
};
export default NavbarActions;
