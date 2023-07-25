import { StaticImageData } from "next/image";
import Ring1 from "@/Assets/product/ring.png";
import Ring2 from "@/Assets/product/ring2.png";
import Ring3 from "@/Assets/product/ring3.png";
import Ring4 from "@/Assets/product/ring4.png";
import Ring5 from "@/Assets/product/ring5.png";

export type ThumbType = {
  id: number;
  image: string;
};

export const thumbsMock: ThumbType[] = [
  {
    id: 0,
    image: Ring1.src,
  },
  {
    id: 1,
    image: Ring2.src,
  },
  {
    id: 2,
    image: Ring3.src,
  },
  {
    id: 3,
    image: Ring4.src,
  },
  {
    id: 4,
    image: Ring5.src,
  },
];
