'use server';

import { createClient } from '@/lib/supabase/server';
import { passwordChangeSchema } from './password-change-form';
import { getSessionStrict } from '@/lib/auth';
import { usernameChangeSchema } from './username-change-form';
import { revalidatePath } from 'next/cache';

export async function passwordChange({
  currentPassword,
  newPassword,
}: passwordChangeSchema) {
  const supabase = createClient();
  let { data, error } = await supabase.rpc('change_user_password', {
    current_plain_password: currentPassword,
    new_plain_password: newPassword,
  });

  if (error) {
    return { error };
  }

  let { error: signOutError } = await supabase.auth.signOut();
  if (signOutError) {
    return { error: signOutError };
  }

  return { error: null };
}

//TODO: revalidate path not working
export async function usernameChange({ username }: usernameChangeSchema) {
  const supabase = createClient();
  const user = await getSessionStrict();

  const { data, error } = await supabase
    .from('user_profiles')
    .update({ username })
    .eq('id', user.sub as string);

  if (!data) {
    return { error };
  }
  revalidatePath('/explore');
  return { data };
}
