// src/app/assessment/page.tsx

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Shield, FileText, Users, Zap, Lock, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSebabcGZh0I7qvfNLcoWUTtk1jLeKfX2hbAHszQSOoHL5PXtw/viewform?usp=publish-editor";

export default function AssessmentPage() {
  const [agreed, setAgreed] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleProceed = () => {
    if (agreed) {
      window.open(GOOGLE_FORM_URL, '_blank');
    }
  };

  return (
    <div className="font-['Inter',system-ui,sans-serif] antialiased text-gray-900 bg-gray-50 min-h-screen overflow-x-hidden selection:bg-gray-900 selection:text-white">
      
      {/* Navbar (Simplified) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3">
                <Image 
                  src="/logo.png" 
                  alt="Skai Initiative" 
                  width={40}
                  height={40}
                  className="rounded-xl object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">
                Skai <span className="text-gray-500 font-medium">Initiative</span>
              </span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-black transition-colors p-2 rounded-lg hover:bg-gray-100">
              <ArrowLeft size={24} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-6 sm:p-8 text-white">
            <motion.h1 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold"
            >
              Pilot Program Registration
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 mt-2 text-sm sm:text-base"
            >
              Join our exclusive pilot program for a free trading assessment
            </motion.p>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8">
            
            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                We're building a new approach to trader evaluation centered around detailed trade journaling, risk management, and performance analysis. By registering for our Pilot Program, you'll have the opportunity to receive a free assessment through our system and help shape its development.
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <span className="font-semibold">Key Benefits:</span>
                </p>
                <ul className="mt-2 space-y-2 text-sm sm:text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Free assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Shape platform development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Prop firm eligibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Early access</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Terms & Conditions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  PILOT PROGRAM TERMS & CONDITIONS
                </h2>
                <button
                  onClick={() => setShowTerms(!showTerms)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  {showTerms ? "Hide" : "Show"} full terms
                </button>
              </div>

              <AnimatePresence>
                {showTerms && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                        <p>1. Participation in this pilot program is free and does not guarantee selection into the pilot program.</p>
                        <p>2. Participation in the pilot program does not guarantee any referral, introduction, recommendation, funding, employment, partnership, or relationship with any proprietary trading firm, financial institution, investor, or third party.</p>
                        <p>3. Any future referrals or introductions are entirely at the discretion of Skai Initiative and any participating third parties.</p>
                        <p>4. Skai Initiative does not provide financial, investment, legal, tax, or trading advice. Any information, feedback, evaluations, assessments, rankings, or reports provided through the pilot program are for informational purposes only.</p>
                        <p>5. Participants remain solely responsible for all trading decisions, investments, profits, losses, and financial outcomes resulting from their activities.</p>
                        <p>6. Skai Initiative makes no representation or warranty regarding the accuracy, effectiveness, profitability, or suitability of its evaluation methods, journaling systems, assessments, or recommendations.</p>
                        <p>7. Skai Initiative reserves the right to accept, reject, suspend, or remove any participant from the pilot program at any time and for any reason.</p>
                        <p>8. Participants agree that information submitted through the registration form and pilot program may be used for evaluation, research, testing, product development, and service improvement purposes.</p>
                        <p>9. Participants are responsible for ensuring that any information provided is accurate and truthful to the best of their knowledge.</p>
                        <p>10. The pilot program, its features, evaluation methods, eligibility criteria, and benefits may be modified, suspended, or discontinued at any time without prior notice.</p>
                        <p>11. To the maximum extent permitted by applicable law, Skai Initiative shall not be liable for any direct, indirect, incidental, consequential, special, or financial damages arising from participation in the pilot program.</p>
                        <p className="font-semibold">12. By submitting this registration form, the participant acknowledges that they have read and agree to these Terms & Conditions.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Checkbox & Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200"
            >
              <div className="flex items-start gap-3 mb-6">
                <div className="flex items-center h-6">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="h-5 w-5 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                  />
                </div>
                <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                  I have read and agree to the <button onClick={() => setShowTerms(true)} className="text-blue-600 hover:text-blue-700 font-medium underline">Pilot Program Terms & Conditions</button>.
                </label>
              </div>

              <motion.button
                onClick={handleProceed}
                disabled={!agreed}
                whileHover={agreed ? { scale: 1.02 } : {}}
                whileTap={agreed ? { scale: 0.98 } : {}}
                className={`w-full py-3.5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  agreed 
                    ? 'bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/20 cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {agreed ? (
                  <>
                    Continue
                    <ArrowRight size={20} />
                  </>
                ) : (
                  'Agree to continue'
                )}
              </motion.button>
            </motion.div>

          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8 text-xs sm:text-sm text-gray-400"
        >
          <p>© 2026 Skai Initiative. All rights reserved.</p>
        </motion.div>

      </main>
    </div>
  );
}