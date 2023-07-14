import { FC, SVGAttributes } from "react"

type Props = SVGAttributes<SVGElement> & {
    color?: string
}

export const ArrowDownIcon: FC<Props> = ({ color = '#282828', className }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 -960 960 960" fill={color} className={className}>
            <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
        </svg>
    )
}