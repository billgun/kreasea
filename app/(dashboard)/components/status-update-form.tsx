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
import { ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { postStatusUpdate } from '../[username]/actions';

const statusUpdateSchema = z.object({
  status: z.string().min(2, {
    message: 'Status must be at least 2 characters.',
  }),
});
export type statusUpdateSchema = z.infer<typeof statusUpdateSchema>;

export function StatusUpdateForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<statusUpdateSchema>({
    resolver: zodResolver(statusUpdateSchema),
    defaultValues: {
      status: '',
    },
  });

  function onSubmit(values: statusUpdateSchema) {
    setIsLoading(true);
    try {
      postStatusUpdate(values);
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
          name='status'
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
          <Button variant={'default'} type='submit' disabled={isLoading}>
            {' '}
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Post
          </Button>
        </div>
      </form>
    </Form>
  );
}
