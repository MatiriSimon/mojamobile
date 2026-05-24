import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { StyleSheet } from 'react-native'

import { HelloWave } from '@/components/helloWave'
import ParallaxScrollView from '@/components/parallaxScrollView'
import SignOutButton from '@/components/socialAuthButtons/signOutButton'
import { ThemedText } from '@/components/themedText'
import { ThemedView } from '@/components/themedView'
import { useAuthContext } from '@/hooks/useAuthContext'

export default function DashboardScreen() {
  const { profile, isLoggedIn, isLoading } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.replace('/login2')
    }
  }, [isLoggedIn, isLoading, router])

  if (isLoading || !isLoggedIn) {
    return null // Or show a loading component
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partialReactLogo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Dashboard</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Username</ThemedText>
        <ThemedText>{profile?.username}</ThemedText>
        <ThemedText type="subtitle">Full Name</ThemedText>
        <ThemedText>{profile?.full_name}</ThemedText>
      </ThemedView>
      <SignOutButton />
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})