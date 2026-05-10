import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Logo from './components/Logo';

// Suppress benign Framer Motion warnings as per spec
const originalError = console.error;
console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('Framer Motion')) return;
  originalError(...args);
};

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="relative bg-black min-h-screen selection:bg-white selection:text-black">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/cases" element={<CaseStudies />} />
          <Route path="/cases/:id" element={<CaseStudyDetail />} />
        </Routes>

        <FloatingWhatsApp phoneNumber="919383439199" message="i Need to know more about your services" />

        {/* Footer */}
        <footer className="bg-black py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                <Logo />
              </Link>
              <p className="text-white/40 font-body font-light text-sm max-w-sm leading-relaxed">
                Building the autonomous machines that run the next generation of global businesses. Deep Engineering. Real Results.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-white font-semibold">Systems</h4>
              <ul className="space-y-2 text-sm text-white/40 font-body font-light">
                <li className="hover:text-white transition-colors"><Link to="/services/websites">High-Performance Websites</Link></li>
                <li className="hover:text-white transition-colors"><Link to="/services/seo">AI-Powered SEO</Link></li>
                <li className="hover:text-white transition-colors"><Link to="/services/voice">AI Voice Agents</Link></li>
                <li className="hover:text-white transition-colors"><Link to="/services/chatbots">AI Chatbots</Link></li>
                <li className="hover:text-white transition-colors"><Link to="/services/whatsapp">WhatsApp API</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-white font-semibold">Menu</h4>
              <ul className="space-y-2 text-sm text-white/40 font-body font-light">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/cases" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-8 border-t border-white/5 pt-8 text-center flex flex-col items-center">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-body mb-2">
              &copy; 2026 WebCat Labs &middot; All Rights Reserved
            </p>
            <p className="text-[8px] text-white/10 uppercase tracking-widest font-body">
              Designed for Velocity &amp; Scale
            </p>
          </div>
        </footer>
      </main>
    </Router>
  );
}
