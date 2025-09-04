import { Card } from "@/shared/ui/Card/Card"
import { usePathname } from "next/navigation";
import { ReactNode } from "react"

interface Props {
    inventory: Inventory,
    children: ReactNode
}

export const InventoryCard = ({inventory, children}: Props) => {
    const pathname = usePathname();
    return (
        <Card link={pathname+`/${inventory.id}`} title={inventory.title} desrciption={inventory.description}>
            {children}
        </Card>
    )
}