import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterImageProps {
  beforeImage: string;
  afterImage: string;
  sliderImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterImage = ({
  beforeImage,
  afterImage,
  sliderImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterImageProps): JSX.Element => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovering, setIsHovering] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFrozen || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleClick = () => {
    setIsFrozen(!isFrozen);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-auto overflow-hidden rounded-lg cursor-pointer select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Before Image (Background) */}
      <div className="relative w-full">
        <img
          src={beforeImage}
          alt="Before"
          className="w-full h-auto object-contain"
          draggable={false}
        />
      </div>

      {/* After Image (Clipped) */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-contain"
          draggable={false}
        />
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9">
          <img
            src={sliderImage}
            alt="Slider"
            className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
