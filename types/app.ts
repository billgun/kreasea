//TODO: Fix user_post_likes & is_liked typing
export interface Post {
  id: string;
  title: string | null;
  content: string;
  created_at: string;
  like_count: any;
  is_liked: any;
  username: string;
  name: string;
  avatar_url: string | null;
}
