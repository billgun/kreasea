'use client';

import { Icons } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn, formatPostDate } from '@/lib/utils';
import { Post } from '@/types/app';
import {
  AlertTriangle,
  FacebookIcon,
  Heart,
  LinkIcon,
  MessageCircle,
  MoreHorizontal,
  Share,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface ProfilePostProps {
  className?: string;
  profile: {
    username: string;
    name: string;
    avatar_url: string | null;
  };
  post: Post;
}
export function ProfilePost({ className, profile, post }: ProfilePostProps) {
  console.log(post);

  const [isLiked, setIsLiked] = useState(false);

  const onClickLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className='flex items-center gap-x-2 py-0 pt-2'>
        <Avatar className='mt-1 h-9 w-9'>
          <AvatarImage
            src={profile.avatar_url || ''}
            alt={`${profile.username} avatar`}
          />
          <AvatarFallback>
            {profile.name.slice(0, 1).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <Link
          href={`${profile.username}`}
          className='font-medium hover:underline'
        >
          {profile.name}
        </Link>
        <p className=''>@{profile.username}</p>·
        <p className='text-sm text-muted-foreground'>
          {formatPostDate(post.created_at)}
        </p>
      </div>
      <div className='mt-2 space-y-2 rounded-lg rounded-tl-none border bg-card px-4 py-2 text-card-foreground shadow-sm'>
        <p className='font-medium'>{post?.title || ''}</p>
        <p>{post.content}</p>
        <div className='flex justify-between'>
          <div className='flex items-center justify-start gap-x-8'>
            <div
              className='flex cursor-pointer flex-row items-center gap-x-2'
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
            <MessageCircle className='h-5 w-5 fill-muted-foreground stroke-none' />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Share className='h-5 w-5 stroke-muted-foreground' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Share this post</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LinkIcon className='mr-2 h-4 w-4' />
                  Copy link
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icons.twitter className='mr-2 h-4 w-4 fill-current' />
                  Share on X
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FacebookIcon className='mr-2 h-4 w-4' />
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
        </div>
      </div>
    </>
  );
}
