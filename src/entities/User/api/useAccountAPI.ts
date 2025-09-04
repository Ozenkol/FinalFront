import { useRemoteAPI } from "@/shared/api/useRemoteAPI"

const URLS = {
    LOGIN: 'http://localhost:8000/Account/Login',
    REGISTER: 'http://localhost:8000/Account/Register'
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