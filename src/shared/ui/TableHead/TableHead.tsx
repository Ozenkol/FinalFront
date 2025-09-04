import { Children, ReactNode } from "react"

interface Props {
    children?: ReactNode
}

export const TableHead = ({children}: Props) => {
    const shared = "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    return (
        <thead className={shared}>
            {children}
        </thead>
    )
}