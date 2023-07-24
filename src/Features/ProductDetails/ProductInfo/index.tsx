"use client";

import { ChangeEvent, FC, useState } from "react";
import styles from "./styles.module.scss";

export const ProductInfo: FC = () => {
  const [size, setSize] = useState<number>(16);

  const handleChangeSize = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) return;
    setSize(+e.target.value);
  };
  return (
    <div className={styles.ProductInfo}>
      <h3>Ring</h3>
      <p className={styles.Description}>
        {`LOVE bracelet, 18K yellow gold (750/1000). Comes with a 
        screwdriver .Width: 6.1 mm. Created in New...`}
      </p>
      <p className={styles.Price}>Price - 25 000 AMD</p>
      <p className={styles.VendorCode}>Vendor code - R12-55</p>
      <p className={styles.Weight}>Weight - 12.5gg</p>
      <p className={styles.Stones}>Stones - x</p>
      <p className={styles.Size}>Size - {size}</p>
      <select
        onChange={(e) => handleChangeSize(e)}
        name="size"
        id="size"
        placeholder="Select size"
        defaultValue={"select size"}
        className={styles.SizeSelect}
      >
        <option value="">Select size</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
      </select>

      <label htmlFor="comment" className={styles.Comment}>
        Add comment
        <textarea name="comment" id="comment" cols={10} rows={10}></textarea>
      </label>
      <button className={styles.BuyNow}>Buy now</button>
      <button className={styles.AddToCart}>Add to cart</button>
    </div>
  );
};
