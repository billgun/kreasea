'use server';

import { createClient } from '@/lib/supabase/server';

export async function postPostLike({ postId }: { postId: string }) {
  const supabase = createClient();
  try {
    await supabase.from('user_post_likes').upsert({ post_id: postId });
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function deletePostLike({ postId }: { postId: string }) {
  const supabase = createClient();
  try {
    await supabase.from('user_post_likes').delete().eq('post_id', postId);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
