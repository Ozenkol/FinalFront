import { useAuthStore } from "@/entities/User/storage/useAuthStorage"
import { Login } from "@/features/login/ui/Login"
import { Register } from "@/features/register/ui/Register"
import { Button } from "@/shared/ui/Button/Button"
import { Card } from "@/shared/ui/Card/Card"
import { usePathname } from "next/navigation"
import router from "next/router"

const Landing = () => {
    const {user} = useAuthStore()
    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
                <nav className="py-2.5">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <a className="flex items-center">
                            <h1 className="text-xl font-semibold">ItransitionCMS</h1>
                        </a>
                    </div>
                    {user ? <>Hello {user.userName}</> : <></>}
                </nav>
            </header>      
            <main className="flex-1 flex flex-col justify-center items-center text-center p-8">
                <h2 className="text-5xl font-extrabold leading-tight mb-4">
                Manage Your Inventory Smarter
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                Track, organize, and optimize your assets with ease.
                </p>
                <Button label="Get started" onClick={() => {router.push('/inventories')}}/>
            </main>
            <footer className="bg-gray-100 text-center py-4 text-gray-600">
                © 2025 ItransitionCMS
            </footer>
        </div>
    )
}

export default Landing