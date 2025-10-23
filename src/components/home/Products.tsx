import React from "react";
import Syltherine from "@/assets/png/syltherine.png";
import { IoMdShare } from "react-icons/io";
import { LuArrowRightLeft } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { productList } from "@/models/productList";

export const ProductsSection = () => {
  return (
    <div className="flex justify-center w-full pt-14">
      <div className="flex flex-col items-center gap-8">
        <h2 className="font-bold text-[32px] text-black text-center capitalize">
          our products
        </h2>
        <div className="grid grid-cols-4 gap-8">
          {productList.map((product) => (
            <article key={product.id} className="group relative w-[285px]">
              <div
                className={`absolute top-4 right-4 z-10 w-12 h-12 rounded-full flex ${
                  product.status == 2 ? "hidden" : ""
                }`}
                style={{
                  backgroundColor:
                    product.status == 0
                      ? "var(--color-background-2ec1aC)"
                      : product.status == 1
                      ? "var(--color-background-e97171)"
                      : "transparent",
                }}
              >
                <span className="mx-auto my-auto text-white">-30%</span>
              </div>
              {/* Ketika Disorot (Hover), maka Akan Muncul */}
              <div className="opacity-0 absolute z-20 w-full h-full flex flex-col justify-center items-center gap-6 bg-black/45 group-hover:opacity-100 transition duration-200 ease-in-out cursor-pointer">
                <button
                  type="button"
                  className="font-semibold text-base px-[59px] py-3 bg-white cursor-pointer"
                  style={{ color: "var(--color-primary)" }}
                >
                  Add to cart
                </button>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-[2px] cursor-pointer">
                    <IoMdShare className="text-white" />
                    <span className="capitalize font-semibold text-base text-white">
                      Share
                    </span>
                  </div>
                  <div className="flex items-center gap-[2px] cursor-pointer">
                    <LuArrowRightLeft className="text-white" />
                    <span className="capitalize font-semibold text-base text-white">
                      Compare
                    </span>
                  </div>
                  <div className="flex items-center gap-[2px] cursor-pointer">
                    <GrFavorite className="text-white" />
                    <span className="capitalize font-semibold text-base text-white">
                      Like
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full relative">
                <img src={product.img.src} className="w-full object cover" />
              </div>
              <div
                className="px-4 pt-4 pb-[30px] space-y-2"
                style={{ backgroundColor: "var(--color-background-f4f5f7)" }}
              >
                <h3 className="w-max capitalize font-semibold text-2xl text-black">
                  {product.name}
                </h3>
                <div className="w-max">
                  <span
                    className=""
                    style={{ color: "var(--color-text-gray-898989)" }}
                  >
                    {product.description}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-xl text-black">
                    Rp 2.500.000
                  </span>
                  <span
                    className="font-normal text-bas line-through"
                    style={{ color: "var(--color-text-gray-b0b0b0)" }}
                  >
                    Rp 3.500.000
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
