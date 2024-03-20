'use server';

import { createServerSupabaseClient } from '@/lib/auth';
import { statusUpdateSchema } from '../components/status-update-form';
import { socialLinksSchema } from './components/social-links-form';

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

export async function postStatusUpdate(statusUpdate: statusUpdateSchema) {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { user },
      error: errorAuth,
    } = await supabase.auth.getUser();

    if (!user) {
      throw errorAuth;
    }

    const statusUpdateWithUserId = {
      title: 'status',
      content: statusUpdate.status,
      user_id: user.id,
    };

    const { data, error } = await supabase
      .from('user_post')
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
  const supabase = createServerSupabaseClient();
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
