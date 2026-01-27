"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SpotlightCard from '@/components/SpotlightCard';

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
      <main className="min-h-screen bg-[#121212] text-white font-sans overflow-x-hidden">
        {/* Hero Section */}
        <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
          {/* Animated Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#121212]" />
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
          <div className={`container relative z-10 px-4 pt-32 pb-20 md:pt-40 md:pb-28 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Heading */}
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance tracking-tight animate-slide-up`} style={{ animationDelay: '0.4s' }}>
              <span className="text-white inline-block">Archimedes</span>
              <br />
              <span className="text-gradient-animated inline-block">
                UAV 1.0
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
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto animate-on-scroll`}>
              <div style={{ animationDelay: '1s' }} className="animate-on-scroll flex justify-center group">
                <SpotlightCard className="custom-spotlight-card min-h-[450px] hover:scale-[1.02] transition-transform duration-500 opacity-90 backdrop-blur-sm" spotlightColor="rgba(54, 82, 164, 0.2)">
                  <div className="p-8 md:p-10 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ backgroundColor: 'rgba(54,82,164,0.2)', backdropFilter: 'blur(10px)' }}>
                        <span className="text-3xl">⚡</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-colors group-hover:text-[#9AB0B8]">
                        Speed
                      </h3>
                      <p className="text-base leading-relaxed" style={{ color: '#9AB0B8' }}>
                        High-performance flight capabilities with optimized aerodynamics and powerful propulsion systems for rapid response and efficient mission execution
                      </p>
                    </div>
                    <div className="mt-6">
                      <div className="h-1.5 w-0 rounded-full group-hover:w-full transition-all duration-700 ease-out" style={{ background: 'linear-gradient(to right, #3652A4, #00824E)' }} />
                    </div>
                  </div>
                </SpotlightCard>
              </div>
              <div style={{ animationDelay: '1.2s' }} className="animate-on-scroll flex justify-center group">
                <SpotlightCard className="custom-spotlight-card min-h-[450px] hover:scale-[1.02] transition-transform duration-500 opacity-90 backdrop-blur-sm" spotlightColor="rgba(54, 82, 164, 0.2)">
                  <div className="p-8 md:p-10 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ backgroundColor: 'rgba(54,82,164,0.2)', backdropFilter: 'blur(10px)' }}>
                        <span className="text-3xl">👁️</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-colors group-hover:text-[#9AB0B8]">
                        Perception
                      </h3>
                      <p className="text-base leading-relaxed" style={{ color: '#9AB0B8' }}>
                        Advanced computer vision and sensor fusion for real-time environmental awareness, object detection, and spatial understanding
                      </p>
                    </div>
                    <div className="mt-6">
                      <div className="h-1.5 w-0 rounded-full group-hover:w-full transition-all duration-700 ease-out" style={{ background: 'linear-gradient(to right, #3652A4, #00824E)' }} />
                    </div>
                  </div>
                </SpotlightCard>
              </div>
              <div style={{ animationDelay: '1.4s' }} className="animate-on-scroll flex justify-center group">
                <SpotlightCard className="custom-spotlight-card min-h-[450px] hover:scale-[1.02] transition-transform duration-500 opacity-90 backdrop-blur-sm" spotlightColor="rgba(54, 82, 164, 0.2)">
                  <div className="p-8 md:p-10 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ backgroundColor: 'rgba(54,82,164,0.2)', backdropFilter: 'blur(10px)' }}>
                        <span className="text-3xl">🧠</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-colors group-hover:text-[#9AB0B8]">
                        Autonomy Intelligence
                      </h3>
                      <p className="text-base leading-relaxed" style={{ color: '#9AB0B8' }}>
                        Intelligent autonomous systems with adaptive learning, real-time decision-making, and mission planning capabilities
                      </p>
                    </div>
                    <div className="mt-6">
                      <div className="h-1.5 w-0 rounded-full group-hover:w-full transition-all duration-700 ease-out" style={{ background: 'linear-gradient(to right, #3652A4, #00824E)' }} />
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>


          </div>
        </section>

        {/* Additional Content Section */}
        <section className="relative py-32 overflow-hidden bg-[#121212]">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float" style={{ backgroundColor: 'rgba(54,82,164,0.15)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-reverse" style={{ backgroundColor: 'rgba(0,130,78,0.1)' }} />
          </div>

          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll">
              {/* Left: Main UAV Model Image */}
              <div className="relative group">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#181818] border border-[#1e1e1e] transition-all duration-300 hover:border-white/20">
                  <Image
                    src="/UAV/UAV 1.0/UAV Model.PNG"
                    alt="UAV 1.0 Model"
                    fill
                    className="object-contain p-4"
                    priority
                  />
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

        {/* Specifications Section */}
        <section className="relative py-32 overflow-hidden bg-[#121212]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float" style={{ backgroundColor: 'rgba(54,82,164,0.1)' }} />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float-reverse" style={{ backgroundColor: 'rgba(0,130,78,0.08)' }} />
          </div>

          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(54,82,164,0.15)', border: '1px solid rgba(54,82,164,0.3)' }}>
                <span className="text-sm font-semibold" style={{ color: '#9AB0B8' }}>Technical Specifications</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                <span className="text-gradient-animated">Hardware Components</span>
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: '#9AB0B8' }}>
                Professional-grade components engineered for autonomous flight and mission execution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
              <SpecCard 
                title="Frame" 
                value="Holybro X650" 
                details="460mm (L) x 460mm (B) x 397.51mm (H)"
                delay="0.1s"
              />
              <SpecCard 
                title="Flight Controller" 
                value="Holybro Pixhawk 6X" 
                details="Advanced flight control system"
                delay="0.2s"
              />
              <SpecCard 
                title="Motors" 
                value="TMotor MN4014 Navigator" 
                details="KV400 Multi-Motor UAV"
                delay="0.3s"
              />
              <SpecCard 
                title="Electronic Speed Controllers" 
                value="AIR 40A 2-6S" 
                details="Multi-Rotor UAV ESC"
                delay="0.4s"
              />
              <SpecCard 
                title="Transmitter" 
                value="RadioMaster TX16S" 
                details="Radio Controller (ELRS)"
                delay="0.5s"
              />
              <SpecCard 
                title="Receiver" 
                value="ELRS RP1" 
                details="High-performance receiver"
                delay="0.6s"
              />
              <SpecCard 
                title="Video Transmission" 
                value="RUSH Solo Tank" 
                details="5.8GHz FPV system"
                delay="0.7s"
              />
              <SpecCard 
                title="FPV Camera" 
                value="Foxeer Mini Predator 5" 
                details="Racing FPV Camera, 4ms Latency"
                delay="0.8s"
              />
              <SpecCard 
                title="Main Battery" 
                value="Tattu 22000mAh" 
                details="6S Battery"
                delay="0.9s"
              />
              <SpecCard 
                title="Payload Battery" 
                value="Elements 6200mAh" 
                details="3S Battery"
                delay="1.0s"
              />
              <SpecCard 
                title="Flotation Device" 
                value="Drone-Retriever" 
                details="Rapid Deployment Airbag with CO2 Cartridge"
                delay="1.1s"
              />
              <SpecCard 
                title="Companion Computer" 
                value="Raspberry Pi 4B" 
                details="Onboard computing platform"
                delay="1.2s"
              />
              <SpecCard 
                title="Robotic Arm" 
                value="DF Robot 5-DOF" 
                details="5-Degree of Freedom Robotic Arm"
                delay="1.3s"
              />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}


function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div 
      className="group bg-[#181818] rounded-xl p-6 border border-[#1e1e1e] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300" style={{ color: '#3652A4' }}>{number}</div>
      <div className="text-sm uppercase tracking-wide" style={{ color: '#9AB0B8' }}>{label}</div>
    </div>
  );
}


function SpecCard({ title, value, details, delay }: { title: string; value: string; details: string; delay?: string }) {
  return (
    <div 
      className="group bg-[#181818] rounded-xl p-6 border border-[#1e1e1e] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 animate-on-scroll"
      style={{ 
        animationDelay: delay,
      }}
    >
      <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#9AB0B8', opacity: 0.7 }}>{title}</div>
      <h3 className="text-lg font-bold mb-2 text-white transition-colors group-hover:text-[#3652A4]">{value}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#9AB0B8' }}>{details}</p>
    </div>
  );
}


