import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Target, Zap, CheckCircle2, TrendingUp, Users, Clock, Calendar, BarChart3 } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import FadingVideo from '../components/FadingVideo';

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-heading italic text-white">Case Study Not Found</h1>
          <Link to="/cases" className="text-white/40 hover:text-white transition-colors flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <FadingVideo 
          src={study.video}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Link 
                to="/cases" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-body">Case Study // {study.industry}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading italic leading-tight max-w-4xl">
              {study.client}: <span className="text-white/60">The Engineering Blueprint for Exponential Growth</span>
            </h1>

            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                 <Calendar className="w-4 h-4 text-white/30" />
                 <span className="text-sm font-body font-light text-white/50">{study.year} Deployment</span>
              </div>
              <div className="flex items-center gap-3">
                 <BarChart3 className="w-4 h-4 text-white/30" />
                 <span className="text-sm font-body font-light text-white/50">{study.industry}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Metrics Strip */}
      <section className="border-y border-white/5 bg-black py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {study.results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 border border-white/5">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="text-sm font-body font-light text-white/70 leading-relaxed italic">{result}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading italic text-white">The Challenge</h2>
              <p className="text-xl text-white/60 font-body font-light leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-heading italic text-white">Our Solution</h2>
              <div className="p-8 rounded-[2.5rem] liquid-glass border border-white/10 bg-white/[0.02]">
                <p className="text-xl text-white font-body font-light leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-heading italic text-white">The Analysis</h2>
              <div className="space-y-8 leading-relaxed font-body font-light text-white/60">
                {study.fullStory.map((para, i) => (
                  <p key={i} className="text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 text-center space-y-6">
                <div>
                  <span className="text-7xl font-heading italic text-white block">{study.metric}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-body">{study.metricLabel}</span>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="flex justify-center gap-6">
                  <TrendingUp className="w-5 h-5 text-white/20" />
                  <Users className="w-5 h-5 text-white/20" />
                  <Clock className="w-5 h-5 text-white/20" />
                </div>
              </div>

              <div className="p-10 rounded-[3rem] border border-white/5 space-y-6">
                <h3 className="text-lg font-heading italic text-white">Key Outcomes</h3>
                <ul className="space-y-4">
                  {study.results.map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/50 font-body font-light">
                      <Zap className="w-4 h-4 text-white/20 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                onClick={() => window.open('https://calendly.com/akhilthampy123/30min', '_blank')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-white text-black font-heading italic text-lg rounded-[2rem] hover:bg-white/90 transition-colors shadow-2xl shadow-white/5"
              >
                Engineer Your ROI
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white/5 border-y border-white/5 text-center px-8 relative overflow-hidden">
        <FadingVideo 
          src="https://stream.mux.com/Si6ej2ZRrxRCnTYBXSScDRCdd7CGnyTqiPszZcw3z4I.m3u8"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading italic leading-tight">Ready to see your business as a case study?</h2>
          <p className="text-lg text-white/60 font-body font-light max-w-2xl mx-auto">
            Book a structural audit today and let's map out exactly how AI automation can replicate similar results in your infrastructure.
          </p>
          <a 
            href="https://calendly.com/akhilthampy123/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-white text-black font-heading italic text-xl rounded-full hover:bg-white/90 transition-all hover:scale-105"
          >
            Start Your Deployment
          </a>
        </div>
      </section>
    </div>
  );
}
