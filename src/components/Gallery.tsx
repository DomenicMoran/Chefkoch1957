'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  '/images/gallery/01B94623-089F-49DA-BA89-8EA5FBDCD8F6.jpeg',
  '/images/gallery/0215B9F1-5D4C-458F-9510-A6AA50EECF2E.jpeg',
  '/images/gallery/0B0054AF-6258-4001-A2BF-CA4EC9FDA5BD.jpeg',
  '/images/gallery/2C16CDA7-5CD8-42EB-8F62-273A322EFB4A.jpeg',
  '/images/gallery/2C2834D4-2EAE-4BB5-A57C-B80BA969BC43.jpeg',
  '/images/gallery/42452FD9-2F42-41D0-AFC6-BA726833A9A0.jpeg',
  '/images/gallery/454A59EA-3AC3-48DF-86B9-0686EEC6481B.jpeg',
  '/images/gallery/501EE633-30E9-4DE8-8B97-8DDA4E938CA9.jpeg',
  '/images/gallery/57BF3096-CE72-4387-A9C4-910128347792.jpeg',
  '/images/gallery/8162E772-3A30-48F3-BB21-7F7EEFC9ACEF.jpeg',
  '/images/gallery/8C952B5E-59A2-438E-B79C-EDBFEE71913C.jpeg',
  '/images/gallery/A9961D02-3771-4FD7-9698-9C003084ABDB.jpeg'
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Kulinarische Momente</h2>
          <p className="text-accent tracking-widest uppercase text-xs">Ein Blick in Rogers Küche</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(src)}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-sm group"
            >
              <Image
                src={src}
                alt={`Kochmoment ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-widest border border-white/40 px-3 py-1 backdrop-blur-sm">Vergrößern</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full">
            <Image
              src={selectedImage}
              alt="Ausgewähltes Bild"
              fill
              className="object-contain"
            />
          </div>
          <button 
            className="absolute top-8 right-8 text-foreground/50 hover:text-primary transition-colors text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </motion.div>
      )}
    </section>
  );
}
