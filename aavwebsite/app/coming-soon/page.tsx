"use client";

import { useEffect, useState } from 'react';
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
      <div className="min-h-screen w-full relative overflow-hidden" style={{ backgroundColor: '#0D1A2C' }}>
        {/* LightPillar Background */}
        <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
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
              background: 'radial-gradient(circle, rgba(82, 39, 255, 0.4) 0%, transparent 70%)',
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float opacity-30"
            style={{ 
              background: 'radial-gradient(circle, rgba(255, 159, 252, 0.4) 0%, transparent 70%)',
              animationDelay: '2s'
            }}
          />
        </div>

        {/* Liquid Glass Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20 pt-32">
          <div 
            className={`max-w-xl mx-auto text-center p-8 md:p-12 rounded-2xl backdrop-blur-2xl border transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              background: 'linear-gradient(135deg, rgba(82, 39, 255, 0.12) 0%, rgba(255, 159, 252, 0.12) 100%)',
              borderColor: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 20px 60px 0 rgba(82, 39, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 1px 0 0 rgba(255, 255, 255, 0.2) inset',
              WebkitBackdropFilter: 'blur(30px)',
            }}
          >
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md border animate-scale-in`}
              style={{
                animationDelay: '0.2s',
                backgroundColor: 'rgba(82, 39, 255, 0.25)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '0 4px 20px rgba(82, 39, 255, 0.2)',
              }}
            >
              <span className="text-base">🚀</span>
              <span className="text-xs font-semibold text-white tracking-wide">Coming Soon</span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 animate-slide-up`}
              style={{
                animationDelay: '0.4s',
                backgroundImage: 'linear-gradient(135deg, #8B6AFF 0%, #FF9FFC 50%, #8B6AFF 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s ease infinite',
                lineHeight: '1.1',
                letterSpacing: '-0.01em',
                filter: 'drop-shadow(0 0 20px rgba(82, 39, 255, 0.6)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))',
              }}
            >
              Coming Soon
            </h1>

            {/* Subheading */}
            <p className={`text-lg md:text-xl text-white/95 mb-4 font-light max-w-lg mx-auto animate-slide-up`} style={{ animationDelay: '0.6s' }}>
              We're working on something amazing
            </p>

            {/* Description */}
            <p className={`text-sm md:text-base text-white/75 mb-8 leading-relaxed max-w-md mx-auto animate-slide-up`} style={{ animationDelay: '0.8s' }}>
              Our team is putting the finishing touches on an exciting new feature. 
              Check back soon for the big reveal.
            </p>

            {/* Enhanced Animated Dots */}
            <div className={`flex items-center justify-center gap-2 mb-8 animate-slide-up`} style={{ animationDelay: '1s' }}>
              <div 
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ 
                  backgroundColor: '#5227FF',
                  animation: 'pulse 1.5s ease-in-out infinite',
                  boxShadow: '0 0 15px rgba(82, 39, 255, 0.6)',
                }}
              />
              <div 
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ 
                  backgroundColor: '#FF9FFC',
                  animation: 'pulse 1.5s ease-in-out infinite 0.5s',
                  boxShadow: '0 0 15px rgba(255, 159, 252, 0.6)',
                }}
              />
              <div 
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ 
                  backgroundColor: '#5227FF',
                  animation: 'pulse 1.5s ease-in-out infinite 1s',
                  boxShadow: '0 0 15px rgba(82, 39, 255, 0.6)',
                }}
              />
            </div>

            {/* Enhanced Back Button */}
            <div className={`animate-slide-up`} style={{ animationDelay: '1.2s' }}>
              <a
                href="/"
                className="group inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-500 backdrop-blur-md border relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(82, 39, 255, 0.4), rgba(255, 159, 252, 0.4))',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 32px rgba(82, 39, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(82, 39, 255, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.2) inset';
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(82, 39, 255, 0.5), rgba(255, 159, 252, 0.5))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(82, 39, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(82, 39, 255, 0.4), rgba(255, 159, 252, 0.4))';
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                  <span>Back to Home</span>
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(82, 39, 255, 0.6), rgba(255, 159, 252, 0.6))',
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Glass Effects */}
        <div 
          className="absolute inset-0 pointer-events-none z-1"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(82, 39, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255, 159, 252, 0.15) 0%, transparent 50%)',
          }}
        />
      </div>
    </>
  );
}

