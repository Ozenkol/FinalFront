import { useRemoteAPI } from "@/shared/api/useRemoteAPI"

const URLS = {
    LOGIN: `${process.env.NEXT_PUBLIC_API_URL}/Account/Login`,
    REGISTER: `${process.env.NEXT_PUBLIC_API_URL}/Account/Register`
}

export const useAccountAPI = () => {
    const {post} = useRemoteAPI();
    const loginAPI = (userName: string, password: string) => {
        return post(URLS.LOGIN, {"userName": userName, "password": password})
    }
    const registerAPI = (userName: string, email: string, password: string) => {
        return post(URLS.REGISTER, {"userName": userName, "email": email, "password": password})

    }
    return {loginAPI, registerAPI}
}