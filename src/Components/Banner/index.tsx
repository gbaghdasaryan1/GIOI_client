import { FC } from "react";
import styles from "./styles.module.scss";
import Banner1 from "@/Assets/banners/banner3.jpg";
import Image from "next/image";
import { Container } from "../Container";

export const Banner: FC = () => {
  return (
    <div className={styles.Banner}>
      <Image src={Banner1} alt="" className={styles.BannerImg} />
    </div>
  );
};
