import React from 'react';
import { useGallery } from './GalleryContext';
import PhotoCard from './PhotoCard';

const PhotoGrid: React.FC = () => {
  const { filteredPhotos } = useGallery();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredPhotos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGrid;