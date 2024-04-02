'use client';
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tables } from '@/types/database';
import Link from 'next/link';

interface ProfileProps {
  profile: Tables<'user_profiles'>;
}

export function ProfileCard({ profile }: ProfileProps) {
  return (
    <Link href={`/${profile.username}`}>
      <div className={'w-full'}>
        <div className='w-full border border-muted-foreground pb-6 shadow-lg'>
          {profile.background_url ? (
            <Image
              alt='User background'
              className='h-24 w-full bg-foreground'
              height='96'
              src={profile.background_url || ''}
              style={{
                aspectRatio: '100/100',
                objectFit: 'cover',
              }}
              width='1248'
            />
          ) : (
            <div className='h-24 w-full bg-card' />
          )}
          <div className='container flex justify-between'>
            <Avatar className='-mt-8 h-12 w-12 border-2 lg:h-16 lg:w-16'>
              <AvatarImage
                alt='user avatar'
                src={profile.avatar_url || undefined}
                className='object-cover'
              />
              <AvatarFallback>
                {profile.name.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className='container flex flex-col items-start gap-1'>
            <div className='flex flex-col items-start'>
              <h2 className='text-lg font-bold'>{profile.name}</h2>
              <div className='flex gap-x-2 text-sm font-semibold'>
                @{profile.username}
              </div>
            </div>
          </div>
          <div className='container flex items-center gap-x-1'>
            <p className='line-clamp-3 min-h-6 overflow-hidden text-ellipsis text-sm text-accent-foreground/60'>
              {profile.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
