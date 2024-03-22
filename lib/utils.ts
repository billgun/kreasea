import { clsx, type ClassValue } from 'clsx';
import { format, formatDistanceToNowStrict } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
export function formatPostDate(date: string): string {
  if (new Date(date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)) {
    const array = formatDistanceToNowStrict(new Date(date)).split(' ');
    return array[0] + array[1][0];
  } else if (new Date(date).getFullYear() === new Date().getFullYear()) {
    return format(new Date(date), 'd MMM');
  } else {
    return format(new Date(date), 'd MMM yyyy');
  }
}
