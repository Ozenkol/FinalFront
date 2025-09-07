interface Props {
    label: string
}

export const Alert = ({label}: Props) => {
    const shared = "max-w-sm mx-auto p-4 mb-2 bg-red-100 rounded-lg shadow-lg"
    return (
        <div className={shared}>
            {label}
        </div>
    )
}