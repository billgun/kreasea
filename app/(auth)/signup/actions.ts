'use server';

import { createClient } from '@/lib/supabase/server';
import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';

export async function signUp(credentials: SignUpWithPasswordCredentials) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp(credentials);
  return { data, error };
}

export async function signInWithGoogle() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}
