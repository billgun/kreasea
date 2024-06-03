import PostLikeButton from '@/app/(dashboard)/[username]/components/post-like-button/post-like-button';
import { PostMoreMenu } from '@/components/more-post-menu';
import { PostContent, PostHeader } from '@/components/post';
import { ShareToSocial } from '@/components/share-to-social';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getPublicFileUrl } from '@/lib/actions/bucket';
import { formatPostDate } from '@/lib/utils';
import { PostType } from '@/types/app';
import { USER_POSTS_BUCKET } from '@/types/bucket';
import Image from 'next/image';
import Link from 'next/link';

interface PostProps {
  post: PostType;
  sessionUsername: string;
}

export function Post({ post, sessionUsername }: PostProps) {
  return (
    <>
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
        <CardHeader className='py-4'>
          <CardTitle className='text-4xl'>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
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
            dangerouslySetInnerHTML={{ __html: post.content }}
            className='prose prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:m-0 prose-ol:my-2 prose-ul:my-2 prose-li:m-0 prose-hr:m-4'
          />
        </CardContent>
        <CardFooter>
          <div className='flex items-center justify-start gap-x-8'>
            <PostLikeButton
              postId={post.id}
              postLikes={post.like_count}
              postIsLiked={post.is_liked}
            />
            <ShareToSocial />
          </div>{' '}
        </CardFooter>
      </PostContent>
    </>
  );
}
