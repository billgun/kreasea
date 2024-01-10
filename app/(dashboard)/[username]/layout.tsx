import { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import {
  CalendarDaysIcon,
  ChevronRight,
  Instagram,
  MapPinIcon,
} from 'lucide-react';
import { ProfileEdit } from './components/profile-edit';
import React from 'react';
import { ProfileTabs } from './components/profile-tabs';
import { Icons } from '@/components/icons';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface UsernamePageLayoutProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}
export default async function UsernamePageLayout({
  params,
  children,
}: UsernamePageLayoutProps) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from('user_profiles')
    .select()
    .eq('username', params.username)
    .single();

  if (error) {
    return;
  }

  return (
    <div>
      <div className='w-full shadow-lg'>
        <Image
          alt='User background'
          className='h-48 w-full bg-foreground'
          height='96'
          src={'https://picsum.photos/id/666/1248'}
          style={{
            aspectRatio: '100/100',
            objectFit: 'cover',
          }}
          width='1248'
        />
        <div className='container flex flex-row-reverse justify-between px-5 py-2'>
          <ProfileEdit />
          <Avatar className='-mt-20 h-28 w-28 translate-x-1/3 border-2 lg:h-36 lg:w-36'>
            <AvatarImage
              alt='user avatar'
              src={data.avatar_url}
              className='object-cover'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div></div>
        </div>
        <div className='mx-auto flex max-w-[980px] flex-col items-center gap-1'>
          <div className='flex flex-col items-center'>
            <h2 className='text-lg font-bold'>{data.name}</h2>
            <div className='flex gap-x-2 text-sm font-semibold'>
              <p className=''>@{data.username}</p>
              <Separator className='h-4' orientation='vertical' />
              <p className=''>0 followers</p>
              <Separator className='h-4' orientation='vertical' />
              <p className=''>0 posts</p>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className='flex cursor-pointer items-center gap-x-1'>
                <p className='line-clamp-3 overflow-hidden text-ellipsis text-sm text-accent-foreground/60'>
                  {data.about_you || 'No Description'}
                </p>
                <ChevronRight className='h-4 w-4 ' />
              </div>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4'></div>
              <DialogFooter>
                <Button type='submit'>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className='flex'>
            <Button variant='ghost' className='w-full justify-start px-3 py-2'>
              <Icons.twitter className='h-4 w-4 fill-current' />
            </Button>
            <Button variant='ghost' className='w-full justify-start px-3 py-2'>
              <Instagram className='h-4 w-4' />
            </Button>
          </div>
          <ProfileTabs username={params.username} />
          {children}
        </div>
      </div>
    </div>
  );
}
