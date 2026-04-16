import { supabase } from '../lib/supabase';
import { PostgrestError } from '@supabase/supabase-js';

export const testSupabaseConnection = async (): Promise<void> => {
  try {
    console.log('🔐 Checking Supabase auth status...')
    const { data: authData, error: authError } = await supabase.auth.getSession()
    console.log('Auth session:', authData?.session ? 'authenticated' : 'anonymous', authError)
    
    console.log('📡 Testing connection to User table...')
    const { data, error } = await supabase
      .from('User')
      .select('*')
      .limit(1);

    if (error) {
      const pgError = error as PostgrestError;
      console.error('❌ Supabase Error:', pgError.message, pgError);
      return;
    }

    console.log('✅ Supabase Connection Successful! Data:', data);
  } catch (err) {
    console.error('⚠️ Unexpected Connection Error:', err);
  }
};