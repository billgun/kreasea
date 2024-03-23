import { getUserPostsByUsername, getUserProfileByUsername } from '@/lib/auth';
import { ProfilePost } from './profile-post';

interface UsernamePostFeedProps {
  username: string;
}

export const revalidate = 0;

export async function UsernamePostFeed({ username }: UsernamePostFeedProps) {
  const profile = await getUserProfileByUsername({ username });
  const posts = await getUserPostsByUsername({ username });

  return (
    <>
      {posts.map((post) => (
        <ProfilePost key={post.id} post={post} profile={profile} />
      ))}
    </>
  );
}
