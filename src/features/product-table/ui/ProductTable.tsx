import { useProductAPI } from "@/entities/Product/api/useProductAPI"
import { Product } from "@/entities/Product/model/types";
import { ProductRaw } from "@/entities/Product/ui/ProductRow";
import { useAccountAPI } from "@/entities/User/api/useAccountAPI";
import { useAuthStore } from "@/entities/User/storage/useAuthStorage";
import { Alert } from "@/shared/ui/Alert/Alert";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Table } from "@/shared/ui/Table/Table";
import { TableBody } from "@/shared/ui/TableBody/TableBody";
import { TableCell } from "@/shared/ui/TableCell/TableCell";
import { TableHead } from "@/shared/ui/TableHead/TableHead";
import { TableRow } from "@/shared/ui/TableRow/TableRow";
import router, {  } from "next/router";
import { useEffect, useState } from "react";

interface Props {
    id: string
}

export const ProductTable = ({id}: Props) => {
    const {getInventoryProducts} = useProductAPI()
    const {isAuthenticated} = useAuthStore()

    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const [products, setProducts] = useState<Product[]>([])


    useEffect(() => {
        if (!isAuthenticated) {
            console.log(isAuthenticated);
            router.push("/not-login")
        }

        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await getInventoryProducts(id);
                console.log(response.ok);
                if (!response.ok) {
                    setLoading(false)
                    setError(true);
                }
                const json = await response.json();

                console.log(json)
    
                setProducts(json);
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
                        {/* <Add /> */}
                        {isLoading && <Loader />}
                        {isError && <Alert label="You can't acess to inventory list"/>}

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                    {products[0] && products[0].fields.map(f => <TableCell>{f.name}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    products.map(p => 
                                        <ProductRaw product={p} />
                                    )
                                }
                            </TableBody>
                        </Table>
                    </>
                }
        </>
    )
}