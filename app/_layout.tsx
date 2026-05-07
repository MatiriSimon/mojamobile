import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import { SplashScreenController } from '@/components/splash-screen-controller'

//import { useAuthContext } from '@/hooks/use-auth-context'
import { useColorScheme } from '@/hooks/use-color-scheme'
import AuthProvider from '@/providers/auth-provider'


// Separate RootNavigator so we can access the AuthContext
function RootNavigator() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="(root)" options={{ headerShown: true }} />
      <Stack.Screen name="(auth)" options={{ headerShown: true }} />
      <Stack.Screen name="+not-found" options={{ headerShown: true }} />
    </Stack>
  )
}

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <SplashScreenController />
        <RootNavigator />
        <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
  )
}