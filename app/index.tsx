import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'

import ParallaxScrollView from '@/components/parallaxScrollView'
import { ThemedText } from '@/components/themedText'
import { ThemedView } from '@/components/themedView'

export default function LandingScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#7f979e' }}
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
          <Link href="/login" style={styles.link}>
            <ThemedText type="link">Sign In</ThemedText>
          </Link>
          <Link href="/signup" style={styles.link}>
            <ThemedText type="link">Create Account</ThemedText>
          </Link>
        </ThemedView>
        <ThemedText style={styles.note}>
            You can browse this page without signing in.
            Authentication is only required for certain features.
          </ThemedText>
         </ThemedView>
        <ThemedView style={styles.articleContainer}>
          

          <ThemedText style={styles.articleTitle}>
            The Interactivity of an Application
          </ThemedText>

          <ThemedText style={styles.articleSubtitle}>
            Introduction
          </ThemedText>

          <ThemedText style={styles.articleText}>
            Interactivity is one of the most important features of a
            modern application. It refers to how users communicate
            and engage with an app through different features,
            buttons, menus, animations, and other interactive elements.
          </ThemedText>

          <ThemedText style={styles.articleSubtitle}>
            How Interactive an App Is
          </ThemedText>

          <ThemedText style={styles.articleText}>
            An application interactivity can be measured by how
            easily users can interact with its features. A highly
            interactive app provides a smooth experience by allowing
            users to navigate between different screens, click
            buttons, submit forms, search for information, and
            customize settings.
          </ThemedText>

          <ThemedText style={styles.articleSubtitle}>
            Importance of Interactivity in an App
          </ThemedText>

          <ThemedText style={styles.articleText}>
            Interactivity plays a significant role in improving user
            experience. It makes an application easier to understand
            and more enjoyable to use. It also encourages users to
            spend more time using the application.
          </ThemedText>

          <ThemedText style={styles.articleSubtitle}>
            Conclusion
          </ThemedText>

          <ThemedText style={styles.articleText}>
            In conclusion, interactivity is an essential part of
            application development. A good application should
            provide easy navigation, responsive buttons, smooth
            animations, useful notifications, and customizable
            settings.
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


    articleContainer: {
    marginTop: 20,
    padding: 16,
    gap: 16,
    backgroundColor: '#a2f3e3',
    borderRadius: 12,
    
  },

    articleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#11181C',
  },

  articleSubtitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#11181C',
  },

  articleText: {
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'justify',
    color: '#11181C',
  },
})