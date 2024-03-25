'use client';

import { cn } from '@/lib/utils';
import { HeartIcon } from 'lucide-react';
import { useState } from 'react';
import { deletePostLike, postPostLike } from './actions';

interface PostLikeButtonProps {
  postId: string;
  postLikes: number;
  postIsLiked: boolean;
}
export default function PostLikeButton({
  postId,
  postLikes,
  postIsLiked,
}: PostLikeButtonProps) {
  const [likes, setLikes] = useState(postLikes);
  const [isLiked, setIsLiked] = useState(postIsLiked);

  const onClickLike = () => {
    if (isLiked) {
      deletePostLike({ postId });
      setLikes(likes - 1); // Decrease likes if already liked
    } else {
      postPostLike({ postId });
      setLikes(likes + 1); // Increase likes if not liked
    }
    setIsLiked(!isLiked);
  };

  return (
    <div
      className='flex cursor-pointer flex-row items-center gap-x-2'
      onClick={onClickLike}
    >
      <HeartIcon
        className={cn(
          `h-5 w-5 `,
          isLiked
            ? 'fill-red-500 stroke-none'
            : 'fill-none stroke-muted-foreground'
        )}
      />
      {likes === 0 ? '' : likes}
    </div>
  );
}
