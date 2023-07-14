import { FC } from "react";
import styles from './styles.module.scss';
import Link from "next/link";
import { ArrowDownIcon } from "@/Assets/icons/ArrowDownIcon";
import { NavDropdown } from "@/Features/Dropdowns/NavDropdown";
import { navigationShopMock, navigationSizingMock } from "@/Features/Dropdowns/NavDropdown/mock";

export const Navigation: FC = () => {

    return (
        <nav className={styles.Navigation}>
            <Link href="#" >
                Shop <ArrowDownIcon className={styles.ArrowDownIcon}/>

            <NavDropdown className={styles.Dropdown} data={navigationShopMock}/>

            </Link>
            <Link href="#" >Birthstone Jewelry</Link>
            <Link href="#" >
                Sizeing <ArrowDownIcon className={styles.ArrowDownIcon}/>

                <NavDropdown className={styles.Dropdown} data={navigationSizingMock}/>
            </Link>
            <Link href="#" >About</Link>


        </nav>
    )
}