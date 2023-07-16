import { FC } from "react";
import styles from "./styles.module.scss";
import { Container } from "@/Components/Container";
import { categoriesMock } from "./mock";

export const Categories: FC = () => {
  return (
    <Container className={styles.Categories}>
      <h2>Categories</h2>

      <div className={styles.Items}>
        {categoriesMock.map((item) => {
          return (
            <div
              className={styles.CategoryItem}
              style={{
                backgroundImage: `url(https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tt1-circle-pendant-69781926_1030892_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp)`,
              }}
              key={item.id}
            >
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
