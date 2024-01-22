'use server';

import { createServerSupabaseClient } from '@/lib/auth';
import { socialLinksSchema } from './components/social-links-form';
import { cookies } from 'next/headers';

export async function postUserSocialMedia(socialMediaData: socialLinksSchema) {
  'use server';
  const supabase = createServerSupabaseClient();
  try {
    const userJson = JSON.parse(
      cookies().get(
        `sb-${process.env.NEXT_PUBLIC_SUPABASE_REFERENCE}-auth-token`
      )?.value || ''
    );

    const user = userJson.user;

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
