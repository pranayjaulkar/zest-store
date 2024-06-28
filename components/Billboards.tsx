"use client";
import { Billboard as BillboardType } from "@/types";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { easeOut, useAnimate } from "framer-motion";

const Billboards = ({ billboards }: { billboards: BillboardType[] }) => {
  const [slide, setSlide] = useState(billboards.length / 2 - 1);
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLeft = () => {
    setSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleRight = () => {
    setSlide((prev) => (prev < billboards.length - 1 ? prev + 1 : prev));
  };

  useEffect(() => {
    if (containerRef.current?.clientWidth && billboards.length > 1) {
      animate(scope.current, { x: -slide * containerRef.current.clientWidth }, { ease: easeOut, duration: 0.3 });
    }
  }, [slide]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div ref={containerRef} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div
          onClick={handleLeft}
          className="absolute h-full z-10 hover:cursor-pointer px-2 flex items-center justify-center left-0"
        >
          <ChevronLeft className="w-10 h-10" />
        </div>
        <div
          onClick={handleRight}
          className="absolute h-full z-10 hover:cursor-pointer px-2 flex items-center justify-center right-0"
        >
          <ChevronRight className="w-10 h-10" />
        </div>
        <div ref={scope} className="w-full h-full flex items-center ">
          {billboards?.map((billboard, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${billboard?.imageUrl})` }}
              className="h-full min-w-full bg-cover flex flex-col justify-center items-center text-center gap-y-8"
            >
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">{billboard?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Billboards;
