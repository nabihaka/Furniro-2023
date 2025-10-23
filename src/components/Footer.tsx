import React from "react";
import Link from "next/link";
import { navbarLinks } from "@/models/navbarLinks";
import { helpLinks } from "@/models/helpLinks";

export const Footer = () => {
  return (
    <div
      className="flex flex-col items-center pt-12 pb-9 w-full h-[500px] border-t"
      style={{ borderColor: "var(--color-line-gray-d9d9d9)" }}
    >
      <div className="w-max">
        <div className="flex gap-[136px]">
          <div className="flex flex-col gap-[50px]">
            <h2 className="font-bold text-2xl">Furniro.</h2>
            <div
              className="flex flex-col max-w-72 font-normal"
              style={{ color: "var(--color-text-gray-9f9f9f)" }}
            >
              <span className="capitalize">
                400 University Drive Suite 200 Coral Gables
              </span>
              <span className="uppercase">FL 33134 USA</span>
            </div>
          </div>
          <div className="flex gap-[72px]">
            <div className="flex gap-[144px]">
              <div className="flex flex-col gap-[55px]">
                <span
                  className="font-medium text-base"
                  style={{ color: "var(--color-text-gray-9f9f9f)" }}
                >
                  Links
                </span>
                <ul className="space-y-[46px]">
                  {navbarLinks.map((navItem) => (
                    <li
                      key={navItem.id}
                      className="font-medium text-base text-black"
                    >
                      <Link href={navItem.url}>{navItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-[55px]">
                <span
                  className="font-medium text-base"
                  style={{ color: "var(--color-text-gray-9f9f9f)" }}
                >
                  Help
                </span>
                <ul className="space-y-[46px]">
                  {helpLinks.map((helpItem) => (
                    <li
                      key={helpItem.id}
                      className="font-medium text-base text-black"
                    >
                      <Link href={helpItem.url}>{helpItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[55px]">
              <span
                className="font-medium text-base"
                style={{ color: "var(--color-text-gray-9f9f9f)" }}
              >
                Newsletter
              </span>
              <form className="flex items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="pb-1 w-[200px] border-b font-normal text-sm text-black placeholder:font-normal placeholder:text-sm input-placeholder focus:outline-none"
                />
                <button
                  type="submit"
                  className="pb-1 font-medium text-sm text-black uppercase border-b cursor-pointer"
                >
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr
          className="w-full mt-12 mb-[35px] border-gray-500"
          style={{ borderColor: "var(--color-line-gray-d9d9d9)" }}
        />
        <span className="font-normal text-base text-black">
          2023 furniro. All rights reverved
        </span>
      </div>
    </div>
  );
};
