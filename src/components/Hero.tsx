'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero.png"
          alt="Chefkoch 1957"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-primary tracking-[0.3em] uppercase text-sm mb-6 font-medium">
            In liebevoller Erinnerung
          </h2>
          <h1 className="text-6xl md:text-8xl mb-8 font-serif gold-gradient">
            Chefkoch 1957
          </h1>
          <div className="w-24 h-[1px] bg-primary/30 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            Ein Leben gewidmet der Leidenschaft des Kochens, der Freude am Genuss 
            und den unzähligen Geschichten, die am Esstisch begannen.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-accent text-[10px] uppercase tracking-widest">Entdecken</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
