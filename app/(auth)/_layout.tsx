import { Stack, useRouter } from 'expo-router'
import { useAuthContext } from '@/hooks/use-auth-context'
import { useEffect } from 'react'

export default function AuthLayout() {
  const { isLoggedIn } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    // If the user is already logged in, redirect them to the home screen
    if (isLoggedIn) {
      router.replace('/')
    }
  }, [isLoggedIn, router])

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="login2" />
      <Stack.Screen name="signup" />
    </Stack>
  )
}