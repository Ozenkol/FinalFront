"use client"

import { useEffect } from "react"
import { useAuthStore } from "../storage/useAuthStorage"
import { useAccountAPI } from "../api/useAccountAPI";

export function AppProvider({ children }: { children: React.ReactNode }) {
    const {setAuthentication, setUser} = useAuthStore();
    const {getUser} = useAccountAPI();
  useEffect(() => {
    const  fetchUser = async () => {
        try {
            const response = await getUser();
            if (!response.ok) {
                setAuthentication(false);
            }
            else {
                setAuthentication(true);
                const json = await response.json();                
                setUser(json)
            }
        } catch {

        }
    }
    fetchUser()
  }, [])

  return <>{children}</>
}
