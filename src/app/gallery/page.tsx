import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Add a type for gallery images
interface GalleryImage {
  id: number;
  url: string;
  category: string;
  title: string;
}

// Define categories and images
const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'showroom', name: 'Showroom' },
  { id: 'deliveries', name: 'Deliveries' },
  { id: 'bodyshop', name: 'Body Shop' },
  { id: 'events', name: 'Events' },
];

// Type the images array
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=1200',
    category: 'showroom',
    title: 'Showroom Interior',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
    category: 'showroom',
    title: 'Featured Vehicle',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200',
    category: 'deliveries',
    title: 'Happy Customer Delivery',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200',
    category: 'showroom',
    title: 'Luxury Collection',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200',
    category: 'bodyshop',
    title: 'Body Shop Facility',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
    category: 'showroom',
    title: 'Premium SUVs',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200',
    category: 'bodyshop',
    title: 'Before Restoration',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
    category: 'deliveries',
    title: 'Family Delivery Day',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1617531653520-bd4f36c2e1d9?w=1200',
    category: 'showroom',
    title: 'Modern Dealership',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
    category: 'events',
    title: 'Community Event',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=1200',
    category: 'bodyshop',
    title: 'Paint Booth',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200',
    category: 'showroom',
    title: 'Sports Car Collection',
  },
];

export default function Gallery() {
  // add explicit state types
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const filteredImages: GalleryImage[] =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // annotate parameters to remove implicit any
  const openLightbox = (image: GalleryImage, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    const newIndex =
      direction === 'next'
        ? (lightboxIndex + 1) % filteredImages.length
        : (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  return (
    <div
      data-source-location='pages/Gallery:56:4'
      data-dynamic-content='true'
      className='min-h-screen bg-neutral-50'
    >
      {/* Hero */}
      <div
        data-source-location='pages/Gallery:58:6'
        data-dynamic-content='true'
        className='bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20'
      >
        <div
          data-source-location='pages/Gallery:59:8'
          data-dynamic-content='true'
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
        >
          <motion.div
            data-source-location='pages/Gallery:60:10'
            data-dynamic-content='false'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1
              data-source-location='pages/Gallery:64:12'
              data-dynamic-content='false'
              className='text-4xl md:text-5xl font-bold mb-4'
            >
              Gallery
            </h1>
            <p
              data-source-location='pages/Gallery:65:12'
              data-dynamic-content='false'
              className='text-xl text-slate-300 max-w-2xl mx-auto'
            >
              Explore our showroom, customer deliveries, and body shop
              transformations
            </p>
          </motion.div>
        </div>
      </div>

      <div
        data-source-location='pages/Gallery:72:6'
        data-dynamic-content='true'
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'
      >
        {/* Category Filter */}
        <div
          data-source-location='pages/Gallery:74:8'
          data-dynamic-content='true'
          className='flex flex-wrap gap-3 justify-center mb-12'
        >
          {categories.map((category) => (
            <Button
              data-source-location='pages/Gallery:76:12'
              data-dynamic-content='true'
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : ''
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div
          data-source-location='pages/Gallery:88:8'
          data-dynamic-content='true'
          className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'
        >
          <AnimatePresence
            data-source-location='pages/Gallery:89:10'
            data-dynamic-content='true'
            mode='popLayout'
          >
            {filteredImages.map((image, index) => (
              <motion.div
                data-source-location='pages/Gallery:91:14'
                data-dynamic-content='true'
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className='break-inside-avoid group cursor-pointer'
                onClick={() => openLightbox(image, index)}
              >
                <div
                  data-source-location='pages/Gallery:101:16'
                  data-dynamic-content='true'
                  className='relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300'
                >
                  <img
                    data-source-location='pages/Gallery:102:18'
                    data-dynamic-content='false'
                    src={image.url}
                    alt={image.title}
                    className='w-full h-auto group-hover:scale-105 transition-transform duration-300'
                    loading='lazy'
                  />

                  <div
                    data-source-location='pages/Gallery:108:18'
                    data-dynamic-content='true'
                    className='absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'
                  >
                    <p
                      data-source-location='pages/Gallery:109:20'
                      data-dynamic-content='true'
                      className='text-white font-medium p-4'
                    >
                      {image.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredImages.length === 0 && (
          <div
            data-source-location='pages/Gallery:118:10'
            data-dynamic-content='false'
            className='text-center py-20'
          >
            <p
              data-source-location='pages/Gallery:119:12'
              data-dynamic-content='false'
              className='text-2xl text-slate-600'
            >
              No images in this category yet
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence
        data-source-location='pages/Gallery:125:6'
        data-dynamic-content='true'
      >
        {lightboxImage && (
          <motion.div
            data-source-location='pages/Gallery:127:10'
            data-dynamic-content='true'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4'
            onClick={closeLightbox}
          >
            <button
              data-source-location='pages/Gallery:134:12'
              data-dynamic-content='false'
              onClick={closeLightbox}
              className='absolute top-4 right-4 p-2 bg-white/10 backdrop-blur rounded-full text-white hover:bg-white/20 transition-colors z-10'
            >
              <X
                data-source-location='pages/Gallery:138:14'
                data-dynamic-content='false'
                className='w-6 h-6'
              />
            </button>

            <button
              data-source-location='pages/Gallery:141:12'
              data-dynamic-content='false'
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              className='absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur rounded-full text-white hover:bg-white/20 transition-colors'
            >
              <ChevronLeft
                data-source-location='pages/Gallery:148:14'
                data-dynamic-content='false'
                className='w-6 h-6'
              />
            </button>

            <button
              data-source-location='pages/Gallery:151:12'
              data-dynamic-content='false'
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              className='absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur rounded-full text-white hover:bg-white/20 transition-colors'
            >
              <ChevronRight
                data-source-location='pages/Gallery:158:14'
                data-dynamic-content='false'
                className='w-6 h-6'
              />
            </button>

            <motion.div
              data-source-location='pages/Gallery:161:12'
              data-dynamic-content='true'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='max-w-6xl w-full'
              onClick={(e) => e.stopPropagation()}
            >
              <img
                data-source-location='pages/Gallery:168:14'
                data-dynamic-content='false'
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className='w-full h-auto rounded-lg shadow-2xl'
              />

              <div
                data-source-location='pages/Gallery:173:14'
                data-dynamic-content='true'
                className='text-center mt-4'
              >
                <p
                  data-source-location='pages/Gallery:174:16'
                  data-dynamic-content='true'
                  className='text-white text-xl font-medium'
                >
                  {lightboxImage.title}
                </p>
                <p
                  data-source-location='pages/Gallery:175:16'
                  data-dynamic-content='true'
                  className='text-slate-400 text-sm mt-1'
                >
                  {lightboxIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
