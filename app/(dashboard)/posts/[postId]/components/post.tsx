import PostLikeButton from '@/app/(dashboard)/[username]/components/post-like-button/post-like-button';
import { ShareToSocial } from '@/components/share-to-social';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getPublicFileUrl } from '@/lib/actions/bucket';
import { Post as PostType } from '@/types/app';
import { USER_POSTS_BUCKET } from '@/types/bucket';
import Image from 'next/image';

export function Post({ post }: { post: PostType }) {
  return (
    <Card className='py-4'>
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
    </Card>
  );
}
