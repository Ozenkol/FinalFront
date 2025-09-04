import { useRef } from "react";

interface Props {
    data: string
}

export const TableCell = ({data}: Props) => {
    const childRef = useRef<HTMLDivElement | null>(null);

    return (
        <td>{data}</td>
    )
    
}