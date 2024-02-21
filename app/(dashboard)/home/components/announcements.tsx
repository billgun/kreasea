import Link from 'next/link';

import { Separator } from '@/components/ui/separator';
import { ArrowRightIcon } from 'lucide-react';

export function Announcement() {
  return (
    <Link
      href='/docs/changelog'
      className='inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium'
    >
      🎉 <Separator className='mx-2 h-4' orientation='vertical' />
      <span className='sm:hidden'>Sign up now and get an exclusive badge</span>
      <span className='hidden sm:inline'>
        Become one of our first creator and get exclusive badge.
      </span>
      <ArrowRightIcon className='ml-1 h-4 w-4' />
    </Link>
  );
}
