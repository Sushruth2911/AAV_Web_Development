"use client";
import Navbar from "@/components/navbar";
import SplitText from "@/components/SplitText";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselData = [
    {
      image: "/carousel/slide1.jpg",
      title: "Hello California!",
      description: "The AAV Team lands at California for RobotX 2024!",
    },
    {
      image: "/carousel/slide2.jpg",
      title: "Walmart Runs",
      description: "All those crazy Walmart runs during RobotX 2024!",
    },
    {
      image: "/carousel/slide3.jpg",
      title: "A Curious Encounter...",
      description: "An interesting interaction with a stranger at Wawa!",
    },
    {
      image: "/carousel/slide4.jpg",
      title: "Team Dinner",
      description: "The AAV team devouring the best of American food at Shake Shack!",
    },
    {
      image: "/carousel/slide5.jpg",
      title: "Exploring the US!",
      description: "The AAV team bonding over sightseeing post-competition!",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselData.length]);

  return (
    <>
      <Navbar />
      <main className="bg-[#121212] text-white font-sans min-h-screen">
      {/* 🚀 Trailer Section */}
      <section className="relative min-h-screen text-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 w-full h-full object-cover"
          style={{ zIndex: 0, top: '-15%', height: '130%', objectPosition: 'center 20%' }}
        >
          <source src="/trailer.mp4.mov" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for better logo visibility */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-black"
          style={{ zIndex: 1, opacity: 0.4 }}
        ></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
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

      {/* 🪄 Navigation Grid Section */}
      <section className="relative border-b border-[#1e1e1e] py-8 md:py-12">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Link
              href="/asv"
              className="group relative min-h-[350px] md:min-h-[450px] flex flex-col justify-center items-start p-8 md:p-12 overflow-hidden cursor-pointer"
            >
              <Image
                src="/ASV.png"
                alt="ASV Background"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
              <div className="relative z-10 w-full">
                <p className="text-xs md:text-sm text-white uppercase tracking-[0.2em] mb-3 font-light">
                  Category
                </p>
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                  ASV
                </h4>
                <div className="flex items-center gap-3 text-white uppercase tracking-[0.15em] text-sm md:text-base font-light">
                  <span>DISCOVER</span>
                  <div className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                    <span className="text-white text-lg">→</span>
                  </div>
              </div>
              </div>
            </Link>
            <Link
              href="/uav"
              className="group relative min-h-[350px] md:min-h-[450px] flex flex-col justify-center items-start p-8 md:p-12 overflow-hidden cursor-pointer"
            >
              <Image
                src="/UAV1.png"
                alt="UAV Background"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
              <div className="relative z-10 w-full">
                <p className="text-xs md:text-sm text-white uppercase tracking-[0.2em] mb-3 font-light">
                  Category
                </p>
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                  UAV
                </h4>
                <div className="flex items-center gap-3 text-white uppercase tracking-[0.15em] text-sm md:text-base font-light">
                  <span>DISCOVER</span>
                  <div className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                    <span className="text-white text-lg">→</span>
                  </div>
              </div>
              </div>
            </Link>
            <Link
              href="/competitions/robotx"
              className="group relative min-h-[350px] md:min-h-[450px] flex flex-col justify-center items-start p-8 md:p-12 overflow-hidden cursor-pointer"
            >
              <Image
                src="/RobotX.png"
                alt="RobotX Background"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
              <div className="relative z-10 w-full">
                <p className="text-xs md:text-sm text-white uppercase tracking-[0.2em] mb-3 font-light">
                  Competition
                </p>
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                  RobotX
                </h4>
                <div className="flex items-center gap-3 text-white uppercase tracking-[0.15em] text-sm md:text-base font-light">
                  <span>DISCOVER</span>
                  <div className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                    <span className="text-white text-lg">→</span>
                  </div>
              </div>
              </div>
            </Link>
            <Link
              href="/competitions/suas"
              className="group relative min-h-[350px] md:min-h-[450px] flex flex-col justify-center items-start p-8 md:p-12 overflow-hidden cursor-pointer"
            >
              <Image
                src="/SUAS.png"
                alt="SUAS Background"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
              <div className="relative z-10 w-full">
                <p className="text-xs md:text-sm text-white uppercase tracking-[0.2em] mb-3 font-light">
                  Competition
                </p>
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                  SUAS
                </h4>
                <div className="flex items-center gap-3 text-white uppercase tracking-[0.15em] text-sm md:text-base font-light">
                  <span>DISCOVER</span>
                  <div className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                    <span className="text-white text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="/sponsors"
              className="group relative min-h-[350px] md:min-h-[450px] flex flex-col justify-center items-start p-8 md:p-12 overflow-hidden cursor-pointer"
            >
              <Image
                src="/Sponsors.png"
                alt="Sponsors Background"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
              <div className="relative z-10 w-full">
                <p className="text-xs md:text-sm text-white uppercase tracking-[0.2em] mb-3 font-light">
                  Support
                </p>
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                  Sponsors
                </h4>
                <div className="flex items-center gap-3 text-white uppercase tracking-[0.15em] text-sm md:text-base font-light">
                  <span>DISCOVER</span>
                  <div className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                    <span className="text-white text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="/news"
              className="group relative min-h-[350px] md:min-h-[450px] flex flex-col justify-center items-start p-8 md:p-12 overflow-hidden cursor-pointer"
            >
              <Image
                src="/NewsRoom.png"
                alt="Newsroom Background"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
              <div className="relative z-10 w-full">
                <p className="text-xs md:text-sm text-white uppercase tracking-[0.2em] mb-3 font-light">
                  Updates
                </p>
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                  Newsroom
                </h4>
                <div className="flex items-center gap-3 text-white uppercase tracking-[0.15em] text-sm md:text-base font-light">
                  <span>DISCOVER</span>
                  <div className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                    <span className="text-white text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 🎠 Image Carousel Section */}
      <section className="relative border-b border-[#1e1e1e] bg-[#121212] py-8 md:py-12">
        <div className="w-full mx-auto">
          <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
            {/* Left Side - Text Content */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 bg-[#121212]">
              <div className="max-w-lg">
                <div className="transition-opacity duration-700">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                    {carouselData[currentSlide].title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                    {carouselData[currentSlide].description}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-white uppercase tracking-[0.15em] text-sm md:text-base font-light cursor-pointer hover:opacity-80 transition-opacity">
                  <span>READ MORE</span>
                  <div className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all">
                    <span className="text-white text-lg">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="flex-1 relative overflow-hidden bg-[#0a0a0a]">
              <div className="relative w-full h-full">
                {carouselData.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                aria-label="Previous slide"
              >
                <span className="text-white text-xl">←</span>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                aria-label="Next slide"
              >
                <span className="text-white text-xl">→</span>
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔍 Discover Section */}
      <section className="relative bg-[#0d0d0d] py-16 md:py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 md:mb-16 text-center md:text-left">
            Find out more about AAV!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {/* About Us Card */}
            <Link
              href="/about/aboutus"
              className="group relative h-[300px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/Aboutus.jpg"
                alt="About Us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <span className="text-base md:text-lg font-medium uppercase tracking-wide">
                    About Us
                  </span>
                  <span className="text-white text-xl">→</span>
                </div>
              </div>
            </Link>

            {/* Our Team Card */}
        <Link
          href="/about/team"
              className="group relative h-[300px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/ourteam.jpg"
                alt="Our Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <span className="text-base md:text-lg font-medium uppercase tracking-wide">
                    Our Team
                  </span>
                  <span className="text-white text-xl">→</span>
                </div>
              </div>
        </Link>

            {/* Contact Us Card */}
        <Link
              href="/contact"
              className="group relative h-[300px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/contactus.jpg"
                alt="Contact Us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <span className="text-base md:text-lg font-medium uppercase tracking-wide">
                    Contact Us
                  </span>
                  <span className="text-white text-xl">→</span>
                </div>
              </div>
        </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] border-t border-[#1e1e1e] py-12 md:py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
            {/* Left Side - Logos */}
            <div className="flex flex-col gap-6">
              {/* AAV Logo */}
              <div className="relative w-36 h-18 md:w-44 md:h-22">
                <Image
                  src="/Updated AAV Logo (White).png"
                  alt="AAV Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              {/* NTU + MAE Logo */}
              <div className="relative w-52 h-14 md:w-60 md:h-18">
                <Image
                  src="/NTU_MAE_Logo.png"
                  alt="NTU MAE Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Center - All Rights Reserved */}
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base text-gray-400">
                © {new Date().getFullYear()} Archimedes Autonomous Vehicles (AAV). All rights reserved.
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">
                Nanyang Technological University, Singapore
              </p>
            </div>

            {/* Right Side - Social Media Icons */}
            <div className="flex gap-3 md:gap-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/ntuaav/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 bg-[#1e1e1e] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/ntuaav/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 bg-[#1e1e1e] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@ntuaav" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 bg-[#1e1e1e] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:aav@ntu.edu.sg" 
                className="w-11 h-11 md:w-12 md:h-12 bg-[#1e1e1e] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
