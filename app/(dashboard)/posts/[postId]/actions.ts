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
