import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { styles } from "../assets/styles/second.styles";

export default function Second() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Second Screen</Text>
        <Text style={styles.text}>
          This is your second screen. Use the home screen to navigate back and forth.
        </Text>
        <Link href="/" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Back to home</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
