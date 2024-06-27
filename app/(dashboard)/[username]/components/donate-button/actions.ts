'use server';

import { createClient } from '@/lib/supabase/server';
import { SignInWithPasswordCredentials } from '@supabase/supabase-js';

type UserTransactionProps = {
  userId: string;
  amount: number;
  description: string;
};
export async function createUserTransation({
  userId,
  amount,
  description,
}: UserTransactionProps) {
  const supabase = createClient();
  const { data, error } = await supabase.from('user_transaction').insert({
    to: userId,
    amount,
    status: 'PENDING',
    description,
  });
  return { error };
}
