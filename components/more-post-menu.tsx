'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  AlertTriangleIcon,
  MoreHorizontalIcon,
  Trash2Icon,
} from 'lucide-react';
import { deletePost } from '@/app/(dashboard)/[username]/components/username-post-feed/actions';

interface ProfileProps {
  sessionUsername: string;
  postUsername: string;
  postId: string;
}

export function PostMoreMenu({
  sessionUsername,
  postUsername,
  postId,
}: ProfileProps) {
  const onClickDelete = ({ postId }: { postId: string }) => {
    deletePost({ postId });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontalIcon className='h-5 w-5 stroke-muted-foreground' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {sessionUsername === postUsername ? (
          <DropdownMenuItem
            className='text-destructive focus:text-destructive'
            onClick={() => onClickDelete({ postId })}
          >
            <Trash2Icon className='mr-2 h-4 w-4' />
            Delete this post
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <AlertTriangleIcon className='mr-2 h-4 w-4' />
            Report this post
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
