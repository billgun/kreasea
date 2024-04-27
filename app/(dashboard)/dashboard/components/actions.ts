'use server';

import { getUser } from '@/lib/auth';
import { createClient } from '@/lib/supabase/server';

export async function toggleCreatorStatus(isCreator: boolean) {
  const supabase = createClient();
  try {
    const user = await getUser();

    await supabase
      .from('user_profiles')
      .update({ is_creator: isCreator })
      .eq('id', user.id);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
