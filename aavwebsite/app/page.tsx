"use client";
import Navbar from "@/components/navbar";
import Prism from "@/components/Prism";
import SplitText from "@/components/SplitText";
import CardSwap, { Card } from "@/components/CardSwap";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

function TypingCaption() {
  const captions = [
    "The Team of Next-Gen Engineers",
    "The Best Builders of Autonomous Vehicles",
    "The Futuristic Innovators"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentCaption = captions[currentIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentCaption.length) {
          setDisplayText(currentCaption.slice(0, displayText.length + 1));
          setTypingSpeed(100);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentCaption.slice(0, displayText.length - 1));
          setTypingSpeed(50);
        } else {
          // Finished deleting, move to next caption
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % captions.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, typingSpeed, captions]);

  return (
    <div className="typing-caption">
      <span>{displayText}</span>
      <span className="cursor">|</span>
    </div>
  );
}

export default function Home() {
  const [isInnovationVisible, setIsInnovationVisible] = useState(false);
  const innovationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInnovationVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (innovationRef.current) {
      observer.observe(innovationRef.current);
    }

    return () => {
      if (innovationRef.current) {
        observer.unobserve(innovationRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-[#121212] text-white font-sans min-h-screen">
      {/* 🚀 Trailer Section */}
      <section className="relative min-h-screen py-32 md:py-40 text-center overflow-hidden">
        {/* Prism Background */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.9 }}>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={2}
            baseWidth={4}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 -mt-25">
          <style jsx>{`
            @keyframes glow-pulse {
              0%, 100% { 
                text-shadow: 
                  0 0 20px rgba(255, 255, 255, 0.4),
                  0 0 40px rgba(54, 82, 164, 0.3),
                  0 0 60px rgba(0, 255, 255, 0.2),
                  0 0 80px rgba(147, 51, 234, 0.1);
              }
              50% { 
                text-shadow: 
                  0 0 30px rgba(255, 255, 255, 0.6),
                  0 0 60px rgba(54, 82, 164, 0.5),
                  0 0 90px rgba(0, 255, 255, 0.4),
                  0 0 120px rgba(147, 51, 234, 0.3);
              }
            }
            .hero-text {
              color: #ffffff;
              text-shadow: 
                0 0 20px rgba(255, 255, 255, 0.4),
                0 0 40px rgba(54, 82, 164, 0.3),
                0 0 60px rgba(0, 255, 255, 0.2),
                0 2px 4px rgba(0, 0, 0, 0.5);
              animation: glow-pulse 3s ease-in-out infinite;
              letter-spacing: -0.03em;
              line-height: 1.05;
            }
            .hero-text :global(.split-parent),
            .hero-text :global(.split-char),
            .hero-text :global(.split-word) {
              color: #ffffff;
              text-shadow: 
                0 0 20px rgba(255, 255, 255, 0.4),
                0 0 40px rgba(54, 82, 164, 0.3),
                0 0 60px rgba(0, 255, 255, 0.2),
                0 2px 4px rgba(0, 0, 0, 0.5);
            }
            .innovation-heading {
              color: #ffffff;
              text-shadow: 
                0 0 20px rgba(255, 255, 255, 0.4),
                0 0 40px rgba(54, 82, 164, 0.3),
                0 0 60px rgba(0, 255, 255, 0.2),
                0 2px 4px rgba(0, 0, 0, 0.5);
              animation: glow-pulse 3s ease-in-out infinite;
              letter-spacing: -0.02em;
              line-height: 1.1;
            }
            @keyframes cursor-blink {
              0%, 49% { opacity: 1; }
              50%, 100% { opacity: 0; }
            }
            @keyframes cursor-glow {
              0%, 100% { 
                box-shadow: 0 0 5px rgba(0, 255, 255, 0.8),
                           0 0 10px rgba(0, 255, 255, 0.6),
                           0 0 15px rgba(0, 255, 255, 0.4);
              }
              50% { 
                box-shadow: 0 0 10px rgba(0, 255, 255, 1),
                           0 0 20px rgba(0, 255, 255, 0.8),
                           0 0 30px rgba(0, 255, 255, 0.6);
              }
            }
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slide-in-left {
              from { opacity: 0; transform: translateX(-50px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes slide-in-right {
              from { opacity: 0; transform: translateX(50px); }
              to { opacity: 1; transform: translateX(0); }
            }
            .animate-fade-in {
              animation: fade-in 0.8s ease-out forwards;
            }
            .animate-slide-in-left {
              animation: slide-in-left 0.8s ease-out forwards;
            }
            .animate-slide-in-right {
              animation: slide-in-right 0.8s ease-out forwards;
            }
            .typing-caption {
              margin-top: 3rem;
              font-size: 1.25rem;
              font-weight: 300;
              letter-spacing: 0.1em;
              color: rgba(255, 255, 255, 0.95);
              text-shadow: 
                0 0 10px rgba(0, 255, 255, 0.5),
                0 0 20px rgba(54, 82, 164, 0.3),
                0 2px 10px rgba(0, 0, 0, 0.5);
              min-height: 2rem;
              text-transform: uppercase;
              font-family: 'Courier New', monospace;
            }
            .typing-caption .cursor {
              display: inline-block;
              width: 3px;
              height: 1.5em;
              margin-left: 6px;
              background: linear-gradient(to bottom, 
                rgba(0, 255, 255, 1) 0%,
                rgba(54, 82, 164, 0.8) 50%,
                rgba(0, 255, 255, 1) 100%);
              animation: cursor-blink 0.8s infinite, cursor-glow 2s ease-in-out infinite;
              vertical-align: middle;
              border-radius: 2px;
            }
          `}</style>
          <div className="relative w-full max-w-7xl mx-auto">
              <div className="hero-text flex justify-center items-center">
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Image
                  src="/Updated AAV Logo (White).png"
                  alt="Archimedes Autonomous Vehicles"
                  width={1200}
                  height={300}
                  className="w-auto h-40 md:h-56 lg:h-72 object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 Innovation Section */}
      <section ref={innovationRef} className="relative px-10 pt-8 pb-32 md:pt-12 md:pb-40 border-b border-[#1e1e1e] overflow-hidden -mt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#121212]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Section Header - Side by side */}
            <div className={`flex-1 md:text-left text-center flex items-center transition-all duration-1000 ${isInnovationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ height: '600px' }}>
              <div>
                <h2 className="innovation-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
                  Innovation in Motion
                </h2>
                <p className="text-lg md:text-xl text-gray-400">
                  Discover how we're shaping the future of autonomous systems
                </p>
              </div>
            </div>

            {/* CardSwap Container */}
            <div className={`flex-1 flex items-center justify-center transition-all duration-1000 delay-300 ${isInnovationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ height: '600px', position: 'relative', width: '100%', minWidth: '400px' }}>
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={true}
              >
                <Card className="bg-transparent border border-white/10 rounded-lg p-6 backdrop-blur-md shadow-lg w-[480px]" style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                  </div>
                  {/* Photo Space */}
                  <div className="mb-4 w-full h-48 rounded-md overflow-hidden border border-white/5 relative">
                    <Image
                      src="/AAV Pic from RobotX.jpeg"
                      alt="AAV at RobotX"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">Pushing Boundaries 🚀</h3>
                  </div>
          <p className="text-gray-300 leading-relaxed">
         NTU AAV pushes boundaries of what's possible with autonomous vehicle technologies.
                  </p>
                </Card>
                
                <Card className="bg-transparent border border-white/10 rounded-lg p-6 backdrop-blur-md shadow-lg w-[480px]" style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                  </div>
                  {/* Photo Space */}
                  <div className="mb-4 w-full h-48 rounded-md overflow-hidden border border-white/5 relative">
                    <Image
                      src="/AAV Pic with ASV.jpeg"
                      alt="AAV with ASV"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">Advanced Solutions ⚡</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We leverage cutting-edge tech to create groundbreaking solutions that excel
                    in competitive environments and the real world.
                  </p>
                </Card>
                
                <Card className="bg-transparent border border-white/10 rounded-lg p-6 backdrop-blur-md shadow-lg w-[480px]" style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                  </div>
                  {/* Photo Space */}
                  <div className="mb-4 w-full h-48 rounded-md overflow-hidden border border-white/5 relative">
                    <Image
                      src="/AAV Team Pic.jpeg"
                      alt="AAV Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">Next Generation 🌐</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    A team of passionate engineers innovating the future of autonomous vehicles, and powering up the industry's next best solutions.
                  </p>
                </Card>
              </CardSwap>
            </div>
        </div>
        </div>
      </section>

      {/* 🪄 ASV / UAV Section */}
      <section className="relative py-20 px-10 border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/asv"
              className="group relative bg-[#181818] rounded-xl p-10 flex flex-col justify-between border border-[#1e1e1e] hover:border-white/20 transition-all duration-300 hover:bg-[#1e1e1e] hover:-translate-y-1"
            >
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  Category
                </p>
                <h4 className="text-3xl md:text-4xl font-bold mb-2 text-white group-hover:text-white transition-colors">
                  ASV
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  Autonomous Surface Vehicles
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                <span>View More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </Link>
            <Link
              href="/uav"
              className="group relative bg-[#181818] rounded-xl p-10 flex flex-col justify-between border border-[#1e1e1e] hover:border-white/20 transition-all duration-300 hover:bg-[#1e1e1e] hover:-translate-y-1"
            >
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  Category
                </p>
                <h4 className="text-3xl md:text-4xl font-bold mb-2 text-white group-hover:text-white transition-colors">
                  UAV
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  Unmanned Aerial Vehicles
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                <span>View More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 🏆 Competitions Section */}
      <section className="relative py-20 px-10 border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/competitions/robotx"
              className="group relative bg-[#181818] rounded-xl p-10 flex flex-col justify-between border border-[#1e1e1e] hover:border-white/20 transition-all duration-300 hover:bg-[#1e1e1e] hover:-translate-y-1"
            >
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  Competition
                </p>
                <h4 className="text-3xl md:text-4xl font-bold mb-2 text-white group-hover:text-white transition-colors">
                  RobotX
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  Maritime autonomous systems challenge
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                <span>View More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </Link>
            <Link
              href="/competitions/suas"
              className="group relative bg-[#181818] rounded-xl p-10 flex flex-col justify-between border border-[#1e1e1e] hover:border-white/20 transition-all duration-300 hover:bg-[#1e1e1e] hover:-translate-y-1"
            >
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  Competition
                </p>
                <h4 className="text-3xl md:text-4xl font-bold mb-2 text-white group-hover:text-white transition-colors">
                  SUAS
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  Student Unmanned Aerial Systems
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                <span>View More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 👥 Footer Links */}
      <footer className="bg-[#0d0d0d] flex flex-col md:flex-row justify-center md:justify-between items-center px-10 py-50 text-sm border-t border-[#1e1e1e]">
        <Link
          href="/about/team"
          className="hover:underline mb-4 md:mb-0 hover:text-white"
        >
          Our Team →
        </Link>
        <Link
          href="/about/achievements"
          className="hover:underline mb-4 md:mb-0 hover:text-white"
        >
          Our Achievements →
        </Link>
        <Link href="/about/outreach" className="hover:underline hover:text-white">
          Outreach →
        </Link>
      </footer>
      </main>
    </>
  );
}
