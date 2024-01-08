import { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sidebar } from './components/sidebar';

export default async function DashboardPage() {
  return (
    <div className='h-full px-4 py-6 lg:px-8'>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold tracking-tight'>Listen Now</h2>
          <p className='text-sm text-muted-foreground'>
            Top picks for you. Updated daily.
          </p>
        </div>
      </div>
      <Separator className='my-4' />
      <div className='relative'></div>
      <div className='mt-6 space-y-1'>
        <h2 className='text-2xl font-semibold tracking-tight'>Made for You</h2>
        <p className='text-sm text-muted-foreground'>
          Your personal playlists. Updated daily.
        </p>
      </div>
      <Separator className='my-4' />
      <div className='relative'></div>
    </div>
  );
}
