import { StaticImageData } from "next/image";
import Ring1 from "@/Assets/product/ring.png";
import Ring2 from "@/Assets/product/ring2.png";
import Ring3 from "@/Assets/product/ring3.png";
import Ring4 from "@/Assets/product/ring4.png";
import Ring5 from "@/Assets/product/ring5.png";

export type CategoriType = {
  id: number;
  title: string;
  image: StaticImageData;
};

export const categoriesMock: CategoriType[] = [
  {
    id: 1,
    title: "RING",
    image: Ring1,
  },
  {
    id: 2,
    title: "EARING",
    image: Ring2,
  },
  {
    id: 3,
    title: "EARING",
    image: Ring3,
  },
  {
    id: 4,
    title: "EARING",
    image: Ring4,
  },
  {
    id: 5,
    title: "EARING",
    image: Ring5,
  },
  {
    id: 6,
    title: "EARING",
    image: Ring1,
  },
  {
    id: 7,
    title: "EARING",
    image: Ring2,
  },
  {
    id: 8,
    title: "EARING",
    image: Ring3,
  },
];
