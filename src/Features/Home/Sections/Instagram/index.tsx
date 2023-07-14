import { FC } from "react";
import styles from "./styles.module.scss";
import { Container } from "@/Components/Container";

export const Instagram: FC = () => {

    return (
        <Container className={styles.Instagram}>
            <h2>Instagram</h2>

            <div className={styles.Items}>
                <div className={styles.Item}>INS</div>
                <div className={styles.Item}>INS</div>
                <div className={styles.Item}>INS</div>
                <div className={styles.Item}>INS</div>
                <div className={styles.Item}>INS</div>
                <div className={styles.Item}>INS</div>
            </div>
        </Container>
    )
}