import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { HeartIcon, Mail, Search, User, UserIcon } from 'lucide-react';
import Link from 'next/link';

const notifications = [
  {
    user: {
      avatar_url: '/avatars/01.png',
      name: 'Olivia Martin',
    },
    icon: <HeartIcon />,
    action: 'follow',
  },
];

export default function NotificationsPage() {
  return (
    <div className='container h-full px-4 py-6 lg:px-8'>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Notifications
          </h2>
        </div>
      </div>
      <Separator className='my-4' />

      <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-4'>
        <div className='col-span-3'>
          <div className='flex flex-col gap-y-4'>
            <div
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'flex flex-1 cursor-pointer items-center justify-start space-x-4'
              )}
            >
              <UserIcon />
              <div className='flex flex-col gap-y-2'>
                <div className='flex gap-x-1'>
                  <Avatar>
                    <AvatarImage src='/avatars/01.png' />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src='/avatars/01.png' />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src='/avatars/01.png' />
                    <AvatarFallback>HA</AvatarFallback>
                  </Avatar>
                </div>
                <p className='text-sm font-medium leading-none'>
                  Patricia Bowes and 2 others followed you
                </p>
              </div>
            </div>
            {/* Loop here */}
            <div
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'flex flex-1 items-center justify-start space-x-4'
              )}
            >
              <HeartIcon />
              <div className='flex flex-col gap-y-2'>
                <div className='flex gap-x-1'>
                  <Avatar>
                    <AvatarImage src='/avatars/01.png' />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                </div>
                <p className='text-sm font-medium leading-none'>
                  Wilson liked your post
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
