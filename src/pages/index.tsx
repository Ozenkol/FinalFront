import { Login } from "@/features/login/ui/Login"
import { Register } from "@/features/register/ui/Register"
import { Button } from "@/shared/ui/Button/Button"
import { Card } from "@/shared/ui/Card/Card"

const Landing = () => {
    return (
        <>
            <Login />
            <Register />
        </>
    )
}

export default Landing