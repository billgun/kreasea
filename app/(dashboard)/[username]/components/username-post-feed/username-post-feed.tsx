// TODO: Add alert dialog for delete
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
import { formatPostDate } from '@/lib/utils';
import { Post } from '@/types/app';
import {
  AlertTriangleIcon,
  FacebookIcon,
  LinkIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  ShareIcon,
  Trash2Icon,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import PostLikeButton from '../post-like-button/post-like-button';
import { ProfilePostContent, ProfilePostHeader } from '../profile-post';
import { deletePost } from './actions';

interface UsernamePostFeedProps {
  sessionUsername: string;
  posts: Post[];
}

export const revalidate = 0;

export function UsernamePostFeed({
  sessionUsername,
  posts,
}: UsernamePostFeedProps) {
  const [userPosts, setUserPosts] = useState(posts);
  const onClickDelete = ({ postId }: { postId: string }) => {
    deletePost({ postId });
    const updatedList = userPosts.filter((post) => post.id !== postId);
    setUserPosts(updatedList);
  };

  return (
    <>
      {userPosts.map((post) => (
        <div key={post.id}>
          <ProfilePostHeader>
            <div className='flex items-center gap-x-2 py-0'>
              <Avatar className='mt-1 h-9 w-9'>
                <AvatarImage
                  src={post.avatar_url || ''}
                  alt={`${post.username} avatar`}
                />
                <AvatarFallback>
                  {post.name?.slice(0, 1).toUpperCase() || 'N/A'}
                </AvatarFallback>
              </Avatar>
              <Link
                href={`${post.username}`}
                className='font-medium hover:underline'
              >
                {post.name}
              </Link>
              <p className=''>@{post.username}</p>·
              <p className='text-sm text-muted-foreground'>
                {formatPostDate(post.created_at)}
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontalIcon className='h-5 w-5 stroke-muted-foreground' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {sessionUsername === post.username ? (
                  <DropdownMenuItem
                    className='text-destructive focus:text-destructive'
                    onClick={() => onClickDelete({ postId: post.id })}
                  >
                    <Trash2Icon className='mr-2 h-4 w-4' />
                    Delete this post
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem>
                    <AlertTriangleIcon className='mr-2 h-4 w-4' />
                    Report this post
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </ProfilePostHeader>
          <ProfilePostContent>
            <p className='font-medium'>{post?.title || ''}</p>
            <p>{post.content}</p>
            <div className='flex items-center justify-start gap-x-8'>
              <PostLikeButton
                postId={post.id}
                postLikes={post.like_count}
                postIsLiked={post.is_liked}
              />
              <MessageCircleIcon className='h-5 w-5 fill-muted-foreground stroke-none' />
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <ShareIcon className='h-5 w-5 stroke-muted-foreground' />
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
          </ProfilePostContent>
        </div>
      ))}
    </>
  );
}
