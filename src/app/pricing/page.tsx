"use client";

import { Navigation } from "@/components/navigation";
import { TextReveal } from "@/components/ui/text-reveal";
import { CardHover } from "@/components/ui/card-hover";
import { MovingBorder } from "@/components/ui/moving-border";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PricingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animation values
  const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 0.8, 0.6]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const titleTranslate = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen py-20 px-4 relative overflow-hidden" ref={containerRef}>
        {/* Background grid with gradient overlay */}
        <div className="absolute inset-0 bg-black z-[-1]">
          <div className="absolute inset-0 opacity-50">
            <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-purple-900/10 to-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Animated Header - Centered */}
          <motion.div 
            className="text-center mb-16 flex flex-col items-center justify-center"
            style={{ 
              translateY: titleTranslate,
              opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
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

          {/* Enterprise Plan Card with 3D effect */}
          <motion.div
            style={{
              rotateX: rotate,
              scale,
              opacity,
              translateY,
              boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026"
            }}
            className="max-w-3xl mx-auto perspective-1000"
          >
            <CardHover className="p-8 border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm">
              <div className="h-full flex flex-col">
                <div className="relative">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl"></div>
                  <h3 className="text-xl font-semibold text-gray-300">Enterprise</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Custom</span>
                  </div>
                  <p className="mt-4 text-gray-400">For organizations requiring tailored AI solutions at scale.</p>
                </div>

                <ul className="mt-8 space-y-4 flex-grow">
                  {[
                    "Unlimited AI agents",
                    "Custom AI model training",
                    "Enterprise API ",
                    "24/7 dedicated support",
                    "Unlimited project workspaces",
                    "Custom security controls",
                    "Advanced analytics",
                    "Dedicated account manager"
                  ].map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="mr-2 flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8">
                  <MovingBorder className="bg-gradient-to-r from-purple-500 to-indigo-500 p-[1px] rounded-lg">
                    <a 
                      href="mailto:radhikayash2@gmail.com?subject=Inquiry%20about%20Enterprise%20Plan&body=Hello%20Plutonia%20Labs%20Sales%20Team%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20Enterprise%20plan.%20Please%20provide%20additional%20information%20about%20pricing%20and%20features.%0A%0AThank%20you."
                      className="w-full px-6 py-3 text-sm font-medium block text-center bg-black rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      Contact Sales
                    </a>
                  </MovingBorder>
                </div>
              </div>
            </CardHover>
          </motion.div>

          {/* FAQ Section with staggered animation */}
          <motion.div 
            className="mt-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i} 
                  className="border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(130, 71, 229, 0.2)"
                  }}
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Floating gradient orbs for visual interest */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
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