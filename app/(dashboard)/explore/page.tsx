import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Mail, Search, User } from 'lucide-react';
import { ProfileCard } from './components/profile-card';

const categories = [
  {
    name: 'Art',
    icon: <User className='mr-2 h-4 w-4' />,
  },
  {
    name: 'Music',
    icon: <User className='mr-2 h-4 w-4' />,
  },
  {
    name: 'Games',
    icon: <User className='mr-2 h-4 w-4' />,
  },
  {
    name: 'Writing',
    icon: <User className='mr-2 h-4 w-4' />,
  },
  {
    name: 'Photography',
    icon: <User className='mr-2 h-4 w-4' />,
  },
  {
    name: 'Cosplay',
    icon: <User className='mr-2 h-4 w-4' />,
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

      <ScrollArea>
        <div className='mt-4 flex space-x-4 pb-4'>
          {categories.map((category, i) => {
            return (
              <div key={i}>
                <Button size={'lg'}>
                  {category.icon}
                  {category.name}
                </Button>
              </div>
            );
          })}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>

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
