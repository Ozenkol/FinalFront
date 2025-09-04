import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const TableContainer = ({children}: Props) => {
    return (
        <div className="relative overflow-x-auto">
            {children}
        </div>
    )
}