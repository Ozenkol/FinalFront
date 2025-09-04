import { useInventoryAPI } from "@/entities/Inventory/api/useInventoryAPI";
import { InventoryCard } from "@/entities/Inventory/ui/InventoryCard";
import { AddInventory } from "@/features/add-inventory/ui/AddInventory";
import { Alert } from "@/shared/ui/Alert/Alert";
import { Loader } from "@/shared/ui/Loader/Loader";
import { useEffect, useState } from "react";

const InventoriesPage = () => {
    const {getUserInventoryList} = useInventoryAPI()
    const [inventories, setInventories] = useState<Inventory[]>([])
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);


    useEffect(() => {
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
        fetchData().catch(console.error);;
        ;
    }, [])

    return (
        <>
            {isError && <Alert label="You can't acess to inventory list"/>}
            {!isError && <>
                    <AddInventory />
                    {isLoading && <Loader />}
                    {isError && <Alert label="You can't acess to inventory list"/>}
                    {inventories.map(i => <InventoryCard inventory={i} children={null} />)}
                </>
            }
 
        </>
    )
}

export default InventoriesPage;