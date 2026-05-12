import React from 'react';
import PageHero from '../components/PageHero';
import { motion } from 'motion/react';
import { Send, Calendar, MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-black text-white">
      <PageHero 
        title="Start Your Transformation"
        subtitle="Let's analyze your current business bottlenecks and map out an automation blueprint that scales."
        videoSrc="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260422_191657_800d4e1f-7ab3-41af-90b6-9bd3039eb294.mp4"
        badge="Contact Us"
      />

      <section className="py-24 px-8 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Form */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-heading italic mb-4">Send a Message</h2>
              <p className="text-white/50 font-body font-light">Tell us about your business. We'll get back to you with a preliminary automation audit within 24 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 font-body text-white focus:outline-none focus:border-white/30 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 font-body text-white focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <input 
                type="text" 
                placeholder="Business Website" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 font-body text-white focus:outline-none focus:border-white/30 transition-colors"
              />
              <textarea 
                placeholder="What bottlenecks are you facing?" 
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 font-body text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
              <button className="w-full liquid-glass-strong py-4 rounded-full font-medium text-white flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                Send Blueprint Request
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Booking & Info */}
          <div className="space-y-16">
            <div className="liquid-glass p-10 rounded-[2.5rem] border border-white/5 space-y-8">
              <div className="flex items-center gap-4 text-white/40 uppercase tracking-[0.2em] text-[10px]">
                <Calendar className="w-4 h-4" />
                <span>Immediate Access</span>
              </div>
              <h3 className="text-3xl font-heading italic">Book a 30-Min Strategy Call</h3>
              <p className="text-white/60 font-body font-light leading-relaxed">
                Prefer a live discussion? Skip the queue and book a demo directly with our automation engineers.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all">
                Select a Time Spot
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
              <div className="space-y-2">
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-body">Direct Connect</p>
                <div className="flex items-center gap-3 text-white/60 font-body font-light">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  <span>WhatsApp API Support</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-body">Locations</p>
                <div className="space-y-4 text-white/60 font-body font-light">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4" />
                    <span>Cloud Native | Global Ops</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pl-7">
                    <a href="https://maps.app.goo.gl/36FeFeXTFKXP9XJz9" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-white/20"></span>
                       Bangalore
                    </a>
                    <a href="https://maps.app.goo.gl/siBYzoHvDZS2bDYe7" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-white/20"></span>
                       Kochi
                    </a>
                    <a href="https://maps.app.goo.gl/dzgmL2ixJPyReUmX7" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-white/20"></span>
                       Mumbai
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
