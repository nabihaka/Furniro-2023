import React from "react";
import { MainLayout } from "@/layout/MainLayout";
import { HeroSection } from "@/components/home/Hero";
import { BrowseRangeSection } from "@/components/home/BrowseRange";
import { ProductsSection } from "@/components/home/Products";

export const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <BrowseRangeSection />
      <ProductsSection />
      {/* <form className="flex gap-3 mb-[30px]">
        <div className="flex gap-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="to-do" className="capitalize">
              Add your to-do:
            </label>
            <input
              id="to-do"
              type="text"
              placeholder="Go-To Market"
              className="px-3 py-2 w-[220px] border rounded-[6px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="to-do" className="capitalize">
              Add your to-do:
            </label>
            <input
              id="to-do"
              type="text"
              placeholder="Go-To Market"
              className="px-3 py-2 w-[220px] border rounded-[6px]"
            />
          </div>
        </div>
        <button type="submit" className="border h-max">
          asdasdasdasd
        </button>
      </form> */}
    </MainLayout>
  );
};
