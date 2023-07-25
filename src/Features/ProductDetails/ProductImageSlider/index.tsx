"use client";

import { FC, useCallback, useState } from "react";
import styles from "./styles.module.scss";
import cs from "classnames";
import Image from "next/image";
import { ThumbType, thumbsMock } from "../mock";
import { ArrowLeftIcon } from "@/Assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/Assets/icons/ArrowRightIcon";

export const ProductImageSlider: FC = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleThumbClick = (item: ThumbType, index: number) => {
    setSelected(item.id);
  };

  const hadnleNext = () => {
    if (selected === 4) return;
    setSelected(selected + 1);
  };

  const hadnlePrev = () => {
    if (selected === 0) return;
    setSelected(selected - 1);
  };

  return (
    <div className={styles.ProductImageSlider}>
      <div className={styles.CurrentImageWrapper}>
        <div className={styles.Arrows}>
          <ArrowLeftIcon className={styles.ArrowLeft} onClick={hadnlePrev} />
          <ArrowRightIcon className={styles.ArrowRight} onClick={hadnleNext} />
        </div>
        <img
          src={thumbsMock[selected].image}
          alt=""
          className={styles.CurrentImage}
        />
      </div>

      <div className={styles.Thumb}>
        {thumbsMock.map((item, index) => {
          return (
            <img
              src={item.image}
              alt=""
              key={item.id}
              className={cs(styles.ThumbItem, {
                [styles.SelectedThumb]: index === selected,
              })}
              onClick={() => {
                handleThumbClick(item, index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
