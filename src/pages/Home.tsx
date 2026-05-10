import React from 'react';
import Hero from '../components/Hero';
import ImpactStrip from '../components/ImpactStrip';
import Capabilities from '../components/Capabilities';
import Process from '../components/Process';
import FadingVideo from '../components/FadingVideo';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <ImpactStrip />
      
      {/* Quick About Quote / Tension Section */}
      <section className="bg-black py-24 px-8 border-y border-white/5 relative overflow-hidden">
        <FadingVideo 
          src="https://stream.mux.com/Si6ej2ZRrxRCnTYBXSScDRCdd7CGnyTqiPszZcw3z4I.m3u8"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading italic text-white leading-tight mb-8"
          >
            "The future belongs to those who automate the ordinary to achieve the extraordinary."
          </motion.h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mb-8" />
          <p className="text-white/40 font-body text-sm uppercase tracking-[0.3em]">
            WebCat Labs Engineering Manifesto
          </p>
        </div>
      </section>

      <Capabilities />
      
      {/* Results / Proof Section */}
      <section className="py-32 bg-black border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-heading italic text-white mb-6">Built for Measured Performance.</h2>
              <p className="text-white/40 font-body text-lg font-light">We track every conversion, every lead, and every dollar earned through our AI systems.</p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-heading italic text-white mb-2">98%</div>
              <p className="text-[10px] uppercase tracking-widest text-white/30">Average Lead Recall Rate</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Dental Clinics", stat: "140%", sub: "Increase in bookings" },
              { label: "Law Firms", stat: "3:16", sub: "Avg. lead response time" },
              { label: "E-commerce", stat: "22%", sub: "Cart recovery lift" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass p-8 rounded-[2rem] border border-white/5"
              >
                <div className="text-white/30 text-xs uppercase tracking-widest mb-4 font-body">{item.label}</div>
                <div className="text-4xl font-heading italic text-white mb-2">{item.stat}</div>
                <div className="text-sm text-white/50 font-body font-light">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* SEO Driven FAQ Section */}
      <section className="py-32 bg-black px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading italic text-white mb-16 text-center">Frequently Engineered Answers.</h2>
          <div className="space-y-6">
            {[
              { q: "How fast are WebCat engineered websites?", a: "Our architectures are built for sub-second load times. We use edge-delivery and optimized assets to reach a 100/100 Google PageSpeed score." },
              { q: "Can my existing website be converted into a high-performance system?", a: "Yes. We perform deep audits on existing assets and refactor them into high-performance machines with integrated AI behavior." },
              { q: "Do these websites integrate with my existing CRM?", a: "Seamlessly. Our engineering team specializes in deep integration with GoHighLevel, HubSpot, Salesforce, and custom REST APIs." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="liquid-glass p-8 rounded-[2rem] border border-white/5 group hover:bg-white/[0.02] transition-colors"
              >
                <h3 className="text-xl font-heading italic text-white mb-4 flex items-center gap-4">
                  <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] not-italic opacity-40">0{i+1}</span>
                  {faq.q}
                </h3>
                <p className="text-white/40 font-body font-light text-sm pl-10 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA Strip */}
      <section className="relative py-32 px-8 bg-black overflow-hidden flex flex-col items-center justify-center">
        {/* Abstract Video Background */}
        <div className="absolute inset-0 z-0">
          <FadingVideo 
            src="https://stream.mux.com/jPyJ2YM6Nlly7U6EyfxM01tz4D4uPE3gyJ4PYuvY62Wg.m3u8"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-heading italic text-white text-center mb-10 max-w-4xl leading-none tracking-tighter">
              Ready to Build the Machine That Runs Your Business?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                <button className="liquid-glass-strong rounded-full px-7 py-3 text-sm font-medium text-white hover:scale-110 transition-all shadow-2xl border border-white/10 group">
                  Book Appointment Now
                  <span className="block text-[8px] uppercase tracking-[0.2em] font-body opacity-40 mt-0.5 group-hover:opacity-100 transition-opacity">Limited slots available</span>
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
