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
    image:
      "https://img.freepik.com/free-photo/model-demonstrating-earrings-ring_7502-7042.jpg?w=1380&t=st=1690137101~exp=1690137701~hmac=098dfe43e81d1b4ccf38cff2c52bd59335b8b922ed95b45053be43ca98d05cc9",
  },
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/model-demonstrating-earrings-ring_7502-7042.jpg?w=1380&t=st=1690137101~exp=1690137701~hmac=098dfe43e81d1b4ccf38cff2c52bd59335b8b922ed95b45053be43ca98d05cc9",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/model-demonstrating-earrings-ring_7502-7042.jpg?w=1380&t=st=1690137101~exp=1690137701~hmac=098dfe43e81d1b4ccf38cff2c52bd59335b8b922ed95b45053be43ca98d05cc9",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/model-demonstrating-earrings-ring_7502-7042.jpg?w=1380&t=st=1690137101~exp=1690137701~hmac=098dfe43e81d1b4ccf38cff2c52bd59335b8b922ed95b45053be43ca98d05cc9",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/model-demonstrating-earrings-ring_7502-7042.jpg?w=1380&t=st=1690137101~exp=1690137701~hmac=098dfe43e81d1b4ccf38cff2c52bd59335b8b922ed95b45053be43ca98d05cc9",
  },
];
