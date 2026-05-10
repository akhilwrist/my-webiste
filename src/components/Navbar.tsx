import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import Logo from './Logo';

export default function Navbar() {
  const location = useLocation();
  const [showServices, setShowServices] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const services = [
    { name: 'High-Performance Websites', path: '/services/websites' },
    { name: 'AI-Powered SEO', path: '/services/seo' },
    { name: 'AI Voice Agents', path: '/services/voice' },
    { name: 'AI Chatbots', path: '/services/chatbots' },
    { name: 'WhatsApp Automation', path: '/services/whatsapp' },
    { name: 'Social Media', path: '/services/social' },
    { name: 'Video Editing', path: '/services/video' },
  ];

  const menuItems = [
    { name: 'Case Studies', path: '/cases' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 px-4 md:px-8 lg:px-16 z-50 flex items-center justify-between">
        {/* Left */}
        <Link to="/" className="hover:scale-105 transition-transform">
          <Logo />
        </Link>

        {/* Center - Desktop */}
        <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full liquid-glass">
          <Link
            to="/about"
            className={`px-4 py-2 text-sm font-medium font-body transition-colors ${
              isActive('/about') ? 'text-white bg-white/10 rounded-full' : 'text-white/60 hover:text-white'
            }`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className={`px-3 py-2 text-sm font-medium font-body transition-colors flex items-center gap-1 ${
              location.pathname.startsWith('/services') ? 'text-white bg-white/10 rounded-full' : 'text-white/60 hover:text-white'
            }`}>
              Services <ChevronDown className={`w-3 h-3 transition-transform ${showServices ? 'rotate-180' : ''}`} />
            </button>
            
            {showServices && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl liquid-glass-strong p-2 border border-white/5 animate-in fade-in slide-in-from-top-1">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block px-4 py-2.5 text-sm font-body text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm font-medium font-body transition-colors ${
                isActive(item.path) ? 'text-white bg-white/10 rounded-full' : 'text-white/60 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link to="/contact" className="ml-2 bg-white text-black px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-1 hover:bg-white/90 hover:scale-105 transition-all">
            Book Appointment
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-12 h-12 rounded-full liquid-glass flex items-center justify-center text-white"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Spacer for desktop symmetry */}
        <div className="hidden lg:block w-12 h-12 invisible" aria-hidden="true" />
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-xl flex flex-col pt-24 px-8 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <Link to="/about" className="text-4xl font-heading italic text-white">About</Link>
              
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-white/40">Services</p>
                <div className="grid grid-cols-1 gap-4 pl-4">
                  {services.map(s => (
                    <Link key={s.path} to={s.path} className="text-2xl font-heading italic text-white/80">{s.name}</Link>
                  ))}
                </div>
              </div>

              {menuItems.map(item => (
                <Link key={item.path} to={item.path} className="text-4xl font-heading italic text-white">{item.name}</Link>
              ))}

              <Link to="/contact" className="mt-8 liquid-glass-strong py-4 rounded-full text-center text-white font-medium text-lg">
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
