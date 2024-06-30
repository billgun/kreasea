'use server';

import { createClient } from '../supabase/server';

export interface BlogPostProps {
  title?: string;
  content: string;
  image_url?: string;
}

export async function postUserPost({
  title,
  content,
  image_url,
}: BlogPostProps) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from('user_posts')
      .insert({ title, content, image_url });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
