import { create } from "zustand";
import { InventoryStore } from "../model/types";

export const useInventoryStore = create<InventoryStore>((set, get) => ({
    inventories: [],
  
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
  
    setInventories: (inventories) => set({ inventories }),
  }));
  