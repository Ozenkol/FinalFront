import { useRemoteAPI } from "@/shared/api/useRemoteAPI"

const URLS = {
    INVENTORY_PRODUCT_LIST: (id: string) => `${process.env.NEXT_PUBLIC_API_URL}/api/inventories/${id}/products`,
    CREATE_PRODUCT: `${process.env.NEXT_PUBLIC_API_URL}/api/inventories/{inventoryId}/products`,

}

export const useProductAPI = () => {
    const {get, post, remove} = useRemoteAPI();

    const getInventoryProducts = (id: string) => {
        return get(URLS.INVENTORY_PRODUCT_LIST(id))
    } 

    return {getInventoryProducts}
}