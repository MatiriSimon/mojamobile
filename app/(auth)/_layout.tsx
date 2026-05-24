import { useAuthContext } from '@/hooks/useAuthContext'
import { Stack, useRouter } from 'expo-router'
import { useEffect } from 'react'

export default function AuthLayout() {
  const { isLoggedIn } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    // If the user is already logged in, redirect them to the dashboard
    if (isLoggedIn) {
      router.replace('/(root)')
    }
  }, [isLoggedIn, router])

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="login2" />
      <Stack.Screen name="signup" />
    </Stack>
  )
}