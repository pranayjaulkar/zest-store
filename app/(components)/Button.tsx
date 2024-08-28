import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export default function Button({
  variant,
  href,
  className,
  target,
}: {
  variant?: string;
  href: string;
  className?: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      className={
        variant === "Explore"
          ? cn(
              "min-w-36 md:min-w-40 lg:min-w-48 h-8 md:h-10 lg:h-12 bg-white rounded-full space-x-2 hover:bg-gray-300 text-black flex items-center justify-center  transition-all duration-200",
              "bg-black text-white hover:bg-black hover:text-gray-400",
              className
            )
          : cn(
              "min-w-36 md:min-w-40 lg:min-w-48 h-8 md:h-10 lg:h-12 bg-white rounded-full space-x-2 hover:bg-gray-300 text-black flex items-center justify-center  transition-all duration-200",
              className
            )
      }
    >
      <span className="font-semibold text-sm md:text-lg ">
        {variant === "Explore" ? "Explore Stores" : "Create Your Store"}
      </span>
      <ChevronRight className="w-4 h-4" />
    </a>
  );
}
