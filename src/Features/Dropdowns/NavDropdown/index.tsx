"use client"

import { DetailsHTMLAttributes, FC, HTMLAttributes } from "react"
import styles from './styles.module.scss';
import cs from 'classnames';
import { NavigationItem } from "./mock";
import Link from "next/link";

type Props = DetailsHTMLAttributes<HTMLAttributes<HTMLDivElement>> & {
    data: NavigationItem[]
}

export const NavDropdown: FC<Props> = ({ data, className }) => {

    return (
        <div className={cs(styles.NavDropdown, className)}>

            {
                data.map(({ id, path, title }) => {
                    return (
                        <span  key={id}>{title}</span>
                    )
                })
            }
        </div>
    )
}