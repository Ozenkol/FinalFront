export interface Inventory {
    id: string,
    title: string,
    description: string
}

export interface InventoryStore {
    inventories: Inventory[];
    addInventory: (item: Inventory) => void;
    updateInventory: (id: string, updated: Partial<Inventory>) => void;
    deleteInventory: (id: string) => void;
    getInventory: (id: string) => Inventory | undefined;
    setInventories: (items: Inventory[]) => void; // for bulk update/fetch
}