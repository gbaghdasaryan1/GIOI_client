import { FC } from "react";
import styles from './styles.module.scss';


export const Search: FC = () => {

    return(
        <div className={styles.Search}>
        <input type="text" placeholder="search..."/>
    </div>
    )
}