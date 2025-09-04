import { useRemoteAPI } from "@/shared/api/useRemoteAPI"

const URLS = {
    INVENTORY_PRODUCT_LIST: (id: string) => `${process.env.NEXT_PUBLIC_API_URL}//Inventory/CreateInventory`
}

export const useProductAPI = () => {
    const {get, post, remove} = useRemoteAPI();

    const getProducts = <T>(id: string) => get(URLS.INVENTORY_PRODUCT_LIST(id))
    .then(
        res => {
            if (!res.ok) {
                throw new Error("Error");
            } 
            return res.json() as T;
        }
    )
    .catch((e) => {
        throw e;
    })

    return {getProducts}
}