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
  imageA: ImageData;
  imageB: ImageData;
  showingA: boolean; // true = A is visible, false = B is visible
}

export default function RotatingGallery({ images }: RotatingGalleryProps) {
  const [slots, setSlots] = useState<SlotState[]>([]);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  // Get a random image different from the given ones
  const getRandomNewImage = useCallback((exclude1: string, exclude2: string): ImageData => {
    const available = images.filter(img => img.src !== exclude1 && img.src !== exclude2);
    if (available.length === 0) {
      return images[Math.floor(Math.random() * images.length)];
    }
    return available[Math.floor(Math.random() * available.length)];
  }, [images]);

  // Initialize slots
  useEffect(() => {
    if (images.length === 0) return;
    
    const initialSlots: SlotState[] = [];
    for (let i = 0; i < 9; i++) {
      const imgA = images[i % images.length];
      // Pick a different image for B so it's ready for first transition
      const imgB = images[(i + 9) % images.length] || imgA;
      initialSlots.push({
        imageA: imgA,
        imageB: imgB,
        showingA: true,
      });
    }
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
      const baseDelay = isInitial ? 4000 + (slotIndex * 700) : 5000;
      const randomDelay = baseDelay + Math.random() * 4000;
      
      const timer = setTimeout(() => {
        setSlots(prev => {
          const newSlots = [...prev];
          const slot = newSlots[slotIndex];
          
          // Toggle which image is showing
          const newShowingA = !slot.showingA;
          
          // Prepare the next image in the layer that's about to be hidden
          // (so it's ready for the next transition)
          const hiddenImage = newShowingA ? slot.imageB : slot.imageA;
          const visibleImage = newShowingA ? slot.imageA : slot.imageB;
          const nextImage = getRandomNewImage(hiddenImage.src, visibleImage.src);
          
          newSlots[slotIndex] = {
            imageA: newShowingA ? slot.imageA : nextImage,
            imageB: newShowingA ? nextImage : slot.imageB,
            showingA: newShowingA,
          };
          
          return newSlots;
        });
        
        // Schedule next swap
        scheduleSwap(slotIndex, false);
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
          className="group relative overflow-hidden rounded-xl shadow-lg aspect-square bg-gray-900"
        >
          {/* Layer A */}
          <div 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              slot.showingA ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slot.imageA.src}
              alt={slot.imageA.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 300px"
            />
          </div>
          
          {/* Layer B */}
          <div 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              slot.showingA ? 'opacity-0 z-0' : 'opacity-100 z-10'
            }`}
          >
            <Image
              src={slot.imageB.src}
              alt={slot.imageB.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 300px"
            />
          </div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 z-20 transition-transform duration-300 group-hover:scale-105 pointer-events-none" />
          
          {/* Hover overlay with title */}
          {(slot.showingA ? slot.imageA : slot.imageB).title && (
            <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                <p className="font-medium text-sm md:text-base">
                  {(slot.showingA ? slot.imageA : slot.imageB).title}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
