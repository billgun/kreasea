'use server';

import { createServerSupabaseClient } from '@/lib/auth';
import { socialLinksSchema } from './components/social-links-form';
import { cookies } from 'next/headers';

export async function postUserSocialMedia(socialMediaData: socialLinksSchema) {
  'use server';
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { user },
      error: errorAuth,
    } = await supabase.auth.getUser();

    if (!user) {
      throw errorAuth;
    }

    const socialMediaDataWithUserId = {
      ...socialMediaData,
      id: user.id,
    };

    const { data, error } = await supabase
      .from('user_social_links')
      .upsert(socialMediaDataWithUserId);
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
