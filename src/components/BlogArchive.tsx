'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import postsData from '@/data/posts.json';
import { Search, X, Calendar, ChefHat, ArrowUpRight, Loader2 } from 'lucide-react';
import SafeImage from './SafeImage';

interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
  images: string[];
}

const ITEMS_PER_PAGE = 30;

export default function BlogArchive() {
  const [search, setSearch] = useState('');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const loaderRef = useRef<HTMLDivElement>(null);

  const filteredPosts = useMemo(() => {
    return (postsData as Post[]).filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
    ).sort((a, b) => 0); // Preserving chronological extraction order
  }, [search]);

  // Reset pagination on search
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [search]);

  // Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && visibleCount < filteredPosts.length) {
        setVisibleCount(prev => prev + ITEMS_PER_PAGE);
      }
    }, { threshold: 0.1 });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, filteredPosts.length]);

  return (
    <section className="section-padding bg-background relative overflow-hidden text-center">
      {/* Search Header Container */}
      <div className="max-w-6xl mx-auto px-6 mb-24 space-y-12 pb-20 border-b border-primary/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex flex-col items-center gap-4 mb-4">
            <span className="text-secondary uppercase tracking-[0.5em] text-[10px] opacity-40">Das kulinarsiche Archiv</span>
            <h2 className="text-4xl md:text-6xl font-serif gold-gradient leading-tight">Das Vermächtnis</h2>
            <div className="w-16 h-[1px] bg-primary/20 mx-auto" />
          </div>
          <p className="text-foreground/40 max-w-xl mx-auto text-lg font-light leading-relaxed italic">
            Entdecken Sie &uuml;ber 600 Rezepte, Geschichten und kulinarische Erinnerungen aus Rogers Original-Blog.
          </p>
        </motion.div>

        {/* Search Bar - Overhauled with Premium Styling */}
        <div className="max-w-xl mx-auto relative group">
          <div className="absolute inset-0 bg-primary/5 blur-xl group-focus-within:bg-primary/10 transition-colors rounded-full" />
          <input
            type="text"
            placeholder="Nach Rezepten oder Zutaten suchen..."
            className="w-full bg-secondary/40 backdrop-blur-xl border border-primary/10 rounded-full py-6 px-14 text-foreground text-center focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all text-lg font-light placeholder:text-foreground/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5 group-hover:text-primary/60 transition-colors" />
          {search && (
            <X 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-primary/40 cursor-pointer w-5 h-5 hover:text-primary transition-colors" 
              onClick={() => setSearch('')}
            />
          )}
        </div>
      </div>

      {/* Posts Grid - Balanced & Responsive */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.slice(0, visibleCount).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.05 }}
              onClick={() => setSelectedPost(post)}
              className="glass-panel group cursor-pointer overflow-hidden rounded-sm flex flex-col p-2"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary/20">
                {post.images.length > 0 ? (
                  <SafeImage
                    src={`/images/archive/${post.images[0]}`}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                ) : (
                  <div className="relative w-full h-full bg-secondary/50">
                    <SafeImage
                      src="/images/placeholder.png"
                      alt="Chefkoch 1957 Memorial"
                      fill
                      className="object-cover opacity-30 group-hover:opacity-50 transition-opacity grayscale"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ChefHat className="w-12 h-12 text-primary/20" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute top-4 right-4 translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-primary/20 p-2 rounded-full backdrop-blur-xl border border-primary/20">
                    <ArrowUpRight className="text-primary w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="p-8 text-center flex flex-col gap-4">
                <div className="flex items-center justify-center gap-3 text-[9px] text-accent uppercase tracking-[0.3em] opacity-40 group-hover:opacity-80 transition-opacity">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <h4 className="text-xl md:text-2xl font-serif text-foreground/80 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h4>
                <div className="w-8 h-[1px] bg-primary/10 mx-auto group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Loader/Sentinel for Infinite Scroll */}
        <div ref={loaderRef} className="mt-20 py-12 flex flex-col items-center gap-4">
          {visibleCount < filteredPosts.length ? (
            <div className="flex flex-col items-center gap-4 animate-pulse">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
              <span className="text-accent text-[10px] uppercase tracking-[0.4em] opacity-40">Weitere Rezepte laden...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-20 border-t border-primary/5">
              <span className="text-accent text-[10px] uppercase tracking-[0.4em] opacity-40">Entdeckungsreise</span>
              <p className="text-foreground/30 italic text-sm">
                Sie haben alle {filteredPosts.length} kulinarischen Eintr&auml;ge entdeckt.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Post Detail Modal - Premium Design */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-background/95 backdrop-blur-3xl px-6 py-20 overflow-y-auto flex flex-col items-center"
          >
            {/* Nuclear Centering Override for Modal Content */}
            <style dangerouslySetInnerHTML={{ __html: `
              .modal-prose * { text-align: center !important; }
              .modal-prose ul, .modal-prose ol { display: inline-block !important; text-align: left !important; margin: 2rem auto !important; }
              .modal-prose li { text-align: left !important; }
              .modal-prose img { margin: 3rem auto !important; display: block !important; }
            `}} />

            <button 
              onClick={() => setSelectedPost(null)}
              className="fixed top-8 right-8 z-[110] bg-white/5 p-4 rounded-full hover:bg-white/10 transition-all border border-white/10 group"
            >
              <X className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </button>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-5xl mx-auto space-y-16 w-full"
            >
              <div className="text-center space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <span className="text-accent uppercase tracking-[0.4em] text-[10px] opacity-60">Rezept & Geschichte</span>
                  <h2 className="text-4xl md:text-7xl font-serif leading-tight gold-gradient">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center justify-center gap-4 text-xs tracking-widest text-primary/40 uppercase">
                    <Calendar className="w-3 h-3" />
                    {selectedPost.date}
                  </div>
                </div>
              </div>

              {selectedPost.images.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                  {selectedPost.images.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="relative aspect-square sm:aspect-video rounded-sm overflow-hidden border border-primary/10 shadow-2xl"
                    >
                      <SafeImage
                        src={`/images/archive/${img}`}
                        alt={selectedPost.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="max-w-2xl mx-auto px-4">
                  <div className="relative aspect-video rounded-sm overflow-hidden border border-primary/5 opacity-40 grayscale">
                    <SafeImage
                      src="/images/placeholder.png"
                      alt="Chefkoch 1957 Memorial"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              <div 
                className="prose prose-invert prose-p:text-xl prose-p:leading-loose prose-p:font-light prose-p:text-foreground/80 max-w-none pt-16 border-t border-primary/5 px-4 w-full modal-prose recipe-content"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
              <div className="pt-20 text-center text-primary/20 flex flex-col items-center gap-4">
                <ChefHat className="w-8 h-8 opacity-40" />
                <span className="text-[10px] uppercase tracking-[0.5em] italic font-light">&ndash; In Gedenken an Roger &ndash;</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
