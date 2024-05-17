'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { signInWithGoogle } from '../signup/actions';

export function GoogleButton() {
  return (
    <Button
      variant={'secondary'}
      className='w-full font-semibold'
      onClick={async () => await signInWithGoogle()}
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
