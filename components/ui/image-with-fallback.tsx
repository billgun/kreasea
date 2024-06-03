'use client';

import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

import fallbackImage from '@/public/fallback.jpg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface ImageWithFallbackProps extends ImageProps {
  fallback?: ImageProps['src'];
  alt: string;
  src: string | StaticImport;
}

export const ImageWithFallback = ({
  fallback = fallbackImage,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  const handleError: React.EventHandler<any> = () => {
    setError(true);
  };

  return (
    <Image
      alt={alt}
      onError={handleError}
      src={error ? fallbackImage : src}
      {...props}
    />
  );
};
