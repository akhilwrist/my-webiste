import React from 'react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const cardEntrance = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

interface CapabilityCardProps {
  iconPath: string;
  tags: string[];
  title: string;
  description: string;
  delay: number;
  className?: string;
  bgVideo?: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ iconPath, tags, title, description, delay, className, bgVideo }) => {
  return (
    <motion.div
      {...cardEntrance}
      transition={{ ...cardEntrance.transition, delay }}
      className={`relative liquid-glass rounded-[1.25rem] p-6 min-h-[400px] flex flex-col group hover:bg-white/[0.03] transition-colors overflow-hidden ${className}`}
    >
      {bgVideo && (
        <div className="absolute inset-0 z-0">
          <FadingVideo 
            src={bgVideo} 
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
          />
        </div>
      )}
      <div className="relative z-10 flex items-start justify-between gap-4 mb-auto">
        <div className="w-11 h-11 rounded-[0.75rem] liquid-glass flex items-center justify-center text-white p-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d={iconPath} />
          </svg>
        </div>
        <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
          {tags.map((tag) => (
            <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/70 font-body whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-tight group-hover:translate-x-1 transition-transform">
          {title}
        </h3>
        <p className="mt-4 text-sm text-white/50 font-body font-light leading-snug max-w-[32ch]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function Capabilities() {
  const cards = [
    {
      title: "High-Performance Websites",
      iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
      tags: ["Precision Engineered", "Lead Capture", "Sales Focused", "Fast Loads"],
      description: "We design websites that act as 24/7 sales reps. Every click is optimized to turn anonymous visitors into pre-qualified paying customers.",
      bgVideo: "https://stream.mux.com/blULaJm2RMbAmsrwxLrBdgEx9yI1do2yM89vHTkdA6I.m3u8"
    },
    {
      title: "AI-Powered SEO",
      iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14v14M7 10h2v7H7v-7m4-3h2v10h-2V7m4 6h2v4h-2v-4",
      tags: ["Autopilot Ranking", "Content Engine", "Search Dominance", "Dynamic Keywords"],
      description: "Deploy semantic AI clusters that rank your website for high-intent keywords automatically. Drive organic traffic without the manual grind.",
      bgVideo: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4"
    },
    {
      title: "AI Voice & Chat Agents",
      iconPath: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v4 M8 23h8",
      tags: ["Instant Response", "Voice Synthesis", "Lead Scoring", "Auto-Booking"],
      description: "Integrate intelligent voice and chat agents directly into your website. Indistinguishable from humans, they qualify leads at scale.",
      bgVideo: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4"
    }
  ];

  return (
    <section id="services" className="relative min-h-screen w-full flex flex-col bg-black overflow-hidden pb-20">
      <div className="px-8 md:px-16 lg:px-20 pt-32 pb-20 flex flex-col">
        <div className="mb-0">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-body text-white mb-6 uppercase tracking-[0.2em]"
          >
            // AI Performance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-4px]"
          >
            Capabilities<br />Exposed
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto w-full">
          {cards.map((card, i) => (
            <CapabilityCard
              key={card.title}
              title={card.title}
              iconPath={card.iconPath}
              tags={card.tags}
              description={card.description}
              delay={0.2 + i * 0.15}
              bgVideo={card.bgVideo}
              className={i === 0 ? "md:col-span-2" : i === 1 ? "md:col-span-1" : "md:col-span-3 min-h-[300px] md:min-h-[400px]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
