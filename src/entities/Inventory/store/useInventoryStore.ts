import { create } from "zustand";
import { Field, InventoryStore } from "../model/types";

export const useInventoryStore = create<InventoryStore>((set, get) => ({
    inventories: [],
    inventory: null,
    fields: [],
  
    addInventory: (item) => {
      set((state) => ({
        inventories: [...state.inventories, item],
      }));
    },
  
    updateInventory: (id, updated) => {
      set((state) => ({
        inventories: state.inventories.map((item) =>
          item.id === id ? { ...item, ...updated } : item
        ),
      }));
    },
  
    deleteInventory: (id) => {
      set((state) => ({
        inventories: state.inventories.filter((item) => item.id !== id),
      }));
    },
  
    getInventory: (id) => {
      return get().inventories.find((item) => item.id === id);
    },

    setInventory: (inventory) => set({inventory}),

  
    setInventories: (inventories) => set({ inventories }),

    addField: (field: Field) =>{
      set((state) => ({
        fields: [...state.fields, field],
      }));
    },

    setFields: (fields) => set({fields})


  }));
  