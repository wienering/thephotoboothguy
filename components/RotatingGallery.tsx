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

  // Get all currently visible images from slots state
  const getVisibleSrcs = (slotsState: SlotState[]): Set<string> => {
    const visible = new Set<string>();
    slotsState.forEach(s => {
      visible.add(s.showingA ? s.imageA.src : s.imageB.src);
    });
    return visible;
  };

  // Get a random image not in the excluded set
  const getUniqueImage = (excludeSrcs: Set<string>): ImageData | null => {
    const available = images.filter(img => !excludeSrcs.has(img.src));
    if (available.length === 0) return null;
    return available[Math.floor(Math.random() * available.length)];
  };

  // Initialize slots with unique images
  useEffect(() => {
    if (images.length === 0) return;
    
    // Shuffle images to get random initial selection
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    
    const initialSlots: SlotState[] = [];
    const usedSrcs = new Set<string>();
    
    for (let i = 0; i < 9; i++) {
      // Find a unique image for visible layer
      const imgA = shuffled.find(img => !usedSrcs.has(img.src)) || shuffled[i % shuffled.length];
      usedSrcs.add(imgA.src);
      
      // For hidden layer, just use any different image (it's hidden anyway)
      const imgB = shuffled.find(img => img.src !== imgA.src) || imgA;
      
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
          
          // Get what's currently visible in OTHER slots
          const otherVisibleSrcs = new Set<string>();
          prev.forEach((s, idx) => {
            if (idx !== slotIndex) {
              otherVisibleSrcs.add(s.showingA ? s.imageA.src : s.imageB.src);
            }
          });
          
          // The image that would become visible if we swap
          const newShowingA = !slot.showingA;
          const wouldBecomeVisible = newShowingA ? slot.imageA : slot.imageB;
          
          // Check if swapping would create a duplicate
          if (otherVisibleSrcs.has(wouldBecomeVisible.src)) {
            // The hidden image is already visible elsewhere!
            // Find a new unique image and put it in the hidden layer, then swap to it
            const newImage = getUniqueImage(otherVisibleSrcs);
            
            if (newImage) {
              // Replace the hidden layer with new unique image, then swap
              newSlots[slotIndex] = {
                imageA: newShowingA ? slot.imageA : newImage,
                imageB: newShowingA ? newImage : slot.imageB,
                showingA: newShowingA,
              };
            } else {
              // No unique image available, skip this swap
              return prev;
            }
          } else {
            // Safe to swap - the hidden image isn't visible elsewhere
            // Also prepare a new image for the next swap
            const currentVisible = slot.showingA ? slot.imageA.src : slot.imageB.src;
            otherVisibleSrcs.add(wouldBecomeVisible.src); // Add what will be visible
            
            const nextImage = getUniqueImage(otherVisibleSrcs) || 
              images.find(img => img.src !== wouldBecomeVisible.src && img.src !== currentVisible) ||
              images[0];
            
            newSlots[slotIndex] = {
              imageA: newShowingA ? slot.imageA : nextImage,
              imageB: newShowingA ? nextImage : slot.imageB,
              showingA: newShowingA,
            };
          }
          
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
