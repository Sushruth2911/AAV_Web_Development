"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function UAVPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: floatReverse 8s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
        .animate-on-scroll { opacity: 0; }
        .grid-animated {
          background-image: linear-gradient(rgba(54,82,164,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(54,82,164,0.15) 1px, transparent 1px);
          background-size: 4rem 4rem;
          animation: grid-move 20s linear infinite;
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 4rem 4rem; }
        }
        .glow-effect {
          box-shadow: 0 0 20px rgba(54, 82, 164, 0.4),
                      0 0 40px rgba(54, 82, 164, 0.3),
                      0 0 60px rgba(54, 82, 164, 0.2);
        }
        .text-gradient-animated {
          background: linear-gradient(90deg, #3652A4, #9AB0B8, #3652A4, #00824E);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 5s ease infinite;
        }
      `}</style>
      <Navbar />
      <main className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#0D1A2C' }}>
        {/* Hero Section */}
        <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0D1A2C' }}>
          {/* Animated Background Layers */}
          <div className="absolute inset-0 bg-linear-to-br from-[#0D1A2C] via-[#0D1A2C] to-[#1a2a3f]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(54,82,164,0.3),transparent_50%)] animate-pulse-glow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,130,78,0.2),transparent_50%)] animate-pulse-glow" style={{ animationDelay: '1s' }} />
          
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-10 grid-animated" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full blur-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  backgroundColor: i % 3 === 0 ? 'rgba(54,82,164,0.3)' : i % 3 === 1 ? 'rgba(214,226,102,0.2)' : 'rgba(0,130,78,0.2)',
                  animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Content Container */}
          <div className={`container relative z-10 px-4 py-20 md:py-28 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm animate-scale-in mb-8`} style={{ animationDelay: '0.2s', backgroundColor: 'rgba(54,82,164,0.15)', border: '1px solid rgba(54,82,164,0.3)' }}>
              <span className="text-sm font-semibold" style={{ color: '#9AB0B8' }}>The Next-Gen of Autonomous Aerial Vehicles</span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance tracking-tight animate-slide-up`} style={{ animationDelay: '0.4s' }}>
              <span className="text-white inline-block">Unmanned Aerial</span>
              <br />
              <span className="text-gradient-animated inline-block">
                Vehicle
              </span>
            </h1>

            {/* Subheading */}
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-light animate-slide-up`} style={{ animationDelay: '0.6s', color: '#9AB0B8' }}>
              Pioneering autonomous flight technology for the future of aerial robotics
            </p>

            {/* Description */}
            <p className={`text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in`} style={{ animationDelay: '0.8s', color: '#9AB0B8' }}>
              Our team is building cutting-edge unmanned aerial vehicles that push the boundaries of 
              autonomous flight, computer vision, and real-time decision-making. From precision navigation 
              to advanced perception systems, we're creating UAVs that excel in competitive environments 
              and real-world applications.
            </p>

            {/* Key Features Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto animate-on-scroll`}>
              <FeatureCard
                icon="🎯"
                title="Precision Navigation"
                description="Advanced GPS and sensor fusion for accurate positioning"
                delay="1s"
              />
              <FeatureCard
                icon="👁️"
                title="Computer Vision"
                description="Real-time object detection and tracking capabilities"
                delay="1.2s"
              />
              <FeatureCard
                icon="🤖"
                title="Autonomous Control"
                description="Intelligent decision-making and mission execution"
                delay="1.4s"
              />
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-on-scroll`} style={{ animationDelay: '1.6s' }}>
              <Link
                href="/about/team"
                className="group px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
                style={{ 
                  backgroundColor: '#00824E',
                  color: '#FFFFFF',
                  boxShadow: '0 10px 30px rgba(0, 130, 78, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 130, 78, 0.6)';
                  e.currentTarget.style.backgroundColor = '#00a060';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 130, 78, 0.4)';
                  e.currentTarget.style.backgroundColor = '#00824E';
                }}
              >
                <span className="relative z-10">Learn More</span>
              </Link>
              <Link
                href="/about/achievements"
                className="px-8 py-4 rounded-full bg-transparent font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
                style={{ 
                  border: '2px solid rgba(54,82,164,0.5)',
                  color: '#3652A4'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#3652A4';
                  e.currentTarget.style.color = '#9AB0B8';
                  e.currentTarget.style.backgroundColor = 'rgba(54,82,164,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(54,82,164,0.5)';
                  e.currentTarget.style.color = '#3652A4';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                View 3D Prototype
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-4 animate-bounce" style={{ animationDelay: '1.8s' }}>
              <p className="text-sm uppercase tracking-wider" style={{ color: '#9AB0B8' }}>Scroll to Explore</p>
              <div className="w-6 h-10 rounded-full flex items-start justify-center p-2 transition-colors" style={{ border: '2px solid rgba(54,82,164,0.5)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3652A4'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(54,82,164,0.5)'}>
                <div className="w-1 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#3652A4' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0D1A2C, #1a2a3f, #0D1A2C)' }}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float" style={{ backgroundColor: 'rgba(54,82,164,0.15)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-reverse" style={{ backgroundColor: 'rgba(0,130,78,0.1)' }} />
          </div>

          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll">
              {/* Left: Image Placeholder with Animation */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'linear-gradient(to right, rgba(54,82,164,0.2), rgba(0,130,78,0.15))' }} />
                <div className="relative aspect-video rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(54,82,164,0.2), rgba(0,130,78,0.15))', border: '1px solid rgba(54,82,164,0.3)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(54,82,164,0.5)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(54,82,164,0.3)'}>
                  <div className="text-center z-10">
                    <div className="text-6xl mb-4 animate-float">🚁</div>
                    <p className="text-sm" style={{ color: '#9AB0B8' }}>UAV Image Placeholder</p>
                  </div>
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(54,82,164,0.1), transparent)' }} />
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full mb-4 backdrop-blur-sm animate-on-scroll" style={{ backgroundColor: 'rgba(54,82,164,0.15)', border: '1px solid rgba(54,82,164,0.3)' }}>
                  <span className="text-sm font-semibold" style={{ color: '#9AB0B8' }}>What We're Building</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll text-white">
                  Next-Generation
                  <br />
                  <span className="text-gradient-animated">
                    Aerial Systems
                  </span>
                </h2>
                <p className="text-lg leading-relaxed animate-on-scroll" style={{ color: '#9AB0B8' }}>
                  Our UAV project represents the culmination of cutting-edge engineering, 
                  combining robust hardware design with sophisticated software systems. 
                  We're developing platforms capable of autonomous navigation, real-time 
                  obstacle avoidance, and complex mission execution.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 animate-on-scroll">
                  <StatBox number="A%" label="Statistics" />
                  <StatBox number="100+" label="Statistics" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="relative py-32" style={{ backgroundColor: '#0D1A2C' }}>
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(54,82,164,0.15)', border: '1px solid rgba(54,82,164,0.3)' }}>
                <span className="text-sm font-semibold" style={{ color: '#9AB0B8' }}>Technology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                <span className="text-gradient-animated">Advanced Systems</span>
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: '#9AB0B8' }}>
                Built with cutting-edge technologies and innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
              <TechCard title="Tech 1" description="Description 1" delay="0.1s" />
              <TechCard title="Tech 2" description="Description 2" delay="0.2s" />
              <TechCard title="Tech 3" description="Description 3" delay="0.3s" />
              <TechCard title="Tech 4" description="Description 4" delay="0.4s" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: string; title: string; description: string; delay?: string }) {
  return (
    <div 
      className="group backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 animate-on-scroll"
      style={{ 
        animationDelay: delay,
        backgroundColor: 'rgba(13,26,44,0.6)',
        border: '1px solid rgba(54,82,164,0.3)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(54,82,164,0.6)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(54,82,164,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(54,82,164,0.3)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white transition-colors group-hover:text-[#9AB0B8]">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#9AB0B8' }}>{description}</p>
      <div className="mt-4 h-1 w-0 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(to right, #3652A4, #00824E)' }} />
    </div>
  );
}

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div 
      className="group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
      style={{ 
        backgroundColor: 'rgba(13,26,44,0.6)',
        border: '1px solid rgba(54,82,164,0.3)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(54,82,164,0.6)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(54,82,164,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(54,82,164,0.3)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300" style={{ color: '#3652A4' }}>{number}</div>
      <div className="text-sm uppercase tracking-wide" style={{ color: '#9AB0B8' }}>{label}</div>
    </div>
  );
}

function TechCard({ title, description, delay }: { title: string; description: string; delay?: string }) {
  return (
    <div 
      className="group backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 animate-on-scroll"
      style={{ 
        animationDelay: delay,
        background: 'linear-gradient(to bottom right, rgba(13,26,44,0.6), rgba(13,26,44,0.4))',
        border: '1px solid rgba(54,82,164,0.3)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(54,82,164,0.6)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(54,82,164,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(54,82,164,0.3)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <h3 className="text-lg font-semibold mb-2 text-white transition-colors group-hover:text-[#9AB0B8]">{title}</h3>
      <p className="text-sm" style={{ color: '#9AB0B8' }}>{description}</p>
      <div className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(to right, #3652A4, #00824E)' }} />
    </div>
  );
}

