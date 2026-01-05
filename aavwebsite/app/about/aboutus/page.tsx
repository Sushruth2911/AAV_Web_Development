"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";

const originMilestones = [
  { year: "2014", location: "Singapore" },
  { year: "2016", location: "Hawaii, USA" },
  { year: "2018", location: "Hawaii, USA" },
  { year: "2020", location: "COVID-19" },
  { year: "2022", location: "Sydney, Australia" },
  { year: "2024", location: "Florida, USA" },
];

const newsItems = [
  {
    tag: "Planning",
    title: "Successfully Tested New Navigation System in Open Waters",
    date: "March 15, 2025",
    summary:
      "Completed full-scale field tests of the enhanced autonomous navigation system with robust performance under real sea conditions.",
  },
  {
    tag: "Perception",
    title: "Perception Module Achieves 95% Object Detection Accuracy",
    date: "March 10, 2025",
    summary:
      "Latest improvements to our computer vision pipeline deliver highly reliable detection of buoys and obstacles in challenging environments.",
  },
  {
    tag: "Communication",
    title: "New Communication Protocol Reduces Latency by 40%",
    date: "March 5, 2025",
    summary:
      "A custom ROS-based protocol now provides faster, more resilient communication between onboard modules and the base station.",
  },
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

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
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        .animate-fade-in { 
          animation: fade-in 0.8s ease-out forwards; 
        }
        .animate-slide-up { 
          animation: slide-up 0.8s ease-out forwards; 
        }
        .animate-scale-in { 
          animation: scale-in 0.6s ease-out forwards; 
        }
        .animate-slide-in-left { 
          animation: slide-in-left 0.8s ease-out forwards; 
        }
        .animate-slide-in-right { 
          animation: slide-in-right 0.8s ease-out forwards; 
        }
        .animate-on-scroll { 
          opacity: 0; 
        }
      `}</style>
      <Navbar />

      <main className="min-h-screen bg-[#121212] text-white font-sans">
        <div className="pt-28 pb-20">
          {/* HERO */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#121212]" />
            <div className="absolute -left-40 top-10 h-80 w-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(54,82,164,0.1)' }} />
            <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(0,130,78,0.08)' }} />

            <div className={`relative max-w-5xl mx-auto px-4 md:px-6 text-center pb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className={`inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold shadow-sm mb-6 backdrop-blur-md animate-scale-in`} style={{ color: '#9AB0B8', animationDelay: '0.2s' }}>
                🛟 Est. 2012
              </span>

              <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white animate-slide-up`} style={{ animationDelay: '0.4s' }}>
                About
                <br />
                <span style={{ color: '#3652A4' }}>Our Team</span>
              </h1>

              <p className={`max-w-3xl mx-auto text-sm md:text-base text-gray-400 mb-10 animate-slide-up`} style={{ animationDelay: '0.6s' }}>
                Pioneering autonomous maritime systems through innovation,
                collaboration, and dedication to excellence.
              </p>

              {/* stats row */}
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20 animate-fade-in`} style={{ animationDelay: '0.8s' }}>
                <Stat value="32" label="Team Members" color="#3652A4" delay="1s" />
                <Stat value="10+" label="Years of History" color="#3652A4" delay="1.1s" />
                <Stat value="7" label="Countries" color="#3652A4" delay="1.2s" />
              </div>

              <div className="mt-10 text-xs uppercase tracking-[0.25em] text-gray-500 flex flex-col items-center gap-1">
                <span>Scroll to explore</span>
                <span className="text-lg">↓</span>
              </div>
            </div>
          </section>

          {/* QUICK NAV CARDS */}
          <section className="max-w-6xl mx-auto px-4 md:px-6 mt-6 mb-16">
            <div className="grid gap-6 md:grid-cols-3">
              <QuickCard
                icon="👥"
                title="Our Team"
                description="Meet the diverse group of passionate students driving innovation in maritime robotics."
                linkLabel="Explore"
                href="/about/team"
                accentColor="#3652A4"
                delay="0.1s"
              />
              <QuickCard
                icon="🏆"
                title="Achievements"
                description="Discover our competition wins, technical milestones, and journey of excellence."
                linkLabel="View Achievements"
                href="/about/achievements"
                accentColor="#3652A4"
                delay="0.2s"
              />
              <QuickCard
                icon="🌐"
                title="Outreach"
                description="Explore our visits, demonstrations, and community engagement initiatives."
                linkLabel="See Outreach"
                href="/outreach"
                accentColor="#3652A4"
                delay="0.3s"
              />
            </div>
          </section>

          {/* ORIGIN STORY */}
          <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16">
            <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] items-start">
              <div className="animate-on-scroll animate-slide-in-left">
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold shadow-sm mb-4 backdrop-blur-md" style={{ color: '#9AB0B8' }}>
                  🧭 Our Origin
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
                  How It All Started
                </h2>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                  In 2012, Professor Xie Ming was invited by RoboNation to
                  establish NTU&apos;s first team for the RobotX Challenge. The
                  team was formed specifically for this competition, and made
                  their debut in 2014 when Singapore hosted the inaugural
                  RobotX event.
                </p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Since then, our team has competed internationally, representing
                  NTU across multiple continents and continuously pushing the
                  boundaries of autonomous maritime technology.
                </p>
              </div>

              {/* year cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {originMilestones.map((item, index) => (
                  <div
                    key={item.year}
                    className="bg-[#181818] rounded-3xl border border-[#1e1e1e] shadow-sm px-6 py-5 hover:shadow-md hover:-translate-y-0.5 hover:border-white/20 transition-all animate-on-scroll animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-xl font-extrabold mb-1" style={{ color: '#3652A4' }}>
                      {item.year}
                    </div>
                    <div className="text-sm text-gray-400">{item.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DIVERSE TEAM */}
          <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16">
            <div className="text-center mb-8 animate-on-scroll animate-fade-in">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold shadow-sm mb-4 backdrop-blur-md" style={{ color: '#9AB0B8' }}>
                👥 Team Composition
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
                Our Diverse Team
              </h2>
            </div>

            <div className="bg-[#181818] border border-[#1e1e1e] rounded-3xl px-6 md:px-10 py-8 md:py-10 text-center mb-8 animate-on-scroll animate-slide-up">
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Our diverse and passionate team is made up of both undergraduate
                and postgraduate students from various academic backgrounds,
                including mechanical, electrical, and computer engineering. With
                members from countries such as Singapore, China, Taiwan, India,
                Vietnam, Malaysia, and America, we are a melting pot of
                cultures, united by our shared dedication to robotics,
                automation, and autonomous systems.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Academic level */}
              <div className="bg-[#181818] rounded-3xl border border-[#1e1e1e] shadow-sm px-6 py-6 md:py-7 animate-on-scroll animate-slide-in-left">
                <h3 className="text-xl font-semibold mb-6 text-white">Academic Level</h3>
                <AcademicLevelChart />
              </div>

              {/* Engineering discipline */}
              <div className="bg-[#181818] rounded-3xl border border-[#1e1e1e] shadow-sm px-6 py-6 md:py-7 animate-on-scroll animate-slide-in-right">
                <h3 className="text-xl font-semibold mb-6 text-white">
                  Engineering Discipline
                </h3>
                <EngineeringDisciplineChart />
              </div>
            </div>
          </section>

          {/* NEWS & PROGRESS */}
          <section className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 animate-on-scroll animate-fade-in">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold shadow-sm mb-4 backdrop-blur-md" style={{ color: '#9AB0B8' }}>
                📢 Latest Updates
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">
                News &amp; Progress
              </h2>
              <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400">
                Stay updated with our latest technical achievements and team
                milestones.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {newsItems.map((item, index) => (
                <article
                  key={item.title}
                  className="bg-[#181818] rounded-3xl border border-[#1e1e1e] shadow-sm px-6 py-6 hover:shadow-md hover:-translate-y-0.5 hover:border-white/20 transition-all flex flex-col animate-on-scroll animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <span className="inline-flex w-fit px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold mb-3 backdrop-blur-md" style={{ color: '#9AB0B8' }}>
                    {item.tag}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <div className="text-xs text-gray-500 mb-3">{item.date}</div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>

            <div className="text-center animate-on-scroll animate-fade-in">
              <Link
                href="/news"
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ 
                  backgroundColor: '#3652A4',
                  color: '#FFFFFF',
                  borderColor: '#3652A4'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4a66c4';
                  e.currentTarget.style.borderColor = '#4a66c4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#3652A4';
                  e.currentTarget.style.borderColor = '#3652A4';
                }}
              >
                View All News
                <span className="ml-2">→</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

/* Small reusable pieces */

function Stat({ value, label, color = '#3652A4', delay = '0s' }: { value: string; label: string; color?: string; delay?: string }) {
  return (
    <div className="animate-on-scroll animate-scale-in" style={{ animationDelay: delay }}>
      <div className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color }}>
        {value}
      </div>
      <div className="text-xs uppercase tracking-wide" style={{ color: '#9AB0B8' }}>
        {label}
      </div>
    </div>
  );
}

function QuickCard(props: {
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  accentColor?: string;
  delay?: string;
}) {
  const { icon, title, description, linkLabel, href, accentColor = '#3652A4', delay = '0s' } = props;
  return (
    <Link
      href={href}
      className="group block bg-[#181818] rounded-3xl border border-[#1e1e1e] shadow-sm px-6 py-6 hover:shadow-md hover:-translate-y-0.5 hover:border-white/20 transition-all animate-on-scroll animate-scale-in"
      style={{ animationDelay: delay }}
    >
      <div className="text-2xl mb-3 transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="text-sm font-semibold inline-flex items-center transition-transform duration-300 group-hover:translate-x-1" style={{ color: accentColor }}>
        {linkLabel}
        <span className="ml-1">→</span>
      </div>
    </Link>
  );
}

function AcademicLevelChart() {
  const total = 32;
  const undergraduates = 18;
  const postgraduates = 14;
  const undergradPercent = (undergraduates / total) * 100;
  const postgradPercent = (postgraduates / total) * 100;
  
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const undergradLength = (undergradPercent / 100) * circumference;
  const postgradLength = (postgradPercent / 100) * circumference;

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 mb-6">
        <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 140 140">
          {/* Background circle */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="12"
          />
          {/* Undergraduates segment - first half */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="#3652A4"
            strokeWidth="12"
            strokeDasharray={animated ? `${undergradLength} ${circumference}` : `0 ${circumference}`}
            strokeDashoffset={0}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dasharray 1.5s ease-out',
            }}
          />
          {/* Postgraduates segment - continues from where undergrad ends */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="#00824E"
            strokeWidth="12"
            strokeDasharray={animated ? `${postgradLength} ${circumference}` : `0 ${circumference}`}
            strokeDashoffset={animated ? -undergradLength : 0}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dasharray 1.5s ease-out 0.4s, stroke-dashoffset 1.5s ease-out 0.4s',
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">{total}</div>
            <div className="text-xs text-gray-400">Total</div>
          </div>
        </div>
      </div>
      <div className="space-y-4 w-full">
        <ChartLegend
          label="Undergraduates"
          value={undergraduates}
          percent={undergradPercent}
          color="#3652A4"
        />
        <ChartLegend
          label="Postgraduates"
          value={postgraduates}
          percent={postgradPercent}
          color="#00824E"
        />
      </div>
    </div>
  );
}

function EngineeringDisciplineChart() {
  const data = [
    { label: "Mechanical Engineering", value: 19, color: "#3652A4" },
    { label: "Smart Manufacturing", value: 7, color: "#00824E" },
    { label: "Electrical Engineering", value: 4, color: "#9AB0B8" },
    { label: "Computer Engineering", value: 2, color: "#D6E266" },
  ];
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="space-y-5">
      {data.map((item, index) => (
        <BarChartItem
          key={item.label}
          label={item.label}
          value={item.value}
          maxValue={maxValue}
          color={item.color}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}

function BarChartItem({ 
  label, 
  value, 
  maxValue, 
  color, 
  delay = '0s' 
}: { 
  label: string; 
  value: number; 
  maxValue: number; 
  color: string; 
  delay?: string;
}) {
  const percentage = (value / maxValue) * 100;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), parseFloat(delay) * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span style={{ color: '#9AB0B8' }} className="font-medium">{label}</span>
        <span className="font-bold text-white">{value}</span>
      </div>
      <div className="relative h-3 bg-[#0a0a0a] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : '0%',
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

function ChartLegend({ 
  label, 
  value, 
  percent, 
  color 
}: { 
  label: string; 
  value: number; 
  percent: number; 
  color: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0a] border border-[#1e1e1e]">
      <div className="flex items-center gap-3">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-medium" style={{ color: '#9AB0B8' }}>
          {label}
        </span>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold text-white">{value}</div>
        <div className="text-xs" style={{ color: '#9AB0B8' }}>
          {percent.toFixed(1)}%
        </div>
      </div>
    </div>
  );
}
