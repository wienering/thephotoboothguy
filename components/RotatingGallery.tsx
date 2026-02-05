'use client';

import { useEffect, useState, useRef } from 'react';
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
  showingA: boolean;
}

export default function RotatingGallery({ images }: RotatingGalleryProps) {
  const [slots, setSlots] = useState<SlotState[]>([]);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  // Track currently visible image srcs synchronously to avoid race conditions
  const visibleImagesRef = useRef<Set<string>>(new Set());

  // Initialize slots with unique images
  useEffect(() => {
    if (images.length === 0) return;
    
    // Shuffle images to get random initial selection
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    
    const initialSlots: SlotState[] = [];
    const initialVisible = new Set<string>();
    const usedForHidden = new Set<string>();
    
    // First pass: assign unique visible images (A layer, showing)
    for (let i = 0; i < 9; i++) {
      const imgA = shuffled[i % shuffled.length];
      initialVisible.add(imgA.src);
      initialSlots.push({
        imageA: imgA,
        imageB: imgA, // temporary, will be replaced
        showingA: true,
      });
    }
    
    // Second pass: assign unique hidden images (B layer) avoiding visible ones
    for (let i = 0; i < 9; i++) {
      // Find an image not in visible set and not already used for hidden
      let imgB = shuffled.find(img => 
        !initialVisible.has(img.src) && !usedForHidden.has(img.src)
      );
      
      // If not enough unique images, just use any non-visible one
      if (!imgB) {
        imgB = shuffled.find(img => !initialVisible.has(img.src));
      }
      
      // Last resort: use any image different from this slot's A
      if (!imgB) {
        imgB = shuffled.find(img => img.src !== initialSlots[i].imageA.src) || shuffled[0];
      }
      
      usedForHidden.add(imgB.src);
      initialSlots[i].imageB = imgB;
    }
    
    visibleImagesRef.current = initialVisible;
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
          
          // The image that's about to become visible
          const newVisibleSrc = newShowingA ? slot.imageA.src : slot.imageB.src;
          // The image that's about to be hidden
          const oldVisibleSrc = slot.showingA ? slot.imageA.src : slot.imageB.src;
          
          // Update visible tracking synchronously
          visibleImagesRef.current.delete(oldVisibleSrc);
          visibleImagesRef.current.add(newVisibleSrc);
          
          // Find a new image for the layer that's becoming hidden
          // It must not be currently visible anywhere
          const available = images.filter(img => 
            !visibleImagesRef.current.has(img.src) && 
            img.src !== newVisibleSrc // also exclude the one we just made visible
          );
          
          let nextImage: ImageData;
          if (available.length > 0) {
            nextImage = available[Math.floor(Math.random() * available.length)];
          } else {
            // Fallback: pick any image different from current slot's images
            const fallback = images.filter(
              img => img.src !== slot.imageA.src && img.src !== slot.imageB.src
            );
            nextImage = fallback.length > 0 
              ? fallback[Math.floor(Math.random() * fallback.length)]
              : images[Math.floor(Math.random() * images.length)];
          }
          
          // Update the slot: swap visibility and prepare next image in hidden layer
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
  }, [slots.length, images.length, images]);

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
