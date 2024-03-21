import { getUserPostsByUsername, getUserProfileByUsername } from '@/lib/auth';
import { ProfilePost } from './profile-post';

interface UsernamePostFeedProps {
  username: string;
}
export async function UsernamePostFeed({ username }: UsernamePostFeedProps) {
  const profile = await getUserProfileByUsername({ username });
  const posts = await getUserPostsByUsername({ username });

  return (
    <div>
      {posts.map((post) => (
        <ProfilePost key={post.id} post={post} profile={profile} />
      ))}
    </div>
  );
}