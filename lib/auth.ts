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
