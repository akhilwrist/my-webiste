import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bot, Mail, MessageSquare, PhoneCall, Globe2, Code2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import FadingVideo from '../components/FadingVideo';

const serviceVideos = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260422_191657_800d4e1f-7ab3-41af-90b6-9bd3039eb294.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4"
];

const allServices = [
  {
    id: 'websites',
    title: 'High-Performance Websites',
    video: serviceVideos[3],
    icon: <Globe2 className="w-8 h-8" />,
    description: "We don't just build websites; we build conversion machines. Precision UX/UI combined with AI-driven copy that forces action. Managed pipelines that turn traffic into traceable profit.",
    features: ["A/B Testing Loops", "AI Copywriting", "Heatmap Optimization", "Lightning Fast Deployment"]
  },
  {
    id: 'seo',
    title: 'AI-Powered SEO',
    video: serviceVideos[4],
    icon: <Bot className="w-8 h-8" />,
    description: "Semantic SEO strategies powered by large language models. We generate high-authority content that search engines love, ensuring your business stays at the top of the conversation.",
    features: ["Semantic Keyword Mapping", "Automated Content Production", "Backlink Strategy", "Real-time Serp Tracking"]
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    video: serviceVideos[0],
    icon: <MessageSquare className="w-8 h-8" />,
    description: "Intelligent web and WhatsApp bots that represent your brand 24/7. Not simple menu buttons, but context-aware AI that understands intent. Our chatbots are engineered to handle complex customer journeys, qualifying leads while you sleep.",
    features: ["Natural Language Processing", "Appointment Booking Integration", "CRM Sync", "Multi-lingual Support"]
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Automation',
    video: serviceVideos[1],
    icon: <Mail className="w-8 h-8" />,
    description: "Official WhatsApp Cloud API solutions. Broadcasts, drip campaigns, and automated follow-ups that land directly in your customer's pocket with 98% open rates. We build the logic that converts conversations into revenue.",
    features: ["Mass Broadcasting", "Automated Sequence Mapping", "Live Agent Handover", "Interactive List Messages"]
  },
  {
    id: 'voice',
    title: 'AI Voice Agents',
    video: serviceVideos[2],
    icon: <PhoneCall className="w-8 h-8" />,
    description: "Replace your front desk with AI that sounds human. Handles complex inquiries, qualifies leads over the phone, and schedules directly into your calendar. Low latency, high intelligence, zero fatigue.",
    features: ["Human-like Latency", "Smart Escalation", "Call Sentiment Analysis", "Inbound & Outbound Capabilities"]
  },
  {
    id: 'social',
    title: 'Social Media Mastery',
    video: serviceVideos[1],
    icon: <Globe2 className="w-8 h-8" />,
    description: "Autonomous content scheduling and AI-driven engagement. We manage your presence across platforms to ensure consistent brand authority without the manual effort.",
    features: ["Automated Post Scheduling", "AI Content Curation", "Engagement Analytics", "Multi-platform Sync"]
  },
  {
    id: 'video',
    title: 'Short-Form Video Production',
    video: serviceVideos[2],
    icon: <Code2 className="w-8 h-8" />,
    description: "High-impact video editing optimized for Reels, TikTok, and Shorts. We turn long-form raw footage into viral-ready hooks that drive massive traffic.",
    features: ["Hook-driven Editing", "AI Subtitles & Effects", "Trend Analysis", "Fast Turnaround Cycles"]
  }
];

export default function Services() {
  const { id } = useParams();
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (id && serviceRefs.current[id]) {
      serviceRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [id]);

  return (
    <div className="bg-black text-white">
      <PageHero 
        title="Engineering Growth Through AI"
        subtitle="We build the systems that remove manual friction from your sales pipeline. Scalable, autonomous, and measurable."
        videoSrc="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260422_112520_ee819691-f2e8-4c54-bb77-3fb72c84eaa5.mp4"
        badge="Our Services"
      />

      <section className="py-24 px-8 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-32">
          {allServices.map((service, i) => (
            <div 
              key={service.id} 
              id={service.id}
              ref={(el) => (serviceRefs.current[service.id] = el)}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 w-full relative">
                <div className="aspect-video rounded-[2rem] overflow-hidden liquid-glass border border-white/5 relative group">
                  <FadingVideo 
                    src={service.video} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="p-4 rounded-2xl bg-white/5 w-fit border border-white/5">
                  {service.icon}
                </div>
                <h2 className="text-5xl font-heading italic tracking-tight">{service.title}</h2>
                <p className="text-white/60 font-body font-light text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/80 font-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link 
                  to={`/services/${service.id}`}
                  className="liquid-glass rounded-full px-8 py-3 text-sm font-medium hover:bg-white/5 transition-colors border border-white/10 inline-block text-center"
                >
                  View System Blueprint
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-32 px-8 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <FadingVideo 
          src="https://stream.mux.com/Si6ej2ZRrxRCnTYBXSScDRCdd7CGnyTqiPszZcw3z4I.m3u8"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-heading italic mb-8">Why AI Automation is the Only Way Forward</h2>
          <div className="space-y-6 text-white/50 text-sm leading-relaxed font-body">
            <p>
              In the modern digital landscape, manual interaction is a bottleneck. By deploying <strong>AI Systems</strong> and <strong>Automation Blueprints</strong>, businesses can recover up to 40% of wasted work hours. WebCat Labs specializes in <strong>High-Performance Websites</strong> and <strong>SEO Content Generation</strong> that doesn't just look good—it performs.
            </p>
            <p>
              Whether it's <strong>WhatsApp API Marketing</strong> or <strong>Intelligent CRM Management</strong>, our goal is to turn your digital assets into profit generators that rank on Google and capture every single lead without fail. Our <strong>AI Chatbots</strong> and <strong>Voice Agents</strong> are not toys—they are business-critical infrastructure designed for 10x scale.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
