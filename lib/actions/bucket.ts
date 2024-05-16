import { createClient } from '@/lib/supabase/client';
import { v4 as uuidv4 } from 'uuid';

interface UploadToBucketProps {
  bucket: string;
  file: File;
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
