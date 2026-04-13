import { Text, View, Pressable } from "react-native";

import { styles } from "../assets/styles/index.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Moja Mobile</Text>
        <Text style={styles.subtitle}>
          A lightweight Expo Router starter with two screens and shared styles.
        </Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Open second screen</Text>
          </Pressable>
      </View>
    </View>
  );
}
