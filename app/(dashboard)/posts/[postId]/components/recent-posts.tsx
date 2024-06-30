import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getPublicFileUrl } from '@/lib/queries/bucket';
import { cn, formatPostDate } from '@/lib/utils';
import { PostType } from '@/types/app';
import { USER_POSTS_BUCKET } from '@/types/bucket';
import Image from 'next/image';
import Link from 'next/link';
import fallbackImage from '@/public/fallback.jpg';

export function RecentPost({ recentPost }: { recentPost: PostType[] }) {
  return (
    <Card>
      <CardHeader className='py-3'>
        <CardTitle className='text-lg'>
          Recent Posts by {recentPost[0].name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recentPost.map((post) => {
          let image =
            getPublicFileUrl({
              bucket: USER_POSTS_BUCKET,
              filename: post.image_url,
            }) || fallbackImage;

          return (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'flex w-full cursor-pointer justify-start gap-x-4 whitespace-normal py-8'
                )}
              >
                <Image src={image} alt='image' width={50} height={50} />

                <div className='flex w-full flex-col'>
                  <div className='line-clamp-1'>{post.title}</div>
                  <div
                    className='line-clamp-1 font-normal'
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
