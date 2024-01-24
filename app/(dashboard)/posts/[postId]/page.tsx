import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ProfilePost } from '../../[username]/components/profile-post';

interface PostLayoutProps {
  params: {
    postId: string;
  };
}
export default function PostPageLayout({ params }: PostLayoutProps) {
  return <ProfilePost />;
}
