export interface User {
    username: string
}

export interface AuthState {
    user: User | null
    isAuthenticated: boolean
    checkAuth: () => void
    setUser: (user: User) => void
}
  
  