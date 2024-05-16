'use server';

import { createClient } from '../supabase/server';
import { uploadToBucket } from './bucket';

export interface BlogPostProps {
  title?: string;
  content: string;
  imageUrl?: string;
}

export async function postUserPost({
  title,
  content,
  imageUrl,
}: BlogPostProps) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from('user_posts')
      .insert({ title, content, imageUrl });

    if (error) {
      throw new Error(error.message); // Throwing the error message as a string
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
