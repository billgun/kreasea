import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Mail, Search, User, UserIcon } from 'lucide-react';
import { ProfileCard } from './components/profile-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const categories = [
  {
    name: 'Art',
    icon: UserIcon,
  },
  {
    name: 'Music',
    icon: UserIcon,
  },
  {
    name: 'Games',
    icon: UserIcon,
  },
  {
    name: 'Writing',
    icon: UserIcon,
  },
  {
    name: 'Photography',
    icon: UserIcon,
  },
  {
    name: 'Cosplay',
    icon: UserIcon,
  },
];

export default async function ExplorePage() {
  return (
    <div className='container h-full px-4 py-6 lg:px-8'>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Temukan kreator favoritmu
          </h2>
          <p className='text-sm text-muted-foreground'>
            Kita mencari kreator favoritmu
          </p>
        </div>
      </div>
      <Separator className='my-4' />

      <form className='w-full'>
        <div className='flex w-full items-center space-x-2'>
          <div className='relative w-full'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input placeholder='Temukan kreator di Ko-fi' className='pl-8' />
            <Button
              className='absolute right-4 top-3 h-4 w-4 text-muted-foreground'
              type='submit'
              variant={'none'}
            >
              Search
            </Button>
          </div>
        </div>
      </form>

      <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-4'>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}
