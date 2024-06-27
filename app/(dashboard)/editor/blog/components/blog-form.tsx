// @ts-nocheck
// TODO: Filepond error to check
'use client';

import { Button } from '@/components/ui/button';
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
import Editor from '@/lib/tiptap/editor';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { useState } from 'react';
import { Icons } from '@/components/icons';
import { postUserPost } from '@/lib/actions/user-posts';
import { FilePondFile } from 'filepond';
import { uploadToBucket } from '@/lib/actions/bucket';
import { USER_POSTS_BUCKET } from '@/types/bucket';
import { MinimalTiptapEditor } from '@/components/minimal-tiptap';

// Register the plugins
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginImageEdit
);

const blogSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  content: z.string().min(2, {
    message: 'Content must be at least 2 characters.',
  }),
  featuredImage: z
    .instanceof(File)
    .optional()
    .refine((file) => file === undefined || file instanceof File, {
      message: 'Featured Image must be an instance of FilePondFile.',
    }),
});

export type blogSchema = z.infer<typeof blogSchema>;

export default function BlogForm() {
  const [error, setError] = useState('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [files, setFiles] = useState<FilePondFile[]>([]);

  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  async function onSubmit(values: blogSchema) {
    setIsLoading(true);
    try {
      let postData = {
        title: values.title,
        content: values.content,
        image_url: '',
      };
      if (files.length > 0) {
        const { path } = await uploadToBucket({
          bucket: USER_POSTS_BUCKET,
          file: files[0].file as File,
        });
        postData.image_url = path;
      }
      postUserPost(postData);
    } catch (error) {
      setError(error.message);
      console.log('Error :', error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-8 space-y-4'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='content'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <MinimalTiptapEditor
                      value={field.value}
                      onValueChange={field.onChange}
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              )}
              Submit
            </Button>
          </div>
          <div className='col-span-4 bg-card px-4'>
            <FormLabel>Featured Image</FormLabel>
            <FilePond
              files={files}
              onupdatefiles={setFiles}
              maxFiles={1}
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              credits={false}
              acceptedFileTypes={'image/*'}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
