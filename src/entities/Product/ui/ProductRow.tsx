import { TableRow } from "@/shared/ui/TableRow/TableRow"
import { Product } from "../model/types"
import { TableCell } from "@/shared/ui/TableCell/TableCell"

interface Props {
    product: Product
}

export const ProductRaw = ({product}: Props) => {
    return (
        <TableRow>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.description}</TableCell>
            {product.fields.map(f => <TableCell key={f.id}>{f.value}</TableCell>)}
        </TableRow>
    )
}