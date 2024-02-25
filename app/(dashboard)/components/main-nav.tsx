'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

interface MainNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MainNav({ className }: MainNavProps) {
  const pathname = usePathname();

  return (
    <div className={cn('', className)}>
      <div className='mr-4 hidden md:flex'>
        <Link href='/' className='mr-6 flex items-center space-x-2'>
          <Icons.logo className='h-6 w-6' />
          <span className='hidden font-bold sm:inline-block'>
            {siteConfig.name}
          </span>
        </Link>
        <nav className='flex items-center gap-6 text-sm'>
          <Link
            href='/explore'
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/explore' ? 'text-foreground' : 'text-foreground/60'
            )}
          >
            Explore
          </Link>
          <Link
            href='/about'
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
            )}
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  );
}
