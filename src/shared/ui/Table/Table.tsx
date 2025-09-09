import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

export const Table = ({children}: Props) => {
    return (
      <table className="table-auto overflow-scroll mb-5 w-full text-sm text-left rtl:text-right text-gray-500 border-gray-400">
        {children}
      </table>

    )
}