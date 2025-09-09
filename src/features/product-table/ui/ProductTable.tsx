import { useInventoryAPI } from "@/entities/Inventory/api/useInventoryAPI";
import { useInventoryStore } from "@/entities/Inventory/store/useInventoryStore";
import { InventoryRow } from "@/entities/Inventory/ui/InventoryRow";
import { useProductAPI } from "@/entities/Product/api/useProductAPI"
import { Product } from "@/entities/Product/model/types";
import { ProductRaw } from "@/entities/Product/ui/ProductRow";
import { useAccountAPI } from "@/entities/User/api/useAccountAPI";
import { useAuthStore } from "@/entities/User/storage/useAuthStorage";
import { AddField } from "@/features/add-field/ui/AddField";
import { Alert } from "@/shared/ui/Alert/Alert";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Table } from "@/shared/ui/Table/Table";
import { TableBody } from "@/shared/ui/TableBody/TableBody";
import { TableCell } from "@/shared/ui/TableCell/TableCell";
import { TableHead } from "@/shared/ui/TableHead/TableHead";
import { TableRow } from "@/shared/ui/TableRow/TableRow";
import { IoIosAddCircleOutline } from "react-icons/io"
import router, {  } from "next/router";
import { useEffect, useState } from "react";
import { TableContainer } from "@/shared/ui/TableContainer/TableContainer";

interface Props {
    id: string
}

export const ProductTable = ({id}: Props) => {
    const {getInventory} =useInventoryAPI();
    const {inventory, fields, setInventory, setFields} =useInventoryStore();

    const {getInventoryProducts} = useProductAPI()
    const {isAuthenticated} = useAuthStore()

    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const [products, setProducts] = useState<Product[]>([])

    const [isOpen, setOpen] = useState<boolean>(false)


    useEffect(() => {

        const fetchProducts = async () => {
            setLoading(true)
            try {
                const productsResponse = await getInventoryProducts(id);
                if (!productsResponse.ok) {
                    setLoading(false)
                    setError(true);
                }
                const json = await productsResponse.json();

                console.log(json)

                setProducts(json);
                setLoading(false);
            } catch {
                setLoading(false)
                setError(true)
            }
          }

        const fetchInventory = async () => {
            setLoading(true)
            try {
                const inventoryResponse = await getInventory(id);
                if (!inventoryResponse.ok) {
                    setLoading(false)
                    setError(true);
                }
                const json = await inventoryResponse.json();

                console.log(json)

                setInventory(json);
                setFields(json.fields);
                setLoading(false);
            } catch {
                setLoading(false)
                setError(true)
            }
          }

        fetchProducts().catch(console.error)
          fetchInventory().catch(console.error)
    }, [])
    return (
        <>
            <AddField id={id} isOpen={isOpen} setOpen={setOpen}></AddField>
            {isError && <Alert label="You can't acess to inventory list"/>}
                {!isError && <>
                        {/* <Add /> */}
                        {isLoading && <Loader />}
                        {isError && <Alert label="You can't acess to inventory list"/>}
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <InventoryRow fields={fields}>
                                        <TableCell>
                                            <IoIosAddCircleOutline size={25} onClick={() => setOpen(true)}></IoIosAddCircleOutline>
                                        </TableCell>
                                    </InventoryRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        products.map(p => 
                                            <ProductRaw key={p.id} product={p} />
                                        )
                                    }
                                    <TableRow>
                                        <TableCell><IoIosAddCircleOutline size={25}/></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        
                    </>
                }
        </>
    )
}