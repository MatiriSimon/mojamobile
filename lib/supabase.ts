import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import { Platform } from 'react-native'

/*
// Only import expo-sqlite/localStorage for native platforms to avoid WASM issues on web
if (Platform.OS !== 'web') {
  // Using a variable for the module name prevents Metro from statically analyzing 
  // and bundling this dependency when building for web/SSR environments.
  const EXPO_SQLITE_STORAGE = 'expo-sqlite/localStorage/install';
  require(EXPO_SQLITE_STORAGE);
}
*/



async function setupSQLiteStorage() {
  if (Platform.OS !== 'web') {
    const module = await import('expo-sqlite/localStorage/install');
    module.default(); // call the default export (install function)
  }
}
setupSQLiteStorage();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? ''
const supabasePublishableKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? ''

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: typeof localStorage !== 'undefined' ? localStorage : undefined,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})