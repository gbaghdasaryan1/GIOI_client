import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Ring5 from "@/Assets/product/ring5.png";

type Props = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  discount: number;
  isNew: boolean;
  bestSeller: boolean;
  quantity: number;
};

export const ProductCard: FC<Props> = ({
  price = 25000,
  title = "Product title",
  discount = 10,
}) => {
  return (
    <div className={styles.ProductCard}>
      <Image src={Ring5} alt="Ring" className={styles.ProductCardImage} />

      <p className={styles.ProductCardTitle}>{title}</p>

      <div className={styles.ProductCardPrices}>
        <span className={styles.Price}>{price} AMD</span>
        <span className={styles.Discoounted}>
          {price - (price * discount) / 100} AMD
        </span>
      </div>
    </div>
  );
};
