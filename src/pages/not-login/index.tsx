import { useRouter } from "next/router";
import { useEffect } from "react";

const NotLoginPage = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
        router.push("/login"); // Redirect to homepage
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

  
    return (
        <div className="flex h-screen items-center justify-center bg-red-50">
            <div className="rounded-2xl bg-white-300 p-8 shadow-lg text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Not authenticated</h1>
                <p className="text-gray-600">
                    You aren't logged in. Redirecting to login page{" "}
                    <span className="font-semibold">5 seconds</span>.
                </p>
            </div>
      </div>  
    )
}

export default NotLoginPage;