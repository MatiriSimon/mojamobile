import { supabase } from '../lib/supabase';
import { PostgrestError } from '@supabase/supabase-js';

export const testSupabaseConnection = async (): Promise<void> => {
  try {
    // We select any table. Even if it doesn't exist, 
    // a 404 response confirms the API reached Supabase.
    const { data, error } = await supabase
      .from('user') // Replace with an actual table name if you have one
      .select('*')
      .limit(1);

    if (error) {
      const pgError = error as PostgrestError;
      console.error('❌ Supabase Error:', pgError.message);
      return;
    }

    console.log('✅ Supabase Connection Successful! Data:', data);
  } catch (err) {
    console.error('⚠️ Unexpected Connection Error:', err);
  }
};