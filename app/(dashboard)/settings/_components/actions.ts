'use server';

import { createClient } from '@/lib/supabase/server';
import { passwordChangeSchema } from './password-change-form';

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
