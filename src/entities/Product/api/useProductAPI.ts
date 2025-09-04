import { useRemoteAPI } from "@/shared/api/useRemoteAPI"

const URLS = {
    PRODUCTS: 'api/products'
}

export const useProductAPI = () => {
    const {get, post, remove} = useRemoteAPI();

    const getProducts = <T>() => get(URLS.PRODUCTS)
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