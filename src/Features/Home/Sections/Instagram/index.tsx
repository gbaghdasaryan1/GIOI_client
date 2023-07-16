import { CSSProperties, FC } from "react";
import styles from "./styles.module.scss";
import { Container } from "@/Components/Container";
import { InstagramIcon } from "@/Assets/icons/InstagramIcon";
import ProductImg from "../../../../Assets/product/product3.jpeg";

export const Instagram: FC = () => {
  const inline: CSSProperties = {
    backgroundImage: `url(${ProductImg.src})`,
  };
  return (
    <Container className={styles.Instagram}>
      <h2>Instagram</h2>

      <div className={styles.Items}>
        <div className={styles.Item} style={inline}>
          <InstagramIcon className={styles.InstaIcon} color="#ffff" />
        </div>
        <div className={styles.Item} style={inline}>
          <InstagramIcon className={styles.InstaIcon} color="#ffff" />
        </div>
        <div className={styles.Item} style={inline}>
          <InstagramIcon className={styles.InstaIcon} color="#ffff" />
        </div>
        <div className={styles.Item} style={inline}>
          <InstagramIcon className={styles.InstaIcon} color="#ffff" />
        </div>
        <div className={styles.Item} style={inline}>
          <InstagramIcon className={styles.InstaIcon} color="#ffff" />
        </div>
        <div className={styles.Item} style={inline}>
          <InstagramIcon className={styles.InstaIcon} color="#ffff" />
        </div>
      </div>
    </Container>
  );
};
