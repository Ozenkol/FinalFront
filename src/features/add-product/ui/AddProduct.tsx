// import { useInventoryStore } from "@/entities/Inventory/store/useInventoryStore"
// import { Form } from "@/shared/ui/Form/Form"
// import { Modal } from "@/shared/ui/Modal/Modal"
// import { useState } from "react"
// import { MdCancel } from "react-icons/md"

// interface Props {
//     isOpen: boolean,
//     setOpen: (isOpen: boolean) => void 
// }

// export const AddProduct = ({isOpen, setOpen}: Props) => {

//     const [values, setValues] = useState<string[]>([])

//     const {fields} = useInventoryStore()

//     return (
//         <>
//             <Modal isOpen={isOpen} setOpen={setOpen}>
//                 <Form>
//                     <MdCancel size={25} className="ml-auto" onClick={() => setOpen(false)}></MdCancel>
//                     {fields.map(f => <Input label="Field title" value={title} setValue={setTitle}  />
//                     )}
//                     <Button type="submit" label="Add" onClick={onClick} />
//                 </Form>
//             </Modal>
//         </>
//     )

// }