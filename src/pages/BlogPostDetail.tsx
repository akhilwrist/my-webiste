import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Calendar, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import FadingVideo from '../components/FadingVideo';

export default function BlogPostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-heading italic text-white">Article Not Found</h1>
          <Link to="/blog" className="text-white/40 hover:text-white transition-colors flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Intelligence
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FadingVideo 
            src={post.video}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-body px-3 py-1 border border-white/10 rounded-full">{post.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading italic leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center flex-wrap gap-8 pt-4 text-white/40">
              <div className="flex items-center gap-2">
                 <User className="w-3 h-3" />
                 <span className="text-xs font-body font-light uppercase tracking-widest">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                 <Calendar className="w-3 h-3" />
                 <span className="text-xs font-body font-light uppercase tracking-widest">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                 <Clock className="w-3 h-3" />
                 <span className="text-xs font-body font-light uppercase tracking-widest">{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Social Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-40 space-y-6">
               <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Facebook className="w-4 h-4 text-white/40" />
               </button>
               <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Twitter className="w-4 h-4 text-white/40" />
               </button>
               <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Linkedin className="w-4 h-4 text-white/40" />
               </button>
               <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <LinkIcon className="w-4 h-4 text-white/40" />
               </button>
            </div>
          </div>

          {/* Body */}
          <div className="lg:col-span-11 space-y-12">
            <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 relative">
               <img 
                 src={post.image} 
                 alt={post.title} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 font-body font-light text-lg leading-relaxed text-white/70">
                {post.content.map((para, i) => (
                  <p key={i}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-16 border-t border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 p-4 border border-white/10 flex items-center justify-center text-white/20">
                     <User className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading italic text-white">{post.author}</h4>
                    <p className="text-sm text-white/40 font-body font-light">Lead AI Engineer at WebCat Labs</p>
                  </div>
                </div>
                <a 
                  href="https://calendly.com/akhilthampy123/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-black font-heading italic rounded-full hover:bg-white/90 transition-all hover:scale-105"
                >
                  Consult the Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Articles */}
      <section className="py-32 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-3xl font-heading italic text-white text-center">More Intelligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((other) => (
              <Link 
                key={other.id} 
                to={`/blog/${other.id}`}
                className="group liquid-glass p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/[0.03] transition-all"
              >
                <span className="text-[10px] uppercase tracking-widest text-white/30 mb-4 block">{other.category}</span>
                <h3 className="text-2xl font-heading italic text-white group-hover:translate-x-1 transition-transform">{other.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
