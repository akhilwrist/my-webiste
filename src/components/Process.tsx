import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: "Capture Every Lead",
    description: "We deploy AI-powered capture systems—chatbots, forms, and websites—pulling leads from every channel simultaneously. No lead escapes."
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "AI Handles Everything",
    description: "Instant responses, smart qualification, automated follow-ups, and nurture sequences fire in real-time—24 hours a day, 7 days a week."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Convert to Revenue",
    description: "Hot leads land directly in your pipeline, pre-qualified and ready to buy. Your team only closes—AI handles everything else."
  }
];

export default function Process() {
  return (
    <section id="process" className="relative bg-black py-32 px-8 md:px-16 lg:px-20 overflow-hidden border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-body text-white/40 mb-4">// The Blueprint</p>
            <h2 className="text-5xl md:text-6xl font-heading italic text-white leading-none tracking-tight">
              Three steps.<br />Zero guesswork.
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-sm font-body font-light">
            Our engineering team builds custom pipelines that remove the friction from growth, turning technical AI complexity into predictable revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative group"
            >
              {/* Step Number */}
              <div className="text-[8rem] font-heading text-white opacity-[0.03] absolute -top-16 -left-4 leading-none select-none">
                0{i + 1}
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-2xl liquid-glass w-fit group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-heading italic text-white mb-4">{step.title}</h3>
                <p className="text-sm text-white/60 font-body font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
