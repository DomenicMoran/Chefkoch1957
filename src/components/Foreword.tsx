'use client';

import { motion } from 'framer-motion';

export default function Foreword() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <span className="text-secondary uppercase tracking-[0.4em] text-[10px] opacity-40">Einleitung & Spenden-Information</span>
            <h4 className="text-primary font-serif text-3xl md:text-5xl italic leading-tight">Vorwort</h4>
            <div className="w-16 h-[1px] bg-primary/20 mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto text-lg text-foreground/60 leading-loose space-y-8 font-light italic">
            <p>
              Roger Wachholtz hat alle Rezepte, die auf dieser Webseite zu finden sind, großzügig und kostenfrei auf seinem Blog zur Verfügung gestellt. Dieses digitale Denkmal bewahrt sein Werk und führt seine Vision fort. 
            </p>
            <p>
              Ursprünglich als Buch geplant, verwebt Roger darin oft persönliche Erinnerungen an vergangene Zeiten oder erzählt, wie er die einzelnen Gerichte entdeckt und lieben gelernt hat. Zum Gedenken an Rogers Wohltätigkeit werden wir Spenden an das <strong>Vivantes Hospiz gGmbH</strong> in Berlin sowie zur Unterstützung seiner Ehefrau, <strong>Bettina Wachholtz</strong>, koordinieren.
            </p>
            <div className="pt-8 border-t border-primary/5">
              <p className="text-xs uppercase tracking-widest opacity-40">Herausgeber-Notiz</p>
              <p className="text-sm mt-2">
                Rechtschreibfehler wurden behutsam korrigiert und der Text sprachlich angepasst, ohne den authentischen Kern und die Seele von Rogers Erzählungen zu verändern.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
