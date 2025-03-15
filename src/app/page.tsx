"use client";

import { Navigation } from "@/components/navigation";
import { TextReveal } from "@/components/ui/text-reveal";
import { MovingBorder } from "@/components/ui/moving-border";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const [quacking, setQuacking] = useState(false);
  const [quackText, setQuackText] = useState("");
  const [typedText, setTypedText] = useState("");
  const fullText = "Get Started With QuackQuery";
  
  // Typing effect
  useEffect(() => {
    if (quacking) return; // Don't type when quacking
    
    if (typedText === fullText) {
      // Reset after a delay to create a loop effect
      const timeout = setTimeout(() => {
        setTypedText("");
      }, 3000);
      return () => clearTimeout(timeout);
    }
    
    // Type the next character
    const timeout = setTimeout(() => {
      setTypedText(fullText.substring(0, typedText.length + 1));
    }, 100); // Adjust speed as needed
    
    return () => clearTimeout(timeout);
  }, [typedText, quacking, fullText]);

  const handleGetStartedClick = () => {
    setQuacking(true);
    setQuackText("Quack!");
    
    // Delay navigation to show the quack effect
    setTimeout(() => {
      router.push('/product#products');
    }, 1000);
  };

  // Add a glow effect for the duck image

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4 relative bg-black">
        <BackgroundLines className="absolute inset-0">
          <div className="absolute inset-0"></div>
        </BackgroundLines>
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-9 mb-20 relative z-10 ">
          <TextReveal
            text="Let AI Scrape Your Screen "
            className="text-5xl md:text-6xl font-bold tracking-tight"
          />
          <TextReveal
            text="We're building the next generation of Agentic AI solutions that empower businesses and transform your tasks."
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          />
          
          {/* Duck Image */}
          <div className="flex justify-center mt-12 mb-8">
            <MovingBorder borderRadius="9999px" className="p-1 bg-gradient-to-r from-purple-500 to-indigo-500">
              <div 
                className="bg-black p-4 rounded-full cursor-pointer transition-transform hover:scale-105 flex items-center justify-between"
                onClick={handleGetStartedClick}
              >
                <div className="px-6 py-3 font-semibold text-lg flex flex-col items-center relative overflow-hidden mr-4">
                  <span className={`transition-transform duration-300 min-h-[28px] ${quacking ? 'transform -translate-y-full opacity-0' : ''}`}>
                    {typedText}
                    <span className="inline-block w-1 h-5 ml-1 bg-purple-400 animate-blink"></span>
                  </span>
                  <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 text-yellow-400 ${quacking ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    {quackText}
                  </span>
                </div>
                <Image 
                  src="/duck.png" 
                  alt="Duck Logo" 
                  width={150} 
                  height={100}
                  className="rounded-full cursor-pointer"
                  onClick={handleGetStartedClick}
                  priority
                />
              </div>
            </MovingBorder>
          </div>
          
          {/* Add blinking cursor animation */}
          <style jsx global>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
            .animate-blink {
              animation: blink 1s infinite;
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
