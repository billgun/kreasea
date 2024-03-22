'use client';

import { cn } from '@/lib/utils';
import { HeartIcon } from 'lucide-react';
import { useState } from 'react';

export default function PostLikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const onClickLike = () => {
    if (isLiked) {
      setLikes(likes - 1); // Decrease likes if already liked
    } else {
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
