import { StaticImageData } from "next/image";
import CategoryDining from "@/assets/png/category_dining.png";
import CategoryLiving from "@/assets/png/category_living.png";
import CategoryBedroom from "@/assets/png/category_bedroom.png";

export interface browse {
  id: number;
  img: StaticImageData;
  caption: string;
}

const rawBrowse = [
  { img: CategoryDining, caption: "Dining" },
  { img: CategoryLiving, caption: "Living" },
  { img: CategoryBedroom, caption: "Bedroom" },
];

export const browseRange: browse[] = rawBrowse.map((browse, index) => ({
  id: index + 1,
  ...browse,
}));
