"use client";
import { useLoadingBarStore } from "@/hooks/useLoadingBarStore";
import useStore from "@/hooks/useStore";
import { cn } from "@/lib/utils";
import { Category, Store } from "@/types";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface MainNavbarProps {
  categories: Category[];
  store: Store;
}

const MainNavbar = ({ categories, store }: MainNavbarProps) => {
  const pathname = usePathname();
  const loadingBar = useLoadingBarStore();
  const { setStore } = useStore();

  const routes = categories.map((route) => ({
    href: `/stores/${store.id}/categories/${route.id}`,
    label: route.name,
    active: pathname === `/stores/${store.id}/categories/${route.id}`,
  }));

  const handleClick = (event: any, route: { href: string }) => {
    try {
      if (pathname !== route.href) {
        loadingBar.start(event);
      }
    } catch (error) {
      loadingBar.done();

      // console.trace(error);

      if (axios.isAxiosError(error))
        toast.error(
          error?.response?.status === 500 ? "Internal Server Error" : "Something went wrong. Please try again."
        );
      else toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    setStore(store);
  }, []);

  return (
    <>
      <Link
        href={`/stores/${store.id}`}
        onClick={(event) => handleClick(event, { href: "/" })}
        className="ml-4 flex lg:ml-0 gap-x-2"
      >
        <p className="font-semibold text-3xl">{store.name}</p>
      </Link>
      <nav className="ml-12 flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            onClick={(event) => handleClick(event, route)}
            className={cn(
              "text-md font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </>
  );
};
export default MainNavbar;
