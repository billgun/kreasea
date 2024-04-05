import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Search, UserIcon } from 'lucide-react';
import { getCreators } from './actions';
import { ProfileCard } from './components/profile-card';

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
  const users = await getCreators();
  return (
    <div className='container h-full px-4 py-6 lg:px-8'>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Temukan kreator favoritmu
          </h2>
        </div>
      </div>
      <Separator className='my-4' />

      <form className='w-full'>
        <div className='flex w-full items-center space-x-2'>
          <div className='relative w-full'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input placeholder='Cari kreatormu di Kreasea' className='pl-8' />
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
        {users.map((user) => (
          <ProfileCard key={user.id} profile={user} />
        ))}
      </div>
    </div>
  );
}
