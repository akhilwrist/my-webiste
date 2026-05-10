import React from 'react';
import PageHero from '../components/PageHero';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <div className="bg-black text-white">
      <PageHero 
        title="The Automation Journal"
        subtitle="Insights, deep-dives, and technical blueprints from the frontier of AI business engineering."
        videoSrc="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4"
        badge="Knowledge Base"
      />

      <section className="py-24 px-8 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="block"
              >
                <motion.article 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="liquid-glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 flex flex-col group hover:bg-white/[0.03] transition-colors h-full"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-body px-3 py-1 border border-white/10 rounded-full">{post.category}</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-body">{post.date}</span>
                  </div>
                  <h2 className="text-3xl font-heading italic text-white mb-6 leading-tight group-hover:translate-x-1 transition-transform">{post.title}</h2>
                  <p className="text-white/50 font-body font-light text-sm leading-relaxed mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:gap-4 transition-all">
                    Read Article <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-8 bg-white/5 border-y border-white/5">
        <div className="max-w-2xl mx-auto text-center space-y-8">
           <h3 className="text-4xl font-heading italic">Weekly Automation Intel</h3>
           <p className="text-white/50 font-body font-light leading-relaxed">Join 12,000+ business owners receiving the latest AI systems and implementation guides directly in their inbox.</p>
           <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="you@company.com" 
                className="flex-1 bg-black border border-white/10 rounded-full px-8 py-4 font-body focus:outline-none focus:border-white/30"
              />
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90">Join</button>
           </div>
        </div>
      </section>
    </div>
  );
}
