import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'

import ParallaxScrollView from '@/components/parallaxScrollView'
import { ThemedText } from '@/components/themedText'
import { ThemedView } from '@/components/themedView'

export default function LandingScreen() {
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
        <ThemedText type="title">Welcome to MojaMobile!</ThemedText>
        <ThemedText type="subtitle">Your mobile experience starts here</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.description}>
          Discover amazing features and connect with our community.
          Sign in to access your personalized dashboard and exclusive content.
        </ThemedText>

        <ThemedView style={styles.buttonContainer}>
          <Link href="/login2" style={styles.link}>
            <ThemedText type="link">Sign In</ThemedText>
          </Link>
          <Link href="/signup" style={styles.link}>
            <ThemedText type="link">Create Account</ThemedText>
          </Link>
        </ThemedView>

        <ThemedText style={styles.note}>
          You can browse this page without signing in. Authentication is only required for certain features.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 16,
    marginBottom: 32,
  },
  contentContainer: {
    gap: 24,
    paddingHorizontal: 16,
  },
  description: {
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    gap: 16,
    alignItems: 'center',
  },
  link: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#A1CEDC',
    borderRadius: 8,
    minWidth: 150,
    alignItems: 'center',
  },
  note: {
    textAlign: 'center',
    fontSize: 14,
    opacity: 0.7,
    fontStyle: 'italic',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})