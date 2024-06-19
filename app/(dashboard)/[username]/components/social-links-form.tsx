'use client';

import { Icons, TwitterXIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tables } from '@/types/database';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  TwitchIcon,
  YoutubeIcon,
} from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { postUserSocialMedia } from '../actions';

const socialLinksSchema = z.object({
  website: z.string().optional().or(z.literal('')),
  instagram: z
    .string()
    .startsWith('https://www.instagram.com/')
    .optional()
    .or(z.literal('')),
  facebook: z
    .string()
    .startsWith('https://www.facebook.com/')
    .optional()
    .or(z.literal('')),
  twitter: z
    .string()
    .startsWith('https://www.x.com/')
    .optional()
    .or(z.literal('')),
  youtube: z
    .string()
    .startsWith('https://www.youtube.com/')
    .optional()
    .or(z.literal('')),
  twitch: z
    .string()
    .startsWith('https://www.twitch.tv/')
    .optional()
    .or(z.literal('')),
  //   discord: z.string().optional(),
});
export type socialLinksSchema = z.infer<typeof socialLinksSchema>;
const socialLinkEnum = z.enum([
  'website',
  'instagram',
  'facebook',
  'twitter',
  'youtube',
  'twitch',
  //   'discord',
]);
type socialLinkEnum = z.infer<typeof socialLinkEnum>;

const socialLinks: {
  name: socialLinkEnum;
  icon: React.ReactNode;
  placeholder: string;
}[] = [
  {
    name: 'website',
    icon: (
      <GlobeIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
    ),
    placeholder: 'Your website',
  },
  {
    name: 'instagram',
    icon: (
      <InstagramIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
    ),
    placeholder: 'Instagram',
  },
  {
    name: 'facebook',
    icon: (
      <FacebookIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
    ),
    placeholder: 'Facebook',
  },
  {
    name: 'twitter',
    icon: (
      <TwitterXIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
    ),
    placeholder: 'X',
  },
  {
    name: 'twitch',
    icon: (
      <TwitchIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
    ),
    placeholder: 'Twitch',
  },
  //   {
  //     name: 'discord',
  //     icon: (
  //       <DiscordIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
  //     ),
  //     placeholder: 'Discord',
  //   },
  {
    name: 'youtube',
    icon: (
      <YoutubeIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
    ),
    placeholder: 'Youtube',
  },
];

interface SocialLinksFormProps {
  userSocialLinks: Tables<'user_social_links'> | null;
}

export default function SocialLinksForm({
  userSocialLinks,
}: SocialLinksFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 1. Define your form.
  const form = useForm<socialLinksSchema>({
    resolver: zodResolver(socialLinksSchema),
    defaultValues: {
      website: userSocialLinks?.website || '',
      instagram: userSocialLinks?.instagram || '',
      facebook: userSocialLinks?.facebook || '',
      twitter: userSocialLinks?.twitter || '',
      youtube: userSocialLinks?.youtube || '',
      twitch: userSocialLinks?.twitch || '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: socialLinksSchema) {
    setIsLoading(true);
    try {
      postUserSocialMedia(values);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className='grid w-full items-center gap-4'>
              {socialLinks.map(({ name, icon, placeholder }) => (
                <FormField
                  control={form.control}
                  name={name}
                  key={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className='relative w-full'>
                          {icon}
                          <Input
                            placeholder={placeholder}
                            className='pl-10'
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </CardContent>
          <CardFooter>
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
                Save Changes
              </Button>
            </div>
          </CardFooter>
        </form>
      </Form>
    </>
  );
}
