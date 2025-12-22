"use client";
import Navbar from "@/components/navbar";
import Prism from "@/components/Prism";
import SplitText from "@/components/SplitText";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  return (
    <>
      <Navbar />
      <main className="bg-[#121212] text-white font-sans min-h-screen">
      {/* 🚀 Trailer Section */}
      <section className="relative min-h-screen py-32 md:py-40 text-center border-b border-[#1e1e1e] overflow-hidden">
        {/* Prism Background */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.9 }}>
          <Prism
            animationType="hover"
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
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/40 via-[#121212]/20 to-[#121212]/50 z-[2]"></div>
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
            .animate-fade-in {
              animation: fade-in 0.8s ease-out forwards;
            }
            .typing-caption {
              margin-top: 3rem;
              font-size: 1.75rem;
              font-weight: 300;
              letter-spacing: 0.1em;
              color: rgba(255, 255, 255, 0.95);
              text-shadow: 
                0 0 10px rgba(0, 255, 255, 0.5),
                0 0 20px rgba(54, 82, 164, 0.3),
                0 2px 10px rgba(0, 0, 0, 0.5);
              min-height: 3rem;
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
            <div className="hero-text">
              <SplitText
                text="Archimedes Autonomous Vehicles"
                className="text-[4.25rem] md:text-[7.75rem] lg:text-[9.75rem] font-black tracking-tighter"
                delay={80}
                duration={1}
                ease="power4.out"
                splitType="chars"
                from={{ opacity: 0, y: 60, scale: 0.7, rotationX: -90 }}
                to={{ opacity: 1, y: 0, scale: 1, rotationX: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                tag="h1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 Innovation Section */}
      <section className="px-10 py-40 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-b border-[#1e1e1e] gap-10">
        <div className="md:w-1/2 space-y-3">
          <h3 className="text-lg font-semibold">Innovation in Motion</h3>
          <p className="text-gray-300 leading-relaxed">
            Our team at NTU AAV is constantly pushing boundaries in UAV and
            autonomous vehicle technologies.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end gap-4">
          <div className="bg-[#2a2a2a] h-24 w-24 rounded-md"></div>
          <div className="bg-[#2a2a2a] h-24 w-24 rounded-md"></div>
          <div className="bg-[#2a2a2a] h-24 w-24 rounded-md"></div>
        </div>
      </section>

      {/* 🪄 ASV / UAV Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#181818] h-72 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Category
            </p>
            <h4 className="text-2xl font-bold">ASV</h4>
          </div>
          <Link
            href="/asv"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            View More →
          </Link>
        </div>
        <div className="bg-[#181818] h-72 p-10 flex flex-col justify-between border-b border-[#1e1e1e]">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Category
            </p>
            <h4 className="text-2xl font-bold">UAV</h4>
          </div>
          <Link
            href="/uav"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            View More →
          </Link>
        </div>
      </section>

      {/* 🏆 Competitions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#181818] h-72 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Competition
            </p>
            <h4 className="text-2xl font-bold">RobotX</h4>
          </div>
          <Link
            href="/competitions/robotx"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            View More →
          </Link>
        </div>
        <div className="bg-[#181818] h-72 p-10 flex flex-col justify-between border-b border-[#1e1e1e]">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Competition
            </p>
            <h4 className="text-2xl font-bold">SUAS</h4>
          </div>
          <Link
            href="/competitions/suas"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            View More →
          </Link>
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
