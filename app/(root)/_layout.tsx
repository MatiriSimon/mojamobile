import { Stack, useRouter } from 'expo-router'
import { useAuthContext } from '@/hooks/use-auth-context'
import { useEffect } from 'react'

export default function Layout() {
  const { isLoggedIn, isLoading } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    // Only redirect if we are certain the user is not logged in
    if (!isLoading && !isLoggedIn) {
      router.replace('./login2')
    }
  }, [isLoggedIn, isLoading, router])

  if (isLoading) return null // Or return a <Loading /> component

  return <Stack />
}