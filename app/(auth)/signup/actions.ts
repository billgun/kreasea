'use server';

import { createClient } from '@/lib/supabase/actions';
import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signUp(credentials: SignUpWithPasswordCredentials) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.signUp(credentials);
  return { data, error };
}

export async function signUpWithGoogle() {
  console.log('google');
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback` },
  });

  if (!data.url) {
    throw error;
  }

  redirect(data.url);
}
