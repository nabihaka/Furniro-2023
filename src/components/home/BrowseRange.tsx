import React from "react";
import { browseRange } from "@/models/browseRange";

export const BrowseRangeSection = () => {
  return (
    <div className="flex justify-center pt-14">
      <div className="flex flex-col items-center space-y-16">
        <div className="space-y-0">
          <h2 className="font-bold text-[32px] text-black text-center capitalize">
            browse the range
          </h2>
          <p
            className="font-normal text-xl text-center"
            style={{ color: "var(--color-text-gray-66666)" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex gap-5 items-center">
          {browseRange.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-[30px]"
            >
              <img
                src={item.img.src}
                className="aspect-[127/160] w-[381px] object-cover rounded-xl"
              />
              <span className="font-semibold text-2xl text-black">
                {item.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
