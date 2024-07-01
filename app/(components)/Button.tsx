import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export default function Button({ variant, href }: { variant?: string; href: string }) {
  return (
    <a
      href={href}
      className={
        variant === "Explore"
          ? cn(
              "min-w-36 md:min-w-40 lg:min-w-48 h-8 md:h-10 lg:h-12 bg-white rounded-full space-x-2 hover:bg-gray-300 text-black flex items-center justify-center  transition-all duration-200",
              "bg-black text-white hover:bg-black hover:text-gray-400"
            )
          : "min-w-36 md:min-w-40 lg:min-w-48 h-8 md:h-10 lg:h-12 bg-white rounded-full space-x-2 hover:bg-gray-300 text-black flex items-center justify-center  transition-all duration-200"
      }
    >
      <span className="font-semibold text-sm md:text-md ">
        {variant === "Explore" ? "Explore Stores" : "Get Started"}
      </span>
      <ChevronRight className  ="w-4 h-4" />
    </a>
  );
}
