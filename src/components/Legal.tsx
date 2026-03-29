'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scale } from 'lucide-react';

export default function Legal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'impressum' | 'datenschutz'>('impressum');

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="hover:text-primary transition-colors flex items-center gap-2"
      >
        <Scale className="w-3 h-3" />
        Rechtliches
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-background/95 backdrop-blur-3xl px-6 py-20 overflow-y-auto flex flex-col items-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="fixed top-8 right-8 bg-white/5 p-4 rounded-full border border-white/10 hover:bg-white/10 transition-all"
            >
              <X className="w-5 h-5 text-primary" />
            </button>

            <div className="max-w-3xl mx-auto space-y-16">
              <div className="flex justify-center gap-12 border-b border-primary/10 pb-8">
                <button 
                  onClick={() => setActiveTab('impressum')}
                  className={`uppercase tracking-[0.4em] text-[10px] transition-all ${activeTab === 'impressum' ? 'text-primary' : 'text-accent opacity-40'}`}
                >
                  Impressum
                </button>
                <button 
                  onClick={() => setActiveTab('datenschutz')}
                  className={`uppercase tracking-[0.4em] text-[10px] transition-all ${activeTab === 'datenschutz' ? 'text-primary' : 'text-accent opacity-40'}`}
                >
                  Datenschutz
                </button>
              </div>

              <motion.div
                key={activeTab}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="prose prose-invert max-w-5xl w-full modal-prose"
              >
                {activeTab === 'impressum' ? (
                  <div className="space-y-10">
                    <h3 className="font-serif italic text-4xl text-primary">Impressum</h3>
                    <div className="space-y-4 text-foreground/60 font-light">
                      <p className="uppercase tracking-widest text-xs opacity-40">Verantwortlich für den Inhalt</p>
                      <p className="text-xl">Domenic Moran</p>
                      <p>E-Mail: kontakt@mencloud.berlin</p>
                    </div>
                    <div className="pt-10 space-y-4 border-t border-primary/5 italic text-sm opacity-40">
                      <p>
                        Diese Webseite ist ein rein privates, nicht-kommerzielles Projekt zum Gedenken an Roger Wachholtz.
                        Sämtliche Inhalte (Texte und Bilder) stammen aus dem Nachlass von Roger Wachholtz (ehem. Chefkoch 1957).
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-10">
                    <h3 className="font-serif italic text-4xl text-primary">Datenschutz</h3>
                    <div className="space-y-6 text-foreground/60 font-light text-left max-w-2xl mx-auto leading-loose">
                      <p>
                        <strong>1. Datenerfassung</strong>: Auf dieser Webseite werden keine personenbezogenen Daten (wie Namen, IP-Adressen dauerhaft oder E-Mail-Adressen) aktiv erhoben oder gespeichert. Es gibt kein Kontaktformular und keine Nutzerregistrierung.
                      </p>
                      <p>
                        <strong>2. Cookies</strong>: Wir verwenden keine Tracking-Cookies oder Analyse-Tools (wie Google Analytics).
                      </p>
                      <p>
                        <strong>3. Hosting</strong>: Die Seite wird auf Vercel gehostet. Vercel erhebt technisch notwendige Log-Daten (z.B. IP-Adresse), um die Auslieferung der Webseite zu gewährleisten. Diese Daten werden gemäß der Datenschutzbestimmungen von Vercel verarbeitet.
                      </p>
                      <p>
                        <strong>4. Externe Inhalte</strong>: Es werden keine externen Skripte oder Tracker von Drittanbietern geladen.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
