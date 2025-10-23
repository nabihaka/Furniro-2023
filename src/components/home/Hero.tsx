import React from "react";
import HeroImage from "@/assets/png/hero_image.png";

export const HeroSection = () => {
  return (
    <div className="w-full h-[656px]">
      <div className="relative w-full h-full">
        <img
          src={HeroImage.src}
          className="absolute w-full h-full object-cover"
        />
        <div
          className="absolute bottom-24 right-12 pl-[39px] pt-[62px] pr-[43px] pb-[37px] rounded-md"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          <div className="space-y-[46px] max-w-[546px]">
            <div className="flex flex-col">
              <span className="mb-1 font-semibold text-base text-black capitalize tracking-[3px]">
                New Arrival
              </span>
              <h1
                className="mb-[17px] max-w-[400px] font-bold text-[52px] leading-[65px]"
                style={{ color: "var(--color-primary)" }}
              >
                Discover Our New Collection
              </h1>
              <p className="font-normal text-lg text-black leading-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
            <button
              type="button"
              className="px-18 py-[25px] font-bold text-base text-white capitalize cursor-pointer"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
