import { createClient } from '@/lib/supabase/server';

export async function getPostByPostId({ postId }: { postId: string }) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from('user_posts')
      .select(`*`)
      .eq('id', postId)
      .single();

    if (!data) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
