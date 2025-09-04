import { useRef } from "react";

interface Props {
    data: string
}

export const TableCell = ({data}: Props) => {
    const childRef = useRef<HTMLDivElement | null>(null);
    const shared = "px-6 py-3"
    return (
        <td className={shared}>{data}</td>
    )
    
}