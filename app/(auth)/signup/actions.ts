'use server';

import { createClient } from '@/lib/supabase/server';
import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';

export async function signUp(credentials: SignUpWithPasswordCredentials) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp(credentials);
  return { data, error };
}

export async function signUpWithGoogle() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback` },
  });

  if (!data.url) {
    throw error;
  }

  // redirect(data.url);
}
