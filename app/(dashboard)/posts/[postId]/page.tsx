import { getPostByPostId } from './actions';
import { Post } from './components/post';
import { RecentPost } from './components/recent-posts';

interface PostPageProps {
  params: {
    postId: string;
  };
}
export default async function PostPage({ params }: PostPageProps) {
  const postData = await getPostByPostId({ postId: params.postId });
  console.log(postData);
  return (
    <div className='container grid w-full grid-cols-3'>
      <div className='container col-span-2 px-4 py-6 lg:px-8'>
        <Post post={postData} />
      </div>
      <div className='container col-span-1 space-y-4 px-4 py-6 lg:px-8'>
        <RecentPost />
      </div>
    </div>
  );
}
