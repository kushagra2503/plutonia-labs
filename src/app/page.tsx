"use client";

import { Navigation } from "@/components/navigation";
import { TextReveal } from "@/components/ui/text-reveal";
import { MovingBorder } from "@/components/ui/moving-border";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('/product#products');
  };

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4 relative">
        <BackgroundLines className="absolute inset-0">
          <div className="absolute inset-0"></div>
        </BackgroundLines>
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-9 mb-20 relative z-10 ">
          <TextReveal
            text="Let AI Agents Scrape Your Screen"
            className="text-5xl md:text-6xl font-bold tracking-tight"
          />
          <TextReveal
            text="We're building the next generation of Agentic AI solutions that empower businesses and transform your tasks."
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          />
          <div className="flex justify-center gap-4 pt-8">
            <MovingBorder>
              <button 
                className="px-8 py-3 text-sm font-medium"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </MovingBorder>
          </div>
        </div>
      </div>
    </>
  );
}
