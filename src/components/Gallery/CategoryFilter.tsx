import React from 'react';
import { Camera, Users, Palette, PartyPopper, Film } from 'lucide-react';
import { useGallery } from './GalleryContext';

const categories = [
  { id: 'all', name: 'All Photos', icon: <Camera className="w-5 h-5" /> },
  { id: 'team-vibes', name: 'Team Vibes', icon: <Users className="w-5 h-5" /> },
  { id: 'creative-campaigns', name: 'Creative Campaigns', icon: <Palette className="w-5 h-5" /> },
  { id: 'work-play', name: 'Work Hard, Play Hard', icon: <PartyPopper className="w-5 h-5" /> },
  { id: 'behind-scenes', name: 'Behind-The-Scenes', icon: <Film className="w-5 h-5" /> },
];

const CategoryFilter: React.FC = () => {
  const { selectedCategory, setCategory } = useGallery();

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setCategory(category.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow'
            }`}
          >
            <span className={`transition-transform duration-300 ${
              selectedCategory === category.id ? 'rotate-0' : '-rotate-12'
            }`}>
              {category.icon}
            </span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;