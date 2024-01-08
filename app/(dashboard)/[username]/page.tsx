import { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { CalendarDaysIcon, MapPinIcon } from 'lucide-react';

interface UsernamePageProps {
  params: {
    username: string;
  };
}
export default async function UsernamePage({ params }: UsernamePageProps) {
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
      <div className='flex justify-between px-5 py-2'>
        <Avatar className='-mt-20 h-28 w-28 border-2 lg:h-36 lg:w-36'>
          <AvatarImage
            alt='user avatar'
            src={data.avatar_url}
            className='object-cover'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button>Edit Profile</Button>
      </div>
      <div className='mt-2 px-4'>
        <div>
          <h2 className='text-lg font-bold'>{data.name}</h2>
          <p className='text-md font-semibold'>@{data.username}</p>
        </div>
        <div className='mt-2'>
          <p className='line-clamp-3 overflow-hidden text-ellipsis text-sm text-accent-foreground/60'>
            {data.about_you || 'No Description'}
          </p>
        </div>
        <div className='mt-2 flex gap-x-5'>
          <div className='mr-6 flex items-center space-x-2'>
            <MapPinIcon className='h-4 w-4' />
            <p className='text-accent-foreground/60'>Kujata, Elemental</p>
          </div>
          <div className='mr-6 flex items-center space-x-2'>
            <CalendarDaysIcon className='h-4 w-4' />
            <p className='text-accent-foreground/60'>Joined October 2022</p>
          </div>
        </div>
        <div className='mt-1 flex gap-x-10'>
          <p className=''>
            {/* {followers > 1000 ? `${followers / 1000}k` : followers}{' '} */}
            0 following
          </p>
          <p className=''>
            {/* {followers > 1000 ? `${followers / 1000}k` : followers}{' '} */}
            0 followers
          </p>
        </div>
      </div>
    </div>
  );
}
