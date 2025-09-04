import { useRemoteAPI } from "@/shared/api/useRemoteAPI";

const URLS = {
    INVENTORIES: 'https://final-mq82.onrender.com/Account/Login',
    INVENORY: 'https://final-mq82.onrender.com/Account/Register'
}

export const useInventoryAPI = () => {
    const {get, remove, post} = useRemoteAPI();
    const getInventoryList = () => {
        return 
    }
}