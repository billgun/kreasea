'use client';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ProfileCard({ className, ...props }: ProfileProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className='w-full border border-muted-foreground pb-6 shadow-lg'>
        <Image
          alt='User background'
          className='h-36 w-full bg-foreground'
          height='96'
          src={'https://picsum.photos/id/666/1248'}
          style={{
            aspectRatio: '100/100',
            objectFit: 'cover',
          }}
          width='1248'
        />
        <div className='container flex justify-between'>
          <Avatar className='-mt-14 h-16 w-16 border-2 lg:h-24 lg:w-24'>
            <AvatarImage
              alt='user avatar'
              src={'https://github.com/shadcn.png'}
              className='object-cover'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className='container flex flex-col items-start gap-1'>
          <div className='flex flex-col items-start'>
            <h2 className='text-lg font-bold'>{'Shadcn'}</h2>
            <div className='flex gap-x-2 text-sm font-semibold'>
              <p className=''>@{'Shadcn'}</p>
            </div>
          </div>
        </div>
        <div className='container flex items-center gap-x-1'>
          <p className='line-clamp-3 overflow-hidden text-ellipsis text-sm text-accent-foreground/60'>
            {'No Description'}
          </p>
        </div>
      </div>
    </div>
  );
}
