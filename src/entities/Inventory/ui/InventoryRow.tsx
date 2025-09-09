import { TableRow } from "@/shared/ui/TableRow/TableRow"
import { Field, Inventory } from "../model/types"
import { TableCell } from "@/shared/ui/TableCell/TableCell"
import { AddField } from "@/features/add-field/ui/AddField"
import { ReactNode } from "react"

interface Props {
    fields: Field[] | null
    children: ReactNode
}

export const InventoryRow = ({fields, children}: Props) => {
    return (
        <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            {fields ? fields.map(f => <>
                <TableCell key={f.id}>{f.title}</TableCell>
            </>) : <></>}
            {children}
        </TableRow>
    )
}