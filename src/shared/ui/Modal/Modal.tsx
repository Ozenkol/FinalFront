import { ReactNode, useState } from "react"
import { Button } from "../Button/Button"

interface Props {
    children: ReactNode
}

export const Modal = ({children}: Props) => {
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
        <>
            <Button label="Open modal" onClick={() => setOpen(!isOpen)}/>
            {isOpen && 
            <div className="fixed inset-0 backdrop-blur-2xl">
                <div className="inset-2">
                    {children}
                </div> 
            </div>}
            
        </>
    )
}