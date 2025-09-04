interface Props {
    label: string
}

export const Alert = ({label}: Props) => {
    const shared = "max-w-sm mx-auto p-4 bg-red-100"
    return (
        <div className={shared}>
            {label}
        </div>
    )
}