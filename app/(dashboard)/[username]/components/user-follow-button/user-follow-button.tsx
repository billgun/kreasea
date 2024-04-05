'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { deleteUserFollow, postUserFollow } from './actions';

interface UserFollowButtonProps {
  userId: string;
  hasFollowed: boolean;
}
export function UserFollowButton({
  userId,
  hasFollowed,
}: UserFollowButtonProps) {
  const [isFollowed, setIsFollowed] = useState(hasFollowed);

  const onClickFollow = () => {
    if (isFollowed) {
      setIsFollowed(false);
      deleteUserFollow({ userId });
    } else {
      setIsFollowed(true);
      postUserFollow({ userId });
    }
  };

  return (
    <Button variant={'secondary'} onClick={onClickFollow}>
      {isFollowed ? 'Unfollow' : 'Follow'}
    </Button>
  );
}
