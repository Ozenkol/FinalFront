"use client"

import { useAuthStore } from "@/entities/User/storage/useAuthStorage";
import { useEffect, useState } from "react"

export function AppProvider({ children }: { children: React.ReactNode }) {
  const {checkAuth} = useAuthStore();
  useEffect(() => {
    checkAuth()
  }, [])

  return <>{children}</>
}
