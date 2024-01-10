'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { createClient } from '@/utils/supabase/client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const signupFormSchema = z.object({
  username: z.string().min(1, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Name must be at least 2 characters.',
    })
    .email({
      message: 'Must be in email format',
    }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  tnc: z.boolean().refine((value) => value === true, {
    message: 'Checkbox must be checked',
  }),
});

type SignupFormValues = z.infer<typeof signupFormSchema>;

const defaultValues: Partial<SignupFormValues> = {
  username: '',
  email: '',
  password: '',
  tnc: false,
};

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema),
    defaultValues,
  });
  async function onSubmit(formData: SignupFormValues) {
    setIsLoading(true);

    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.username,
          user_name: formData.username,
        },
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    setIsLoading(false);

    let authError = null;

    if (
      data.user &&
      data.user.identities &&
      data.user.identities.length === 0
    ) {
      authError = {
        name: 'AuthApiError',
        message: 'User already exists',
      };
      form.setError('root', { message: authError.message });
    } else if (error) {
      authError = {
        name: error.name,
        message: error.message,
      };

      form.setError('root', { message: authError.message });
    }

    console.log(data);
  }

  return (
    <Form {...form}>
      <FormMessage>{form.formState.errors.root?.message}</FormMessage>
      <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder='Your name' {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <FormField
              control={form.control}
              name='tnc'
              render={({ field }) => (
                <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className='space-y-1 leading-none'>
                    <FormLabel>
                      I accept the <Link href={'/terms'}>terms</Link> &{' '}
                      <Link href={'/privacy'}>privacy policy</Link>
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>

        <div>
          <Button
            variant={'default'}
            type='submit'
            className='w-full font-semibold'
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Sign in
          </Button>
        </div>
      </form>
    </Form>
  );
}