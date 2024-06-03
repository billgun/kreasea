import { createClient } from '@/lib/supabase/server';
import { Post } from '@/types/app';

export async function getPostByPostId({ postId }: { postId: string }) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from('user_posts_feed')
      .select(`*`)
      .eq('id', postId)
      .single<Post>();

    if (!data) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getRecentPostByUsername({
  username,
  postId,
}: {
  username: string;
  postId: string;
}) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from('user_posts_feed')
      .select(`*`)
      .eq('username', username)
      .neq('title', '')
      .neq('id', postId)
      .limit(5)
      .order('created_at', { ascending: false })
      .returns<Post[]>();

    if (!data) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
