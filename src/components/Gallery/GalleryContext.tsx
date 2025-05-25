import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Photo, photos } from './data';

type CategoryType = 'all' | 'team-vibes' | 'creative-campaigns' | 'work-play' | 'behind-scenes';

interface GalleryContextType {
  photos: Photo[];
  filteredPhotos: Photo[];
  selectedPhoto: Photo | null;
  selectedCategory: CategoryType;
  cursorPosition: { x: number, y: number } | null;
  isFullscreenOpen: boolean;
  openFullscreen: (photo: Photo) => void;
  closeFullscreen: () => void;
  setCategory: (category: CategoryType) => void;
  updateCursorPosition: (x: number, y: number) => void;
  resetCursorPosition: () => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [cursorPosition, setCursorPosition] = useState<{ x: number, y: number } | null>(null);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openFullscreen = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsFullscreenOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
    document.body.style.overflow = '';
  };

  const setCategory = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  const updateCursorPosition = (x: number, y: number) => {
    setCursorPosition({ x, y });
  };

  const resetCursorPosition = () => {
    setCursorPosition(null);
  };

  return (
    <GalleryContext.Provider value={{
      photos,
      filteredPhotos,
      selectedPhoto,
      selectedCategory,
      cursorPosition,
      isFullscreenOpen,
      openFullscreen,
      closeFullscreen,
      setCategory,
      updateCursorPosition,
      resetCursorPosition,
    }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};