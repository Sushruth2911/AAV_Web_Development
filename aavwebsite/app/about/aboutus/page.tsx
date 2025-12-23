"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

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

const timelineEvents = [
  { year: "2014", competition: "RobotX", location: "Singapore" },
  { year: "2016", competition: "RobotX", location: "Hawaii, USA" },
  { year: "2018", competition: "RobotX", location: "Hawaii, USA" },
  { year: "2022", competition: "RobotX", location: "Sydney, Australia" },
  { year: "2022", competition: "VRX Competition", location: "Virtual" },
  { year: "2023", competition: "VRX Competition", location: "Virtual" },
  { year: "2024", competition: "RobotX", location: "Florida, USA" },
  { year: "2025", competition: "SUAS", location: "Maryland, USA" },
  { year: "2026", competition: "RobotX", location: "Singapore" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f5f7f9] text-slate-900">
        <div className="pt-28 pb-20">
          {/* HERO */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-[#f5fbff] via-[#f6fbfd] to-[#f5f7f9]" />
            <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#b6e9f5]/40 blur-3xl" />
            <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-[#b6e9f5]/40 blur-3xl" />

            <div className="relative max-w-5xl mx-auto px-4 md:px-6 text-center pb-16">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#e6f7fa] text-xs font-semibold text-[#008fb3] shadow-sm mb-6">
                🛟 Est. 2024
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                About
                <br />
                <span className="text-[#008fb3]">Our Team</span>
              </h1>

              <p className="max-w-3xl mx-auto text-sm md:text-base text-slate-600 mb-10">
                Pioneering autonomous maritime systems through innovation,
                collaboration, and dedication to excellence.
              </p>

              {/* stats row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20">
                <Stat value="32" label="Team Members" />
                <Stat value="10+" label="Years of History" />
                <Stat value="7" label="Countries" />
              </div>

              <div className="mt-10 text-xs uppercase tracking-[0.25em] text-slate-500 flex flex-col items-center gap-1">
                <span>Scroll to explore</span>
                <span className="text-lg">↓</span>
              </div>
            </div>
          </section>

          {/* ORIGIN STORY + TIMELINE */}
          <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16">
            <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] items-start">
              <div>
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#e6f7fa] text-xs font-semibold text-[#008fb3] shadow-sm mb-4">
                  🧭 Our Origin
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  NTU's History
                </h2>
                 <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start"
                >
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-[#008fb3] rounded-full mt-2" />
                    {index !== timelineEvents.length - 1 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-[#008fb3] to-[#008fb3]/30 my-2" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="pb-6">
                    <h3 className="text-xl font-bold text-[#008fb3]">{event.year}</h3>
                    <p className="text-lg font-semibold text-slate-900">{event.competition}</p>
                    <p className="text-slate-600">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
              </div>
            </div>
          </section>

          { /* MARITIME ROBOTX CHALLENGE SECTION */ }
          <section className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-[1fr,1.2fr] items-center">
              {/* Text Content */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Maritime RobotX Challenge
                </h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Launched in 2012 by the U.S. Office of Naval Research (ONR) in collaboration with Singapore’s Future Technology Systems Directorate (FSTD), RobotX is an advanced robotics competition that brings together top teams from around the Pacific Rim. The competition focuses
                  on the development of Autonomous Surface Vehicles (ASVs) and sensor technologies capable of performing complex tasks in dynamic maritime environments. Beyond the competition, RobotX serves as a platform to foster international collaboration between students,
                  academic institutions, government agencies, and industry partners. It bridges research, commercial innovation, and defence applications, ensuring that solutions developed are both cutting-edge and practically relevant. Archimedes competes in the biennial RobotX Challenge,
                  showcasing our capabilities in multi-domain robotics — operating on the surface, underwater, and in the air. In the 2024 edition, we achieved a 5th place finish and are now striving for a podium position in 2026.
                </p>
              </div>

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-md">
                <img src="/Section 4 - Maritime RobotX Challenge.jpeg" alt="RobotX Challenge" />
              </div>
            </div>
           </section>

           { /* SUAS COMPETITION SECTION */ }
          <section className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-[1fr,1.2fr] items-center">
              {/* Text Content */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  SUAS Competition
                </h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                   The Student Unmanned Aerial Systems (SUAS) Competition is an international competition organised by RoboNation, challenging university teams to design, build, and operate Unmanned Aerial Systems (UAS) capable of autonomous aerial missions. 
                   Since its inception in 2002, SUAS has tested students' ability to integrate airframes, avionics, sensors, and software to accomplish a set of mission-critical tasks. These tasks include Autonomous Flight, Obstacle Avoidance, Object Detection, Classification, and Localisation, as well as Precision Air Delivery of payloads. 
                   Following RobotX 2024, Archimedes is expanding beyond surface autonomy into aerial domains, with our participation in SUAS 2025 marking a strategic step forward. As UAVs and UAS technologies become increasingly vital in maritime, defence, and commercial operations, our team is committed to developing advanced aerial autonomy solutions that complement our maritime expertise.
                </p>
              </div>

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-md">
                <img src="/4. Section 5 - SUAS.jpg" alt="SUAS Competition" />
              </div>
            </div>
           </section>

        </div>
      </main>
    </>
  );
}

/* Small reusable pieces */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-extrabold text-[#008fb3] mb-1">
        {value}
      </div>
      <div className="text-xs uppercase tracking-wide text-slate-500">
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
}) {
  const { icon, title, description, linkLabel, href } = props;
  return (
    <Link
      href={href}
      className="block bg-white rounded-3xl border border-slate-200 shadow-sm px-6 py-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-4">{description}</p>
      <div className="text-sm font-semibold text-[#008fb3] inline-flex items-center">
        {linkLabel}
        <span className="ml-1">→</span>
      </div>
    </Link>
  );
}

function LevelRow(props: {
  label: string;
  value: string;
  colorClass: string;
}) {
  const { label, value, colorClass } = props;
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${colorClass}`} />
        <span className="text-sm text-slate-700">{label}</span>
      </div>
      <span className="text-lg font-bold text-slate-900">{value}</span>
    </div>
  );
}
