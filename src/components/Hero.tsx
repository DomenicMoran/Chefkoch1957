'use client';

import { motion } from 'framer-motion';
import { ChefHat, MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-32 text-center">
      {/* Immersive Background Container */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/archive/image.jpeg")' }} // Use a high-quality main image if exists
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl px-6 space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="p-4 bg-primary/5 rounded-full border border-primary/10 backdrop-blur-xl">
            <ChefHat className="text-primary w-8 h-8 md:w-10 md:h-10" />
          </div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/40 to-transparent" />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="text-accent uppercase tracking-[0.6em] text-[10px] md:text-xs">In Gedenken an</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif gold-gradient leading-none tracking-tight">
              Chefkoch 1957
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-foreground/50 font-serif italic leading-relaxed">
              &bdquo;Einfaches und schnelles Kochen f&uuml;r Anf&auml;nger &ndash; ein kulinarsiches Verm&auml;chtnis voller Liebe und Erinnerung.&ldquo;
            </p>
          </motion.div>
        </div>

        {/* Call to Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="pt-12 flex flex-col items-center gap-4 text-primary/30"
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">Weiterlesen</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side Decorative Lines */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/5 to-transparent hidden xl:block" />
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/5 to-transparent hidden xl:block" />
    </section>
  );
}
