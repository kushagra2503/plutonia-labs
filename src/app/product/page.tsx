"use client";

import { Navigation } from "@/components/navigation";
import { CardHover } from "@/components/ui/card-hover";
import { MovingBorder } from "@/components/ui/moving-border";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProductPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const documentationRef = useRef(null);
  const { scrollYProgress: docScrollProgress } = useScroll({
    target: documentationRef,
  });

  // Parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  
  // Documentation section animations
  const docOpacity = useTransform(docScrollProgress, [0, 0.1], [0, 1]);
  const docY = useTransform(docScrollProgress, [0, 0.1], [50, 0]);

  // Code snippet tabs
  const [activeTab, setActiveTab] = useState('install');

  return (
    <>
      <Navigation />
      
      {/* Hero Parallax Section */}
      <div ref={ref} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y, opacity }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
            Termcrawl
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            AI Assistant That Sees What You See
          </p>
        </motion.div>
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-0"></div>
        
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-black z-[-1]">
          <div className="absolute inset-0 opacity-50">
            <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>
        </div>
      </div>

      {/* Product Showcase Section */}
      <div className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Description */}
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold"
              >
                Screen Scraping AI Assistant
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg"
              >
                Termcrawl is a revolutionary terminal-based AI agent that scrapes your screen and uses the data to answer your queries based on what it sees in real-time.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {[
                    "Real-time screen analysis",
                    "Terminal integration",
                    "Contextual responses based on visual data",
                    "Privacy-focused (processes data locally)",
                    "Works with any application or website",
                    "Customizable AI responses"
                  ].map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <MovingBorder className="inline-block">
                  <a 
                    href="https://github.com/kushagra2503/ai_assistant_pkg" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-8 py-3 text-sm font-medium block"
                  >
                    View on GitHub
                  </a>
                </MovingBorder>
              </motion.div>
            </div>
            
            {/* Terminal Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-4 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-sm text-gray-400">termcrawl</div>
              </div>
              <div className="font-mono text-sm text-gray-300 space-y-2">
                <p className="text-green-400">$ ai-assistant</p>
                <p>Initializing Termcrawl AI Assistant...</p>
                <p>Screen capture module loaded.</p>
                <p>AI model initialized.</p>
                <p className="text-green-400">$ termcrawl analyze</p>
                <p>Analyzing screen content...</p>
                <p>Found: Text editor with code, browser with documentation, terminal window.</p>
                <p className="text-green-400">$ termcrawl ask What the function in my editor doing?</p>
                <p>Based on your screen, I can see a JavaScript function that handles API requests with error handling and data transformation. It appears to be fetching user data and formatting it for display.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            How Developers Use Termcrawl
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <CardHover className="p-6 border border-gray-800 rounded-xl h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{useCase.title}</h3>
                    <p className="text-gray-400">{useCase.description}</p>
                  </div>
                </CardHover>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation Section */}
      <div id="documentation" ref={documentationRef} className="py-20 px-4 bg-black">
        <motion.div 
          className="max-w-4xl mx-auto"
          style={{ opacity: docOpacity, y: docY }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Documentation</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Get started with Termcrawl in minutes. Follow our simple installation guide and start interacting with your screen content through AI.
          </p>
          
          {/* Documentation Card */}
          <div className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/30 backdrop-blur-sm">
            {/* Tabs */}
            <div className="flex border-b border-gray-800">
              <button 
                className={`px-4 py-3 text-sm font-medium ${activeTab === 'install' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('install')}
              >
                Installation
              </button>
              <button 
                className={`px-4 py-3 text-sm font-medium ${activeTab === 'usage' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('usage')}
              >
                Usage
              </button>
              <button 
                className={`px-4 py-3 text-sm font-medium ${activeTab === 'config' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('config')}
              >
                Configuration
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'install' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Installation</h3>
                  <p className="text-gray-400 mb-4">Install Termcrawl using git:</p>
                  <div className="bg-black rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-300">
                      # Using Git<br/>
                      pip install git+https://github.com/kushagra2503/ai_assistant_pkg.git<br/>
                    </pre>
                  </div>
                  <p className="text-gray-400 mt-4">System Requirements:</p>
                  <ul className="list-disc pl-5 text-gray-400 space-y-1">
                    <li>Python {'>='} 3.10 </li>
                    <li>Git should be nstalled and set as path vairalbe in your system (for screen capture functionality)</li>
                    <li>OpenAI API key and Gemini key  (for AI processing)</li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'usage' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
                  <p className="text-gray-400 mb-4">Start using Termcrawl with these simple commands on your terminal after installation:</p>
                  <div className="bg-black rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-300">
                      # Start Termcrawl in your terminal<br/>
                      ai-assistant<br/><br/>
                    </pre>
                  </div>
                  <p className="text-gray-400 mt-4">You can also use the TermCrawi Ai Assistant as a library in your codebase:</p>
                  <div className="bg-black rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-300">{`
import asyncio
from ai_assistant import Assistant

async def main():
    # Initialize the assistant
    assistant = Assistant(
        model_choice=&quot;Gemini&quot;,  # or &quot;OpenAI&quot;
        api_key=None,  # Will use environment variable
        role="General"
    )
    
    # Get a response
    response = await assistant.answer_async("What is artificial intelligence?")
    print(response)

if __name__ == "__main__":
    asyncio.run(main())
      `}</pre>
                  </div>
                </div>
              )}
              
              {activeTab === 'config' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Configuration</h3>
                  <p className="text-gray-400 mb-4">Configure .env file if your using it as development mode<code className="bg-gray-800 px-1 py-0.5 rounded text-sm">.termcrawlrc</code> file in your home directory:</p>
                  <div className="bg-black rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-300">
                      {`{
  "apiKey": "your-openai-api-key"
}`}
                    </pre>
                  </div>
                  <p className="text-gray-400 mt-4">Or set configuration via command line:</p>
                  <div className="bg-black rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-300">
                      termcrawl config set apiKey your-openai-api-key<br/>
                      termcrawl config set model gpt-4-vision
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

// Use cases data
const useCases = [
  {
    title: "Code Understanding",
    description: "Ask questions about code on your screen without copying and pasting. Termcrawl sees your code and explains it in context.",
    icon: (
      <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Data Analysis",
    description: "Point Termcrawl at charts, spreadsheets, or data visualizations and get instant insights without manual data entry.",
    icon: (
      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Documentation Helper",
    description: "Have complex documentation open? Ask Termcrawl to summarize or explain specific sections without switching context.",
    icon: (
      <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];
