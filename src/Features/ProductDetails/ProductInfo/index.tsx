import { FC } from "react";
import styles from "./styles.module.scss";

export const ProductInfo: FC = () => {
  return (
    <div className={styles.ProductInfo}>
      <h3>Ring</h3>
      <p className={styles.Price}>Price - 25 000 AMD</p>
      <p className={styles.VendorCode}>Vendor code - R12-55</p>
      <p className={styles.Weight}>Weight - 12.5gg</p>
      <p className={styles.Size}>Size - 17</p>
      <p className={styles.Stones}>Stones - x</p>

      <button className={styles.BuyNow}>Buy now</button>
    </div>
  );
};
