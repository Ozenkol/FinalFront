export interface User {
    username: string
}

export interface AuthState {
    user: User | null
    isAuthenticated: boolean
    setAuthentication: (auth: boolean) => void
    setUser: (user: User) => void
}
  
  