import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  BarChart2,
  BarChart2Icon,
  BellIcon,
  CrownIcon,
  HomeIcon,
  MailIcon,
  NewspaperIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  Users2Icon,
  UsersIcon,
} from 'lucide-react';
import Link from 'next/link';
import { getUser, getUserProfile } from '@/lib/auth';
import { SidebarButton } from './sidebar-button';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarNav } from './avatar-nav';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export async function Sidebar({ className }: SidebarProps) {
  const profile = await getUserProfile();

  return (
    <div className={cn('', className)}>
      <div className='sticky top-0 flex h-screen flex-col py-4'>
        <div className='px-3 py-2'>
          <Link href='/' className='mb-2 flex items-center space-x-2 px-4'>
            <Icons.logo className='h-6 w-6' />
            <span className='hidden font-bold sm:inline-block'>
              {siteConfig.name}
            </span>
          </Link>
        </div>
        <div className='flex-1'>
          <div className='px-3 py-2'>
            <div className='space-y-1'>
              <SidebarButton href={`/`}>
                <HomeIcon className='mr-2 h-4 w-4' />
                Home
              </SidebarButton>
              <SidebarButton href={`/explore`}>
                <SearchIcon className='mr-2 h-4 w-4' />
                Explore
              </SidebarButton>
              <SidebarButton href={`/notifications`}>
                <BellIcon className='mr-2 h-4 w-4' />
                Notifications
              </SidebarButton>
              <SidebarButton href={`/messages`}>
                <MailIcon className='mr-2 h-4 w-4' />
                Messages
              </SidebarButton>
              <SidebarButton href={`/${profile?.username}`}>
                <UserIcon className='mr-2 h-4 w-4' />
                Profile
              </SidebarButton>
              <Button variant='ghost' className='w-full justify-start'>
                <ShoppingBagIcon className='mr-2 h-4 w-4' />
                Orders
              </Button>
              <Button variant='ghost' className='w-full justify-start'>
                <CrownIcon className='mr-2 h-4 w-4' />
                My Subscriptions
              </Button>
            </div>
          </div>
          <div className='px-3 py-2'>
            <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
              Creator
            </h2>
            <div className='space-y-1'>
              <SidebarButton href={`/dashboard`}>
                <BarChart2Icon className='mr-2 h-4 w-4' />
                Dashboard
              </SidebarButton>
              <SidebarButton href={`/supporters`}>
                <UsersIcon className='mr-2 h-4 w-4' />
                Supporters
              </SidebarButton>
            </div>
          </div>
        </div>
        <div className='px-3 py-2'>
          <AvatarNav />
        </div>
      </div>
    </div>
  );
}
