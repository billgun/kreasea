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
import { getUserProfile, getUserProfileByUsername } from '@/lib/auth';
import {
  ChevronRight,
  FacebookIcon,
  Globe,
  Instagram,
  TwitchIcon,
  YoutubeIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  getFollowerCountByUsername,
  getPostCountByUsername,
  getSocialLinksByUsername,
} from './actions';
import { ProfileEdit } from './components/profile-edit';
import { UserFollowButton } from './components/user-follow-button/user-follow-button';

interface UsernameLayoutProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}
export default async function UsernameLayout({
  params,
  children,
}: UsernameLayoutProps) {
  const session = await getUserProfile();
  const userProfile = await getUserProfileByUsername({
    username: params.username,
  });
  const socialLinks = await getSocialLinksByUsername({
    username: params.username,
  });
  const postCount = await getPostCountByUsername({ username: params.username });
  const followerCount = await getFollowerCountByUsername({
    username: params.username,
  });

  return (
    <div className='w-full shadow-lg'>
      {userProfile.background_url ? (
        <Image
          alt='User background'
          className='aspect-square h-64 w-full bg-card object-cover'
          height={256}
          src={userProfile.background_url}
          width={1265}
        />
      ) : (
        <div className='aspect-square h-64 w-full object-cover'></div>
      )}
      <div className='container flex flex-row justify-between px-5 py-2'>
        <div> </div>
        <Avatar className='-mt-20 h-28 w-28 translate-x-[60%] border-2 lg:h-36 lg:w-36'>
          <AvatarImage
            alt='user avatar'
            src={userProfile.avatar_url || undefined}
            className='aspect-square w-full'
          />
          <AvatarFallback>
            {userProfile.name?.slice(0, 1).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          {session.username === params.username ? (
            <div>
              <Button>Create</Button>
              <ProfileEdit username={params.username}>
                <Button variant='secondary'>Edit Profile</Button>
              </ProfileEdit>
            </div>
          ) : (
            // <></>
            <UserFollowButton
              userId={userProfile.id}
              hasFollowed={userProfile.has_followed}
            />
          )}
        </div>
      </div>
      <div className='mx-auto flex max-w-[980px] flex-col items-center gap-1'>
        <div className='flex flex-col items-center'>
          <h2 className='text-lg font-bold'>{userProfile.name}</h2>
          <div className='flex gap-x-2 text-sm font-semibold'>
            <p className=''>@{userProfile.username}</p>
            <Separator className='h-4' orientation='vertical' />
            <Link href={`/${params.username}/followers`}>
              <p className=''>
                {`${followerCount} ${followerCount >= 2 ? 'followers' : 'follower'}`}{' '}
              </p>
            </Link>
            <Separator className='h-4' orientation='vertical' />
            <p className=''>
              {`${postCount} ${postCount >= 2 ? 'posts' : 'post'}`}{' '}
            </p>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <div className='flex cursor-pointer items-center gap-x-1'>
              <p className='line-clamp-3 overflow-hidden text-ellipsis text-sm text-accent-foreground/60'>
                {userProfile.description || 'No Description'}
              </p>
              <ChevronRight className='h-4 w-4 ' />
            </div>
          </DialogTrigger>
          <DialogContent className='sm:max-w-lg'>
            <DialogHeader>
              <DialogTitle>About</DialogTitle>
              <div className='grid gap-4 whitespace-pre-wrap py-4 text-sm'>
                {userProfile.description}
              </div>
            </DialogHeader>
            <DialogFooter>
              <Button type='submit'>Share</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className='flex'>
          {socialLinks?.website && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={socialLinks.website} target='_blank'>
                <Globe className='h-4 w-4' />
              </Link>
            </Button>
          )}
          {socialLinks?.twitter && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={socialLinks.twitter} target='_blank'>
                <TwitterXIcon className='h-4 w-4' />
              </Link>
            </Button>
          )}
          {socialLinks?.instagram && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={socialLinks.instagram} target='_blank'>
                <Instagram className='h-4 w-4' />
              </Link>
            </Button>
          )}
          {socialLinks?.youtube && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={socialLinks.youtube} target='_blank'>
                <YoutubeIcon className='h-4 w-4' />
              </Link>
            </Button>
          )}
          {socialLinks?.facebook && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={socialLinks.facebook} target='_blank'>
                <FacebookIcon className='h-4 w-4' />
              </Link>
            </Button>
          )}
          {socialLinks?.twitch && (
            <Button
              variant='ghost'
              className='w-full justify-start px-3 py-2'
              asChild
            >
              <Link href={socialLinks.twitch} target='_blank'>
                <TwitchIcon className='h-4 w-4' />
              </Link>
            </Button>
          )}
        </div>
        <Separator />
        {/* <ProfileTabs username={params.username} /> */}
        {children}
      </div>
    </div>
  );
}
