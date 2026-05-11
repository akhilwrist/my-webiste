import { motion } from 'motion/react';
import { ArrowUpRight, Play, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';

const entranceTransition = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export default function Hero() {
  return (
    <section id="problem" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black p-4 md:p-8 lg:p-12">
      <div className="relative w-full h-full flex flex-col items-center justify-center rounded-[3rem] overflow-hidden border border-white/5">
        {/* Background Video */}
        <FadingVideo
          src="https://stream.mux.com/r6pXRAJb3005XEEbl1hYU1x01RFJDSn7KQApwNGgAHHbU.m3u8"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        />
        
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 z-1" />

        {/* Content Container */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-32 px-4 text-center max-w-4xl">
        {/* Badge */}
        <motion.div
          {...entranceTransition}
          transition={{ ...entranceTransition.transition, delay: 0.4 }}
          className="liquid-glass rounded-full flex items-center p-1 pr-3 mb-6"
        >
          <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full mr-3">New</span>
          <span className="text-sm text-white/90">The Complete AI Automation Blueprint</span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-heading italic text-white leading-[0.9] tracking-[-4px] mb-6 flex flex-col items-center">
          <motion.span
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            We Build AI-Powered Website
          </motion.span>
          <motion.span
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
          >
            Autonomous Growth
          </motion.span>
        </h1>

        {/* CTAs */}
        <motion.div
          {...entranceTransition}
          transition={{ ...entranceTransition.transition, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a 
            href="https://calendly.com/akhilthampy123/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-xs font-medium text-white flex flex-col items-center gap-1 hover:scale-105 transition-transform shadow-2xl border border-white/10 group"
          >
            <div className="flex items-center gap-2">
              Book Appointment Now
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
  );
}
