import { create } from "zustand"
import { AuthState, User } from "../model/types"
import Cookies from 'js-cookie'


export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: true,
  
    setAuthentication: (auth: boolean) => {
      set({ isAuthenticated: auth });
    },
    setUser: (user: User) => {
        set({user: user})
    }
  }))
  