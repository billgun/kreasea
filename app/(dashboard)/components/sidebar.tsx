import { Icons } from '@/components/icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { siteConfig } from '@/config/site';
import { getUserProfile } from '@/lib/auth';
import { cn } from '@/lib/utils';
import {
  ArchiveIcon,
  BarChart2Icon,
  BellIcon,
  CogIcon,
  HomeIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  UsersIcon,
} from 'lucide-react';
import Link from 'next/link';
import { AvatarNav } from './avatar-nav';
import { SidebarButton } from './sidebar-button';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export async function Sidebar({ className }: SidebarProps) {
  const profile = await getUserProfile();

  return (
    <div className={cn('', className)}>
      <div className={cn(`sticky top-0 flex h-screen flex-col py-4`)}>
        <div className='px-3 py-2'>
          <Link href='/' className='mb-2 flex items-center space-x-2 px-4'>
            <Icons.logo className='h-6 w-6' />
            <span className='hidden font-bold sm:inline-block'>
              {siteConfig.name}
            </span>
          </Link>
        </div>
        <div className='flex-1'>
          <Tabs defaultValue='member' className='w-full '>
            <TabsList className='grid w-full grid-cols-2 rounded-none px-4'>
              <TabsTrigger value='member'>Member</TabsTrigger>
              <TabsTrigger value='creator'>Creator</TabsTrigger>
            </TabsList>
            <TabsContent value='member'>
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
                  {/* <SidebarButton href={`/messages`}>
                    <MailIcon className='mr-2 h-4 w-4' />
                    Messages
                  </SidebarButton> */}
                  <SidebarButton href={`/${profile?.username}`}>
                    <UserIcon className='mr-2 h-4 w-4' />
                    Profile
                  </SidebarButton>
                  {/* <SidebarButton href={`/subscriptions`}>
                    <CrownIcon className='mr-2 h-4 w-4' />
                    My Subscriptions
                  </SidebarButton>
                  <Button variant='ghost' className='w-full justify-start'>
                    <ShoppingBagIcon className='mr-2 h-4 w-4' />
                    Orders
                  </Button> */}
                  <SidebarButton href='/settings'>
                    <CogIcon className='mr-2 h-4 w-4' />
                    Settings
                  </SidebarButton>
                </div>
              </div>
            </TabsContent>
            <TabsContent value='creator'>
              <div className='px-3 py-2'>
                <div className='space-y-1'>
                  <SidebarButton href={`/dashboard`}>
                    <BarChart2Icon className='mr-2 h-4 w-4' />
                    Dashboard
                  </SidebarButton>
                  <SidebarButton href={`/supporters`}>
                    <UsersIcon className='mr-2 h-4 w-4' />
                    Supporters
                  </SidebarButton>
                  <SidebarButton href={`/products`}>
                    <ArchiveIcon className='mr-2 h-4 w-4' />
                    Products
                  </SidebarButton>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className='px-3 py-2'>
          <AvatarNav profile={profile} />
        </div>
      </div>
    </div>
  );
}
