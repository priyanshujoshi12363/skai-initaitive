"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, TrendingUp, FileText, Users, 
  ShieldCheck, Globe, LayoutList, Banknote, 
  Zap, Briefcase, Check, Menu, X, ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Your Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSebabcGZh0I7qvfNLcoWUTtk1jLeKfX2hbAHszQSOoHL5PXtw/viewform?usp=publish-editor";

// Helper function to open Google Form
const openAssessmentForm = () => {
  window.open(GOOGLE_FORM_URL, '_blank');
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
      } border-b border-gray-100 w-full`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 flex items-center cursor-pointer group"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3">
              <Image 
                src="/logo.png" 
                alt="Skai Initiative Logo" 
                width={40}
                height={40}
                className="rounded-xl object-contain"
                priority={true}
              />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 transition-colors group-hover:text-black">
              Skai <span className="text-gray-500 font-medium">Initiative</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {['About', 'Assessment'].map((item) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 hover:text-black font-medium transition-all duration-200 relative group px-2 py-1"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.button 
              onClick={openAssessmentForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-5 py-2 lg:px-6 lg:py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-gray-300/30"
            >
              Start Assessment
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-black transition-colors p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {['About', 'Assessment', 'Pricing', 'Contact'].map((item) => (
                <motion.a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 text-base font-medium transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button 
                onClick={openAssessmentForm}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-3 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Start Assessment
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[85vh] sm:min-h-[90vh] flex items-center w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-4 sm:mb-6"
          >
            Trading Talent Deserves <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Capital.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 leading-relaxed max-w-lg font-light"
          >
            Skai Initiative evaluates traders in a structured simulated environment and connects successful candidates with proprietary trading firms seeking skilled traders.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <motion.button 
              onClick={openAssessmentForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/10 flex items-center gap-2"
            >
              Start Assessment
              <ArrowRight size={18} className="sm:hidden" />
            </motion.button>
            <motion.button 
              onClick={() => {
                const section = document.getElementById('about');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-semibold hover:border-black hover:bg-gray-50 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-8 lg:mt-0"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-50 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-gray-200/50"
          >
            <div className="bg-white rounded-2xl p-2 shadow-inner border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Skai Initiative trading dashboard showing real-time market data and evaluation metrics for prop firm funding" 
                className="rounded-xl w-full h-auto object-cover border border-gray-100"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturesStrip = () => {
  const features = [
    { label: "Platform", value: "100% Simulated Environment" },
    { label: "Risk", value: "Zero Personal Financial Risk" },
    { label: "Compliance", value: "Transparent Criteria" },
    { label: "Goal", value: "Direct Prop Firm Introductions" },
  ];

  return (
    <div className="border-t border-b border-gray-100 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            className="text-center group cursor-default p-2 sm:p-0"
          >
            <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">{feature.label}</p>
            <p className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-black transition-colors">{feature.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ProcessStep = () => {
  const steps = [
    { icon: User, title: "Register", desc: "Select your assessment track and set up your institutional-grade credentials." },
    { icon: TrendingUp, title: "Trade", desc: "Execute trades in our high-fidelity simulated environment following strict risk parameters." },
    { icon: FileText, title: "Evaluation", desc: "Our algorithmic engine reviews your consistency, drawdown management, and performance." },
    { icon: Users, title: "Connect", desc: "Successful candidates receive direct introductions to capital-allocating firms." },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">The Professional Pathway</h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">A rigorous, structured evaluation designed to identify institutional-grade trading talent through simulation.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-start p-5 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 w-full">
                <span className="text-xs font-bold text-gray-300 tracking-wider">0{idx + 1}</span>
                <div className="p-2 sm:p-3 bg-gray-50 rounded-xl">
                  <step.icon size={20} className="text-gray-800 sm:w-6 sm:h-6" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhySkai = () => {
  const cards = [
    { icon: ShieldCheck, title: "Zero Financial Risk", desc: "Never risk your own capital. Our simulated environment allows you to prove your skill with total financial security." },
    { icon: Globe, title: "Real Market Conditions", desc: "Experience sub-millisecond execution and real-time order books that mirror the institutional environment exactly." },
    { icon: LayoutList, title: "Transparent Rules", desc: "No hidden clauses or complex fine print. Our evaluation criteria are published clearly and enforced objectively." },
    { icon: Banknote, title: "Direct Funding", desc: "We bridge the gap between retail talent and professional capital, providing a direct pipeline to prop firm liquidity." },
    { icon: Zap, title: "Fast Evaluation", desc: "Our automated analytics provide immediate feedback, allowing you to move through the connection process efficiently." },
    { icon: Briefcase, title: "Built for Serious Traders", desc: "Tailored for individuals seeking a career in professional trading, not hobbyists looking for gamified experiences." },
  ];

  return (
    <section id="assessment" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Why Institutional Traders Choose Skai</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 sm:p-8 border border-gray-200 rounded-2xl sm:rounded-3xl bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="bg-gray-50 w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <card.icon className="text-gray-800" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const faqs = [
    { q: "What constitutes a 'successful' evaluation?", a: "Success is determined by consistent profitability, adhering to drawdown limits, and maintaining risk management criteria over a sustained period." },
    { q: "Which firms do you connect with?", a: "We maintain relationships with a network of regulated proprietary trading firms looking for unique talent." },
    { q: "Is there a time limit for the assessment?", a: "No. We prioritize quality over speed. Traders can take as long as they need to meet their targets, provided they maintain active trading activity once every 30 days." },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <motion.button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-4 sm:p-6 flex justify-between items-center bg-gray-50/50 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                <span className="text-gray-500 text-lg sm:text-xl">{openIndex === idx ? '−' : '+'}</span>
              </motion.button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 sm:p-6 pt-0 text-gray-600 border-t border-gray-100 leading-relaxed text-sm sm:text-base"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-28 text-center px-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-transparent to-transparent"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 leading-tight"
        >
          Your Trading Performance Could Be <br />
          Your Greatest Asset.
        </motion.h2>
        <motion.button 
          onClick={openAssessmentForm}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-200 transition-all duration-300 shadow-2xl shadow-white/10"
        >
          Begin Assessment
        </motion.button>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <div className="col-span-1 sm:col-span-2">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 mr-2">
              <Image 
                src="/logo.png" 
                alt="Skai Initiative Logo" 
                width={32}
                height={32}
                className="rounded-xl object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Skai Initiative</h3>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Connecting institutional-grade trading talent with the world's leading capital allocators.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3 sm:mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
            <li><a href="#assessment" className="hover:text-black transition-colors">Assessment</a></li>
            <li><a href="#pricing" className="hover:text-black transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3 sm:mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};


export default function HomeClient() {
  return (
    <div className="font-['Inter',system-ui,sans-serif] antialiased text-gray-900 bg-white overflow-x-hidden selection:bg-gray-900 selection:text-white scroll-smooth w-full max-w-full">
      <Navbar />
      <Hero />
      <FeaturesStrip />
      <ProcessStep />
      <WhySkai />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}