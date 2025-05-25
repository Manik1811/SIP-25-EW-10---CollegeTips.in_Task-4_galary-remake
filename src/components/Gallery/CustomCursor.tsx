import React, { useEffect, useState } from 'react';
import { useGallery } from './GalleryContext';

interface CursorPoint {
  x: number;
  y: number;
  timestamp: number;
}

const CustomCursor: React.FC = () => {
  const { cursorPosition, isFullscreenOpen, updateCursorPosition } = useGallery();
  const [trail, setTrail] = useState<CursorPoint[]>([]);
  const trailLength = 20; // Number of trail points

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e.clientX, e.clientY);
      
      setTrail(prevTrail => {
        const newPoint = {
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now()
        };
        
        const updatedTrail = [newPoint, ...prevTrail.slice(0, trailLength - 1)];
        return updatedTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [updateCursorPosition]);

  if (!cursorPosition || isFullscreenOpen) return null;

  return (
    <>
      {/* Main cursor */}
      <div 
        className="fixed pointer-events-none z-50"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="relative">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 animate-pulse-fast" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
        </div>
      </div>

      {/* Snake trail effect */}
      {trail.map((point, index) => {
        const size = Math.max(4, 24 * (1 - index / trailLength));
        const opacity = Math.max(0.1, 1 - index / trailLength);
        const hue = (index * 10) % 360; // Color variation

        return (
          <div
            key={point.timestamp}
            className="fixed pointer-events-none z-40 rounded-full animate-snake"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              transform: 'translate(-50%, -50%)',
              background: `hsla(${hue}, 100%, 50%, ${opacity})`,
              filter: 'blur(2px)',
              transition: 'all 0.1s ease'
            }}
          />
        );
      })}
    </>
  );
};

export default CustomCursor;