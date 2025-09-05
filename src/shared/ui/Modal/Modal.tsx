import { ReactNode, useState } from "react"
import { Button } from "../Button/Button"

interface Props {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void
    children: ReactNode
}

export const Modal = ({children, isOpen, setOpen}: Props) => {
    return (
        <>
            {isOpen && 
            <div className="fixed inset-0 backdrop-blur-2xl">
                <div className="inset-2">
                    {children}
                </div> 
            </div>}
            
        </>
    )
}