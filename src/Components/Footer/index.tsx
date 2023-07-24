import { FC } from "react";
import styles from "./styles.module.scss";
import { Container } from "../Container";

export const Footer: FC = () => {
  return (
    <footer className={styles.Footer}>
      <Container className={styles.FooterContainer}>
        <ul>
          <a href="#">Sipping</a>
          <a href="#">Returns</a>
          <a href="#">Ring size guide</a>
          <a href="#">Necklace size guide</a>
          <a href="#">Jewellery Care</a>
          <a href="#">Contact us</a>
          <a href="#">Careers</a>
          <a href="#">Gift Cards</a>
          <a href="#">Privacy</a>
        </ul>

        <p>© 2023 SILVERSHOP</p>
      </Container>
    </footer>
  );
};
