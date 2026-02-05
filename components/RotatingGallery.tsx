'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface ImageData {
  src: string;
  alt: string;
  title?: string;
}

interface RotatingGalleryProps {
  images: ImageData[];
}

export default function RotatingGallery({ images }: RotatingGalleryProps) {
  // Simple state: just 9 image indices currently being displayed
  const [displayIndices, setDisplayIndices] = useState<number[]>([]);
  const [fadeStates, setFadeStates] = useState<boolean[]>(Array(9).fill(true)); // true = visible
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  // Initialize with first 9 unique indices
  useEffect(() => {
    if (images.length === 0) return;
    
    // Create shuffled indices
    const indices = Array.from({ length: images.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    // Take first 9 unique indices
    setDisplayIndices(indices.slice(0, 9));
    setFadeStates(Array(9).fill(true));
  }, [images.length]);

  // Get a random index not currently displayed
  const getNewIndex = useCallback((currentIndices: number[]): number => {
    const currentSet = new Set(currentIndices);
    const available = Array.from({ length: images.length }, (_, i) => i)
      .filter(i => !currentSet.has(i));
    
    if (available.length === 0) {
      // Fallback: return any index different from what we're replacing
      return Math.floor(Math.random() * images.length);
    }
    
    return available[Math.floor(Math.random() * available.length)];
  }, [images.length]);

  // Set up rotating timers
  useEffect(() => {
    if (displayIndices.length < 9 || images.length <= 9) return;

    // Clear existing timers
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];

    const scheduleSwap = (slotIndex: number, isInitial: boolean = false) => {
      const baseDelay = isInitial ? 4000 + (slotIndex * 800) : 5000;
      const randomDelay = baseDelay + Math.random() * 4000;
      
      const timer = setTimeout(() => {
        // Start fade out
        setFadeStates(prev => {
          const next = [...prev];
          next[slotIndex] = false;
          return next;
        });
        
        // After fade out, swap image and fade back in
        setTimeout(() => {
          setDisplayIndices(prev => {
            const next = [...prev];
            next[slotIndex] = getNewIndex(prev);
            return next;
          });
          
          // Small delay to ensure new image is set, then fade in
          setTimeout(() => {
            setFadeStates(prev => {
              const next = [...prev];
              next[slotIndex] = true;
              return next;
            });
          }, 50);
        }, 500); // Fade out duration
        
        // Schedule next swap
        scheduleSwap(slotIndex, false);
      }, randomDelay);
      
      timersRef.current.push(timer);
    };

    for (let i = 0; i < 9; i++) {
      scheduleSwap(i, true);
    }

    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
    };
  }, [displayIndices.length, images.length, getNewIndex]);

  if (displayIndices.length === 0 || images.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-6">
      {displayIndices.map((imageIndex, slotIndex) => {
        const image = images[imageIndex];
        if (!image) return null;
        
        return (
          <div
            key={slotIndex}
            className="group relative overflow-hidden rounded-xl shadow-lg aspect-square bg-gray-900"
          >
            <div 
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                fadeStates[slotIndex] ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 300px"
              />
            </div>
            
            {image.title && (
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                  <p className="font-medium text-sm md:text-base">{image.title}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
