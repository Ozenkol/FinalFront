import { Card } from "@/shared/ui/Card/Card"
import { ReactNode } from "react"

interface Props {
    inventory: Inventory,
    children: ReactNode
}

export const InventoryCard = ({inventory, children}: Props) => {
    return (
        <Card title={inventory.title} desrciption={inventory.description}>
            {children}
        </Card>
    )
}