'use client';

import { motion } from 'framer-motion';

export default function Tribute() {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative Quote Mark */}
          <div className="absolute -top-16 -left-8 text-primary/10 text-[12rem] font-serif leading-none select-none">
            &ldquo;
          </div>

          <div className="space-y-12 relative z-10 pt-16">
            <div className="text-center mb-16">
              <h3 className="text-primary font-serif text-3xl md:text-4xl mb-4">
                Worte über Roger Wachholtz
              </h3>
              <div className="w-16 h-[1px] bg-primary/20 mx-auto" />
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl md:text-2xl font-serif leading-relaxed text-foreground/95 italic text-center mb-16">
                &bdquo;Mein Großvater, Roger Wachholtz, war nicht nur ein begnadeter Koch, sondern auch ein unglaublich toller Mensch. Er war ein Kämpfer, ein Mann mit einem unerschütterlichen Willen.&ldquo;
              </p>

              <div className="space-y-6 text-lg text-foreground/80 leading-loose font-light">
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

            <div className="pt-8 text-center">
              <span className="text-accent uppercase tracking-[0.3em] text-[10px] block mb-2 opacity-60">In ewiger Erinnerung</span>
              <span className="text-primary font-serif text-2xl tracking-widest italic">Domenic Moran</span>
            </div>
            
            {/* Vorwort Section */}
            <div className="mt-32 pt-20 border-t border-primary/10">
              <h4 className="text-primary font-serif text-2xl mb-8 text-center italic">Vorwort</h4>
              <div className="max-w-2xl mx-auto text-sm text-foreground/60 leading-relaxed space-y-4 text-center">
                <p>
                  Roger Wachholtz hat alle Rezepte, die auf dieser Webseite zu finden sind, großzügig und kostenfrei auf seinem Blog zur Verfügung gestellt. Dieses digitale Denkmal bewahrt sein Werk und führt seine Vision fort. 
                </p>
                <p>
                  Ursprünglich als Buch geplant, verwebt Roger darin oft persönliche Erinnerungen an vergangene Zeiten oder erzählt, wie er die einzelnen Gerichte entdeckt und lieben gelernt hat. Zum Gedenken an Rogers Wohltätigkeit werden wir Spenden an das <strong>Vivantes Hospiz gGmbH</strong> in Berlin sowie zur Unterstützung seiner Ehefrau, <strong>Bettina Wachholtz</strong>, koordinieren.
                </p>
                <p className="italic">
                  Rechtschreibfehler wurden behutsam korrigiert und der Text sprachlich angepasst, ohne den authentischen Kern und die Seele von Rogers Erzählungen zu verändern.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Quote Mark */}
          <div className="absolute -bottom-24 -right-8 text-primary/10 text-[12rem] font-serif leading-none rotate-180 select-none">
            &ldquo;
          </div>
        </motion.div>
      </div>
    </section>
  );
}
