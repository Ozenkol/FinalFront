import { FormEvent, ReactNode } from "react"

interface Props {
    children: ReactNode,
}

export const Form = ({children}: Props) => {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={onSubmit} className="max-w-sm mx-auto p-4 bg-amber-200 rounded-2xl">
            {children}
        </form>
    )
}