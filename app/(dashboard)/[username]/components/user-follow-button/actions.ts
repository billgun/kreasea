'use server';

import { createClient } from '@/lib/supabase/server';

export async function postUserFollow({ userId }: { userId: string }) {
  const supabase = createClient();
  try {
    await supabase.from('user_following').upsert({ following_id: userId });
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function deleteUserFollow({ userId }: { userId: string }) {
  const supabase = createClient();
  try {
    await supabase.from('user_following').delete().eq('following_id', userId);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
