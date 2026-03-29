'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface SafeImageProps extends Omit<ImageProps, 'src'> {
  src: string | undefined | null;
  fallbackSrc?: string;
}

export default function SafeImage({ src, fallbackSrc = '/images/placeholder.png', ...props }: SafeImageProps) {
  // Determine if initial source is invalid
  const isInvalid = !src || src.includes('undefined') || src === '';
  
  const [imgSrc, setImgSrc] = useState<string>(isInvalid ? fallbackSrc : (src as string));
  const [hasError, setHasError] = useState(isInvalid);

  useEffect(() => {
    const nextInvalid = !src || src.includes('undefined') || src === '';
    if (nextInvalid) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    } else {
      setImgSrc(src as string);
      setHasError(false);
    }
  }, [src, fallbackSrc]);

  return (
    <Image
      {...props}
      src={hasError ? fallbackSrc : imgSrc}
      onError={() => {
        if (!hasError) {
          setHasError(true);
        }
      }}
      alt={props.alt || 'Chefkoch 1957 Memorial'}
    />
  );
}
