import React from 'react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';

interface PageHeroProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  badge?: string;
}

const entranceTransition = {
  initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export default function PageHero({ title, subtitle, videoSrc, badge }: PageHeroProps) {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-64 pb-32">
      <FadingVideo
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      />
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-[1]" />

      <div className="relative z-10 text-center px-4 max-w-4xl flex flex-col items-center">
        {badge && (
          <motion.div
            {...entranceTransition}
            className="liquid-glass rounded-full px-4 py-1.5 text-[10px] font-medium text-white/80 uppercase tracking-[0.2em] mb-6"
          >
            {badge}
          </motion.div>
        )}
        
        <BlurText
          text={title}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-tight tracking-[-3px] mb-6"
        />
        
        <motion.p
          {...entranceTransition}
          transition={{ ...entranceTransition.transition, delay: 0.3 }}
          className="text-sm md:text-lg text-white/60 font-body font-light max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
