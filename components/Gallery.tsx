'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { staggerFadeIn } from '@/lib/gsap';
import PlaceholderImage from './PlaceholderImage';

interface GalleryProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  columns?: 2 | 3 | 4;
}

export default function Gallery({ images, columns = 3 }: GalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('.gallery-item');
      staggerFadeIn(Array.from(items), 0.1);
    }
  }, [images]);

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  const isPlaceholder = (src: string) => src.includes('placeholder') || src.startsWith('/api/');

  return (
    <div
      ref={galleryRef}
      className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="gallery-item group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="aspect-square relative bg-gray-200">
            {isPlaceholder(image.src) ? (
              <PlaceholderImage
                width={400}
                height={400}
                text={image.title || image.alt}
                className="w-full h-full"
              />
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            {image.title && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold">{image.title}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

