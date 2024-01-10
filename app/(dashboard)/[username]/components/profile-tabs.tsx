'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function TabLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        'border-b-2 border-transparent pb-2',
        pathname === href ? 'border-b-foreground' : ''
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
interface ProfileTabsProps {
  username: string;
}
export function ProfileTabs({ username }: ProfileTabsProps) {
  const pathname = usePathname();
  return (
    <nav className='flex w-full justify-center border-b pt-2'>
      <Tabs>
        <div className='flex space-x-8 '>
          <TabLink href={`/${username}`}>Home</TabLink>
          <TabLink href={`/${username}/about`}>About</TabLink>
          <div className='border-b-2 border-transparent pb-2'>Membership</div>
          <div className='border-b-2 border-transparent pb-2'>About</div>
        </div>
      </Tabs>
    </nav>
  );
}
