'use client';

import { motion } from 'framer-motion';

export default function Foreword() {
  return (
    <section id="foreword" className="py-32 px-6 bg-background relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-16"
        >
          <div className="space-y-6">
            <span className="text-secondary uppercase tracking-[0.6em] text-[10px] opacity-50 block mb-4">Einleitung</span>
            <h2 className="text-4xl md:text-6xl font-serif gold-gradient leading-tight">Vorwort</h2>
            <div className="w-16 h-[1px] bg-primary/20 mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto text-lg text-foreground/60 leading-loose space-y-8 font-light italic text-center">
            <p className="mx-auto block">
              Roger Wachholtz hat alle Rezepte, die auf dieser Webseite zu finden sind, großzügig und kostenfrei auf seinem Blog zur Verfügung gestellt. Dieses digitale Denkmal bewahrt sein Werk und führt seine Vision fort. 
            </p>
            <p className="mx-auto block">
              Ursprünglich als Buch geplant, verwebt Roger darin oft persönliche Erinnerungen an vergangene Zeiten oder erzählt, wie er die einzelnen Gerichte entdeckt und lieben gelernt hat. Es war sein Herzenswunsch, sein Wissen und seine Freude am Kochen mit so vielen Menschen wie möglich zu teilen.
            </p>
          </div>

          <div className="pt-8 flex flex-col items-center gap-4">
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary/20 to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-30 italic font-medium">Das kulinarsiche Erbe</span>
          </div>
        </motion.div>
      </div>
      
      {/* Absolute Decorative elements for Foreword */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/3 blur-[90px] rounded-full pointer-events-none" />
    </section>
  );
}
