import * as React from 'react';

import { cn } from '@/lib/utils';

const ProfilePostHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center justify-between pt-2', className)}
    {...props}
  />
));

const ProfilePostContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mt-2 space-y-2 rounded-lg rounded-tl-none border bg-card p-4 text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));

export { ProfilePostContent, ProfilePostHeader };
