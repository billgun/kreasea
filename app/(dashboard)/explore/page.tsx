import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

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
      <div className='flex w-full max-w-sm items-center space-x-2'>
        <Input type='email' placeholder='Email' />
        <Button type='submit'>Subscribe</Button>
      </div>
    </div>
  );
}
