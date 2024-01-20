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
  Globe,
  Instagram,
  MapPinIcon,
  Twitter,
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
import Link from 'next/link';

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

  let dummyText =
    'Muse Communication is trusted by our clients and has been named as the agent of more than 30 well-known anime and manga copyright partners in the global anime market. The company has expanded its influence in the anime and manga community by expanding its presence in the media, becoming a strategic marketing partner for its clients, and creating licensing opportunities. We provide our clients with a wide range of professional services in licensing, distribution, development, sales, and promotion to meet all their needs and achieve benefits. We provide clients with an all-rounded service to satisfy all your distribution needs.\n\nWe work with over a hundred different entertainment platforms including internet services, TV stations, TV/OTT platforms across the whole of Asia.';

  return (
    <div className='w-full shadow-lg'>
      <Image
        alt='User background'
        className='h-64 w-full bg-foreground'
        height='96'
        src={'https://picsum.photos/id/666/1248'}
        style={{
          aspectRatio: '100/100',
          objectFit: 'cover',
        }}
        width='1248'
      />
      <div className='container flex flex-row-reverse justify-between px-5 py-2'>
        <ProfileEdit username={params.username} />
        <Avatar className='-mt-20 h-28 w-28 translate-x-1/3 border-2 lg:h-36 lg:w-36'>
          <AvatarImage
            alt='user avatar'
            src={data.avatar_url || ''}
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
            <Link href={`/${params.username}/followers`}>
              <p className=''>0 followers</p>
            </Link>
            <Separator className='h-4' orientation='vertical' />
            <p className=''>0 posts</p>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <div className='flex cursor-pointer items-center gap-x-1'>
              <p className='line-clamp-3 overflow-hidden text-ellipsis text-sm text-accent-foreground/60'>
                {data.description || 'No Description'}
              </p>
              <ChevronRight className='h-4 w-4 ' />
            </div>
          </DialogTrigger>
          <DialogContent className='sm:max-w-lg'>
            <DialogHeader>
              <DialogTitle>About</DialogTitle>
              <div className='grid gap-4 whitespace-pre-wrap py-4 text-sm'>
                {dummyText}
              </div>
            </DialogHeader>
            <DialogHeader>
              <DialogTitle>Links</DialogTitle>
              <Link
                className='flex items-center'
                href={'https://billgun.github.io'}
                target='_blank'
              >
                <Globe className='mr-2 h-4 w-4 ' />
                https://billgun.github.io/
              </Link>
              <Link
                className='flex items-center'
                href={'https://x.com/billgundev'}
                target='_blank'
              >
                <Icons.twitter className='mr-2 h-4 w-4 fill-current' />
                @billgundev
              </Link>
              <Link
                className='flex items-center'
                href={'https://instagram.com/bill_gun'}
                target='_blank'
              >
                <Instagram className='mr-2 h-4 w-4' />
                @bill_gun
              </Link>
            </DialogHeader>
            <DialogFooter>
              <Button type='submit'>Share</Button>
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
  );
}
