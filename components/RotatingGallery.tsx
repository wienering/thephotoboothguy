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

interface SlotState {
  currentImage: ImageData;
  nextImage: ImageData | null;
  isTransitioning: boolean;
}

export default function RotatingGallery({ images }: RotatingGalleryProps) {
  const [slots, setSlots] = useState<SlotState[]>([]);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const usedImagesRef = useRef<Set<string>>(new Set());

  // Get a random image that's not currently in use
  const getRandomNewImage = useCallback((excludeSrc?: string): ImageData => {
    const available = images.filter(img => 
      img.src !== excludeSrc && !usedImagesRef.current.has(img.src)
    );
    
    if (available.length === 0) {
      // Reset used images if we've cycled through all
      usedImagesRef.current.clear();
      const fallback = images.filter(img => img.src !== excludeSrc);
      return fallback[Math.floor(Math.random() * fallback.length)] || images[0];
    }
    
    const selected = available[Math.floor(Math.random() * available.length)];
    usedImagesRef.current.add(selected.src);
    return selected;
  }, [images]);

  // Initialize slots with first 9 images
  useEffect(() => {
    if (images.length === 0) return;
    
    usedImagesRef.current.clear();
    const initialSlots: SlotState[] = images.slice(0, 9).map(img => {
      usedImagesRef.current.add(img.src);
      return {
        currentImage: img,
        nextImage: null,
        isTransitioning: false,
      };
    });
    setSlots(initialSlots);
  }, [images]);

  // Set up rotating timers
  useEffect(() => {
    if (slots.length < 9 || images.length <= 9) return;

    // Clear existing timers
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];

    const scheduleSwap = (slotIndex: number, isInitial: boolean = false) => {
      // Random delay between 4-8 seconds, with initial stagger
      const baseDelay = isInitial ? 3000 + (slotIndex * 800) : 4000;
      const randomDelay = baseDelay + Math.random() * 4000;
      
      const timer = setTimeout(() => {
        // Prepare the next image and start transition
        setSlots(prev => {
          const newSlots = [...prev];
          const currentSlot = newSlots[slotIndex];
          const nextImage = getRandomNewImage(currentSlot.currentImage.src);
          
          newSlots[slotIndex] = {
            ...currentSlot,
            nextImage,
            isTransitioning: true,
          };
          return newSlots;
        });
        
        // After transition completes, swap images
        setTimeout(() => {
          setSlots(prev => {
            const newSlots = [...prev];
            const currentSlot = newSlots[slotIndex];
            
            if (currentSlot.nextImage) {
              newSlots[slotIndex] = {
                currentImage: currentSlot.nextImage,
                nextImage: null,
                isTransitioning: false,
              };
            }
            return newSlots;
          });
          
          // Schedule next swap
          scheduleSwap(slotIndex, false);
        }, 1000); // Transition duration (matches CSS)
        
      }, randomDelay);
      
      timersRef.current.push(timer);
    };

    // Start timers for each slot with staggered delays
    for (let i = 0; i < 9; i++) {
      scheduleSwap(i, true);
    }

    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
    };
  }, [slots.length, images.length, getRandomNewImage]);

  if (slots.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-6">
      {slots.map((slot, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-xl shadow-lg aspect-square bg-gray-100"
        >
          {/* Next image (underneath, fades in) */}
          {slot.nextImage && (
            <div className="absolute inset-0">
              <Image
                src={slot.nextImage.src}
                alt={slot.nextImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 300px"
              />
            </div>
          )}
          
          {/* Current image (on top, fades out during transition) */}
          <div 
            className={`absolute inset-0 transition-opacity ease-in-out ${
              slot.isTransitioning ? 'opacity-0 duration-1000' : 'opacity-100 duration-500'
            }`}
          >
            <Image
              src={slot.currentImage.src}
              alt={slot.currentImage.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 33vw, 300px"
            />
          </div>
          
          {/* Hover overlay with title */}
          {slot.currentImage.title && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                <p className="font-medium text-sm md:text-base">{slot.currentImage.title}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
