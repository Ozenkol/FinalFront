import { FormEvent, ReactNode } from "react"

interface Props {
    children: ReactNode,
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

export const Form = ({children, onSubmit}: Props) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit) {
          onSubmit(e)
        }
      };
    
      return (
        <form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto p-4 bg-gray-200 rounded-lg shadow-lg"
        >
          {children}
        </form>
      );
    
}