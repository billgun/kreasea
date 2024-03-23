'use server';

import { createClient } from '@/lib/supabase/actions';
import { cookies } from 'next/headers';

export async function postPostLike({ postId }: { postId: string }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  try {
    await supabase.from('user_post_likes').upsert({ post_id: postId });
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function deletePostLike({ postId }: { postId: string }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  try {
    await supabase.from('user_post_likes').delete().eq('post_id', postId);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

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
