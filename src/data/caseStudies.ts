import { Target, Zap, CheckCircle2, TrendingUp, Users, Clock } from 'lucide-react';

export interface CaseStudy {
  id: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  metric: string;
  metricLabel: string;
  industry: string;
  year: string;
  image: string;
  video: string;
  fullStory: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "healthsync-clinic",
    client: "HealthSync Clinic",
    industry: "Healthcare",
    year: "2024",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    video: "https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8",
    challenge: "Handling 100+ inbound calls daily with a small front-desk team, leading to 40% missed appointments.",
    solution: "Deployed an AI Voice Agent integrated with their existing booking software and WhatsApp follow-ups.",
    results: ["80% reduction in manual call handling", "₹12L in recovered monthly revenue", "0 missed bookings in first 60 days"],
    metric: "320%",
    metricLabel: "ROI in 3 Months",
    fullStory: [
      "When HealthSync Clinic approached us, they were losing significant revenue through missed calls. Their front desk was overwhelmed, especially during peak morning hours.",
      "We implemented a custom-trained AI Voice Agent that handles natural language inquiries. Unlike traditional IVR, patients can speak naturally to book, cancel, or reschedule appointments.",
      "The system syncs directly with their existing Practice Management Software, ensuring no double-bookings and instant confirmation via WhatsApp.",
      "The result was a transformative shift in operations, allowing human staff to focus on high-value patient care while the machine handles the logistical baseline."
    ]
  },
  {
    id: "global-saas",
    client: "Global SaaS Platform",
    industry: "Tech / SaaS",
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    video: "https://stream.mux.com/Si6ej2ZRrxRCnTYBXSScDRCdd7CGnyTqiPszZcw3z4I.m3u8",
    challenge: "Low trial-to-paid conversion due to slow qualification of leads from 50+ different countries.",
    solution: "Multi-lingual AI Chatbot qualified leads on the website and routed hot prospects to sales team real-time.",
    results: ["Qualified 2,400+ leads automatically", "45% increase in demo bookings", "Instant response in 32 languages"],
    metric: "45%",
    metricLabel: "Lead Conversion Lift",
    fullStory: [
      "In the high-speed world of SaaS, speed to lead is everything. Our client was seeing potential customers drop off because their sales team couldn't keep up with global time zones.",
      "We built a sophisticated lead qualification engine using GPT-4-Turbo, fine-tuned on their specific product documentation and sales scripts.",
      "The bot doesn't just answer questions; it identifies intent. High-intent 'Hot Leads' are instantly escalated to a live human via Slack/WhatsApp, while educational leads are nurtured through automated drips.",
      "By removing the friction of waiting for a human response, the platform saw an immediate and sustained increase in demo-to-close rates."
    ]
  },
  {
    id: "ecommerce-empire",
    client: "E-commerce Empire",
    industry: "Retail / Fashion",
    year: "2023",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000",
    video: "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/12a9780eeb1ea015801a5f55cf2e9d3d/manifest/video.m3u8",
    challenge: "High cart abandonment and lack of personalized follow-up at scale.",
    solution: "WhatsApp API Automation with personalized dynamic product recommendation drips.",
    results: ["Recovered ₹18L in abandoned cart revenue", "92% WhatsApp read rate", "Automated customer segmentation"],
    metric: "₹18L",
    metricLabel: "Recovered Revenue",
    fullStory: [
      "Email marketing is dying. For this e-commerce giant, cart recovery emails were seeing less than 15% open rates. They needed a more intimate way to reach their customers.",
      "We leveraged the Official WhatsApp Business API to create a dynamic recovery system. When a user abandons a cart, the system waits for the optimal hour before sending a personalized message.",
      "These messages aren't generic. They include the specific item left behind and use AI to suggest a complementary product or offer a dynamic discount based on the cart value.",
      "The direct-to-consumer nature of WhatsApp transformed their recovery pipeline from a cost center into a steady revenue stream."
    ]
  }
];
