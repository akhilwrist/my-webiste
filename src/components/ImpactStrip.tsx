import React from 'react';
import { motion } from 'motion/react';
import { Clock, Globe } from 'lucide-react';

const entranceTransition = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export default function ImpactStrip() {
  return (
    <section className="bg-black py-24 px-8 md:px-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Partners */}
        <motion.div
           {...entranceTransition}
           className="flex flex-col items-center gap-12 text-center"
        >
          <div className="space-y-6 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-heading italic text-white/90">The Performance Standard</h3>
            <p className="text-white/40 font-body font-light leading-relaxed">
              WebCat Labs engineers autonomous machines that capture, qualify, and close leads 24/7. Stop trading time for growth and deploy a high-converting AI blueprint today.
            </p>
          </div>

          <div className="flex flex-col items-center gap-12 w-full overflow-hidden">
            <div className="liquid-glass rounded-full px-6 py-2 text-[10px] font-medium text-white/40 uppercase tracking-[0.4em] border border-white/5">
              Trusted by growing businesses globally
            </div>
            
            <div className="relative w-full overflow-hidden py-4">
              {/* Fade masks for better edge transition */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
              
              <motion.div 
                className="flex whitespace-nowrap gap-16 md:gap-24 w-max"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[
                  "Google", "Meta Platforms", "TikTok", "LinkedIn", "YouTube", 
                  "Shopify", "WooCommerce", "WordPress", "Wix", 
                  "Adobe", "Canva", "Figma", 
                  "HubSpot", "Zoho", "Salesforce", "Zapier"
                ].map((brand, i) => (
                  <span key={i} className="text-3xl md:text-5xl text-white font-heading italic tracking-tighter opacity-40 hover:opacity-100 transition-opacity">
                    {brand}
                  </span>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  "Google", "Meta Platforms", "TikTok", "LinkedIn", "YouTube", 
                  "Shopify", "WooCommerce", "WordPress", "Wix", 
                  "Adobe", "Canva", "Figma", 
                  "HubSpot", "Zoho", "Salesforce", "Zapier"
                ].map((brand, i) => (
                  <span key={`dup-${i}`} className="text-3xl md:text-5xl text-white font-heading italic tracking-tighter opacity-40 hover:opacity-100 transition-opacity">
                    {brand}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {/* Stat 1 */}
          <motion.div 
            {...entranceTransition}
            transition={{ ...entranceTransition.transition, delay: 0.2 }}
            className="liquid-glass p-10 rounded-[2.5rem] text-center md:text-left flex flex-col items-center md:items-start gap-10 border border-white/5"
          >
            <div className="p-4 rounded-2xl bg-white/5">
              <Clock className="w-8 h-8 text-white stroke-1" />
            </div>
            <div>
              <h4 className="text-6xl md:text-7xl font-heading italic text-white tracking-[-2px] leading-none mb-4">80%</h4>
              <p className="text-xs text-white/40 font-body uppercase tracking-[0.2em] leading-relaxed">Average Automated Appointment Bookings</p>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            {...entranceTransition}
            transition={{ ...entranceTransition.transition, delay: 0.4 }}
            className="liquid-glass p-10 rounded-[2.5rem] text-center md:text-left flex flex-col items-center md:items-start gap-10 border border-white/5"
          >
            <div className="p-4 rounded-2xl bg-white/5">
              <Globe className="w-8 h-8 text-white stroke-1" />
            </div>
            <div>
              <h4 className="text-6xl md:text-7xl font-heading italic text-white tracking-[-2px] leading-none mb-4">₹18L+</h4>
              <p className="text-xs text-white/40 font-body uppercase tracking-[0.2em] leading-relaxed text-balance">Revenue Recovered via AI Follow-up Systems</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
