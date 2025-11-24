import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import BedroomImage1 from "@/assets/png/bedroom_image1.png";
import BedroomImage2 from "@/assets/png/bedroom_image2.png";
import BedroomImage3 from "@/assets/png/bedroom_image3.png";

export const Inspiration = () => {
  return (
    <div className="pt-[69px]">
      <div
        className="pl-[100px] py-11 flex items-center gap-[42px]"
        style={{ backgroundColor: "var(--color-background-fcf8f3)" }}
      >
        <div className="space-y-[25px] max-w-[422px]">
          <div className="space-y-[7px]">
            <h2 className="font-bold text-[40px] text-black leading-[120%]">
              50+ Beautiful rooms inspiration
            </h2>
            <p
              className="font-medium text-base"
              style={{ color: "var(--color-text-gray-616161)" }}
            >
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
          </div>
          <button
            type="button"
            className="px-9 py-3 capitalize font-semibold text-base text-white cursor-pointer"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            explore more
          </button>
        </div>
        <div className="relative w-full flex gap-6 overflow-hidden">
          <button
            type="button"
            className="group absolute z-10 right-10 top-1/2 -translate-y-1/2 flex w-12 h-12 rounded-full bg-white shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] overflow-hidden cursor-pointer"
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full w-32 h-32 rounded-full transition duration-300 group-hover:-translate-y-full"
              style={{ backgroundColor: "var(--color-primary)" }}
            ></div>
            <IoIosArrowForward className="z-10 mx-auto my-auto text-2xl text-[var(--color-primary)] transition group-hover:text-white" />
          </button>
          <div className="relative flex items-end w-[404px] h-[582px] flex-shrink-0">
            <img
              src={BedroomImage1.src}
              className="absolute w-full h-full object-cover"
            />
            <div className="relative z-10 flex items-end pl-6 pb-6">
              <div className="pl-8 pr-[17px] py-8 w-fit space-y-2 bg-white/[0.72] backdrop-blur-[3px]">
                <div className="flex items-center gap-3">
                  <p
                    className="font-medium text-base"
                    style={{ color: "var(--color-text-gray-616161)" }}
                  >
                    01
                  </p>
                  <hr
                    className="w-full"
                    style={{ borderColor: "var(--color-text-gray-616161)" }}
                  />
                </div>
                <h3
                  className="capitalize font-semibold text-[28px]"
                  style={{ color: "var(--color-text-gray-3a3a3a)" }}
                >
                  bed room
                </h3>
              </div>
              <button
                type="button"
                className="px-[15px] py-[12px] text-white cursor-pointer"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <BsArrowRight className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-[372px] h-[486px]">
                <img
                  src={BedroomImage2.src}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[372px] h-[486px]">
                <img
                  src={BedroomImage3.src}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative flex items-center gap-4">
              <div className="absolute left-0 w-[27px] h-[27px] rounded-full bg-transparent border border-[var(--color-primary)]"></div>
              <div className="w-[27px] h-[27px] flex justify-center items-center bg-transparent">
                <div
                  className="w-[11px] h-[11px] rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                ></div>
              </div>
              <div className="w-[27px] h-[27px] flex justify-center items-center bg-transparent">
                <div
                  className="w-[11px] h-[11px] rounded-full"
                  style={{ backgroundColor: "var(--color-background-d8d8d8)" }}
                ></div>
              </div>
              <div className="w-[27px] h-[27px] flex justify-center items-center bg-transparent">
                <div
                  className="w-[11px] h-[11px] rounded-full"
                  style={{ backgroundColor: "var(--color-background-d8d8d8)" }}
                ></div>
              </div>
              <div className="w-[27px] h-[27px] flex justify-center items-center bg-transparent">
                <div
                  className="w-[11px] h-[11px] rounded-full"
                  style={{ backgroundColor: "var(--color-background-d8d8d8)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
