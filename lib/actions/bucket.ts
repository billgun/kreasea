import { createClient } from '@/lib/supabase/client';
import { v4 as uuidv4 } from 'uuid';

interface UploadToBucketProps {
  bucket: string;
  file: File;
}

export function getPublicFileUrl({
  bucket,
  filename,
}: {
  bucket: string;
  filename: string;
}) {
  if (!filename) return '';
  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${filename}`;
  return url;
}

export async function uploadToBucket({ bucket, file }: UploadToBucketProps) {
  const supabase = createClient();
  try {
    console.log(file);
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(`${uuidv4()}-${file.name}`, file);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
