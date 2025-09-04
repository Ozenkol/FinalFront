import { ReactNode, useEffect, useRef, useState } from "react"

interface Props {
    children: ReactNode
}

export const TableRow = ({children}: Props) => {
    const ref = useRef<HTMLTableRowElement>(null)
    const [isBody, setBody] = useState<boolean>(false)
    useEffect(() => {
        if (ref.current?.parentElement?.tagName === 'tbody') {
            setBody(true)
        }
    }, [])
    const shared = isBody? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" : ""
    return (
        <tr ref={ref} className={shared}>
            {children}
        </tr>
    )
}