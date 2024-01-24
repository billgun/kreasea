import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';

interface RecentPostProps {
  params: {
    postId: string;
  };
}
export function RecentPost() {
  return (
    <Card>
      <CardHeader className='py-3'>
        <CardTitle className='text-lg'>Recent Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'flex w-full cursor-pointer justify-start gap-x-4 whitespace-normal py-8 '
          )}
        >
          <img
            src={'https://github.com/shadcn.png'}
            alt='image'
            width={50}
            height={50}
          />
          <div className='flex w-full flex-col'>
            <div className='line-clamp-2'>📢COMING SOON: OPEN WORLD!🎨</div>
            <div>February 23 at 8:29 AM</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
