import Image from 'next/image';

import { TwitterXIcon } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { createClient } from '@/utils/supabase/server';
import {
  ChevronRight,
  FacebookIcon,
  Globe,
  Instagram,
  TwitchIcon,
  YoutubeIcon,
} from 'lucide-react';
import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { ProfileEdit } from './components/profile-edit';
import { ProfileTabs } from './components/profile-tabs';

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
    .select('*, user_social_links(*)')
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
        className='aspect-square h-64 w-full object-cover'
        height={256}
        src={data.background_url || ''}
        width={1265}
      />
      <div className='container flex flex-row justify-between px-5 py-2'>
        <div> </div>
        <Avatar className='-mt-20 h-28 w-28 translate-x-[60%] border-2 lg:h-36 lg:w-36'>
          <AvatarImage
            alt='user avatar'
            src={data.avatar_url || ''}
            className='aspect-square w-full'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <Button>Create</Button>
          <ProfileEdit username={params.username}>
            <Button variant='secondary'>Edit Profile</Button>
          </ProfileEdit>
        </div>
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
            <DialogFooter>
              <Button type='submit'>Share</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className='flex'>
          {data.user_social_links?.website && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={data.user_social_links.website} target='_blank'>
                <Globe className='h-4 w-4' />
              </Link>
            </Button>
          )}
          {data.user_social_links?.twitter && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={data.user_social_links.twitter} target='_blank'>
                <TwitterXIcon className='h-4 w-4' />
              </Link>
            </Button>
          )}
          {data.user_social_links?.instagram && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={data.user_social_links.instagram} target='_blank'>
                <Instagram className='h-4 w-4' />
              </Link>
            </Button>
          )}
          {data.user_social_links?.youtube && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={data.user_social_links.youtube} target='_blank'>
                <YoutubeIcon className='h-4 w-4' />
              </Link>
            </Button>
          )}
          {data.user_social_links?.facebook && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={data.user_social_links.facebook} target='_blank'>
                <FacebookIcon className='h-4 w-4' />
              </Link>
            </Button>
          )}
          {data.user_social_links?.twitch && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={data.user_social_links.twitch} target='_blank'>
                <TwitchIcon className='h-4 w-4' />
              </Link>
            </Button>
          )}
        </div>
        <ProfileTabs username={params.username} />
        {children}
      </div>
    </div>
  );
}
