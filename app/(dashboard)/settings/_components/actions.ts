'use server';

import { createClient } from '@/lib/supabase/server';
import { passwordChangeSchema } from './password-change-form';
import { getSessionStrict } from '@/lib/auth';
import { usernameChangeSchema } from './username-change-form';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

export async function usernameChange({ username }: usernameChangeSchema) {
  const supabase = createClient();
  const user = await getSessionStrict();

  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .update({ username })
      .eq('id', user.sub as string);
  } catch (error) {
    return { error };
  }

  revalidatePath('/explore');
  revalidatePath('/settings');
  // return { data };
}
