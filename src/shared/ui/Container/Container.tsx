import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

export const Container = ({children}: Props) => {
    return (
        <div className="max-w-4xl mx-auto px-4 mb-2 sm:px-6 lg:px-8 rounded-lg shadow-lg">
            {children}
        </div>
  
    )
}