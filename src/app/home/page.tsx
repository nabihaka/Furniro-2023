import React from "react";
import { MainLayout } from "@/layout/MainLayout";
import { HeroSection } from "@/components/home/Hero";
import { BrowseRangeSection } from "@/components/home/BrowseRange";
import { ProductsSection } from "@/components/home/Products";
import { Inspiration } from "@/components/home/Inspiration";
import { Portfolio } from "@/components/home/Portfolio";

export default function Home () {
  return (
    <MainLayout>
      <HeroSection />
      <BrowseRangeSection />
      <ProductsSection />
      <Inspiration />
      <Portfolio />
    </MainLayout>
  );
};
