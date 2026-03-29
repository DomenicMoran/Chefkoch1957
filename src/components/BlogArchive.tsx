'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import postsData from '@/data/posts.json';
import { Search, X, Calendar, ChefHat } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
  images: string[];
}

export default function BlogArchive() {
  const [search, setSearch] = useState('');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const filteredPosts = useMemo(() => {
    return (postsData as Post[]).filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
    ).sort((a, b) => {
      // Very basic date sorting if format is consistent (Tag, TT. Monat JJJJ)
      // Since it's German, we'll just keep the extraction order which is likely chronological
      return 0; 
    });
  }, [search]);

  return (
    <section className="section-padding bg-background/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 gold-gradient">Das Kulinarische Vermächtnis</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
            Alle Rezepte, Geschichten und Erinnerungen aus Rogers Blog &bdquo;Chefkoch 1957&ldquo;.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input
            type="text"
            placeholder="Rezept suchen..."
            className="w-full bg-secondary/50 border border-primary/10 rounded-full py-4 px-12 text-foreground focus:outline-none focus:border-primary/30 transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 w-5 h-5" />
          {search && (
            <X 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/40 cursor-pointer w-5 h-5" 
              onClick={() => setSearch('')}
            />
          )}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(0, 100).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 10) * 0.05 }}
              onClick={() => setSelectedPost(post)}
              className="glass-panel group cursor-pointer overflow-hidden rounded-lg flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                {post.images.length > 0 ? (
                  <Image
                    src={`/images/archive/${post.images[0]}`}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <ChefHat className="text-primary/10 w-12 h-12" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white text-xs uppercase tracking-widest border border-white/40 px-4 py-2">Rezept lesen</span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-[10px] text-accent uppercase tracking-widest mb-3 opacity-60">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <h4 className="text-xl font-serif text-foreground/90 group-hover:text-primary transition-colors leading-tight mb-4">
                  {post.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredPosts.length > 100 && (
          <div className="text-center mt-12 text-foreground/40 text-sm italic">
            Insgesamt {filteredPosts.length} Rezepte gefunden. Scrolle weiter für mehr...
          </div>
        )}
      </div>

      {/* Post Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl overflow-y-auto pt-20"
          >
            <div className="max-w-4xl mx-auto px-6 pb-20">
              <button 
                onClick={() => setSelectedPost(null)}
                className="fixed top-8 right-8 z-[60] bg-secondary/80 p-3 rounded-full hover:bg-primary/20 transition-colors"
              >
                <X className="w-6 h-6 text-primary" />
              </button>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="space-y-12"
              >
                <div className="text-center space-y-4">
                  <div className="text-accent uppercase tracking-[0.3em] text-xs opacity-60">
                    {selectedPost.date}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedPost.images.map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-lg overflow-hidden glass-panel">
                      <Image
                        src={`/images/archive/${img}`}
                        alt={selectedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div 
                  className="prose prose-invert prose-p:text-xl prose-p:leading-loose max-w-none pt-12 border-t border-primary/10"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
