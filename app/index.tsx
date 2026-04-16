import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { supabase } from '../lib/supabase'
import { testSupabaseConnection } from '@/utils/checkConnection'

export default function App() {
  const [user, setUser] = useState<any[]>([])

  useEffect(() => {
    testSupabaseConnection()
    getUser()
  }, [])

  async function getUser() {
  const { data, error } = await supabase.from('user').select()
  if (error) console.error('Failed to fetch users:', error)
  setUser(data || [])
}
  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
})

/*
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
*/

