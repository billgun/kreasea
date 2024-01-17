import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Mail } from '../data';
import { useMail } from '../use-message';
import { Label } from '@/components/ui/label';
import { formatDistanceToNow } from 'date-fns';
import { Button, buttonVariants } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface MailListProps {
  items: Mail[];
}

export function MessageList({ items }: MailListProps) {
  const [mail, setMail] = useMail();

  return (
    <ScrollArea className='h-[79vh]'>
      <div className='flex cursor-pointer flex-col gap-2 p-4 pt-0'>
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-auto flex-col whitespace-normal py-4',
              mail.selected === item.id && 'bg-muted'
            )}
            onClick={() =>
              setMail({
                ...mail,
                selected: item.id,
              })
            }
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-4'>
                <div className='flex'>
                  <Avatar className='h-9 w-9'>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <div className='text-base font-semibold'>
                          {item.name}
                        </div>
                        {!item.read && (
                          <span className='flex h-2 w-2 rounded-full bg-blue-600' />
                        )}
                      </div>
                      <div
                        className={cn(
                          'text-sm',
                          mail.selected === item.id
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        )}
                      >
                        {formatDistanceToNow(new Date(item.date), {
                          addSuffix: true,
                        })}
                      </div>
                    </div>
                  </div>
                  <div className='line-clamp-1 text-muted-foreground'>
                    {item.text.substring(0, 150)}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='flex w-full flex-col gap-1'>
              <div className='flex items-center'>
                <div className='flex items-center gap-2'>
                  <div className='font-semibold'>{item.name}</div>
                  {!item.read && (
                    <span className='flex h-2 w-2 rounded-full bg-blue-600' />
                  )}
                </div>
                <div
                  className={cn(
                    'ml-auto text-xs',
                    mail.selected === item.id
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  )}
                >
                  {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </div> */}
            {/* <div className='line-clamp-1 text-muted-foreground'>
              {item.text.substring(0, 300)}
            </div> */}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
