'use server';

import { createClient } from '@/lib/supabase/actions';
import { cookies } from 'next/headers';

export async function deletePost({ postId }: { postId: string }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  try {
    await supabase.from('user_posts').delete().eq('id', postId);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
