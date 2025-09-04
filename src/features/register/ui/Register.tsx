import { useAccountAPI } from "@/entities/User/api/useAccountAPI"
import { Button } from "@/shared/ui/Button/Button"
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react"

export const Register = () => {
    const [usermame, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(false);
    const {registerAPI} = useAccountAPI();
    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("Username changed")
        setUsername(e.target.value);
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("Password changed")
        setPassword(e.target.value);
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("Email changed")
        setEmail(e.target.value);
    }
    const onSubmitForm = (e: FormEvent) => {
        e.preventDefault()
    }
    const onClickLogin = async (e: MouseEvent<HTMLButtonElement>) => {
        setLoading(true)
        const response = await registerAPI(usermame, email, password);
        if(response) {
            setLoading(false)
        }
    }
    return (
        <form className="flex flex-col border-2 p-2" onSubmit={onSubmitForm}>
                <input className="border-2 m-2" placeholder="Username" type="text" value={usermame} onChange={onChangeUsername}/>
                <input className="border-2 m-2" placeholder="Email" type="text" value={email} onChange={onChangeEmail}/>
                <input className="border-2 m-2" placeholder="Password" type="password" value={password} onChange={onChangePassword} />
                <Button label="Register" onClick={onClickLogin} />
                {isLoading && <>Loading...</>}
        </form>
    )
}