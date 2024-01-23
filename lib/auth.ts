import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { cache } from 'react';

export const createServerSupabaseClient = cache(() => createClient(cookies()));

export async function getSession() {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getUser() {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getUserProfile() {
  const supabase = createServerSupabaseClient();
  try {
    const userJson = JSON.parse(
      cookies().get(
        `sb-${process.env.NEXT_PUBLIC_SUPABASE_REFERENCE}-auth-token`
      )?.value || ''
    );

    const user = userJson.user;

    const { data, error } = await supabase
      .from('user_profiles')
      .select('username, name,avatar_url')
      .eq('id', user.id)
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

export async function getUserSocialLinks() {
  const supabase = createServerSupabaseClient();
  try {
    const userJson = JSON.parse(
      cookies().get(
        `sb-${process.env.NEXT_PUBLIC_SUPABASE_REFERENCE}-auth-token`
      )?.value || ''
    );

    const user = userJson.user;

    const { data, error } = await supabase
      .from('user_social_links')
      .select('*')
      .eq('id', user.id)
      .single();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getUserDetails() {
  const supabase = createServerSupabaseClient();
  try {
    const { data: userDetails } = await supabase
      .from('users')
      .select('*')
      .single();
    return userDetails;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function signOut() {
  const supabase = createServerSupabaseClient();
  try {
    await supabase.auth.signOut();
    redirect('/');
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
