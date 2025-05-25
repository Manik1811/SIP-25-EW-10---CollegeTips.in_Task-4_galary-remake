import React, { useState } from 'react';
import { useGallery } from './GalleryContext';
import { ZoomIn, Tag } from 'lucide-react';

interface PhotoCardProps {
  photo: {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    width: number;
    height: number;
  };
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  const { openFullscreen, updateCursorPosition, resetCursorPosition } = useGallery();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
    updateCursorPosition(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    resetCursorPosition();
  };

  // Generate unique shape class based on photo ID
  const getUniqueShape = () => {
    const shapes = [
      'rounded-lg',
      'rounded-xl',
      'rounded-2xl',
      'rounded-3xl',
      'rounded-[2rem_1rem]',
      'rounded-[1rem_2rem]',
      'rounded-[3rem_1rem_2rem_4rem]',
      'rounded-[2rem_4rem_1rem_3rem]'
    ];
    return shapes[photo.id % shapes.length];
  };

  // Calculate rotation based on mouse position
  const getTransform = () => {
    if (!isHovered) return 'scale(1)';
    const rotateX = (mousePosition.y - 0.5) * 10;
    const rotateY = (mousePosition.x - 0.5) * 10;
    return `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  return (
    <div 
      className={`relative overflow-hidden ${getUniqueShape()} shadow-lg transition-all duration-300
        ${photo.id % 3 === 0 ? 'col-span-2' : ''}
        ${photo.id % 5 === 0 ? 'row-span-2' : ''}
      `}
      style={{
        transform: getTransform(),
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => openFullscreen(photo)}
    >
      <div className="group relative w-full h-full overflow-hidden">
        {/* Background gradient animation */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`
          }}
        />

        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`
          }}
          loading="lazy"
        />

        {/* Content overlay with parallax effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end
            opacity-0 group-hover:opacity-100 transition-all duration-500
          `}
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * 10}px, ${(mousePosition.y - 0.5) * 10}px)`
          }}
        >
          <h3 className="text-white font-bold text-2xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {photo.title}
          </h3>
          
          <p className="text-white/80 text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            {photo.description}
          </p>
          
          <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
            {photo.tags.map((tag, index) => (
              <span 
                key={index} 
                className="tag-pill bg-white/20 text-white backdrop-blur-sm"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute top-4 right-4 transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-500">
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
            <ZoomIn className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;