import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductsSection = () => {
  return (
    <div className="flex justify-center pt-14">
      <div className="flex flex-col items-center gap-8">
        <h2 className="font-bold text-[32px] text-black text-center capitalize">
          our products
        </h2>
        <ProductCard />
        <button
          type="button"
          className="px-[74px] py-3 capitalize font-semibold text-base border bg-white cursor-pointer"
          style={{
            color: "var(--color-primary)",
            borderColor: "var(--color-primary)",
          }}
        >
          show more
        </button>
      </div>
    </div>
  );
};
