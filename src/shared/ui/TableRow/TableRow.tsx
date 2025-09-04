import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const TableRow = ({children}: Props) => {
    const shared = "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
    return (
        <tr className={shared}>
            {children}
        </tr>
    )
}