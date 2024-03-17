'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { signUpWithGoogle } from '../actions';

export function GoogleButton() {
  async function onClickGoogle() {
    await signUpWithGoogle();
  }
  return (
    <Button
      variant={'default'}
      className='w-full font-semibold'
      onClick={() => onClickGoogle()}
    >
      <>
        <Icons.google className='mr-2 h-4 w-4' />
        <span className='text-sm font-semibold leading-6'>Google</span>
      </>
    </Button>
  );
}
