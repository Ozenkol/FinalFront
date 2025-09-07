import { useInventoryAPI } from "@/entities/Inventory/api/useInventoryAPI";
import { useInventoryStore } from "@/entities/Inventory/store/useInventoryStore";
import { MouseEvent } from "react";
import { MdDelete } from "react-icons/md";

interface Props {
    id: string
}

export const DeleteInventory = ({id}: Props) => {
    const {removeInventory} = useInventoryAPI()
    const {deleteInventory} = useInventoryStore()
    const onClick = () => {
        removeInventory(id);
        deleteInventory(id);
    }
    return (
        <MdDelete onClick={onClick}>

        </MdDelete>
    )
}