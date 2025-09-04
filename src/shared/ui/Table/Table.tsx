import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

export const Table = ({children}: Props) => {
    return (
      <table className="border-collapse border border-gray-400">
        {children}
      </table>

    )
}