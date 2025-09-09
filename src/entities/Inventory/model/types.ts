export interface Field {
    id: string,
    title: string,
}

export interface FieldRequest {
    title: string
}

export interface Inventory {
    id: string,
    title: string,
    description: string,
    fields: Field[]
}

export interface InventoryRequest {
    title: string,
    description: string,
}

export interface InventoryStore {
    inventories: Inventory[];
    inventory: Inventory | null

    fields: Field[],

    addInventory: (item: Inventory) => void;
    updateInventory: (id: string, updated: Partial<Inventory>) => void;
    deleteInventory: (id: string) => void;
    getInventory: (id: string) => Inventory | undefined;
    setInventory: (inventory: Inventory) => void
    setInventories: (items: Inventory[]) => void;

    addField: (item: Field) => void;
    setFields: (items: Field[]) => void;

}