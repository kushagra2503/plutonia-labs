"use client";

import { Navigation } from "@/components/navigation";
import { TextReveal } from "@/components/ui/text-reveal";
import { CardHover } from "@/components/ui/card-hover";
import { MovingBorder } from "@/components/ui/moving-border";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/ui/cn";
import Image from "next/image";
import { useState } from "react";

export default function PricingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Optimized animation values with fewer transform points
  const rotate = useTransform(scrollYProgress, [0, 0.4], [3, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0.8, 1, 0.8]);
  const translateY = useTransform(scrollYProgress, [0, 0.4], [30, 0]);
  const titleTranslate = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Navigation />
      <div className="min-h-screen relative overflow-hidden" ref={containerRef}>
        
        <div className="max-w-7xl mx-auto relative z-10 py-20 px-4">
          {/* Animated Header - Optimized with fewer animations */}
          <motion.div 
            className="text-center mb-16 flex flex-col items-center justify-center"
            style={{ 
              translateY: titleTranslate,
              opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
            }}
          >
            <div className="text-center w-full mx-auto">
              <TextReveal
                text="Termcrawl For Enterprise Users and Leading Startups"
                className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"
              />
            </div>
            <div className="text-center max-w-2xl mx-auto">
              <TextReveal
                text="For organizations requiring tailored AI solutions at scale."
                className="text-xl text-gray-400"
              />
            </div>
          </motion.div>

          {/* Enterprise Plan Card - Optimized with simpler shadow and fewer transforms */}
          <motion.div
            style={{
              rotateX: rotate,
              scale,
              opacity,
              translateY,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(139, 92, 246, 0.2)"
            }}
            className="max-w-3xl mx-auto perspective-1000"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(139, 92, 246, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <CardHover 
              className="p-8 border-2 border-purple-500/30 rounded-xl bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm shadow-[0_0_30px_rgba(139,92,246,0.15)]"
              hoverClassName="border-purple-500/60 bg-gradient-to-br from-gray-800/95 to-gray-900/95 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
            >
              <div className="h-full flex flex-col">
                <div className="relative">
                  {/* Enhanced glow elements */}
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-600/30 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-600/30 rounded-full blur-xl"></div>
                  <h3 className="text-xl font-semibold text-white">Enterprise</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Custom</span>
                  </div>
                  <p className="mt-4 text-gray-200">For organizations requiring tailored AI solutions at scale.</p>
                </div>

                <ul className="mt-8 space-y-4 flex-grow">
                  {[
                    "Unlimited AI agents",
                    "Custom AI model training",
                    "Enterprise API",
                    "24/7 dedicated support",
                    "Unlimited project workspaces",
                    "Custom security controls",
                    "Advanced analytics",
                    "Dedicated account manager"
                  ].map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center text-white"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <div className="mr-3 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8">
                  <MovingBorder className="bg-gradient-to-r from-purple-600 to-indigo-600 p-[2px] rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    <a 
                      href="mailto:radhikayash2@gmail.com?subject=Inquiry%20about%20Enterprise%20Plan&body=Hello%20Plutonia%20Labs%20Sales%20Team%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20Enterprise%20plan.%20Please%20provide%20additional%20information%20about%20pricing%20and%20features.%0A%0AThank%20you."
                      className="w-full px-6 py-4 text-sm font-medium block text-center bg-black rounded-lg hover:bg-gray-900 transition-colors text-white"
                    >
                      Contact Sales
                    </a>
                  </MovingBorder>
                </div>
              </div>
            </CardHover>
          </motion.div>

          {/* FAQ Section - Optimized with better animation triggers */}
          <motion.div 
            className="mt-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <CardHover
                    className="p-6 border border-gray-800 rounded-xl bg-gray-950/70 backdrop-blur-sm"
                    hoverClassName="border-purple-500/40 bg-gray-900/70 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </CardHover>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

const faqs = [
  {
    question: "How do I get started with Termcrawl?",
    answer: "Simply contact the sales team and select a plan that fits your needs and sign up. Our onboarding team will guide you through the setup process and help you configure your first AI agents."
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    question: "Do you offer a free trial?",
    answer: "We offer a 14-day free trial on our Starter and Pro plans so you can experience the power of our AI platform before committing."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer different levels of support based on your plan. Starter plans include community support, Pro plans include priority email support, and Enterprise plans include 24/7 dedicated support."
  }
];