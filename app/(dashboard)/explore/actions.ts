import { createClient } from '@/lib/supabase/server';

export async function getCreators() {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('is_creator', true);

    if (!data) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
