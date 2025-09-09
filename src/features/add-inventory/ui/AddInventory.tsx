import { useInventoryAPI } from "@/entities/Inventory/api/useInventoryAPI";
import { Inventory } from "@/entities/Inventory/model/types";
import { useInventoryStore } from "@/entities/Inventory/store/useInventoryStore";
import { Button } from "@/shared/ui/Button/Button";
import { Form } from "@/shared/ui/Form/Form";
import { Input } from "@/shared/ui/Input/Input";
import { Modal } from "@/shared/ui/Modal/Modal";
import { ChangeEvent, FormEvent, useState } from "react"
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdCancel } from "react-icons/md";


export const AddInventory = () => {
    const {createInventory} = useInventoryAPI();
    const {addInventory} = useInventoryStore()
    const [title, setTitle] = useState<string>('')
    const [isOpen, setOpen] = useState<boolean>(false);

    const onClick = async (e: FormEvent) => {
        const fetchData = async () => {
            try {
                const createdInventory = await createInventory(title);
                if (!createdInventory.ok) {

                }
                const json = await createdInventory.json();
    
                addInventory(json);
            } catch {
                
            }
          }
        setOpen(false)
        setTitle('')
        fetchData()
    }
    return (
        <>
            <IoIosAddCircleOutline size={25} onClick={() => setOpen(!isOpen)} />
            <Modal isOpen={isOpen} setOpen={setOpen}>
                <Form>
                    <MdCancel size={25} className="ml-auto" onClick={() => setOpen(false)}></MdCancel>
                    <Input label="Inventory title" value={title} setValue={setTitle}  />
                    <Button onClick={onClick} label="Add" />
                </Form>
            </Modal>
        </>
    )
}