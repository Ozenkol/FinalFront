import { useRemoteAPI } from "@/shared/api/useRemoteAPI";

const URLS = {
    USER_INVENTORIES: `${process.env.NEXT_PUBLIC_API_URL}/api/inventories`,
    INVENTORY: (id: string) => `${process.env.NEXT_PUBLIC_API_URL}/api/inventories/${id}`,
    CREATE_INVENTORY: `${process.env.NEXT_PUBLIC_API_URL}/api/inventories`,
    UPDATE: (id: string)  => `${process.env.NEXT_PUBLIC_API_URL}}/api/inventories/${id}`,

    ADD_FIELD: (id: string) => `${process.env.NEXT_PUBLIC_API_URL}}/api/inventories/${id}/fields`,
}

export const useInventoryAPI = () => {
    const {get, remove, post} = useRemoteAPI();
    const getUserInventoryList = async () => {
        return get(URLS.USER_INVENTORIES)
    }
    const getInventory = (id: string) => {
        return get(URLS.INVENTORY(id))
    }
    const createInventory = (title: string) => {
        return post(URLS.CREATE_INVENTORY, {"title": title})
    }
    const removeInventory = (id: string) => {
        return remove(URLS.INVENTORY(id));
    }
    return {
        getUserInventoryList,
        getInventory,
        createInventory,
        removeInventory
    }
}