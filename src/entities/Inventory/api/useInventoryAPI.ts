import { useRemoteAPI } from "@/shared/api/useRemoteAPI";

const URLS = {
    USER_INVENTORIES: 'http://localhost:8000/Inventory/GetUserInventoryList',
    INVENTORY: (id: string) => `http://localhost:8000/Inventory/GetInventory/${id}`,
    CREATE_INVENTORY: "http://localhost:8000/Inventory/CreateInventory",
    UPDATE: (inventory: Inventory)  => `http://localhost:8000/Inventory/GetInventory/${inventory.id}`
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
    return {
        getUserInventoryList,
        getInventory,
        createInventory
    }
}