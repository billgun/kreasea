'use client';
import { Cropper } from '@/components/cropper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useFileInput from '@/hooks/useFileInput';
import useFileInputWithCropper from '@/hooks/useFileInputWithCropper';
import { Database } from '@/types/database';
import { createClient } from '@/utils/supabase/server';
import { zodResolver } from '@hookform/resolvers/zod';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { ChangeEvent, createRef, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface ProfileEditFormLayoutProps {
  profile: Database['public']['Tables']['user_profiles']['Row'];
}

export function ProfileEditForm({ profile }: ProfileEditFormLayoutProps) {
  const [open, setOpen] = useState(false);
  const [openCrop, setOpenCrop] = useState(false);

  const background = useFileInputWithCropper(profile.background_url || '');
  const avatar = useFileInputWithCropper(profile.avatar_url || '');

  const profileEditSchema = z.object({
    avatar: z
      .instanceof(File)
      .refine((file) => file.type.startsWith('image/'))
      .optional(),
    // avatar: z.any(),
    name: z.string().min(1),
    description: z.string().optional(),
  });

  const form = useForm<z.infer<typeof profileEditSchema>>({
    resolver: zodResolver(profileEditSchema),
    defaultValues: {
      name: profile.name,
      description: profile.description || '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof profileEditSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='w-full'>
          <FormField
            control={form.control}
            name='avatar'
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormControl>
                  <>
                    <Image
                      alt='User background'
                      className='h-36 w-full bg-foreground'
                      height='96'
                      src={background.previewImage}
                      style={{
                        aspectRatio: '100/100',
                        objectFit: 'cover',
                      }}
                      width='1248'
                      onClick={background.handleButtonClick}
                    />
                    <Input
                      {...fieldProps}
                      ref={background.fileInputRef}
                      className='hidden'
                      placeholder='Picture'
                      type='file'
                      accept='image/*'
                      onChange={(event) => {
                        background.handleFileChange(event);
                        if (
                          event.target.files &&
                          event.target.files.length > 0
                        ) {
                          setOpen(true);
                          onChange(event.target.files && event.target.files[0]);
                        }
                      }}
                    />
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Image Crop</DialogTitle>
                        </DialogHeader>
                        <Cropper
                          ref={background.cropperRef}
                          style={{ height: 400, width: '100%' }}
                          aspectRatio={1265 / 256}
                          src={background.previewImage}
                          viewMode={1}
                          background={false}
                          autoCropArea={1}
                          checkOrientation={false}
                          dragMode='move'
                          zoomable={false}
                        />
                        <DialogFooter>
                          <Button
                            onClick={() => {
                              setOpen(false);
                              background.handleCropData();
                            }}
                          >
                            Crop
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='container flex justify-center px-5 py-2'>
            <FormField
              control={form.control}
              name='avatar'
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Avatar
                        className='-mt-16 h-14 w-14 border-2 lg:h-28 lg:w-28'
                        onClick={avatar.handleButtonClick}
                      >
                        <AvatarImage
                          alt='user avatar'
                          src={avatar.previewImage || ''}
                          className='object-cover'
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Input
                        {...fieldProps}
                        ref={avatar.fileInputRef}
                        className='hidden'
                        placeholder='Picture'
                        type='file'
                        accept='image/*'
                        onChange={(event) => {
                          avatar.handleFileChange(event);
                          if (
                            event.target.files &&
                            event.target.files.length > 0
                          ) {
                            setOpenCrop(true);
                            onChange(
                              event.target.files && event.target.files[0]
                            );
                          }
                        }}
                      />
                      <Dialog open={openCrop} onOpenChange={setOpenCrop}>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Image Crop</DialogTitle>
                          </DialogHeader>
                          <Cropper
                            ref={avatar.cropperRef}
                            style={{ height: 400, width: '100%' }}
                            aspectRatio={1 / 1}
                            src={avatar.previewImage}
                            viewMode={1}
                            background={false}
                            autoCropArea={1}
                            checkOrientation={false}
                            dragMode='move'
                            zoomable={false}
                          />
                          <DialogFooter>
                            <Button
                              onClick={() => {
                                setOpenCrop(false);
                                avatar.handleCropData();
                              }}
                            >
                              Crop
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className='mt-0 grid gap-4'>
          <div className='grid gap-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid gap-2'>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type='submit'>Save</Button>
      </form>
    </Form>
  );
}
