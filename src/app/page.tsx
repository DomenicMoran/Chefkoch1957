import Hero from '@/components/Hero';
import Tribute from '@/components/Tribute';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Tribute />
      <Gallery />
      
      {/* Final Message Section */}
      <section className="section-padding bg-secondary/20 text-center">
        <div className="max-w-2xl mx-auto py-20 border-y border-primary/10">
          <p className="font-serif text-3xl md:text-4xl text-primary/80 italic mb-8">
            &bdquo;Bis wir uns am nächsten Tisch wiedersehen.&ldquo;
          </p>
          <div className="w-12 h-[1px] bg-primary/20 mx-auto mb-8" />
          <p className="text-accent text-sm uppercase tracking-widest">
            In ewiger Dankbarkeit
          </p>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border/10 text-center">
        <p className="text-accent/50 text-xs tracking-tighter">
          &copy; {new Date().getFullYear()} Chefkoch 1957 Memorial.
        </p>
      </footer>
    </main>
  );
}
