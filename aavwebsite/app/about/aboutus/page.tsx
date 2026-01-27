"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

type Competition = {
  year: number;
  competition: string;
  city: string;
  location: [number, number] | null;
  isVirtual: boolean;
  flag: string;
};

const competitions: Competition[] = [
  { year: 2014, competition: "RobotX", city: "Singapore", location: [1.3521, 103.8198], isVirtual: false, flag: "🇸🇬" },
  { year: 2016, competition: "RobotX", city: "Hawaii, USA", location: [21.3099, -157.8581], isVirtual: false, flag: "🇺🇸" },
  { year: 2018, competition: "RobotX", city: "Hawaii, USA", location: [21.3099, -157.8581], isVirtual: false, flag: "🇺🇸" },
  { year: 2022, competition: "RobotX", city: "Sydney, Australia", location: [-33.8688, 151.2093], isVirtual: false, flag: "🇦🇺" },
  { year: 2022, competition: "VRX Competition", city: "Virtual", location: null, isVirtual: true, flag: "🌐" },
  { year: 2023, competition: "VRX Competition", city: "Virtual", location: null, isVirtual: true, flag: "🌐" },
  { year: 2024, competition: "RobotX", city: "Florida, USA", location: [27.7663, -82.6404], isVirtual: false, flag: "🇺🇸" },
  { year: 2025, competition: "SUAS", city: "Maryland, USA", location: [39.0458, -76.6413], isVirtual: false, flag: "🇺🇸" },
  { year: 2026, competition: "RobotX", city: "Singapore", location: [1.3521, 103.8198], isVirtual: false, flag: "🇸🇬" },
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#121212] text-white font-sans">
        <div className="pt-24 pb-20">
          {/* Page Title */}
          <section className="relative px-4 md:px-6 lg:px-8 mb-16 md:mb-24">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight text-center">
                Our Team
              </h1>
            </div>
          </section>

          {/* Section 1: Stats and Description */}
          <section className="relative px-4 md:px-6 lg:px-8 mb-20 md:mb-32">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Left Side - Stats and Text */}
                <div>
                  {/* Stats */}
                  <div ref={statsRef} className="grid grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    <AnimatedStat target={45} label="Members" suffix="" />
                    <AnimatedStat target={10} label="Years of History" suffix="+" />
                    <AnimatedStat target={7} label="Countries" suffix="" />
            </div>

                  {/* Caption Text */}
                  <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
                    <p className="text-justify">
                      Archimedes is a team of innovators dedicated to shaping the future of autonomous systems. We design and build intelligent maritime vehicles that can operate both on water and in the air, executing complex missions with full autonomy.
                    </p>
                    <p className="text-justify">
                      Our focus is on developing robust and reliable autonomous systems capable of adapting to dynamic and challenging environments. Leveraging advanced sensor suites and high-performance actuators, we strive to achieve seamless navigation, perception, and decision-making without human intervention.
                    </p>
                    <p className="text-justify">
                      Given the multidisciplinary nature of autonomous systems, our team brings together talents from diverse fields — including Mechanical Engineering, Electrical Engineering, Computer Engineering, Computer Science, Aerospace Engineering, Mathematical Sciences, Communication Studies, Design Art, Economics, and Media Art. This fusion of expertise enables us to tackle complex technical challenges while delivering innovative and elegant solutions.
                    </p>
                  </div>
              </div>

                {/* Right Side - Image */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                  <Image
                    src="/About Us/about_us_s1.png"
                    alt="Archimedes Autonomous Vehicles Team"
                    fill
                    className="object-cover"
                    priority
                  />
                  </div>
              </div>
            </div>
          </section>

          {/* Section 2: History with Image */}
          <section className="relative px-4 md:px-6 lg:px-8 mb-20 md:mb-32">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Left Side - Image */}
                <div className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-lg overflow-hidden order-2 lg:order-1">
                  <Image
                    src="/About Us/about_us_s2.png"
                    alt="Archimedes History"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center center' }}
                    priority
              />
            </div>

                {/* Right Side - Text */}
                <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-300 leading-relaxed order-1 lg:order-2">
                  <p className="text-justify">
                    Archimedes was established in 2012 following an invitation from Singapore's Ministry of Defence (MINDEF), specifically the Future Technology Systems Directorate (FSTD), to participate in the inaugural Maritime RobotX Challenge — an international competition focused on advancing autonomous maritime systems.
                  </p>
                  <p className="text-justify">
                    Over the years, our team has evolved through several iterations. We were initially known as Leviathan (2014) and later as Osmind (2018). From 2016 to 2022, we competed under the name Singaboat. In 2024, we adopted our current name, Archimedes Autonomous Vehicles, paying tribute to the Greek mathematician who discovered the principle of buoyancy — a name that more accurately reflects our focus on autonomous maritime technologies.
                  </p>
                  <p className="text-justify">
                    Since then, Archimedes has undergone a significant transformation, evolving from a project-based initiative into a full-fledged student club open to all students in Nanyang Technological University. This shift has allowed us to broaden our talent pool, foster cross-disciplinary collaboration, and build a stronger foundation for future innovation.
                  </p>
                  <p className="text-justify">
                    From a small group of dedicated pioneers, we have grown from 14 members in 2024 to 45 members in 2025, reflecting our expanding capabilities and ambition.
                </p>
              </div>
              </div>
            </div>
          </section>

          {/* Section 3: The History */}
          <section className="relative px-4 md:px-6 lg:px-8 mb-20 md:mb-32">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16 text-center uppercase tracking-tight">
                The History
              </h2>
              
              <div className="space-y-6">
                {/* Competition List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {competitions.map((comp) => (
                    <div
                      key={`${comp.year}-${comp.competition}`}
                      className="bg-[#181818] border border-[#1e1e1e] rounded-lg p-5 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{comp.flag}</span>
                        <div>
                          <div className="text-sm text-gray-400 uppercase tracking-wide">
                            {comp.year}
                          </div>
                          <div className="text-lg md:text-xl font-bold text-white">
                            {comp.competition}
                          </div>
                        </div>
                      </div>
                      <div className="text-base text-gray-300">
                        {comp.city}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 & 5: Competitions Side by Side */}
          <section className="relative px-4 md:px-6 lg:px-8 mb-20 md:mb-32">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                {/* Section 4: RobotX */}
                <div className="flex flex-col">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight min-h-[120px] md:min-h-[140px] lg:min-h-[160px] text-center">
                    Maritime RobotX Challenge
              </h2>
                  
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/About Us/about_us_robotx.png"
                      alt="RobotX Competition"
                      fill
                      className="object-cover"
                      priority
                    />
            </div>

                  <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
                    <p className="text-justify">
                      Launched in 2012 by the U.S. Office of Naval Research (ONR) in collaboration with Singapore's Future Technology Systems Directorate (FSTD), RobotX is an advanced robotics competition that brings together top teams from around the Pacific Rim. The competition focuses on the development of Autonomous Surface Vehicles (ASVs) and sensor technologies capable of performing complex tasks in dynamic maritime environments.
                    </p>
                    <p className="text-justify">
                      Beyond the competition, RobotX serves as a platform to foster international collaboration between students, academic institutions, government agencies, and industry partners. It bridges research, commercial innovation, and defence applications, ensuring that solutions developed are both cutting-edge and practically relevant.
                    </p>
                    <p className="text-justify">
                      Archimedes competes in the biennial RobotX Challenge, showcasing our capabilities in multi-domain robotics — operating on the surface, underwater, and in the air. In the 2024 edition, we achieved a 5th place finish and are now striving for a podium position in 2026.
              </p>
            </div>
              </div>

                {/* Section 5: SUAS */}
                <div className="flex flex-col">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight min-h-[120px] md:min-h-[140px] lg:min-h-[160px] text-center">
                    SUAS Competition
                  </h2>
                  
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/About Us/about_us_suas.png"
                      alt="SUAS Competition"
                      fill
                      className="object-cover"
                      priority
                    />
            </div>

                  <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
                    <p className="text-justify">
                      The Student Unmanned Aerial Systems (SUAS) Competition is an international competition organised by RoboNation, challenging university teams to design, build, and operate Unmanned Aerial Systems (UAS) capable of autonomous aerial missions.
                    </p>
                    <p className="text-justify">
                      Since its inception in 2002, SUAS has tested students' ability to integrate airframes, avionics, sensors, and software to accomplish a set of mission-critical tasks. These tasks include Autonomous Flight, Obstacle Avoidance, Object Detection, Classification, and Localisation, as well as Precision Air Delivery of payloads.
                    </p>
                    <p className="text-justify">
                      Following RobotX 2024, Archimedes is expanding beyond surface autonomy into aerial domains, with our participation in SUAS 2025 marking a strategic step forward. As UAVs and UAS technologies become increasingly vital in maritime, defence, and commercial operations, our team is committed to developing advanced aerial autonomy solutions that complement our maritime expertise.
              </p>
            </div>
                </div>
            </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function AnimatedStat({ target, label, suffix }: { target: number; label: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [hasStarted]);

  const animateCount = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
  };

  return (
    <div ref={statRef} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
        {hasStarted ? `${count}${suffix}` : `0${suffix}`}
      </div>
      <div className="text-sm md:text-base text-gray-400 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

