import { useInventoryAPI } from "@/entities/Inventory/api/useInventoryAPI";
import { Button } from "@/shared/ui/Button/Button";
import { Form } from "@/shared/ui/Form/Form";
import { Input } from "@/shared/ui/Input/Input";
import { Modal } from "@/shared/ui/Modal/Modal";
import { ChangeEvent, FormEvent, useState } from "react"

export const AddInventory = () => {
    const {createInventory} = useInventoryAPI();
    const [title, setTitle] = useState<string>('')
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const onClick = (e: FormEvent) => {
        createInventory(title);
    }
    return (
        <>
            <Modal>
                <Form>
                    <Input label="Inventory title" value={title} setValue={setTitle}  />
                    <Button onClick={onClick} label="Add" />
                </Form>
            </Modal>
        </>
    )
}