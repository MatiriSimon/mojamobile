import { Stack } from 'expo-router'

export default function Layout() {
  // Remove the auth redirect logic - let individual screens handle auth requirements
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="dashboard" />
    </Stack>
  )
}