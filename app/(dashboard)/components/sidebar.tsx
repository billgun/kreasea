import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  BarChart2,
  BarChart2Icon,
  CrownIcon,
  HomeIcon,
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
      <div className='flex h-screen flex-col py-4'>
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
              <Button variant='ghost' className='w-full justify-start'>
                <BarChart2Icon className='mr-2 h-4 w-4' />
                Dashboard
              </Button>
              <Button variant='ghost' className='w-full justify-start'>
                <UsersIcon className='mr-2 h-4 w-4' />
                Supporters
              </Button>
              <Button variant='ghost' className='w-full justify-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mr-2 h-4 w-4'
                >
                  <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
                  <circle cx='12' cy='7' r='4' />
                </svg>
                Made for You
              </Button>
              <Button variant='ghost' className='w-full justify-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mr-2 h-4 w-4'
                >
                  <path d='m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12' />
                  <circle cx='17' cy='7' r='5' />
                </svg>
                Artists
              </Button>
              <Button variant='ghost' className='w-full justify-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mr-2 h-4 w-4'
                >
                  <path d='m16 6 4 14' />
                  <path d='M12 6v14' />
                  <path d='M8 8v12' />
                  <path d='M4 4v16' />
                </svg>
                Albums
              </Button>
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