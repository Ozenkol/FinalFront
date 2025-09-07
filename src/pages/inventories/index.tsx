import { useInventoryAPI } from "@/entities/Inventory/api/useInventoryAPI";
import { Inventory } from "@/entities/Inventory/model/types";
import { useInventoryStore } from "@/entities/Inventory/store/useInventoryStore";
import { InventoryCard } from "@/entities/Inventory/ui/InventoryCard";
import { useAuthStore } from "@/entities/User/storage/useAuthStorage";
import { AddInventory } from "@/features/add-inventory/ui/AddInventory";
import { DeleteInventory } from "@/features/delete-inventory/ui/DeleteInventory";
import { Alert } from "@/shared/ui/Alert/Alert";
import { Container } from "@/shared/ui/Container/Container";
import { Loader } from "@/shared/ui/Loader/Loader";
import router from "next/router";
import { useEffect, useState } from "react";

const InventoriesPage = () => {

    const {isAuthenticated, checkAuth} = useAuthStore()

    const {getUserInventoryList} = useInventoryAPI()
    const {inventories, addInventory, setInventories} = useInventoryStore()
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);


    useEffect(() => {
        if (!isAuthenticated) {
            console.log(isAuthenticated);
            router.push("/not-login")
        }

        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await getUserInventoryList();
                console.log(response.ok);
                if (!response.ok) {
                    setLoading(false)
                    setError(true);
                }
                const json = await response.json();
    
                setInventories(json);
                setLoading(false);
            } catch {
                setLoading(false)
                setError(true)
            }
          }
        fetchData().catch(console.error);
        
    }, [])

    return (
        <div className="flex mx-2 justify-center">
            <Container>
                <h1 className="text-3xl font-bold text-center">Inventories</h1>
                {isError && <Alert label="You can't acess to inventory list"/>}
                {!isError && <>
                        <AddInventory />
                        {isLoading && <Loader />}
                        {isError && <Alert label="You can't acess to inventory list"/>}
                        {inventories.map(i => <InventoryCard key={i.id} inventory={i}> 
                                <DeleteInventory id={i.id}></DeleteInventory>
                            </InventoryCard> )}
                    </>
                }
            </Container>
        </div>
    )
}

export default InventoriesPage;