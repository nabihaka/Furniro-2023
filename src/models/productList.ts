import { StaticImageData } from "next/image";
import Syltherine from "@/assets/png/syltherine.png";
import Leviosa from "@/assets/png/leviosa.png";
import Lolito from "@/assets/png/lolito.png";
import Respira from "@/assets/png/respira.png";
import Grifo from "@/assets/png/grifo.png";
import Muggo from "@/assets/png/muggo.png";
import Pingky from "@/assets/png/pingky.png";
import Potty from "@/assets/png/potty.png";

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
    status: 1,
  },
  {
    img: Leviosa,
    name: "Leviosa",
    description: "Stylish cafe chair",
    discount: 0,
    currentPrice: 2500000,
    status: 2,
  },
  {
    img: Lolito,
    name: "Lolito",
    description: "Luxury big sofa",
    discount: 50,
    currentPrice: 7000000,
    status: 1,
  },
  {
    img: Respira,
    name: "Respira",
    description: "Outdoor bar table and stool",
    discount: 0,
    currentPrice: 500000,
    status: 0,
  },
  {
    img: Grifo,
    name: "Grifo",
    description: "Night lamp",
    discount: 0,
    currentPrice: 1500000,
    status: 3,
  },
  {
    img: Muggo,
    name: "Muggo",
    description: "Small mug",
    discount: 0,
    currentPrice: 150000,
    status: 0,
  },
  {
    img: Pingky,
    name: "Pingky",
    description: "Cute bed set",
    discount: 50,
    currentPrice: 7000000,
    status: 1,
  },
  {
    img: Potty,
    name: "Potty",
    description: "Minimalis flower pot",
    discount: 0,
    currentPrice: 500000,
    status: 0,
  },
];

export const productList: product[] = rawProductList.map((product, index) => {
  const normalPrice =
    product.discount > 0
      ? Math.round(product.currentPrice / (1 - product.discount / 100))
      : 0;

  return {
    id: index + 1,
    normalPrice,
    ...product,
  };
});
