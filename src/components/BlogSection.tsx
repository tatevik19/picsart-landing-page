import React, { useState, useRef, useEffect } from "react";

// Responsive card dimensions
const getCardDimensions = () => {
  const GAP = 24; // Default gap between cards
  
  if (typeof window === 'undefined') return { width: 610, gap: GAP };
  
  const width = window.innerWidth;
  // For mobile screens 480px and smaller, use fixed width of 292px and gap of 12px
  if (width <= 480) return { width: 292, gap: 12 };
  if (width < 768) return { width: Math.round(width * 0.85), gap: GAP };
  if (width < 1024) return { width: 500, gap: GAP };
  if (width < 1280) return { width: 550, gap: GAP };
  return { width: 610, gap: GAP };
};

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  imageContent: JSX.Element;
}

export const LinksWrapperSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxCardHeight, setMaxCardHeight] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousLeftIndex, setPreviousLeftIndex] = useState<number | null>(null);
  const [outgoingZIndex, setOutgoingZIndex] = useState(2);
  const [isLeftToRightAnimation, setIsLeftToRightAnimation] = useState(false);
  const [isLeftCardPlayback, setIsLeftCardPlayback] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const draggedCardRef = useRef<'left' | 'mid' | 'right' | null>(null);
  const dragOffsetRef = useRef<number>(0);
  const draggedCardElementRef = useRef<HTMLElement | null>(null);
  const leftCardDragOffsetRef = useRef<number>(0);
  const leftCardPlaybackProgressRef = useRef<number>(0); // 0 to 1, tracks playback animation progress
  const cardRefsForPlayback = useRef<{ left: HTMLElement | null; newLeft: HTMLElement | null; mid: HTMLElement | null; right: HTMLElement | null }>({ left: null, newLeft: null, mid: null, right: null });
  
  // Track the three visible cards: [left, mid, right]
  const [visibleCards, setVisibleCards] = useState<number[]>([0, 1, 2]);
  const [cardDimensions, setCardDimensions] = useState(getCardDimensions());
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 1280 : false);

  // Update card dimensions on window resize and initial load
  useEffect(() => {
    // Set initial dimensions
    setCardDimensions(getCardDimensions());
    setIsMobile(window.innerWidth <= 1280);
    
    const handleResize = () => {
      setCardDimensions(getCardDimensions());
      setIsMobile(window.innerWidth <= 1280);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file selection here
      console.log("File selected:", file.name);
    }
  };

  const carouselItems: CarouselItem[] = [
    {
      id: "background-remover",
      title: "Background remover",
      description:
        "Masterfully remove the background with AI or make it transparent.",
      imageContent: (
        <div className="relative self-stretch rounded-2xl overflow-hidden w-full flex items-center justify-center" style={{ height: 'auto' }}>
          <img
            className="object-contain w-full h-auto max-w-full"
            alt="Background remover"
            src="https://cdn-cms-uploads.picsart.com/cms-uploads/ca3412c1-6ff4-423b-a685-fb985ab6ef13.png"
            style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '100%' }}
          />
        </div>
      ),
    },
    {
      id: "transparent-background",
      title: "Transparent background maker",
      description: "Change the background of photos to transparent with ease.",
      imageContent: (
        <div className="relative self-stretch rounded-2xl overflow-hidden w-full flex items-center justify-center" style={{ height: 'auto' }}>
          <img
            className="object-contain w-full h-auto max-w-full"
            alt="Transparent background maker"
            src="https://cdn-cms-uploads.picsart.com/cms-uploads/aafd4eaf-b34a-4f5a-b5a9-3f0a5084a469.png"
            style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '100%' }}
          />
        </div>
      ),
    },
    {
      id: "change-background-color",
      title: "Change background color",
      description: "Switch to a solid-color background with ease.",
      imageContent: (
        <div className="relative self-stretch rounded-2xl overflow-hidden w-full flex items-center justify-center" style={{ height: 'auto' }}>
          <img
            className="object-contain w-full h-auto max-w-full"
            alt="Change background color"
            src="https://cdn-cms-uploads.picsart.com/cms-uploads/57ff2807-2b4e-43b6-8a39-56c12bcbd853.png"
            style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '100%' }}
          />
        </div>
      ),
    },
  ];

  const handlePrevious = () => {
    if (isTransitioning) return; // Debounce clicks during animation
    
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    
    // On mobile, use smooth transition
    if (isMobile) {
      setIsTransitioning(true);
      setVisibleCards((prev) => {
        const [left, mid, right] = prev;
        return [right, left, mid]; // Rotate: [left, mid, right] → [right, left, mid]
      });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Smooth transition duration
      return;
    }
    
    // On desktop, use reverse animation (mirror of right arrow)
    // Left card slides to right (like right card slides to mid)
    // New card comes from left (like new card comes from right)
    // Right card fades out (like left card fades out)
    setIsTransitioning(true);
    setIsLeftCardPlayback(true);
    setOutgoingZIndex(1);
    
    setVisibleCards((prev) => {
      const [left] = prev;
      setPreviousLeftIndex(left);
      return prev;
    });
    
    setTimeout(() => {
      setVisibleCards((prev) => {
        const [left, mid, right] = prev;
        return [right, left, mid];
      });
      setPreviousLeftIndex(null);
      setOutgoingZIndex(2);
      setIsTransitioning(false);
      setIsLeftToRightAnimation(false);
      setIsLeftCardPlayback(false);
    }, 750);
  };

  const handleNext = () => {
    if (isTransitioning) return; // Debounce clicks during animation
    
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    
    // On mobile, use smooth transition
    if (isMobile) {
      setIsTransitioning(true);
      setVisibleCards((prev) => {
        const [left, mid, right] = prev;
        return [mid, right, left]; // Rotate: [left, mid, right] → [mid, right, left]
      });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Smooth transition duration
      return;
    }
    
    // On desktop, use animation
    setIsTransitioning(true);
    setOutgoingZIndex(1);
    
    setVisibleCards((prev) => {
      const [left] = prev;
      setPreviousLeftIndex(left);
      return prev;
    });
    
    setTimeout(() => {
      setVisibleCards((prev) => {
        const [left, mid, right] = prev;
        return [mid, right, left];
      });
      setPreviousLeftIndex(null);
      setOutgoingZIndex(2);
      setIsTransitioning(false);
    }, 750);
  };

  const handleCardAreaMouseDown = (e: React.MouseEvent) => {
    if (isTransitioning) return;
    // Only enable drag on mobile (when arrows are hidden)
    if (!isMobile) return;
    // Only set drag start if not already set by a card (card handlers set draggedCardRef)
    if (!draggedCardRef.current) {
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      isDraggingRef.current = false;
    }
  };

  const handleCardAreaTouchStart = (e: React.TouchEvent) => {
    if (isTransitioning) return;
    // Only enable drag on mobile (when arrows are hidden)
    if (!isMobile) return;
    const touch = e.touches[0];
    if (touch && !draggedCardRef.current) {
      dragStartRef.current = { x: touch.clientX, y: touch.clientY };
      isDraggingRef.current = false;
    }
  };

  const handleCardAreaTouchMove = (e: React.TouchEvent) => {
    if (!dragStartRef.current || !isMobile) return;
    const touch = e.touches[0];
    if (!touch) return;
    
    const deltaX = touch.clientX - dragStartRef.current.x;
    const deltaY = Math.abs(touch.clientY - dragStartRef.current.y);
    const threshold = 10;
    
    // If it's a horizontal drag, prevent default scrolling
    if (Math.abs(deltaX) > threshold && Math.abs(deltaX) > deltaY) {
      isDraggingRef.current = true;
      e.preventDefault(); // Prevent page scrolling during horizontal drag
    }
  };

  const handleCardAreaTouchEnd = (e: React.TouchEvent) => {
    if (!dragStartRef.current || !isMobile) return;
    
    // If a card-specific drag is happening, let the global handler deal with it
    if (draggedCardRef.current) {
      return;
    }
    
    const touch = e.changedTouches[0];
    if (!touch) {
      dragStartRef.current = null;
      return;
    }
    
    const wasDragging = isDraggingRef.current;
    const deltaX = touch.clientX - dragStartRef.current.x;
    const dragThreshold = 50;
    
    dragStartRef.current = null;
    
    if (wasDragging) {
      if (deltaX < -dragThreshold) {
        e.preventDefault();
        e.stopPropagation();
        handleNext();
        setTimeout(() => {
          isDraggingRef.current = false;
        }, 50);
      } else if (deltaX > dragThreshold) {
        e.preventDefault();
        e.stopPropagation();
        handlePrevious();
        setTimeout(() => {
          isDraggingRef.current = false;
        }, 50);
      } else {
        isDraggingRef.current = false;
      }
    } else {
      isDraggingRef.current = false;
    }
  };

  const handleCardAreaMouseMove = (e: React.MouseEvent) => {
    if (!dragStartRef.current) return;
    
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = Math.abs(e.clientY - dragStartRef.current.y);
    const threshold = 10; // Minimum pixels to consider it a drag
    
    // Check if it's a horizontal drag (more horizontal than vertical)
    if (Math.abs(deltaX) > threshold && Math.abs(deltaX) > deltaY) {
      isDraggingRef.current = true;
    }
  };

  const handleCardAreaMouseUp = (e: React.MouseEvent) => {
    if (!dragStartRef.current) return;
    
    // If a card-specific drag is happening, let the global handler deal with it
    if (draggedCardRef.current) {
      return;
    }
    
    const wasDragging = isDraggingRef.current;
    const deltaX = e.clientX - dragStartRef.current.x;
    const dragThreshold = 50; // Minimum pixels to trigger swipe
    
    dragStartRef.current = null;
    
    if (wasDragging) {
      // General drag behavior (only for non-card-specific drags)
      if (deltaX < -dragThreshold) {
        // Dragged left - go to next
        e.preventDefault();
        e.stopPropagation();
        handleNext();
        setTimeout(() => {
          isDraggingRef.current = false;
        }, 50);
      } else if (deltaX > dragThreshold) {
        // Dragged right - go to previous
        e.preventDefault();
        e.stopPropagation();
        handlePrevious();
        setTimeout(() => {
          isDraggingRef.current = false;
        }, 50);
      } else {
        isDraggingRef.current = false;
      }
    } else {
      isDraggingRef.current = false;
    }
  };

  const handleCardMouseDown = (e: React.MouseEvent, cardType: 'left' | 'mid' | 'right') => {
    if (isTransitioning) return;
    // On mobile, let card area handle drag instead of individual cards
    if (isMobile) return;
    e.preventDefault(); // Prevent text selection during drag
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    draggedCardRef.current = cardType;
    isDraggingRef.current = false;
    dragOffsetRef.current = 0;
    leftCardDragOffsetRef.current = 0;
    leftCardPlaybackProgressRef.current = 0;
    
    // Store references to all cards for playback animation
    if (cardType === 'left') {
      const [leftIndex, midIndex, rightIndex] = visibleCards;
      const currentCardDimensions = getCardDimensions();
      const cardSpacing = currentCardDimensions.width + currentCardDimensions.gap;
      
      // Store card references and their initial positions
      // After handlePrevious: [right, left, mid]
      // So: old right → new left, old left → new mid, old mid → new right
      cardRefsForPlayback.current.left = cardRefs.current[leftIndex]; // Current left (slides out, becomes new mid)
      cardRefsForPlayback.current.newLeft = cardRefs.current[rightIndex]; // Current right (slides in, becomes new left)
      cardRefsForPlayback.current.mid = cardRefs.current[midIndex]; // Current mid (moves right, becomes new right)
      cardRefsForPlayback.current.right = null; // Not needed
      
      // Store initial left positions for calculations
      if (cardRefsForPlayback.current.left) {
        cardRefsForPlayback.current.left.dataset.initialLeft = '0';
      }
      if (cardRefsForPlayback.current.newLeft) {
        cardRefsForPlayback.current.newLeft.dataset.initialLeft = String(cardSpacing * 2);
      }
      if (cardRefsForPlayback.current.mid) {
        cardRefsForPlayback.current.mid.dataset.initialLeft = String(cardSpacing);
      }
      if (cardRefsForPlayback.current.right) {
        cardRefsForPlayback.current.right.dataset.initialLeft = '0';
      }
    }
    
    // Store reference to the card element being dragged
    draggedCardElementRef.current = e.currentTarget as HTMLElement;
  };


  // Global mouse move and up handlers for drag detection
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!dragStartRef.current) return;
      
      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = Math.abs(e.clientY - dragStartRef.current.y);
      const threshold = 10;
      
      // Check if it's a horizontal drag (more horizontal than vertical)
      if (Math.abs(deltaX) > threshold && Math.abs(deltaX) > deltaY) {
        isDraggingRef.current = true;
        
        // Apply visual feedback
        if (draggedCardElementRef.current) {
          const draggedCard = draggedCardRef.current;
          
          if (draggedCard === 'left' && deltaX > 0) {
            // Left card playback: REVERSE of right card animation (like playing video backwards)
            // Right card drag: cards move LEFT (right→mid, new card from right→mid)
            // Left card drag (reverse): cards move RIGHT (left→out, mid→right, new card from right→left)
            const currentCardDimensions = getCardDimensions();
            const CARD_WIDTH = currentCardDimensions.width;
            const CARD_GAP = currentCardDimensions.gap;
            const cardSpacing = CARD_WIDTH + CARD_GAP;
            const maxDragDistance = cardSpacing; // Distance to complete transition
            const progress = Math.min(deltaX / maxDragDistance, 1); // 0 to 1
            leftCardPlaybackProgressRef.current = progress;
            
            // Old left card slides out to the left (reverse: in right drag, left card fades out)
            // Position: 0 → -cardSpacing (slides out left, opposite of right card moving right)
            if (cardRefsForPlayback.current.left) {
              const slideOutDistance = -cardSpacing * progress;
              cardRefsForPlayback.current.left.style.transform = `translateX(${slideOutDistance}px) scale(1)`;
              cardRefsForPlayback.current.left.style.transition = 'none';
              cardRefsForPlayback.current.left.style.opacity = '1';
            }
            
            // New left card (old right) slides in from RIGHT to LEFT position
            // Reverse: in right drag, new card comes from right→mid (moves LEFT)
            // Here: new card comes from right→left (moves LEFT, same direction but different end point)
            // Position: cardSpacing * 2 → 0 (moves LEFT, which is reverse of right card moving RIGHT)
            if (cardRefsForPlayback.current.newLeft) {
              const initialLeft = parseFloat(cardRefsForPlayback.current.newLeft.dataset.initialLeft || '0');
              const targetLeft = 0;
              const slideInDistance = (targetLeft - initialLeft) * progress;
              cardRefsForPlayback.current.newLeft.style.transform = `translateX(${slideInDistance}px) scale(1)`;
              cardRefsForPlayback.current.newLeft.style.transition = 'none';
              cardRefsForPlayback.current.newLeft.style.opacity = '1';
              cardRefsForPlayback.current.newLeft.style.zIndex = '0';
            }
            
            // Old mid card moves RIGHT (reverse: in right drag, right card moves LEFT to mid)
            // Position: cardSpacing → cardSpacing * 2 (moves RIGHT, opposite direction)
            if (cardRefsForPlayback.current.mid) {
              const initialLeft = parseFloat(cardRefsForPlayback.current.mid.dataset.initialLeft || '0');
              const targetLeft = cardSpacing * 2; // Old mid becomes new right (moves RIGHT)
              const moveDistance = (targetLeft - initialLeft) * progress;
              cardRefsForPlayback.current.mid.style.transform = `translateX(${moveDistance}px) scale(1)`;
              cardRefsForPlayback.current.mid.style.transition = 'none';
              cardRefsForPlayback.current.mid.style.opacity = '1';
            }
            
            // Don't move the dragged card itself - let the other cards animate
            draggedCardElementRef.current.style.transform = '';
            draggedCardElementRef.current.style.transition = 'none';
          } else if (draggedCard === 'left') {
            // Left card: follow drag position like video scrubbing (when dragging left, just move the card)
            leftCardDragOffsetRef.current = deltaX;
            draggedCardElementRef.current.style.transform = `translateX(${deltaX}px)`;
            draggedCardElementRef.current.style.transition = 'none';
          } else {
            // Mid/Right cards: move card in opposite direction of drag
            const reversedOffset = -deltaX * 0.5; // Scale down for smoother effect
            dragOffsetRef.current = reversedOffset;
            draggedCardElementRef.current.style.transform = `translateX(${reversedOffset}px)`;
            draggedCardElementRef.current.style.transition = 'none'; // Disable transitions during drag
          }
        }
      }
    };

    const handleGlobalMouseUp = (e: MouseEvent) => {
      if (!dragStartRef.current) return;
      
      const wasDragging = isDraggingRef.current;
      const deltaX = e.clientX - dragStartRef.current.x;
      const dragThreshold = 50; // Minimum pixels to trigger swipe
      const draggedCard = draggedCardRef.current;
      const currentCardDimensions = getCardDimensions();
      const CARD_WIDTH = currentCardDimensions.width;
      const CARD_GAP = currentCardDimensions.gap;
      const maxDragDistance = CARD_WIDTH + CARD_GAP;
      const progress = leftCardPlaybackProgressRef.current;
      
      if (wasDragging && !isTransitioning && draggedCard === 'left' && deltaX > 0) {
        // Left card playback drag
        if (progress > 0.3 || deltaX > dragThreshold) {
          // Complete the playback animation
          e.preventDefault();
          e.stopPropagation();
          
          // Reset all card transforms before triggering animation
          Object.values(cardRefsForPlayback.current).forEach(card => {
            if (card) {
              card.style.transform = '';
              card.style.transition = '';
              card.style.zIndex = '';
              card.style.opacity = '';
            }
          });
          
          handlePrevious();
        } else {
          // Snap back - reset all cards to original positions
          Object.values(cardRefsForPlayback.current).forEach(card => {
            if (card) {
              card.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
              card.style.transform = '';
              card.style.zIndex = '';
              card.style.opacity = '';
              setTimeout(() => {
                if (card) {
                  card.style.transition = '';
                }
              }, 300);
            }
          });
        }
        leftCardPlaybackProgressRef.current = 0;
      }
      
      // Reset drag visual feedback with smooth transition
      if (draggedCardElementRef.current) {
        draggedCardElementRef.current.style.transition = 'transform 0.3s ease-out';
        draggedCardElementRef.current.style.transform = '';
        setTimeout(() => {
          if (draggedCardElementRef.current) {
            draggedCardElementRef.current.style.transition = '';
            draggedCardElementRef.current = null;
          }
        }, 300);
      }
      dragOffsetRef.current = 0;
      leftCardDragOffsetRef.current = 0;
      
      if (wasDragging && !isTransitioning) {
        if (draggedCard === 'left' && deltaX <= 0) {
          // Left card dragged left - just reset
          // Already handled above
        } else if (draggedCard === 'right') {
          // Right card dragged to the left → next (same as right arrow)
          if (deltaX < -dragThreshold) {
            e.preventDefault();
            e.stopPropagation();
            handleNext();
          } else if (deltaX > dragThreshold) {
            // Dragged right - go to previous
            e.preventDefault();
            e.stopPropagation();
            handlePrevious();
          }
        } else if (draggedCard === 'mid') {
          // Middle card dragged to the left → next (same as right arrow)
          if (deltaX < -dragThreshold) {
            e.preventDefault();
            e.stopPropagation();
            handleNext();
          } else if (deltaX > dragThreshold) {
            // Dragged right - go to previous
            e.preventDefault();
            e.stopPropagation();
            handlePrevious();
          }
        }
      }
      
      dragStartRef.current = null;
      draggedCardRef.current = null;
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isTransitioning]);

  useEffect(() => {
    // Measure all card heights and set max height
    // Use a timeout to ensure cards are rendered
    const timeoutId = setTimeout(() => {
      const heights = cardRefs.current
        .filter((ref) => ref !== null)
        .map((ref) => {
          // Temporarily remove fixed height to measure natural content height
          const originalHeight = ref!.style.height;
          const originalMinHeight = ref!.style.minHeight;
          ref!.style.height = 'auto';
          ref!.style.minHeight = 'auto';
          const height = ref!.scrollHeight;
          ref!.style.height = originalHeight;
          ref!.style.minHeight = originalMinHeight;
          return height;
        });
      
      if (heights.length > 0) {
        const maxHeight = Math.max(...heights);
        setMaxCardHeight(maxHeight);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, visibleCards, carouselItems.length]);


  return (
    <>
      <style>{`
        :root {
          --t: 750ms; /* Slower, smoother transitions */
          --move: cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth ease-out */
          --fade: cubic-bezier(0.4, 0, 0.2, 1); /* Smooth fade */
        }
        
        @keyframes fadeScaleOut {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          10% {
            transform: translateX(0) scale(0.97);
            opacity: 0.7;
          }
          20% {
            transform: translateX(0) scale(0.92);
            opacity: 0.5;
          }
          40% {
            transform: translateX(0) scale(0.85);
            opacity: 0.3;
          }
          60% {
            transform: translateX(0) scale(0.78);
            opacity: 0.15;
          }
          80% {
            transform: translateX(0) scale(0.74);
            opacity: 0.05;
          }
          100% {
            transform: translateX(0) scale(0.7);
            opacity: 0;
          }
        }
        
        @keyframes in-slide {
          0% { 
            transform: translateX(634px) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes right-to-mid {
          0% { 
            transform: translateX(634px) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes left-to-right {
          0% { 
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translateX(var(--right-position, 1268px)) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes left-card-slide-out {
          0% {
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(var(--left-out-position, -634px)) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes left-card-slide-in {
          0% {
            transform: translateX(var(--left-in-position, -634px)) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes mid-to-right {
          0% {
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(var(--mid-move-distance, 634px)) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes left-to-right-reverse {
          0% {
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(var(--left-to-right-distance, 634px)) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes left-slide-in-reverse {
          0% {
            transform: translateX(0px) scale(0.7);
            opacity: 0;
          }
          10% {
            transform: translateX(0px) scale(0.74);
            opacity: 0.05;
          }
          20% {
            transform: translateX(0px) scale(0.78);
            opacity: 0.15;
          }
          40% {
            transform: translateX(0px) scale(0.85);
            opacity: 0.3;
          }
          60% {
            transform: translateX(0px) scale(0.92);
            opacity: 0.5;
          }
          80% {
            transform: translateX(0px) scale(0.97);
            opacity: 0.7;
          }
          100% {
            transform: translateX(0px) scale(1);
            opacity: 1;
          }
        }
        
        .carousel-card-outgoing {
          animation: fadeScaleOut 500ms ease-out forwards;
          will-change: transform, opacity;
          z-index: 1 !important;
          animation-delay: 0ms;
          opacity: 1 !important; /* Ensure opacity starts at 1 */
          transform-origin: top center;
        }
        
        .carousel-card-incoming {
          animation: in-slide var(--t, 750ms) var(--move, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards;
          will-change: transform, opacity;
          z-index: 2 !important;
          opacity: 1 !important;
          animation-delay: 0ms;
          transform-origin: top center;
        }
        
        .carousel-card-right-slide {
          animation: right-to-mid var(--t, 750ms) var(--move, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards;
          will-change: transform, opacity;
          z-index: 1 !important;
          opacity: 1 !important;
          animation-delay: 0ms;
          transform-origin: top center;
        }
        
        .carousel-card-left-to-right {
          animation: left-to-right var(--t, 750ms) var(--move, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards;
          will-change: transform, opacity;
          z-index: 2 !important;
          opacity: 1 !important;
          animation-delay: 0ms;
          transform-origin: top center;
        }
        
        .carousel-card-left-slide-out {
          animation: left-card-slide-out var(--t, 750ms) var(--move, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards;
          will-change: transform, opacity;
          z-index: 1 !important;
          opacity: 1 !important;
          animation-delay: 0ms;
          transform-origin: top center;
        }
        
        .carousel-card-left-slide-in {
          animation: left-card-slide-in var(--t, 750ms) var(--move, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards;
          will-change: transform, opacity;
          z-index: 0 !important;
          opacity: 1 !important;
          animation-delay: 0ms;
          transform-origin: top center;
        }
        
        .carousel-card-mid-to-right {
          animation: mid-to-right var(--t, 750ms) var(--move, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards;
          will-change: transform, opacity;
          z-index: 1 !important;
          opacity: 1 !important;
          animation-delay: 0ms;
          transform-origin: top center;
        }
        
        .carousel-card-left-to-right-reverse {
          animation: left-to-right-reverse var(--t, 750ms) var(--move, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards;
          will-change: transform, opacity;
          z-index: 3 !important;
          opacity: 1 !important;
          animation-delay: 0ms;
          transform-origin: top center;
        }
        
        .carousel-card-left-slide-in-reverse {
          animation: left-slide-in-reverse var(--t, 750ms) var(--move, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards;
          will-change: transform, opacity;
          z-index: 0 !important;
          opacity: 1 !important;
          animation-delay: 0ms;
          transform-origin: top center;
        }
      `}</style>
      <div className="w-full bg-background-colorstint-2">
        <section
          className="pl-3 lg:pl-6 pr-0 py-10 lg:py-16 flex flex-col w-full max-w-[1552px] items-center gap-6 sm:gap-8 md:gap-12 relative flex-[0_0_auto] mx-auto overflow-x-visible"
          aria-label="Background editing tools"
        >
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] items-start gap-10 relative flex-[0_0_auto] lg:justify-between overflow-x-visible pr-0 mr-0">
        <div className="flex flex-col w-full lg:w-[502px] items-start justify-between px-0 relative self-stretch">
          <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-12 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-[0] leading-tight sm:leading-[36px] md:leading-[44px] lg:leading-[50px]" style={{ fontWeight: 600 }}>
                Discover Picsart&apos;s background tools
              </h2>
              <p className="relative self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-text-colorstint-1 text-base leading-6 md:text-[length:var(--t6-t6-medium-font-size)] md:leading-[var(--t6-t6-medium-line-height)] tracking-[var(--t6-t6-medium-letter-spacing)]" style={{ fontWeight: 500 }}>
                Edit backgrounds with Picsart&apos;s all-inclusive editing
                tools. Precisely and automatically remove backgrounds with AI,
                replace them with colors or patterns, and add backgrounds that
                are custom-fitted to your subject with just a prompt.
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              aria-label="File input"
            />
            <button
              className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 relative flex-[0_0_auto] bg-primary-colorsbase-default rounded-3xl cursor-pointer hover:bg-[#740574] transition-colors"
              aria-label="Upload image to edit background"
              onClick={handleUploadClick}
            >
              <img
                className="relative w-5 h-5 sm:w-6 sm:h-6"
                alt=""
                src="https://c.animaapp.com/LyD8HZXb/img/iconupload-4.svg"
              />
              <span className="w-fit mt-[-1.00px] text-primary-colorstext-default text-sm sm:text-[length:var(--t5-t5-semibold-font-size)] leading-[var(--t5-t5-semibold-line-height)] whitespace-nowrap relative [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-center tracking-[var(--t5-t5-semibold-letter-spacing)]" style={{ fontWeight: 600 }}>
                Upload image
              </span>
            </button>
          </div>
          <nav
            className="hidden xl:flex w-full sm:w-[113px] items-center justify-between relative flex-[0_0_auto]"
            aria-label="Carousel navigation"
          >
            <button
              className="relative w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-[30px] border border-solid border-background-colorsborder cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={handlePrevious}
              aria-label="Previous tool"
            >
              <div className="inline-flex items-center justify-center gap-2 p-2.5 sm:p-3 relative bg-positive-colorsbase-default rounded-3xl">
                <img
                  className="relative w-5 h-5 sm:w-6 sm:h-6"
                  alt=""
                  src="https://c.animaapp.com/LyD8HZXb/img/iconchevronleft-1.svg"
                />
              </div>
            </button>
            <button
              className="relative w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] rounded-[30px] border border-solid border-background-colorsborder cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={handleNext}
              aria-label="Next tool"
            >
              <div className="inline-flex items-center justify-center gap-2 p-2.5 sm:p-3 relative bg-positive-colorsbase-default rounded-3xl">
                <img
                  className="relative w-5 h-5 sm:w-6 sm:h-6"
                  alt=""
                  src="https://c.animaapp.com/LyD8HZXb/img/iconchevronright-1.svg"
                />
              </div>
            </button>
          </nav>
        </div>
        <div className="relative w-full lg:w-[1019px] overflow-visible pr-0 mr-0">
          <div
            className={`relative w-full select-none p-0 m-0 overflow-visible isolate ${isMobile ? 'cursor-grab active:cursor-grabbing' : ''}`}
            role="region"
            aria-live="polite"
            aria-atomic="true"
            style={{ 
              height: maxCardHeight > 0 ? `${maxCardHeight}px` : 'auto'
            }}
          onMouseDown={handleCardAreaMouseDown}
          onMouseMove={handleCardAreaMouseMove}
          onMouseUp={handleCardAreaMouseUp}
          onTouchStart={handleCardAreaTouchStart}
          onTouchMove={handleCardAreaTouchMove}
          onTouchEnd={handleCardAreaTouchEnd}
        >
          {carouselItems.map((item, index) => {
            const [leftIndex, midIndex, rightIndex] = visibleCards;
            const isLeft = index === leftIndex;
            const isMid = index === midIndex;
            const isRight = index === rightIndex;
            const isNewRight = isTransitioning && previousLeftIndex !== null && index === previousLeftIndex;
            // During left card playback, the new left card comes from the left (it's the old right card)
            const isNewLeft = isTransitioning && isLeftCardPlayback && index === rightIndex;
            
            // During transition: show outgoing left, incoming mid, and new right card (old left)
            // During playback: show outgoing left, new left coming from left, mid, and right
            // After transition: show all 3 visible cards
            const isVisible = isLeft || isMid || isRight || isNewRight || isNewLeft;
            
            if (!isVisible) return null;

            // Responsive card dimensions
            const CARD_WIDTH = cardDimensions.width;
            const CARD_GAP = cardDimensions.gap;
            
            let leftPosition = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 1;
            let animationClass = '';
            
            if (isLeft) {
              // cardLeft (highlighted): x = 0px, scale = 1, opacity = 1, z-index = 3 (highest when not transitioning)
              if (isTransitioning && !isMobile && isLeftCardPlayback) {
                // During reverse animation, old left card slides to mid position (reverse of right-to-mid)
                // This card overlays the appearing card (stays on top)
                animationClass = 'carousel-card-left-to-right-reverse';
                leftPosition = 0; // Start at left position
                opacity = 1;
                zIndex = 3; // Highest z-index to overlay the appearing card behind it
              } else if (isTransitioning && !isMobile) {
                // Only use animations on desktop
                if (isLeftToRightAnimation) {
                  animationClass = 'carousel-card-left-to-right';
                  leftPosition = 0;
                  zIndex = 2;
                } else {
                  animationClass = 'carousel-card-outgoing';
                  leftPosition = 0;
                  zIndex = 1;
                }
              } else {
                leftPosition = 0;
                scale = 1;
                opacity = 1;
                zIndex = 3;
              }
            } else if (isNewLeft) {
              // New left card appears directly behind the current left card
              // Same position (0px), but behind it (lower z-index)
              // As the old card slides out, this card is revealed behind it
              if (isTransitioning && !isMobile && isLeftCardPlayback) {
                animationClass = 'carousel-card-left-slide-in-reverse';
                leftPosition = 0; // Same position as left card, directly behind it
                opacity = 1;
                zIndex = 0; // Behind the current left card (z-index 3)
                scale = 1;
              } else if (isTransitioning && !isMobile) {
                animationClass = 'carousel-card-left-slide-in';
                leftPosition = 0;
                opacity = 1;
                zIndex = 0;
                scale = 1;
              } else {
                leftPosition = 0;
                opacity = 1;
                zIndex = 3;
                scale = 1;
              }
            } else if (isMid) {
              // cardMid: x = 634px, scale = 1, opacity = 1, z-index = 2 (middle when not transitioning)
              if (isTransitioning && !isMobile && isLeftCardPlayback) {
                // During playback, mid card moves to right position
                // Start at mid position, end at right position
                animationClass = 'carousel-card-mid-to-right';
                leftPosition = CARD_WIDTH + CARD_GAP; // Start position
                opacity = 1;
                zIndex = 1;
              } else if (isTransitioning && !isMobile) {
                // Only use animations on desktop
                animationClass = 'carousel-card-incoming';
                leftPosition = 0;
                opacity = 1;
                zIndex = 2;
              } else {
                leftPosition = CARD_WIDTH + CARD_GAP;
                scale = 1;
                opacity = 1;
                zIndex = 2;
              }
            } else if (isRight) {
              // cardRight: x = 1268px, scale = 1, opacity = 1, z-index = 1 (lowest when not transitioning)
              if (isTransitioning && !isMobile && isLeftCardPlayback) {
                // During playback, right card becomes new left (handled by isNewLeft)
                // This shouldn't happen as right becomes new left
                leftPosition = (CARD_WIDTH + CARD_GAP) * 2;
                opacity = 1;
                zIndex = 0;
              } else if (isTransitioning && !isMobile) {
                // Only use animations on desktop
                animationClass = 'carousel-card-right-slide';
                leftPosition = CARD_WIDTH + CARD_GAP;
                opacity = 1;
                zIndex = 1;
              } else {
                leftPosition = (CARD_WIDTH + CARD_GAP) * 2;
                scale = 1;
                opacity = 1;
                zIndex = 1;
              }
            } else if (isNewRight) {
              // New right card (old left): fades out during reverse animation
              // Reverse of left card fading out in forward animation
              if (isTransitioning && !isMobile && isLeftCardPlayback) {
                animationClass = 'carousel-card-outgoing';
                leftPosition = (CARD_WIDTH + CARD_GAP) * 2; // Right position
                opacity = 1;
                zIndex = 0; // Behind other cards
                scale = 1;
              } else {
                // New right card (old left): appears immediately at right position during transition
                leftPosition = (CARD_WIDTH + CARD_GAP) * 2; // 1268px position (634 + 610 + 24)
                opacity = 1; // Full opacity from start - no delay
                zIndex = 0; // Behind other cards but visible
                scale = 1;
              }
            } else if (isNewLeft) {
              // New left card coming from the left during playback animation
              if (isTransitioning && !isMobile) {
                animationClass = 'carousel-card-left-slide-in';
                leftPosition = 0;
                opacity = 1;
                zIndex = 0; // Behind the outgoing left card
                scale = 1;
              } else {
                leftPosition = 0;
                opacity = 1;
                zIndex = 3;
                scale = 1;
              }
            }

            // Use stable z-index - no mid-animation swaps
            // Outgoing card is always z-index 1, incoming card is always z-index 2
            const finalZIndex = zIndex;
            
            // Determine card type for drag handling
            const cardType = isLeft ? 'left' : isMid ? 'mid' : 'right';

            return (
              <article
                key={item.id}
                ref={(el) => {
                  if (el) {
                    cardRefs.current[index] = el;
                    // Store references for playback animation
                    if (isLeft && previousLeftIndex === null) {
                      cardRefsForPlayback.current.left = el;
                    } else if (isNewLeft) {
                      cardRefsForPlayback.current.newLeft = el;
                    } else if (isMid) {
                      cardRefsForPlayback.current.mid = el;
                    } else if (isRight) {
                      cardRefsForPlayback.current.right = el;
                    }
                  }
                }}
                className={`flex flex-col items-start justify-start gap-6 pt-4 pb-4 px-4 sm:pt-6 sm:pb-8 sm:px-6 absolute top-0 ${
                  isLeft || (isMid && isTransitioning)
                    ? "bg-absolute-black-colorsbase-default"
                    : ""
                } rounded-3xl ${animationClass} ${(isRight || isMid) && !isTransitioning ? 'cursor-pointer' : ''} ${isLeft && !isMobile && !isTransitioning ? 'cursor-grab active:cursor-grabbing' : ''}`}
                aria-label={item.title}
                onMouseDown={(e) => handleCardMouseDown(e, cardType)}
                onClick={() => {
                  if (isRight && !isTransitioning && !isDraggingRef.current) {
                    handleNext();
                  }
                  if (isLeft && !isTransitioning && !isDraggingRef.current && !isMobile) {
                    handlePrevious();
                  }
                }}
                style={{
                  left: `${leftPosition}px`,
                  width: `${CARD_WIDTH}px`,
                  minWidth: `${CARD_WIDTH}px`,
                  maxWidth: `${CARD_WIDTH}px`,
                  margin: 0,
                  backgroundColor: isLeft || (isMid && isTransitioning)
                    ? undefined // Will use className bg-absolute-black-colorsbase-default
                    : (isMid || isRight ? '#313131' : '#313131'),
                  height: maxCardHeight > 0 ? `${maxCardHeight}px` : 'auto',
                  zIndex: finalZIndex,
                  transform: isTransitioning && animationClass 
                    ? undefined 
                    : cardType === 'left' && leftCardDragOffsetRef.current !== 0
                    ? `translateX(${leftCardDragOffsetRef.current}px) scale(${scale})`
                    : cardType !== 'left' && dragOffsetRef.current !== 0
                    ? `translateX(${dragOffsetRef.current}px) scale(${scale})`
                    : `scale(${scale})`,
                  opacity: isTransitioning && animationClass ? undefined : opacity, // Let CSS animation handle opacity
                  willChange: isTransitioning || leftCardDragOffsetRef.current !== 0 || dragOffsetRef.current !== 0 ? 'transform, opacity' : 'auto',
                  transformOrigin: 'top center',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                  // Smooth transition on mobile (like horizontal scroll)
                  transition: isMobile && isTransitioning && !animationClass ? 'left 0.3s ease-out' : (leftCardDragOffsetRef.current !== 0 || dragOffsetRef.current !== 0 ? 'none' : 'none'),
                  ...(isLeftToRightAnimation && isLeft && isTransitioning ? {
                    '--right-position': `${(CARD_WIDTH + CARD_GAP) * 2}px`
                  } as React.CSSProperties : {}),
                  ...(isLeftCardPlayback && isTransitioning && isLeft ? {
                    '--left-to-right-distance': `${CARD_WIDTH + CARD_GAP}px`
                  } as React.CSSProperties : {}),
                  ...(isLeftCardPlayback && isTransitioning && isNewLeft ? {
                    '--left-slide-start': `0px`
                  } as React.CSSProperties : {}),
                  ...(isLeftCardPlayback && isTransitioning && isMid ? {
                    '--mid-move-distance': `${CARD_WIDTH + CARD_GAP}px`
                  } as React.CSSProperties : {}),
                }}
              >
                {item.imageContent}
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative flex items-center justify-center self-stretch mt-[-1.00px] text-center lg:text-left text-positive-colorsbase-default text-[20px] leading-[28px] sm:text-[length:var(--t7-t7-semibold-font-size)] sm:leading-[var(--t7-t7-semibold-line-height)] tracking-[var(--t7-t7-semibold-letter-spacing)] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="relative flex items-center justify-center self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-positive-colorsbase-default text-[16px] leading-[24px] sm:text-[length:var(--t6-t6-medium-font-size)] sm:leading-[var(--t6-t6-medium-line-height)] tracking-[var(--t6-t6-medium-letter-spacing)] text-center" style={{ fontWeight: 500 }}>
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
      </div>
    </>
  );
};



