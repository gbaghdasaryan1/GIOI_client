import { FC } from "react";
import styles from "./styles.module.scss";
import { Container } from "@/Components/Container";
import Link from "next/link";
import { ProductCard } from "@/Components/ProductCard";

type Props = {
  title: string;
  data: string[];
};

export const ProductsSection: FC<Props> = ({ title, data }) => {
  return (
    <Container className={styles.ProductsSection}>
      <h2>{title}</h2>

      <div className={styles.Products}>
        {data.map((item, index) => {
          return <ProductCard key={item} />;
        })}
      </div>
      <Link href={"#"}>View all</Link>
    </Container>
  );
};
