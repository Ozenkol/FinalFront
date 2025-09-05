import { useRouter } from "next/router";
import { useEffect } from "react";

const SuccessPage = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
        router.push("/"); // Redirect to homepage
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

  
    return (
        <div className="flex h-screen items-center justify-center bg-green-50">
            <div className="rounded-2xl bg-white p-8 shadow-lg text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-4">Success 🎉</h1>
                <p className="text-gray-600">
                    Your action was completed. You’ll be redirected to the homepage in{" "}
                    <span className="font-semibold">5 seconds</span>.
                </p>
            </div>
      </div>  
    )
}

export default SuccessPage;