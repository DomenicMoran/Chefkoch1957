import Hero from '@/components/Hero';
import Foreword from '@/components/Foreword';
import Tribute from '@/components/Tribute';
import BlogArchive from '@/components/BlogArchive';
import Legal from '@/components/Legal';
import { ChefHat } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      
      {/* Introduction & Context Section (Foreword) - Positioned first as requested */}
      <Foreword />
      
      {/* Detailed Personal Tribute Section */}
      <Tribute />
      
      {/* Searchable Recipes Archive Section */}
      <div id="rezept-archiv" className="relative z-10">
        <BlogArchive />
      </div>
      
      {/* Final Closing Message Section */}
      <section className="section-padding bg-secondary/10 text-center">
        <div className="max-w-4xl mx-auto py-24 border-y border-primary/5">
          <p className="font-serif text-3xl md:text-5xl text-primary italic mb-10 gold-text underline-offset-8">
            &bdquo;Bis wir uns am nächsten Tisch wiedersehen.&ldquo;
          </p>
          <div className="w-20 h-[1px] bg-primary/20 mx-auto mb-10" />
          <div className="flex flex-col items-center gap-6">
            <ChefHat className="text-primary/20 w-10 h-10" />
            <div className="space-y-2">
              <p className="text-accent uppercase tracking-[0.4em] text-[10px] opacity-60">Gekocht mit Herz, Bewahrt für die Ewigkeit</p>
              <div className="flex gap-4 items-center justify-center text-xs opacity-30 mt-4 uppercase tracking-[0.2em]">
                <span>Roger Wachholtz</span>
                <span className="w-1 h-1 bg-foreground rounded-full" />
                <span>Chefkoch 1957</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-border/10 text-center bg-secondary/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-foreground/40 text-[10px] uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Chefkoch 1957 Memorial Archive</p>
          <div className="flex gap-12 items-center text-center md:text-right">
            <Legal />
            <span>In Gedenken an Roger Wachholtz</span>
            <span>Von Domenic Moran</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
