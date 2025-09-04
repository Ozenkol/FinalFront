import { ChangeEvent } from "react"

interface Props {
    placeholder?: string,
    label?: string,
    type?: string,
    value: string,
    setValue: (value: string) => void,

}

export const Input = ({placeholder='', label, type = 'text', value, setValue}: Props) => {

    const input_shared = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    const label_shared = "block mb-2 text-sm font-medium text-gray-900 dark:text-white"

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
    <div className="mb-5">
        {label && <label htmlFor="password" className={label_shared}>{label}</label>}
        <input className={input_shared} placeholder={placeholder} type={type} value={value} onChange={onChange}/>
    </div>
    
    )
}