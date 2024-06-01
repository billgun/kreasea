import { ProfileCard } from '@/components/profile-card';
import { RecentPost } from './components/recent-posts';

interface PostLayoutProps {
  params: {
    postId: string;
  };
  children: React.ReactNode;
}
export default function PostPageLayout({ params, children }: PostLayoutProps) {
  return children;
}
