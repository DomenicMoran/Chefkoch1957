'use client';

import { motion } from 'framer-motion';

export default function Tribute() {
  return (
    <section className="section-padding bg-secondary/30 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Decorative Quote Mark */}
          <div className="absolute -top-10 -left-10 text-primary/10 text-9xl font-serif">
            &ldquo;
          </div>

          <div className="space-y-8 relative z-10">
            <h3 className="text-primary font-serif text-3xl mb-12 text-center">
              Worte über Roger Wachholtz
            </h3>
            
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-foreground/90 italic text-center">
              &bdquo;Roger Wachholtz hat alle Rezepte, die in diesem Buch enthalten sind, großzügig und kostenfrei auf seinem Blog zur Verfügung gestellt.&ldquo;
            </p>

            <div className="prose prose-invert max-w-none prose-p:text-foreground/70 prose-p:leading-loose prose-p:text-lg">
              <p>
                Mit sprachlich angepasstem Text und korrigierten Rechtschreibfehlern bewahrt dieses Projekt Rogers Leidenschaft fürs Kochen und seine Lebensfreude – eine Einladung, seine Rezepte nachzukochen, seine Geschichten zu lesen und seinen Geist lebendig zu halten.
              </p>
              <p>
                Für die Familie, für Freunde und für jeden, der die Magie eines selbstgekochten Gerichts zu schätzen weiß. Roger war mehr als nur ein Hobbykoch; er war ein Geschichtenerzähler, ein Genießer und ein Mensch, der es liebte, andere glücklich zu machen.
              </p>
            </div>

            <div className="pt-12 text-center">
              <span className="text-accent uppercase tracking-[0.2em] text-xs block mb-2">Zusammengestellt von</span>
              <span className="text-primary font-medium text-lg tracking-widest uppercase">Domenic Moran</span>
            </div>
          </div>

          {/* Decorative Quote Mark */}
          <div className="absolute -bottom-20 -right-10 text-primary/10 text-9xl font-serif rotate-180">
            &ldquo;
          </div>
        </motion.div>
      </div>
    </section>
  );
}
