'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { signUpWithGoogle } from '../signup/actions';

export function GoogleButton() {
  async function onClickGoogle() {
    await signUpWithGoogle();
  }
  const supabase = createClient();
  return (
    <Button
      variant={'default'}
      className='w-full font-semibold'
      onClick={async () =>
        await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: `${location.origin}/auth/callback?provider=google`,
          },
        })
      }
    >
      <>
        <Icons.google className='mr-2 h-4 w-4' />
        <span className='text-sm font-semibold leading-6'>Google</span>
      </>
    </Button>
  );
}
