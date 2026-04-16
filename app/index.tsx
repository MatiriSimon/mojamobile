import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { supabase } from '../lib/supabase'
import { testSupabaseConnection } from '@/utils/checkConnection'

export default function App() {
  const [user, setUser] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log('🔍 App mounted, initializing...')
    testSupabaseConnection()
    getUser()
  }, [])

  async function getUser() {
    try {
      setLoading(true)
      setError(null)
      console.log('📡 Fetching users from Supabase...')
      const { data, error: fetchError } = await supabase.from('User').select()
      
      if (fetchError) {
        console.error('❌ Supabase error:', fetchError)
        setError(fetchError.message)
        setUser([])
        return
      }
      
      console.log('✅ Users fetched:', data)
      setUser(data || [])
    } catch (err) {
      console.error('⚠️ Unexpected error:', err)
      setError(String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moja Users</Text>
      
      {loading && (
        <Text style={styles.status}>Loading users...</Text>
      )}
      
      {error && (
        <Text style={styles.error}>Error: {error}</Text>
      )}
      
      {!loading && user.length === 0 && !error && (
        <Text style={styles.status}>No users found</Text>
      )}
      
      {user.length > 0 && (
        <>
          <Text style={styles.count}>Found {user.length} user(s)</Text>
          <FlatList
            data={user}
            keyExtractor={(item) => item.id?.toString()}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.name || 'Unknown'}</Text>
            )}
          />
        </>
      )}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  status: {
    fontSize: 16,
    color: '#666',
    padding: 16,
    textAlign: 'center',
  },
  error: {
    fontSize: 14,
    color: '#d32f2f',
    padding: 12,
    backgroundColor: '#ffebee',
    borderRadius: 4,
    marginBottom: 16,
  },
  count: {
    fontSize: 14,
    color: '#1976d2',
    fontWeight: '600',
    marginBottom: 12,
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

