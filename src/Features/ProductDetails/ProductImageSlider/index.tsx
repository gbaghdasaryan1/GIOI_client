"use client";

import { FC, useState } from "react";
import styles from "./styles.module.scss";
import cs from "classnames";
import Image from "next/image";
import { ThumbType, thumbsMock } from "../mock";

export const ProductImageSlider: FC = () => {
  const [currentImage, setCurrentImage] = useState(thumbsMock[0].image);
  const [selected, setSelected] = useState(1);

  const handleThumbClick = (item: ThumbType) => {
    setCurrentImage(thumbsMock[item.id - 1].image);
    setSelected(item.id);
  };
  return (
    <div className={styles.ProductImageSlider}>
      <Image src={currentImage} alt="" className={styles.CurrentImage} />

      <div className={styles.Thumb}>
        {thumbsMock.map((item) => {
          return (
            <Image
              src={item.image}
              alt=""
              key={item.id}
              className={cs(styles.ThumbItem, {
                [styles.SelectedThumb]: item.id === selected,
              })}
              onClick={() => {
                handleThumbClick(item);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
