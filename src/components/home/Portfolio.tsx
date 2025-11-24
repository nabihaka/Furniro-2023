import React from "react";
import PortfolioImage1 from "@/assets/png/portfolio_image1.png";
import PortfolioImage2 from "@/assets/png/portfolio_image2.png";
import PortfolioImage3 from "@/assets/png/portfolio_image3.png";
import PortfolioImage4 from "@/assets/png/portfolio_image4.png";
import PortfolioImage5 from "@/assets/png/portfolio_image5.png";
import PortfolioImage6 from "@/assets/png/portfolio_image6.png";
import PortfolioImage7 from "@/assets/png/portfolio_image7.png";
import PortfolioImage8 from "@/assets/png/portfolio_image8.png";
import PortfolioImage9 from "@/assets/png/portfolio_image9.png";

export const Portfolio = () => {
  return (
    <div className="pt-[67px]">
      <div className="relative">
        <div className="flex flex-col items-center gap-2">
          <p
            className="w-fit font-semibold text-xl leading-[150%]"
            style={{ color: "var(--color-text-gray-616161)" }}
          >
            Share your setup with
          </p>
          <h2
            className="font-bold text-[40px] leading-[120%]"
            style={{ color: "var(--color-text-gray-3a3a3a)" }}
          >
            #FuniroFurniture
          </h2>
        </div>
        <div className="-translate-y-6.5 flex gap-4 overflow-hidden">
          <div className="flex-shrink-0 -ml-36 space-y-4">
            <div className="flex w-max items-end gap-4">
              <img src={PortfolioImage1.src} />
              <img src={PortfolioImage2.src} />
            </div>
            <div className="flex gap-4 items-start">
              <img src={PortfolioImage4.src} />
              <img src={PortfolioImage3.src} />
            </div>
          </div>
          <div className="flex flex-shrink-0 w-max">
            <img src={PortfolioImage5.src} className="mx-auto my-auto" />
          </div>
          <div className="flex-shrink-0 space-y-4">
            <div className="flex items-end gap-4">
              <img src={PortfolioImage6.src} />
              <img src={PortfolioImage7.src} />
            </div>
            <div className="flex items-start gap-4">
              <img src={PortfolioImage8.src} />
              <img src={PortfolioImage9.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
