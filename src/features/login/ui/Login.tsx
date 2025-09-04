import { useAccountAPI } from "@/entities/User/api/useAccountAPI"
import { Alert } from "@/shared/ui/Alert/Alert"
import { Button } from "@/shared/ui/Button/Button"
import { Form } from "@/shared/ui/Form/Form"
import { Input } from "@/shared/ui/Input/Input"
import { Loader } from "@/shared/ui/Loader/Loader"
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react"

export const Login = () => {
    const [usermame, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);
    
    const {loginAPI} = useAccountAPI();
    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("Username changed")
        setUsername(e.target.value);
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("Password changed")
        setPassword(e.target.value);
    }
    const onClickLogin = async (e: MouseEvent<HTMLButtonElement>) => {
        setError(false)
        setLoading(true)
        try {
            const response = await loginAPI(usermame, password); 
            if (response.ok) {
            }
            else {
                setError(true);
            }
            setLoading(false);
        } catch {
            setLoading(false);
            setError(true)
        }

    }
    return (
        <Form>
            <Input placeholder="Username" type="text" label="Your username" value={usermame} setValue={setUsername}></Input>
            <Input placeholder="Password" type="text" label="Your password" value={password} setValue={setPassword}></Input>
            <Button label="Login" onClick={onClickLogin} />
            {isLoading && <Loader/>}
            {isError && <Alert label="Error"/>}
        </Form>

    )
}