'use server';

import { createClient } from '@/lib/supabase/server';
import { SignInWithPasswordCredentials } from '@supabase/supabase-js';

export async function signIn(credentials: SignInWithPasswordCredentials) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword(credentials);
  return { error };
}
