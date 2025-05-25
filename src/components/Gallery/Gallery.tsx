import React, { useEffect } from 'react';
import CategoryFilter from './CategoryFilter';
import PhotoGrid from './PhotoGrid';
import FullscreenView from './FullscreenView';
import CustomCursor from './CustomCursor';
import { useGallery } from './GalleryContext';

const Gallery: React.FC = () => {
  const { isFullscreenOpen, cursorPosition } = useGallery();

  useEffect(() => {
    // Adding keyboard navigation for accessibility
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreenOpen) {
        const { closeFullscreen } = useGallery();
        closeFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenOpen]);

  return (
    <div className="relative">
      {cursorPosition && <CustomCursor />}
      
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
          Explore Our Moments
        </h2>
        <p className="text-gray-600 mb-6">
          Browse through our collection of memories, events, and creative sessions.
        </p>
        <CategoryFilter />
      </div>
      
      <PhotoGrid />
      
      {isFullscreenOpen && <FullscreenView />}
    </div>
  );
};

export default Gallery;