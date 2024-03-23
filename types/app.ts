//TODO: Fix user_post_likes & is_liked typing
export interface Post {
  id: string;
  title: string | null;
  content: string;
  created_at: string;
  user_post_likes: any;
  is_liked: any;
}
