'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface RotatingGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
}

export default function RotatingGallery({ images }: RotatingGalleryProps) {
  const [displayedImages, setDisplayedImages] = useState<Array<{
    src: string;
    alt: string;
    title?: string;
    key: number;
  }>>([]);
  const [fadingSlots, setFadingSlots] = useState<Set<number>>(new Set());
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const keyCounterRef = useRef(0);

  // Initialize with first 9 images
  useEffect(() => {
    if (images.length === 0) return;
    
    const initial = images.slice(0, 9).map((img, i) => ({
      ...img,
      key: i,
    }));
    keyCounterRef.current = 9;
    setDisplayedImages(initial);
  }, [images]);

  // Get a random image that's not currently displayed
  const getRandomNewImage = useCallback((currentImages: typeof displayedImages) => {
    const currentSrcs = new Set(currentImages.map(img => img.src));
    const available = images.filter(img => !currentSrcs.has(img.src));
    
    if (available.length === 0) {
      // If all images are displayed, pick any random one
      return images[Math.floor(Math.random() * images.length)];
    }
    
    return available[Math.floor(Math.random() * available.length)];
  }, [images]);

  // Set up rotating timers for each slot
  useEffect(() => {
    if (displayedImages.length < 9 || images.length <= 9) return;

    // Clear existing timers
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];

    const scheduleSwap = (slotIndex: number) => {
      // Random delay between 3-6 seconds, staggered by slot
      const baseDelay = 3000 + (slotIndex * 500); // Stagger initial swaps
      const randomDelay = baseDelay + Math.random() * 3000;
      
      const timer = setTimeout(() => {
        // Start fade out
        setFadingSlots(prev => new Set(prev).add(slotIndex));
        
        // After fade out, swap image and fade in
        setTimeout(() => {
          setDisplayedImages(prev => {
            const newImages = [...prev];
            const newImage = getRandomNewImage(prev);
            keyCounterRef.current += 1;
            newImages[slotIndex] = {
              ...newImage,
              key: keyCounterRef.current,
            };
            return newImages;
          });
          
          // Remove from fading set (triggers fade in)
          setFadingSlots(prev => {
            const next = new Set(prev);
            next.delete(slotIndex);
            return next;
          });
          
          // Schedule next swap for this slot
          scheduleSwap(slotIndex);
        }, 300); // Fade duration
        
      }, randomDelay);
      
      timersRef.current.push(timer);
    };

    // Start timers for each slot with staggered delays
    for (let i = 0; i < 9; i++) {
      scheduleSwap(i);
    }

    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
    };
  }, [displayedImages.length, images.length, getRandomNewImage]);

  if (displayedImages.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-6">
      {displayedImages.map((image, index) => (
        <div
          key={image.key}
          className="group relative overflow-hidden rounded-xl shadow-lg aspect-square"
        >
          <div 
            className={`absolute inset-0 transition-opacity duration-300 ${
              fadingSlots.has(index) ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 33vw, 300px"
            />
            {image.title && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                  <p className="font-medium text-sm md:text-base">{image.title}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
