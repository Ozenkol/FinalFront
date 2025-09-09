import { useRemoteAPI } from "@/shared/api/useRemoteAPI"

const URLS = {
    USER: `${process.env.NEXT_PUBLIC_API_URL}/api/account/user`,
    LOGIN: `${process.env.NEXT_PUBLIC_API_URL}/api/account/login`,
    REGISTER: `${process.env.NEXT_PUBLIC_API_URL}/api/account/registration`
}

export const useAccountAPI = () => {
    const {get, post} = useRemoteAPI();
    const loginAPI = (userName: string, password: string) => {
        return post(URLS.LOGIN, {"userName": userName, "password": password})
    }
    const registerAPI = (userName: string, email: string, password: string) => {
        return post(URLS.REGISTER, {"userName": userName, "email": email, "password": password})
    }
    const getUser = () => {
        return get(URLS.USER);
    }
    return {loginAPI, registerAPI, getUser}
}