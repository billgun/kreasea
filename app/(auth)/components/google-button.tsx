'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';

export function GoogleButton() {
  const supabase = createClient();
  return (
    <Button
      variant={'secondary'}
      className='w-full font-semibold'
      onClick={async () =>
        await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
          },
        })
      }
    >
      <>
        <Icons.google className='mr-2 h-4 w-4' />
        <span className='text-sm font-semibold leading-6 text-foreground'>
          Continue with Google
        </span>
      </>
    </Button>
  );
}
