import { useRemoteAPI } from "@/shared/api/useRemoteAPI";

const URLS = {
    USER_INVENTORIES: `${process.env.NEXT_PUBLIC_API_URL}/Inventory/GetUserInventoryList`,
    INVENTORY: (id: string) => `${process.env.NEXT_PUBLIC_API_URL}/Inventory/GetInventory/${id}`,
    CREATE_INVENTORY: `${process.env.NEXT_PUBLIC_API_URL}/Inventory/CreateInventory`,
    UPDATE: (inventory: Inventory)  => `${process.env.NEXT_PUBLIC_API_URL}//Inventory/GetInventory/${inventory.id}`,

    INVENTORY_FIELDS: (id: string) => `${process.env.NEXT_PUBLIC_API_URL}//Inventory/GetInventory/${id}`,
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