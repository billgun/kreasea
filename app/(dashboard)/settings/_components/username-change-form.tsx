'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { usernameChange } from './actions';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const usernameChangeSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export type usernameChangeSchema = z.infer<typeof usernameChangeSchema>;

export default function UsernameChangeForm({ username }: { username: string }) {
  const router = useRouter();

  const form = useForm<usernameChangeSchema>({
    resolver: zodResolver(usernameChangeSchema),
    defaultValues: {
      username,
    },
  });

  async function onSubmit(values: usernameChangeSchema) {
    const { error } = await usernameChange(values);
    if (error) {
      form.setError('root', { message: error.message });
      throw new Error('Could not authenticate user');
    }
    router.refresh();
    toast.success('Username changed');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Username</CardTitle>
            <CardDescription>Ganti username anda.</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input className='w-full' {...field} autoComplete='off' />
                  </FormControl>
                  <FormDescription>
                    This is your profile link. ex. kreasea.com/johndoe
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type='submit'>Save</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
