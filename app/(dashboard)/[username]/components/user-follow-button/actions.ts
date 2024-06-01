'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function postUserFollow({ userId }: { userId: string }) {
  const supabase = createClient();
  try {
    const { data } = await supabase.auth.getSession();

    if (!data) {
      redirect('/login');
    }

    await supabase.from('user_following').upsert({ following_id: userId });
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function deleteUserFollow({ userId }: { userId: string }) {
  const supabase = createClient();
  try {
    const { data } = await supabase.auth.getSession();

    if (!data) {
      redirect('/login');
    }

    await supabase.from('user_following').delete().eq('following_id', userId);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
