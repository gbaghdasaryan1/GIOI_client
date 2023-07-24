import { CSSProperties, FC } from "react";
import { Container } from "@/Components/Container";
import styles from "./styles.module.scss";
import { images } from "./constants";

export const ART: FC = () => {
  const inline: CSSProperties = {
    backgroundImage: `url(${images.model1})`,
  };

  return (
    <Container className={styles.ART}>
      <h2>Art of beauty</h2>

      <div className={styles.gallery}>
        <div className={styles.ShortImgs}>
          <img src={images.model1} alt="" />
          <img src={images.model1} alt="" />
        </div>

        <div className={styles.LongImg} style={inline}></div>
      </div>
    </Container>
  );
};
