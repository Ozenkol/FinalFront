import { MouseEvent } from "react";

interface ButtonVariant {
    PRIMARY: 'primary'
}

interface ButtonSize {
    MEDIUM: 'medium'
}

interface Props {
    variant?: ButtonVariant,
    size?: ButtonSize,
    label: string,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}


export const Button = ({variant, size, label, onClick}: Props) => {
    const shared = "m-2"
    const primary = "bg-blue-300 p-2"

    return (
        <div className={shared}>
            <button onClick={onClick} className={primary}>
                {label}
            </button>
        </div>
    )
}

