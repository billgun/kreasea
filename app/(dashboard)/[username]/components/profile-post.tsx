'use client';

import { Icons } from '@/components/icons';
import { Alert } from '@/components/ui/alert';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import {
  AlertTriangle,
  Facebook,
  Heart,
  Link,
  MessageCircle,
  MoreHorizontal,
  Share,
} from 'lucide-react';
import { useState } from 'react';

interface ProfilePostProps {
  className?: string;
}
export function ProfilePost({ className }: ProfilePostProps) {
  const [isLiked, setIsLiked] = useState(false);

  const onClickLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <Card className={`${className}`}>
      <CardHeader className='space-y-0'>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Nov 20, 2023</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className='justify-between'>
        <div className='flex items-center justify-start gap-x-4'>
          <div
            className='flex cursor-pointer flex-row items-center'
            onClick={onClickLike}
          >
            <Heart
              className={cn(
                `h-5 w-5 stroke-none`,
                isLiked ? 'fill-red-500' : 'fill-muted-foreground'
              )}
            />
            2
          </div>
          {/* <div className='flex flex-row items-center'> */}
          <MessageCircle className='h-5 w-5 fill-muted-foreground stroke-none' />
          {/* </div> */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Share className='h-5 w-5 stroke-muted-foreground' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Share this post</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link className='mr-2 h-4 w-4' />
                Copy link
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icons.twitter className='mr-2 h-4 w-4 fill-current' />
                Share on X
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Facebook className='mr-2 h-4 w-4' />
                Share on Facebook
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal className='h-5 w-5 stroke-muted-foreground' />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <AlertTriangle className='mr-2 h-4 w-4' />
              Report this post
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
}
