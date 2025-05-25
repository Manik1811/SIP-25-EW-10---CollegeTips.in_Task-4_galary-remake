import React from 'react';
import Gallery from './components/Gallery/Gallery';
import { GalleryProvider } from './components/Gallery/GalleryContext';

function App() {
  return (
    <div className="relative min-h-screen animate-gradient overflow-hidden">
      {/* Animated background bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="bubble w-64 h-64 top-[10%] left-[15%]" style={{ animationDelay: '0s' }} />
        <div className="bubble w-96 h-96 top-[40%] right-[10%]" style={{ animationDelay: '2s' }} />
        <div className="bubble w-48 h-48 bottom-[20%] left-[25%]" style={{ animationDelay: '4s' }} />
        <div className="bubble w-72 h-72 top-[60%] right-[25%]" style={{ animationDelay: '1s' }} />
      </div>

      <GalleryProvider>
        <header className="relative w-full py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            CollegeTips Photo Gallery
          </h1>
          <p className="text-center mt-2 text-gray-600 max-w-2xl mx-auto">
            Capturing our journey, one moment at a time. Explore our memories, events, and the amazing team behind CollegeTips!
          </p>
        </header>
        <main className="relative container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Gallery />
        </main>
        <footer className="relative text-center py-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} CollegeTips. All rights reserved.
        </footer>
      </GalleryProvider>
    </div>
  );
}

export default App;