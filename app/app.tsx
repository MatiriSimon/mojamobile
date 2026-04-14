import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { supabase } from '../lib/supabase'

export default function App() {
  const [user, setUser] = useState<any[]>([])

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    const { data } = await supabase.from('user').select()
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