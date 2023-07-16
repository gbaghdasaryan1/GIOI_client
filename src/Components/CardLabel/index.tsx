import { FC } from "react";
import cs from "classnames";
import styles from "./styles.module.scss";

type Props = {
  value: string;
  type: "new" | "discount";
};

export const CardLabel: FC<Props> = ({ value, type }) => {
  return (
    <span
      className={cs(styles.CardLabel, {
        [styles.New]: type === "new",
        [styles.Discount]: type === "discount",
      })}
    >
      {value}
    </span>
  );
};
