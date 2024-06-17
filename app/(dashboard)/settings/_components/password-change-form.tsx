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
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { passwordChange } from './actions';
import { useRouter } from 'next/navigation';

const passwordChangeSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: z.string().min(2, {
      message: 'password must be at least 2 characters.',
    }),
    newPasswordConfirmation: z.string().min(2, {
      message: 'password must be at least 2 characters.',
    }),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirmation, {
    message: 'New password and confirmation must match',
    path: ['newPasswordConfirmation'], // Error will be shown at the confirmation field
  });

export type passwordChangeSchema = z.infer<typeof passwordChangeSchema>;

export default function PasswordChangeForm() {
  const router = useRouter();

  const form = useForm<passwordChangeSchema>({
    resolver: zodResolver(passwordChangeSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
    },
  });

  async function onSubmit(values: passwordChangeSchema) {
    const { error } = await passwordChange(values);
    if (error) {
      form.setError('root', { message: error.message });
      throw new Error('Could not authenticate user');
    }

    router.push('/');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <FormMessage>{form.formState.errors.root?.message}</FormMessage>
            <FormField
              control={form.control}
              name='currentPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current password</FormLabel>
                  <FormControl>
                    <Input className='w-full' {...field} type='password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='newPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <Input className='w-full' {...field} type='password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='newPasswordConfirmation'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password confirmation</FormLabel>
                  <FormControl>
                    <Input className='w-full' {...field} type='password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
