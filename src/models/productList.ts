import { StaticImageData } from "next/image";
import Syltherine from "@/assets/png/syltherine.png";
import Leviosa from "@/assets/png/leviosa.png";
import Lolito from "@/assets/png/lolito.png";
import Respira from "@/assets/png/respira.png";

export interface product {
  id: number;
  status: number;
  img: StaticImageData;
  name: string;
  description: string;
  discount: number;
  currentPrice: number;
  normalPrice: number;
}

const rawProductList = [
  {
    img: Syltherine,
    name: "Syltherine",
    description: "Stylish cafe chair",
    discount: 30,
    currentPrice: 2500000,
    normalPrice: 3500000,
    status: 1,
  },
  {
    img: Leviosa,
    name: "Leviosa",
    description: "Stylish cafe chair",
    discount: 0,
    currentPrice: 2500000,
    normalPrice: 0,
    status: 2,
  },
  {
    img: Lolito,
    name: "Lolito",
    description: "Luxury big sofa",
    discount: 50,
    currentPrice: 7000000,
    normalPrice: 14000000,
    status: 1,
  },
  {
    img: Respira,
    name: "Respira",
    description: "Outdoor bar table and stool",
    discount: 0,
    currentPrice: 500000,
    normalPrice: 0,
    status: 0,
  },
];

export const productList: product[] = rawProductList.map((product, index) => ({
  id: index + 1,
  ...product,
}));
