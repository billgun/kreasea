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

const usernameChangeSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

type usernameChangeSchema = z.infer<typeof usernameChangeSchema>;

export default function UsernameChangeForm() {
  const form = useForm<usernameChangeSchema>({
    resolver: zodResolver(usernameChangeSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: usernameChangeSchema) {}

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
            <Button type='submit'>Save password</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
