import { Container } from "@/Components/Container";
import styles from "./page.module.scss";
import { ProductImageSlider } from "@/Features/ProductDetails/ProductImageSlider";
import { ProductInfo } from "@/Features/ProductDetails/ProductInfo";

export default function ProductDetails() {
  return (
    <Container className={styles.ProductDetails}>
      <ProductImageSlider />
      <ProductInfo />
    </Container>
  );
}
