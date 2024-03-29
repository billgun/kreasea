'use server';

import { createClient } from '@/lib/supabase/server';

export async function deletePost({ postId }: { postId: string }) {
  const supabase = createClient();
  try {
    await supabase.from('user_posts').delete().eq('id', postId);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
