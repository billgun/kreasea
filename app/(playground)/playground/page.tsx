'use client';
import { account } from '@/app/actions/stripe';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function PlaygroundPage() {
  const formAction = async (data: FormData): Promise<void> => {
    console.log('click');
    await account();
  };
  return (
    <div className='max-w-[500px]'>
      <div className='flex'>
        <div>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div>Name</div>
          <div>
            Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum
            Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum
            Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum
            Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum Lipsum{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
