import { ReactNode, useRef } from "react";

interface Props {
    id?: string,
    children: ReactNode
}

export const TableCell = ({id, children}: Props) => {
    const childRef = useRef<HTMLDivElement | null>(null);
    const shared = "px-6 py-3"
    return (
        <td className={shared}>{children}</td>
    )
    
}