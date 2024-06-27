// TODO: Add alert dialog for delete
'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatPostDate } from '@/lib/utils';
import { PostType } from '@/types/app';
import { MessageCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import PostLikeButton from '../post-like-button/post-like-button';
import { deletePost } from './actions';
import Image from 'next/image';
import { USER_POSTS_BUCKET } from '@/types/bucket';
import { getPublicFileUrl } from '@/lib/actions/bucket';
import { ShareToSocial } from '@/components/share-to-social';
import { PostMoreMenu } from '@/components/more-post-menu';
import { PostContent, PostHeader } from '@/components/post';

interface UsernamePostFeedProps {
  sessionUsername: string;
  posts: PostType[];
}

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
          <PostHeader>
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
            <PostMoreMenu
              postId={post.id}
              postUsername={post.username}
              sessionUsername={sessionUsername}
            />
          </PostHeader>
          <PostContent className='cursor-pointer'>
            <Link href={`/posts/${post.id}`}>
              <p className='font-medium'>{post?.title || ''}</p>
              {post.image_url && (
                <div className='relative h-48 w-full'>
                  <Image
                    src={getPublicFileUrl({
                      bucket: USER_POSTS_BUCKET,
                      filename: post.image_url,
                    })}
                    fill
                    className='object-contain'
                    alt='Image post'
                  />
                </div>
              )}
              <div
                className='line-clamp-2'
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(/<img[^>]*>/g, ''),
                }}
              />
            </Link>
            <div className='flex items-center justify-start gap-x-8'>
              <PostLikeButton
                postId={post.id}
                postLikes={post.like_count}
                postIsLiked={post.is_liked}
              />
              <MessageCircleIcon className='h-5 w-5 fill-muted-foreground stroke-none' />
              <ShareToSocial />
            </div>
          </PostContent>
        </div>
      ))}
    </>
  );
}
