import { FC } from "react"
import styles from './styles.module.scss';
import { UserIcon } from "@/Assets/icons/UserIcon";
import { Container } from "../Container";
import { BagIcon } from "@/Assets/icons/BagIcon";
import { HeartIcon } from "@/Assets/icons/HeartIcon";
import { Navigation } from "../Navigation";
import { Search } from "../Search";

export const Header: FC = () => {

    return (
        <header className={styles.Header}>
            <Container className={styles.HeaderContainer}> 
               
               <Search/>

                <Navigation/>

                <div className={styles.UserActions}>
                    <UserIcon />
                    <BagIcon/>
                    <HeartIcon/>
                </div>
            </Container>
        </header>
    )
}