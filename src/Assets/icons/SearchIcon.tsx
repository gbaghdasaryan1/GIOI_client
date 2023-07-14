import { FC, SVGAttributes } from "react"

type Props = SVGAttributes<SVGElement> & {
    color?: "#282828"
}

export const SearchIcon: FC<Props> = ({ color = "#282828", className }) => {

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill={'transparent'} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#282828" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.9999 18.9999L14.6499 14.6499" stroke="#282828" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}