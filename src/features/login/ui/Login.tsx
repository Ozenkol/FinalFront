import { useAccountAPI } from "@/entities/User/api/useAccountAPI"
import { User } from "@/entities/User/model/types"
import { useAuthStore } from "@/entities/User/storage/useAuthStorage"
import { Alert } from "@/shared/ui/Alert/Alert"
import { Button } from "@/shared/ui/Button/Button"
import { Form } from "@/shared/ui/Form/Form"
import { Input } from "@/shared/ui/Input/Input"
import { Loader } from "@/shared/ui/Loader/Loader"
import Link from "next/link"
import router from "next/router"
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react"

export const Login = () => {
    const {setUser, checkAuth} = useAuthStore();


    const [usermame, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);
    
    const {loginAPI} = useAccountAPI();
    
    const onClickLogin = async (e: MouseEvent<HTMLButtonElement>) => {
        setError(false)
        setLoading(true)
        try {
            const response = await loginAPI(usermame, password); 
            if (response.ok) {
                setUser(response.json() as unknown as User)
                checkAuth();
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
            <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
            <Input placeholder="Username" type="text" label="Your username" value={usermame} setValue={setUsername}></Input>
            <Input placeholder="Password" type="text" label="Your password" value={password} setValue={setPassword}></Input>
            <Button label="Login" onClick={onClickLogin} />
            <div className="p-8">
                <p className="text-gray-700">
                    Don&apos;t have account? <Link href="/registration" className="text-blue-600 underline hover:text-blue-800">Register</Link>
                </p>
            </div>

            {isLoading && <Loader/>}
            {isError && <Alert label="Error"/>}
        </Form>

    )
}