'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface UsernamePageProps {
  href: string;
  children: React.ReactNode;
}
export function SidebarButton({ href, children }: UsernamePageProps) {
  const pathname = usePathname();
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
