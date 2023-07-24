"use client";

import { FC, useState } from "react";
import styles from "./styles.module.scss";
import cs from "classnames";
import Image from "next/image";
import { ThumbType, thumbsMock } from "../mock";
import { ArrowLeftIcon } from "@/Assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/Assets/icons/ArrowRightIcon";

export const ProductImageSlider: FC = () => {
  const [currentImage, setCurrentImage] = useState(thumbsMock[0].image);
  const [selected, setSelected] = useState<number>(1);

  const handleThumbClick = (item: ThumbType) => {
    setCurrentImage(thumbsMock[item.id].image);
    setSelected(item.id);
  };

  const hadnleNext = () => {
    if (selected < thumbsMock.length) {
      setCurrentImage(thumbsMock[selected]?.image);
      setSelected(() => {
        return selected + 1;
      });
    }
  };

  const hadnlePrev = () => {
    setSelected(() => {
      return selected - 1;
    });
    setCurrentImage(thumbsMock[selected]?.image);
  };

  console.log(currentImage);
  console.log(selected);

  return (
    <div className={styles.ProductImageSlider}>
      <div className={styles.CurrentImageWrapper}>
        <div className={styles.Arrows}>
          <ArrowLeftIcon className={styles.ArrowLeft} onClick={hadnlePrev} />
          <ArrowRightIcon className={styles.ArrowRight} onClick={hadnleNext} />
        </div>
        <img src={currentImage} alt="" className={styles.CurrentImage} />
      </div>

      <div className={styles.Thumb}>
        {thumbsMock.map((item) => {
          return (
            <img
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
