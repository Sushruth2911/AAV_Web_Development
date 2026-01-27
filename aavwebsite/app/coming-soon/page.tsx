"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import LightPillar from '@/components/LightPillar';

export default function ComingSoonPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease infinite;
        }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
      `}</style>
      <div className="min-h-screen w-full relative overflow-hidden bg-[#121212]">
        {/* LightPillar Background */}
        <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
          <LightPillar
            topColor="#3652A4"
            bottomColor="#00824E"
            intensity={1.0}
            rotationSpeed={0.3}
            glowAmount={0.005}
            pillarWidth={3.0}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={0}
            interactive={false}
            mixBlendMode="normal"
          />
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none z-5">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float opacity-30"
            style={{ 
              background: 'radial-gradient(circle, rgba(54, 82, 164, 0.2) 0%, transparent 70%)',
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float opacity-30"
            style={{ 
              background: 'radial-gradient(circle, rgba(0, 130, 78, 0.15) 0%, transparent 70%)',
              animationDelay: '2s'
            }}
          />
        </div>

        {/* Liquid Glass Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20 pt-32">
          <div 
            className={`max-w-xl mx-auto text-center p-8 md:p-12 rounded-2xl backdrop-blur-2xl border transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              background: 'linear-gradient(135deg, rgba(54, 82, 164, 0.1) 0%, rgba(0, 130, 78, 0.08) 100%)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 60px 0 rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 1px 0 0 rgba(255, 255, 255, 0.1) inset',
              WebkitBackdropFilter: 'blur(30px)',
            }}
          >
            {/* Logo */}
            <div className={`mb-8 animate-slide-up flex justify-center items-center`} style={{ animationDelay: '0.4s' }}>
              <Image
                src="/Updated AAV Logo (White).png"
                alt="Archimedes Autonomous Vehicles"
                width={600}
                height={150}
                className="w-auto h-24 md:h-32 lg:h-40 object-contain mx-auto"
                priority
              />
            </div>

            {/* Main Heading */}
            <h1 
              className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-slide-up text-white text-center`}
              style={{
                animationDelay: '0.5s',
                lineHeight: '1.1',
                letterSpacing: '-0.01em',
              }}
            >
              Coming Soon
            </h1>

            {/* Subheading */}
            <p className={`text-lg md:text-xl text-white/95 mb-8 font-light max-w-lg mx-auto animate-slide-up text-center`} style={{ animationDelay: '0.6s' }}>
              We're working on something amazing
            </p>

            {/* Enhanced Animated Dots */}
            <div className={`flex items-center justify-center gap-2 mb-8 animate-slide-up`} style={{ animationDelay: '1s' }}>
              <div 
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ 
                  backgroundColor: '#3652A4',
                  animation: 'pulse 1.5s ease-in-out infinite',
                  boxShadow: '0 0 15px rgba(54, 82, 164, 0.5)',
                }}
              />
              <div 
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ 
                  backgroundColor: '#00824E',
                  animation: 'pulse 1.5s ease-in-out infinite 0.5s',
                  boxShadow: '0 0 15px rgba(0, 130, 78, 0.5)',
                }}
              />
              <div 
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ 
                  backgroundColor: '#3652A4',
                  animation: 'pulse 1.5s ease-in-out infinite 1s',
                  boxShadow: '0 0 15px rgba(54, 82, 164, 0.5)',
                }}
              />
            </div>

          </div>
        </div>

        {/* Additional Glass Effects */}
        <div 
          className="absolute inset-0 pointer-events-none z-1"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(54, 82, 164, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(0, 130, 78, 0.08) 0%, transparent 50%)',
          }}
        />
      </div>
    </>
  );
}

