import { useAccountAPI } from "@/entities/User/api/useAccountAPI"
import { Alert } from "@/shared/ui/Alert/Alert"
import { Button } from "@/shared/ui/Button/Button"
import { Form } from "@/shared/ui/Form/Form"
import { Input } from "@/shared/ui/Input/Input"
import { Loader } from "@/shared/ui/Loader/Loader"
import router from "next/router"
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react"

export const Register = () => {
    const [usermame, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const {registerAPI} = useAccountAPI();

    const onClickLogin = async (e: MouseEvent<HTMLButtonElement>) => {
        setError(false)
        setLoading(true)
        try {
            const response = await registerAPI(usermame, email, password); 
            if (response.ok) {
                router.push('/success')
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
            <h2 className="text-3xl font-bold text-center mb-2">Registration</h2>
            <Input placeholder="Username" type="text" label="Your username" value={usermame} setValue={setUsername}></Input>
            <Input placeholder="Email" type="text" label="Your email" value={email} setValue={setEmail}></Input>
            <Input placeholder="Password" type="text" label="Your password" value={password} setValue={setPassword}></Input>
            <Button label="Register" onClick={onClickLogin} />
            {isLoading && <Loader/>}
            {isError && <Alert label="Error"/>}
        </Form>

    )
}