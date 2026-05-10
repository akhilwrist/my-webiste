import React from 'react';
import PageHero from '../components/PageHero';
import { motion } from 'motion/react';
import { Target, Users, Code2, Rocket } from 'lucide-react';
import FadingVideo from '../components/FadingVideo';

const values = [
  { icon: <Target className="w-6 h-6" />, title: "Precision", text: "We don't do 'general' AI. Every system is fine-tuned to your specific data and tone." },
  { icon: <Users className="w-6 h-6" />, title: "Human Centric", text: "Our automation enhances human potential, it doesn't just replace work—it unlocks it." },
  { icon: <Code2 className="w-6 h-6" />, title: "Engineering Depth", text: "Built on robust official APIs. No fragile no-code solutions that break under load." },
  { icon: <Rocket className="w-6 h-6" />, title: "Velocity", text: "We ship complete machines in weeks, not months. Speed is your only competitive edge." }
];

// No team section as requested

export default function About() {
  return (
    <div className="bg-black text-white">
      <PageHero 
        title="We Are The Architects of the AI Machine"
        subtitle="WebCat Labs was founded on a simple premise: your business structure should be as intelligent as your vision."
        videoSrc="https://stream.mux.com/blULaJm2RMbAmsrwxLrBdgEx9yI1do2yM89vHTkdA6I.m3u8"
        badge="About Us"
      />

      <section className="py-24 px-8 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-heading italic leading-tight">Bridging the Gap Between Technology & Profit</h2>
            <div className="space-y-6 text-white/60 font-body font-light text-lg leading-relaxed">
              <p>
                Most agencies build websites. They look pretty, but they're static. At WebCat Labs, we see your digital presence as a living, thinking organism.
              </p>
              <p>
                By integrating <strong>Custom LLM Architectures</strong>, <strong>WhatsApp Automation</strong>, and <strong>Voice AI</strong>, we transform digital assets into autonomous revenue engines that work 24/7 without fatigue.
              </p>
              <p>
                Our mission is to empower a new generation of businesses that are powered by intelligence first.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div 
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass p-8 rounded-[2rem] border border-white/5"
              >
                <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit border border-white/5">
                  {v.icon}
                </div>
                <h3 className="text-xl font-heading italic text-white mb-3">{v.title}</h3>
                <p className="text-xs text-white/50 font-body font-light leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="py-32 px-8 md:px-16 lg:px-20 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] font-body text-white/40">// The Engine Room</p>
            <h2 className="text-5xl font-heading italic text-white">Technological Superiority.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Edge-First Architecture", 
                desc: "We deploy on a global edge network, serving your content from the closest possible server to your visitor. Sub-300ms time-to-first-byte (TTFB) is our baseline.",
                tag: "Vercel / AWS Edge"
              },
              { 
                title: "Neural Copywriting", 
                desc: "Every word on your site is vetted by custom-trained AI models to ensure maximum psychological impact and conversion optimization.",
                tag: "Custom LLMs"
              },
              { 
                title: "Real-Time Pipeline", 
                desc: "Lead data is never stored in static databases. Our real-time streams push interactions directly into your sales systems with zero human delay.",
                tag: "Event Streams"
              },
              { 
                title: "Precision UX/UI", 
                desc: "We use laboratory-vetted design patterns that guide the human eye toward the CTA, eliminating 'choice paralysis' for your customers.",
                tag: "Conversion UI"
              },
              { 
                title: "Immutable Security", 
                desc: "Our static architectures are virtually unhackable. No classic SQL injection or server-side vulnerabilities for bad actors to exploit.",
                tag: "Hardened Core"
              },
              { 
                title: "Autonomous SEO", 
                desc: "Internal linking, schema markups, and meta-optimization occur at the build level, ensuring Google prioritizes your site naturally.",
                tag: "AI Optimization"
              }
            ].map((stack, i) => (
              <motion.div
                key={stack.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass rounded-[2.5rem] p-10 border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/30 font-mono mb-6">{stack.tag}</div>
                  <h3 className="text-2xl font-heading italic text-white mb-4 leading-tight">{stack.title}</h3>
                  <p className="text-sm text-white/50 font-body font-light leading-relaxed">{stack.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: OUR PHILOSOPHY */}
      <section className="py-32 px-8 md:px-16 lg:px-20 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="liquid-glass aspect-video rounded-[3rem] border border-white/10 overflow-hidden relative">
                <FadingVideo 
                  src="https://stream.mux.com/r6pXRAJb3005XEEbl1hYU1x01RFJDSn7KQApwNGgAHHbU.m3u8"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center">
                      <p className="text-[8px] uppercase tracking-[0.5em] text-white/40 mb-4 font-body">Internal Blueprint</p>
                      <div className="text-4xl text-white/10 font-heading italic select-none">ARCHITECTURE_STABLE</div>
                   </div>
                </div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                   <div className="space-y-1">
                      <div className="h-1 w-12 bg-white/20" />
                      <div className="h-1 w-8 bg-white/10" />
                   </div>
                   <div className="text-[10px] font-mono text-white/20">v4.0.2 // STABLE</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <p className="text-xs uppercase tracking-[0.3em] font-body text-white/40">// Our Philosophy</p>
              <h2 className="text-5xl font-heading italic text-white leading-tight">The Invariant Strategy.</h2>
              <p className="text-lg text-white/60 font-body font-light leading-relaxed">
                We believe that code is only as strong as its foundation. While other agencies chase trends, we focus on <strong className="text-white">The Invariants</strong>: performance, reliability, and precision. We don't just build websites; we build technical ecosystems that refuse to fail.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                   <div className="text-2xl font-heading italic text-white mb-2">0%</div>
                   <div className="text-[10px] uppercase tracking-widest text-white/40 font-body">Latency Tolerance</div>
                </div>
                <div>
                   <div className="text-2xl font-heading italic text-white mb-2">101%</div>
                   <div className="text-[10px] uppercase tracking-widest text-white/40 font-body">Engineering Rigor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: GLOBAL SCALE */}
      <section className="py-32 px-8 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <p className="text-xs uppercase tracking-[0.3em] font-body text-white/40 mb-4">// Scale & Distribution</p>
            <h2 className="text-5xl md:text-6xl font-heading italic text-white mb-8">Autonomous Scalability.</h2>
            <p className="text-xl text-white/50 font-body font-light leading-relaxed">
              Your business doesn't sleep, and neither should your infrastructure. We deploy global-ready nodes that handle surges in traffic, lead volume, and AI processing without a single second of downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Global CDN", d: "Content served from 300+ edge locations for sub-second delivery anywhere." },
              { t: "AI Resilience", d: "Fail-safe API routing ensuring your agents are always online." },
              { t: "Auto-Scrubbing", d: "Automated data hygiene for your CRM and lead databases." },
              { t: "Predictive Load", d: "Infrastructure that anticipates traffic spikes before they happen." }
            ].map((box, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-4">
                 <div className="text-white/20 font-mono text-xs">0{i+1} // NODE</div>
                 <h4 className="text-xl font-heading italic text-white">{box.t}</h4>
                 <p className="text-sm text-white/40 font-body font-light leading-relaxed">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Comparison */}
      <section className="py-32 px-8 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
               <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-body text-white/40 mb-4">// Comparison</p>
                  <h2 className="text-4xl md:text-5xl font-heading italic text-white">The Engineering Delta.</h2>
               </div>

               <div className="space-y-6">
                  {[
                    { label: "Traditional Marketing", value: "Dependent on manual human labor, slow scaling, high overhead.", color: "text-white/20" },
                    { label: "AI-Augmented Systems", value: "Autonomous execution, sub-second response times, zero fatigue scaling.", color: "text-white" }
                  ].map((item, i) => (
                    <div key={i} className={`p-8 rounded-3xl bg-white/[0.01] border border-white/5 ${i === 1 ? 'border-white/20' : ''}`}>
                       <div className="text-[10px] uppercase tracking-widest text-white/30 mb-4">{item.label}</div>
                       <p className={`text-lg font-body font-light leading-relaxed ${item.color}`}>{item.value}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="liquid-glass rounded-[3rem] p-12 border border-white/10 space-y-10 relative overflow-hidden">
                  <FadingVideo 
                    src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <div className="relative z-10 space-y-10">
                    <h3 className="text-2xl font-heading italic text-white">Measured System Impact</h3>
                    <div className="space-y-8">
                       {[
                         { l: "Lead Response Time", v: "-92%", s: "Reduced from minutes to milliseconds" },
                         { l: "Operational Efficiency", v: "+4x", s: "Handling volume without adding headcount" },
                         { l: "Conversion Rate Lift", v: "+38%", s: "Through AI-driven behavior analysis" }
                       ].map((stat, i) => (
                          <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4">
                             <div>
                                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{stat.l}</div>
                                <div className="text-sm text-white/60 font-body font-light">{stat.s}</div>
                             </div>
                             <div className="text-3xl font-heading italic text-white">{stat.v}</div>
                          </div>
                       ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Team Quote Section */}
      <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
        <FadingVideo 
          src="https://stream.mux.com/Si6ej2ZRrxRCnTYBXSScDRCdd7CGnyTqiPszZcw3z4I.m3u8"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="max-w-4xl mx-auto text-center px-8 relative z-10">
           <div className="w-20 h-20 rounded-full mx-auto mb-8 overflow-hidden bg-white/5 p-4 border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-heading italic text-4xl">w</span>
           </div>
           <h3 className="text-3xl font-heading italic mb-6 text-white leading-relaxed">"Automation is not a cost-saving measure. It's a growth multiplier. If you're not building your AI machine today, you're becoming obsolete tomorrow."</h3>
           <p className="text-white font-medium mb-1">WebCat Labs Leadership</p>
           <p className="text-[10px] uppercase tracking-widest text-white/30">Founding Principles</p>
        </div>
      </section>
    </div>
  );
}
