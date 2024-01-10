'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface UsernamePageProps {
  href: string;
  children: React.ReactNode;
}
export function SidebarButton({ href, children }: UsernamePageProps) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Button
      asChild
      variant={
        pathname === href
          ? 'secondary'
          : pathname.startsWith(href) && href !== '/'
            ? 'secondary'
            : 'ghost'
      }
      className={'w-full justify-start'}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
