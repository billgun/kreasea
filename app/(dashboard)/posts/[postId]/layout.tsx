import { ProfileCard } from '@/components/profile-card';
import { RecentPost } from './components/recent-posts';

interface PostLayoutProps {
  params: {
    postId: string;
  };
  children: React.ReactNode;
}
export default function PostPageLayout({ params, children }: PostLayoutProps) {
  return (
    <div className='container grid w-full grid-cols-3'>
      <div className='container col-span-2 px-4 py-6 lg:px-8'>{children}</div>
      <div className='container col-span-1 space-y-4 px-4 py-6 lg:px-8'>
        <ProfileCard />
        <RecentPost />
      </div>
    </div>
  );
}
