'use client';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronDownIcon, ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { postUserPost } from '@/lib/queries/user-posts';

const statusUpdateSchema = z.object({
  content: z.string().min(2, {
    message: 'Status must be at least 2 characters.',
  }),
});
export type statusUpdateSchema = z.infer<typeof statusUpdateSchema>;

export function StatusUpdateForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<statusUpdateSchema>({
    resolver: zodResolver(statusUpdateSchema),
    defaultValues: {
      content: '',
    },
  });

  function onSubmit(values: statusUpdateSchema) {
    setIsLoading(true);
    try {
      postUserPost({ content: values.content });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex-1'>
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className='resize-none border bg-transparent focus:ring-0'
                  placeholder='What is happening?!'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='mt-2 flex items-center justify-between'>
          <div className='flex space-x-1 text-blue-400'>
            <ImageIcon />
          </div>
          <div className='inline-flex rounded-md shadow-sm'>
            <Button
              variant={'default'}
              type='submit'
              disabled={isLoading}
              className='rounded-r-none px-6'
            >
              {isLoading && (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              )}
              Post
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className='rounded-l-none px-2' variant='outline'>
                  <ChevronDownIcon className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>
                  <Link href={'/editor/blog'}>Create Post with an Editor</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </form>
    </Form>
  );
}
