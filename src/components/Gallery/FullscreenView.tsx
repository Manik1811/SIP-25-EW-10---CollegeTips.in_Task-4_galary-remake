import React, { useState, useEffect } from 'react';
import { useGallery } from './GalleryContext';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

const FullscreenView: React.FC = () => {
  const { photos, selectedPhoto, closeFullscreen } = useGallery();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);

  useEffect(() => {
    if (selectedPhoto) {
      const index = photos.findIndex(photo => photo.id === selectedPhoto.id);
      if (index !== -1) {
        setCurrentPhotoIndex(index);
      }
    }
  }, [selectedPhoto, photos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeFullscreen();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPhotoIndex, photos, closeFullscreen]);

  const handleNext = () => {
    setIsLoading(true);
    setDirection('next');
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrevious = () => {
    setIsLoading(true);
    setDirection('prev');
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const currentPhoto = photos[currentPhotoIndex];

  if (!currentPhoto) return null;

  const slideClass = direction === 'next' 
    ? 'animate-slide-left' 
    : direction === 'prev' 
      ? 'animate-slide-right' 
      : '';

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      {/* Close button */}
      <button 
        onClick={closeFullscreen}
        className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300"
        aria-label="Close fullscreen view"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation buttons */}
      <button 
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Image and details container */}
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
        <div className={`relative w-full md:w-2/3 h-[60vh] md:h-[80vh] ${slideClass}`}>
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="w-full h-full object-contain rounded-lg"
            onLoad={() => setIsLoading(false)}
          />
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        
        <div className="w-full md:w-1/3 p-4 md:p-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{currentPhoto.title}</h2>
            <p className="text-white/80 mb-4">{currentPhoto.description}</p>
            
            <div className="mb-4">
              <h3 className="text-sm uppercase text-white/60 mb-2">Category</h3>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-sm font-medium">
                {currentPhoto.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            </div>
            
            <div>
              <h3 className="text-sm uppercase text-white/60 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {currentPhoto.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2 py-1 text-xs font-medium bg-white/20 text-white rounded-full"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white">
        {currentPhotoIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default FullscreenView;