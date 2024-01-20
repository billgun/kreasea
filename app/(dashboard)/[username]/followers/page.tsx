import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface AboutPageProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}
export default function FollowersPage() {
  return (
    <div className='bg-[#1a1a1a] p-4 text-white'>
      <div className='flex items-center justify-between rounded-md bg-[#292929] p-4'>
        <div className='flex items-center space-x-3'>
          <Avatar>
            <AvatarImage
              alt='Vishal Singh'
              src='/placeholder.svg?height=40&width=40'
            />
            <AvatarFallback>VS</AvatarFallback>
          </Avatar>
          <div>
            <div className='font-semibold'>Vishal Singh</div>
            <div className='text-sm text-gray-400'>@vishal2376</div>
            <div className='text-sm'>
              Android Dev (Kotlin) | Rust 🦀 | Blender 🚀 Sharing Progress Daily
              🎉
            </div>
          </div>
        </div>
        <Button className='bg-blue-600 hover:bg-blue-700'>Following</Button>
      </div>
      <div className='mt-2 flex items-center justify-between rounded-md bg-[#292929] p-4'>
        <div className='flex items-center space-x-3'>
          <Avatar>
            <AvatarImage
              alt='Patricia Bowes'
              src='/placeholder.svg?height=40&width=40'
            />
            <AvatarFallback>PB</AvatarFallback>
          </Avatar>
          <div>
            <div className='font-semibold'>Patricia Bowes</div>
            <div className='text-sm text-gray-400'>@patricia_bowes</div>
          </div>
        </div>
        <Button className='bg-blue-600 hover:bg-blue-700'>Follow</Button>
      </div>
      <div className='mt-2 flex items-center justify-between rounded-md bg-[#292929] p-4'>
        <div className='flex items-center space-x-3'>
          <Avatar>
            <AvatarImage
              alt='Kristin Thomas'
              src='/placeholder.svg?height=40&width=40'
            />
            <AvatarFallback>KT</AvatarFallback>
          </Avatar>
          <div>
            <div className='font-semibold'>Kristin Thomas</div>
            <div className='text-sm text-gray-400'>@KristinEnrichee</div>
          </div>
        </div>
        <Button className='bg-blue-600 hover:bg-blue-700'>Follow</Button>
      </div>
      <div className='mt-2 flex items-center justify-between rounded-md bg-[#292929] p-4'>
        <div className='flex items-center space-x-3'>
          <Avatar>
            <AvatarImage
              alt='Victoria Whitehead'
              src='/placeholder.svg?height=40&width=40'
            />
            <AvatarFallback>VW</AvatarFallback>
          </Avatar>
          <div>
            <div className='font-semibold'>Victoria Whitehead</div>
            <div className='text-sm text-gray-400'>@Victor1brrex</div>
          </div>
        </div>
        <Button className='bg-blue-600 hover:bg-blue-700'>Follow</Button>
      </div>
    </div>
  );
}
