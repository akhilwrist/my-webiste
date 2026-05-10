import React from 'react';
import PageHero from '../components/PageHero';
import { motion } from 'motion/react';
import { TrendingUp, Users, Clock, CheckCircle2, Target, Zap, ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { Link } from 'react-router-dom';
import FadingVideo from '../components/FadingVideo';

export default function CaseStudies() {
  return (
    <div className="bg-black text-white">
      <PageHero 
        title="Real Results for Real Businesses"
        subtitle="Explore the technical blueprints and impact data from our latest AI automation deployments."
        videoSrc="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4"
        badge="Proof of Scale"
      />

      <section className="py-24 px-8 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-24">
          {caseStudies.map((cs, i) => (
            <motion.div 
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="liquid-glass rounded-[3rem] p-10 md:p-16 border border-white/5 relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
                <div className="lg:col-span-2 space-y-10">
                  <div className="space-y-4">
                    <p className="text-white/30 uppercase tracking-[0.3em] text-[10px]">Client Study: {cs.client}</p>
                    <h2 className="text-4xl md:text-5xl font-heading italic leading-tight text-white">{cs.client} Scaling Blueprint</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-white/40 uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2">
                        <Target className="w-3 h-3" /> The Challenge
                      </h4>
                      <p className="text-sm text-white/70 font-body font-light leading-relaxed mb-6">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white/40 uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2">
                        <Zap className="w-3 h-3" /> The AI Solution
                      </h4>
                      <p className="text-sm text-white/70 font-body font-light leading-relaxed mb-6">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white/40 uppercase tracking-widest text-[10px] mb-6">Key Engineering Outcomes</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cs.results.map(res => (
                        <div key={res} className="flex items-center gap-3 text-white/90 font-body text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500/60 shrink-0" />
                          <span className="line-clamp-1">{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <Link 
                      to={`/cases/${cs.id}`}
                      className="inline-flex items-center gap-2 text-white font-heading italic text-lg group/btn"
                    >
                      View Full Blueprint
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center text-center p-8 rounded-[2.5rem] border border-white/5 group-hover:border-white/20 transition-colors relative overflow-hidden">
                  <FadingVideo 
                    src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8"
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                  />
                  <div className="relative z-10">
                    <span className="text-6xl md:text-7xl font-heading italic text-white mb-2">{cs.metric}</span>
                    <p className="text-sm text-white/40 font-body tracking-[0.2em] uppercase">{cs.metricLabel}</p>
                    <div className="mt-8 pt-8 border-t border-white/10 w-full flex justify-center gap-4">
                       <TrendingUp className="w-5 h-5 text-white/20" />
                       <Users className="w-5 h-5 text-white/20" />
                       <Clock className="w-5 h-5 text-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Bottom Section */}
      <section className="py-24 px-8 bg-white/5 text-center">
         <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-heading italic">Measurable Impact Through Precise Engineering</h3>
            <p className="text-sm text-white/50 font-body font-light leading-relaxed">
               Every case study above represents a custom <strong>AI Automation System</strong> designed for specific ROI goals. We don't just "try" AI—we build <strong>High-Converting Lead Machines</strong>. From <strong>WhatsApp API automation</strong> to <strong>Autonomous Voice Agents</strong>, WebCat Labs ensures your business isn't just modern, but profitable.
            </p>
         </div>
      </section>
    </div>
  );
}
