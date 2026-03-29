'use client';

import { motion } from 'framer-motion';

export default function Tribute() {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Symmetrical Quote Mark at the top */}
          <div className="flex justify-center mb-8">
            <div className="text-primary/10 text-[10rem] font-serif leading-none select-none">
              &ldquo;
            </div>
          </div>

          <div className="space-y-16 relative z-10 pt-4">
            <div className="space-y-4">
              <h3 className="text-primary font-serif text-3xl md:text-5xl italic leading-tight">
                An Roger Wachholtz
              </h3>
              <div className="w-24 h-[1px] bg-primary/20 mx-auto" />
              <span className="text-secondary uppercase tracking-[0.4em] text-[10px] opacity-40">Mein Großvater, Unser Koch, Unser Vorbild</span>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-2xl md:text-3xl font-serif leading-loose text-foreground/95 italic mb-16 px-4">
                &bdquo;Mein Großvater, Roger Wachholtz, war nicht nur ein begnadeter Koch, sondern auch ein unglaublich toller Mensch. Er war ein Kämpfer, ein Mann mit einem unerschütterlichen Willen.&ldquo;
              </p>

              <div className="space-y-12 text-xl text-foreground/80 leading-relaxed font-light">
                <p>
                  Dieses Projekt, das seine Rezepte und Geschichten aus seinem Blog „Chefkoch 1957“ bewahrt, ist mein Versuch, sein Licht am Leuchten zu halten – für meine Großmutter, für unsere Familie und für jeden, der seine Worte liest und seine Gerichte nachkocht. Als er 2016 seinen Blog startete, war es für ihn nicht nur ein Hobby, sondern eine Möglichkeit, seine Erinnerungen und Rezepte mit der Welt zu teilen. 
                </p>
                <p>
                  Jeder Eintrag, sei es die schwäbische Linsensuppe oder die Geschichte von Linsen mit Spätzle, trug seine Seele in sich – eine Mischung aus Humor, Wärme und einer tiefen Verbundenheit zu seinen Wurzeln. Doch die letzten Jahre seines Lebens waren nicht leicht. Er bekam die Diagnose, die alles veränderte: ein Hirntumor. Es war ein Schock, der unsere Familie sprachlos machte. Opa, der immer so stark und voller Energie war, stand plötzlich vor einer Herausforderung, die größer war als alles, was er je gekannt hatte. 
                </p>
                <p>
                  Aber wenn ich eines über ihn gelernt habe, dann dass er niemals aufgab – nicht beim Kochen, nicht beim Schreiben und schon gar nicht im Leben. Der Kampf gegen den Krebs war hart. Es gab Tage, an denen er kaum die Kraft hatte, aufzustehen. Die Chemotherapie raubte ihm den Appetit, und die Operationen hinterließen Spuren. Doch selbst als der Tumor seinen Körper schwächte, blieb sein Geist ungebrochen. 
                </p>
                <p>
                  Der letzte Eintrag, „Linsen mit Spätzle und Saitenwürstle“ vom 17. Dezember 2023, war sein Abschiedsgeschenk an uns – ein Rezept, das so einfach und doch so voller Bedeutung war. Wenige Monate später verlor er den Kampf gegen den Tumor. Aber er hinterließ uns mehr als nur Erinnerungen – er hinterließ uns seine Geschichten, seine Rezepte, seine Leidenschaft.
                </p>
                <p>
                  Dieses Denkmal ist für ihn und für meine Großmutter, die ihn über alles liebte und ihn in seinen schwersten Momenten hielt. Es ist meine Art, Danke zu sagen – für den Mut, den er uns zeigte, selbst als das Leben ihn auf die Probe stellte. Ich hoffe, dass jeder, der diese Seite besucht, ein wenig von seinem Geist spürt.
                </p>
                <p>
                  Dieser Blog war sein kleines Fenster zur Welt, und mit dieser Seite möchte ich seine Leidenschaft bewahren – für meine Großmutter, die ihn so sehr vermisst, und für alle, die seine Rezepte nachkochen wollen.
                </p>
              </div>
            </div>

            <div className="pt-20 text-center flex flex-col items-center gap-6">
              <div className="w-[1px] h-12 bg-primary/20" />
              <div className="space-y-2">
                <span className="text-secondary uppercase tracking-[0.3em] text-[10px] block opacity-60">Aus tiefem Herzen</span>
                <span className="text-primary font-serif text-3xl tracking-widest italic gold-text">Domenic Moran</span>
              </div>
            </div>
          </div>

          {/* Symmetrical Quote Mark at the bottom */}
          <div className="flex justify-center mt-12 opacity-5">
            <div className="text-primary/10 text-[10rem] font-serif leading-none rotate-180 select-none">
              &ldquo;
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
