'use server';

import { createClient } from '@/lib/supabase/server';
import { statusUpdateSchema } from '../components/status-update-form';
import { socialLinksSchema } from './components/social-links-form';

export async function postUserSocialMedia(socialMediaData: socialLinksSchema) {
  'use server';
  const supabase = createClient();
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

export async function postStatusUpdate(statusUpdate: statusUpdateSchema) {
  const supabase = createClient();
  try {
    const {
      data: { user },
      error: errorAuth,
    } = await supabase.auth.getUser();

    if (!user) {
      throw errorAuth;
    }

    const statusUpdateWithUserId = {
      content: statusUpdate.status,
      user_id: user.id,
    };

    const { data, error } = await supabase
      .from('user_posts')
      .insert(statusUpdateWithUserId);
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getPosts() {
  'use server';
  const supabase = createClient();
  try {
    const {
      data: { user },
      error: errorAuth,
    } = await supabase.auth.getUser();

    if (!user) {
      throw errorAuth;
    }

    const { data, error } = await supabase.from('user_post').select('*');
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getSocialLinksByUsername({
  username,
}: {
  username: string;
}) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from('user_social_links')
      .select('* , user_profiles!inner(username)')
      .eq('user_profiles.username', username)
      .single();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
