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
    type?: "button" | "submit" | "reset",
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}


export const Button = ({variant, size, type="button", label, onClick}: Props) => {
    const shared = "mx-auto mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    const primary = "bg-blue-300 p-2"

    return (
            <button type={type} onClick={onClick} className={shared}>
                {label}
            </button>
    )
}

