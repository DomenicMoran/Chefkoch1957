import Hero from '@/components/Hero';
import Tribute from '@/components/Tribute';
import BlogArchive from '@/components/BlogArchive';
import { ChefHat } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Tribute />
      
      {/* Searchable Recipes Section */}
      <div id="rezepte">
        <BlogArchive />
      </div>
      
      {/* Final Message Section */}
      <section className="section-padding bg-secondary/10 text-center">
        <div className="max-w-2xl mx-auto py-20 border-y border-primary/10">
          <p className="font-serif text-3xl md:text-4xl text-primary italic mb-8">
            &bdquo;Bis wir uns am nächsten Tisch wiedersehen.&ldquo;
          </p>
          <div className="w-12 h-[1px] bg-primary/30 mx-auto mb-8" />
          <div className="flex flex-col items-center gap-4">
            <ChefHat className="text-primary/20 w-8 h-8" />
            <p className="text-foreground/40 text-sm uppercase tracking-widest">
              Gekocht mit Herz, Bewahrt für die Ewigkeit
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border/10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-foreground/30 text-xs">
          <p>&copy; {new Date().getFullYear()} Chefkoch 1957 Memorial. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8 uppercase tracking-widest">
            <span>In Gedenken an Roger Wachholtz</span>
            <span>Von Domenic Moran</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
