import { createContext, useContext } from 'react'

export type Profile = {
  id: string
  username?: string
  avatar_url?: string
  full_name?: string
  // Add other fields from your 'profiles' table here
}

export type AuthData = {
  claims?: Record<string, any> | null
  profile?: Profile | null
  isLoading: boolean
  isLoggedIn: boolean
}

export const AuthContext = createContext<AuthData>({
  claims: undefined,
  profile: undefined,
  isLoading: true,
  isLoggedIn: false,
})

export const useAuthContext = () => useContext(AuthContext)