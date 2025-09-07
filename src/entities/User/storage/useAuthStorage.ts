import { create } from "zustand"
import { AuthState, User } from "../model/types"
import Cookies from 'js-cookie'


export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
  
    checkAuth: () => {
      const token = Cookies.get('.AspNetCore.Application.Id')
      if (token) {
        set({ isAuthenticated: true })
      } else {
        set({ isAuthenticated: false, user: null })
      }
    },
    setUser: (user: User) => {
        set({user: user})
    }
  }))
  