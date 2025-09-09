import { useInventoryAPI } from "@/entities/Inventory/api/useInventoryAPI";
import { Field, FieldRequest } from "@/entities/Inventory/model/types";
import { useInventoryStore } from "@/entities/Inventory/store/useInventoryStore";
import { Button } from "@/shared/ui/Button/Button";
import { Form } from "@/shared/ui/Form/Form";
import { Input } from "@/shared/ui/Input/Input";
import { Modal } from "@/shared/ui/Modal/Modal";
import { FormEvent, MouseEvent, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io"
import { MdCancel } from "react-icons/md";

interface Props {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void,
    id: string
}

export const AddField = ({isOpen, setOpen, id}: Props) => {
    const {createField} = useInventoryAPI();
    const {addField} = useInventoryStore();
    const [title, setTitle] = useState<string>('')

    const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
            const fieldRequest: FieldRequest = {
                title: title
            }
            console.log(fieldRequest)
            const fetchData = async () => {
                try {
                    const response = await createField(id, fieldRequest);
                    console.log(response)
                    if (!response.ok) {
                        console.error();
                    }
                    const createdField = await response.json()
                    console.log("Created field", createdField)
                    addField(createdField);
                } catch(err) {
                    console.error("Error creating field:", err);
                }
            }
            setTitle('')
            setOpen(false)
            await fetchData()
        }

    
    return (
        <>
            <Modal isOpen={isOpen} setOpen={setOpen}>
                <Form>
                    <MdCancel size={25} className="ml-auto" onClick={() => setOpen(false)}></MdCancel>
                    <Input label="Field title" value={title} setValue={setTitle}  />
                    <Button type="submit" label="Add" onClick={onClick} />
                </Form>
            </Modal>
        </>
    )
}