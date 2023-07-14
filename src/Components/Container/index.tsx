import { DetailsHTMLAttributes, FC, HtmlHTMLAttributes, ReactNode } from "react";
import styles from './styles.module.scss';
import cs from 'classnames';

type Props = DetailsHTMLAttributes<HtmlHTMLAttributes<HTMLDivElement>> & {
    children: ReactNode
}

export const Container: FC<Props> = ({children, className}) => {

    return(
        <div className={cs(styles.Container,className)}>
            {children}
        </div>
    )
}