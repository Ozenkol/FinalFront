import { ReactNode } from "react"

interface Props {
    link: string,
    title: string,
    desrciption: string
    children?: ReactNode
}


export const Card = ({link, title, desrciption, children}: Props) => {
    const shared = ""
    return (
        

        <div className="max-w-sm mx-auto mb-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <a href={link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desrciption}</p>
                {children}
            </div>
        </div>

    )
}