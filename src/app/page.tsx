import { Banner } from "@/Components/Banner";
import styles from "./page.module.scss";
import { Categories } from "@/Features/Home/Sections/Categories";
import { ProductsSection } from "@/Features/Home/Sections/Products";
import { Instagram } from "@/Features/Home/Sections/Instagram";
import { ART } from "@/Features/Home/Sections/ART";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Categories />

      <ProductsSection
        title="Best sellers"
        data={[
          "Product title",
          "Product title",
          "Product title",
          "Product title",
          "Product title",
          "Product title",
          "Product title",
        ]}
      />
      <ProductsSection
        title="New products"
        data={[
          "Product title",
          "Product title",
          "Product title",
          "Product title",
          "Product title",
          "Product title",
          "Product title",
        ]}
      />
      <ART />
      <Instagram />
    </main>
  );
}
