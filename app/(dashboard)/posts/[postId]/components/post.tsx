import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getPublicFileUrl } from '@/lib/actions/bucket';
import { USER_POSTS_BUCKET } from '@/types/bucket';
import { Tables } from '@/types/database';
import Image from 'next/image';

export function Post({ post }: { post: Tables<'user_posts'> }) {
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
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
