"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";

type Category =
  | "ALL"
  | "Control"
  | "Communication"
  | "Planning"
  | "Mechanical"
  | "Perception"
  | "UAV"
  | "Testing"
  | "Team";

interface JourneyItem {
  id: number;
  monthYear: string;
  category: Exclude<Category, "ALL">;
  title: string;
}

const journeyItems: JourneyItem[] = [
  // November 2023
  {
    id: 1,
    monthYear: "Nov 2023",
    category: "Control",
    title: "Established foundational control logic for ASV",
  },
  {
    id: 2,
    monthYear: "Nov 2023",
    category: "Communication",
    title: "Initiated ROS communication framework development",
  },
  // December 2023
  {
    id: 3,
    monthYear: "Dec 2023",
    category: "Planning",
    title:
      "Adapted 2022 VRX code to meet the requirements of the 2022 RobotX competition",
  },
  {
    id: 4,
    monthYear: "Dec 2023",
    category: "Control",
    title: "Achieved manual control of the propeller",
  },
  {
    id: 5,
    monthYear: "Dec 2023",
    category: "Mechanical",
    title: "Proposed structural design plan for the Ball Shooter mechanism",
  },
  // January 2024
  {
    id: 6,
    monthYear: "Jan 2024",
    category: "Perception",
    title:
      "Set up stereo vision system and trained it to detect buoys and obstacles",
  },
  // February 2024
  {
    id: 7,
    monthYear: "Feb 2024",
    category: "Perception",
    title: "Tested the GPS module successfully",
  },
  {
    id: 8,
    monthYear: "Feb 2024",
    category: "Planning",
    title:
      "Completed preliminary code improvements for tasks 3 and 4 with successful simulation tests",
  },
  // March 2024
  {
    id: 9,
    monthYear: "Mar 2024",
    category: "Control",
    title: "Developed and implemented control code for the propeller motor",
  },
  {
    id: 10,
    monthYear: "Mar 2024",
    category: "Mechanical",
    title: "Completed initial assembly of the Ball Shooter and began testing",
  },
  // May 2024
  {
    id: 11,
    monthYear: "May 2024",
    category: "Communication",
    title: "Finalised ROS-based inter-module communication framework",
  },
  {
    id: 12,
    monthYear: "May 2024",
    category: "Team",
    title:
      'Tz Yuan and Tz Lung joined as Deputy Team Leads; team officially renamed "Archimedes"',
  },
  {
    id: 13,
    monthYear: "May 2024",
    category: "UAV",
    title: "Initiated development of the new UAV",
  },
  // June 2024
  {
    id: 14,
    monthYear: "Jun 2024",
    category: "Team",
    title: "Darren, Yu Wei, and Rui Yue joined the team",
  },
  {
    id: 15,
    monthYear: "Jun 2024",
    category: "UAV",
    title:
      "Began perception work for identifying landing markers and tin cans",
  },
  {
    id: 16,
    monthYear: "Jun 2024",
    category: "Team",
    title: "Conducted first water test site reconnaissance at Nanyang Lake",
  },
  // July 2024
  {
    id: 17,
    monthYear: "Jul 2024",
    category: "Team",
    title: "Performed first un-crating to inspect equipment conditions",
  },
  // August 2024
  {
    id: 18,
    monthYear: "Aug 2024",
    category: "Team",
    title: "Appointed Darren as the new Team Lead",
  },
  {
    id: 19,
    monthYear: "Aug 2024",
    category: "UAV",
    title: "Completed the first UAV flight test",
  },
  {
    id: 20,
    monthYear: "Aug 2024",
    category: "Team",
    title:
      "Conducted second water test site reconnaissance at Republic of Singapore Yacht Club (RSYC)",
  },
  // September 2024
  {
    id: 21,
    monthYear: "Sep 2024",
    category: "Control",
    title:
      "Conducted first water test at RSYC, successfully controlling propellers in water",
  },
  {
    id: 22,
    monthYear: "Sep 2024",
    category: "Communication",
    title:
      "Completed development of new GUI providing comprehensive view of AMS statuses",
  },
  {
    id: 23,
    monthYear: "Sep 2024",
    category: "Mechanical",
    title: "Designed reloading mechanism for the Ball Shooter",
  },
  {
    id: 24,
    monthYear: "Sep 2024",
    category: "UAV",
    title: "Began work on the first-ever UAV landing dock",
  },
  // October 2024
  {
    id: 25,
    monthYear: "Oct 2024",
    category: "UAV",
    title:
      "Successfully completed 30-minute endurance test flight of the new UAV",
  },
  {
    id: 26,
    monthYear: "Oct 2024",
    category: "Team",
    title: "Conducted second water test at RSYC",
  },
];

const categories: Category[] = [
  "ALL",
  "Control",
  "Communication",
  "Planning",
  "Mechanical",
  "Perception",
  "UAV",
  "Testing",
  "Team",
];

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [boatProgress, setBoatProgress] = useState(0); // 0–1
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [currentRobotXPhoto, setCurrentRobotXPhoto] = useState(0);
  const [currentVRXPhoto, setCurrentVRXPhoto] = useState(0);
  
  // RobotX 2024 photos
  const robotx2024Photos = [
    "/Achievements/RobotX2024/Cert_RBX2024.png",
    "/Achievements/RobotX2024/CompetingTeams_RBX2024.png",
    "/Achievements/RobotX2024/Brothers_RBX2024.png",
    "/Achievements/RobotX2024/Fireworks_RBX2024.png",
    "/Achievements/RobotX2024/Winning_RBX2024.png",
  ];

  // VRX 2022 photos
  const vrx2022Photos = [
    "/Achievements/VRX2022/ASV_Dock_VRX22.png",
    "/Achievements/VRX2022/ASV_DockDeliver_VRX22.png",
    "/Achievements/VRX2022/ASV_Obstacle_VRX22.png",
    "/Achievements/VRX2022/ASV_Orientation_VRX22.png",
    "/Achievements/VRX2022/ASVLocAndChar_VRX22.png",
    "/Achievements/VRX2022/ASVWayfinding_VRX22.png",
    "/Achievements/VRX2022/ASVWildlife_VRX22.png",
    "/Achievements/VRX2022/Cert_VRX22.png",
    "/Achievements/VRX2022/OSContCert_VRX22.png",
    "/Achievements/VRX2022/RankImpCert_VRX22.png",
    "/Achievements/VRX2022/VideoCert_VRX22.png",
    "/Achievements/VRX2022/WaiverCert_VRX22.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRobotXPhoto((prev) => (prev + 1) % robotx2024Photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [robotx2024Photos.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVRXPhoto((prev) => (prev + 1) % vrx2022Photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [vrx2022Photos.length]);

  const filteredJourney =
    activeCategory === "ALL"
      ? journeyItems
      : journeyItems.filter((item) => item.category === activeCategory);

  // Scroll listener for moving boat
  useEffect(() => {
    function handleScroll() {
      const el = timelineRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // position of viewport center relative to the timeline
      const centerY = viewportHeight / 2;
      const distance = centerY - rect.top;
      const rawProgress = distance / rect.height;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);

      setBoatProgress(clamped);
    }

    handleScroll(); // initial
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#121212] text-white font-sans">
        <div className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center text-sm mb-8 md:mb-12 text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>

            {/* Section 1: Maritime RobotX Challenge 2024 */}
            <section className="mb-20 md:mb-32">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-center uppercase tracking-tight">
                Achievements
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 mb-12 md:mb-16 text-center uppercase tracking-tight">
                Maritime RobotX 2024
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
                {/* Left Side - Caption */}
                <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
                  <p className="text-xl md:text-2xl font-semibold text-white mb-4">
                    Archimedes achieved 5th place in the Autonomy Challenge and was awarded USD $4,000.
                  </p>
                  <p>
                    Going into RobotX 2024, we faced significant challenges. With no prior experience in RobotX and no senior members to guide us — unlike many other teams — we had to figure everything out from scratch. On top of that, having international dissertation students on the team introduced coordination issues, as time zone differences and limited opportunities for in-person testing slowed down collaboration.
                  </p>
                  <p>
                    Logistically, navigating legal documentation and the strict cargo requirements for international shipment was daunting. But Tz Yuan, our Deputy Team Lead (current Team Lead), stepped up and successfully managed the entire shipment process, ensuring our equipment reached the U.S. and returned safely — no small feat for a first-time team.
                  </p>
                  <p>
                    Despite limited resources and numerous setbacks, we pressed on. Many of our systems weren't functioning as expected in the early stages. We didn't think we would make it to the semi-finals of the Autonomy Challenge, let alone the finals. But through continuous iteration and adjustment, we made steady progress.
                  </p>
                  <p>
                    Ultimately, these efforts culminated in our strongest performance in a decade — a result that reflects the boldness and perseverance of the entire team.
                  </p>
                </div>

                {/* Right Side - Photo Carousel */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0a0a0a]">
                  <div className="relative w-full h-full">
                    {robotx2024Photos.map((photo, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          index === currentRobotXPhoto ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={photo}
                          alt={`RobotX 2024 Photo ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentRobotXPhoto((prev) => (prev - 1 + robotx2024Photos.length) % robotx2024Photos.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                    aria-label="Previous photo"
                  >
                    <span className="text-white text-xl">←</span>
                  </button>
                  <button
                    onClick={() => setCurrentRobotXPhoto((prev) => (prev + 1) % robotx2024Photos.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                    aria-label="Next photo"
                  >
                    <span className="text-white text-xl">→</span>
                  </button>

                  {/* Photo Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {robotx2024Photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentRobotXPhoto(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentRobotXPhoto
                            ? 'bg-white w-8'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to photo ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Section */}
              <div className="mt-20 md:mt-32">
                <div className="text-center mb-10">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold mb-4 shadow-sm backdrop-blur-md text-gray-400">
                    📍 Our Journey
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">
                    Our Journey So Far
                  </h2>
                  <p className="text-sm md:text-base text-gray-400">
                    Nov 2023 – Oct 2024
                  </p>
                </div>

                {/* Filter chips */}
                <div className="flex flex-wrap gap-3 justify-center mb-10">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-1.5 text-xs md:text-sm rounded-full border transition-all duration-200 transform ${
                          isActive
                            ? "shadow-md scale-105"
                            : "bg-[#181818] border-[#1e1e1e] hover:border-white/20 hover:shadow-sm hover:scale-105"
                        }`}
                        style={isActive ? {
                          backgroundColor: '#3652A4',
                          color: '#FFFFFF',
                          borderColor: '#3652A4'
                        } : {
                          color: '#9AB0B8'
                        }}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>

                {/* Timeline with moving boat */}
                <div ref={timelineRef} className="relative mt-6">
                  {/* Center vertical line + moving boat */}
                  <div className="hidden md:block absolute left-1/2 top-0 h-full w-0 -translate-x-1/2 pointer-events-none">
                    {/* Line */}
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2" style={{ backgroundColor: '#1e1e1e' }} />
                    {/* Boat that travels */}
                    <div
                      className="absolute left-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 border-2"
                      style={{ 
                        top: `${boatProgress * 100}%`,
                        backgroundColor: '#181818',
                        borderColor: '#3652A4'
                      }}
                    >
                      <span className="text-2xl">🚤</span>
                    </div>
                  </div>

                  {/* Timeline cards */}
                  <div className="space-y-8">
                    {filteredJourney.map((item, index) => {
                      const isLeft = index % 2 === 0;

                      return (
                        <div
                          key={item.id}
                          className="flex flex-col md:flex-row md:items-center"
                        >
                          {/* Left column */}
                          <div
                            className={`hidden md:flex w-1/2 ${
                              isLeft ? "justify-end pr-8" : "justify-end pr-8 order-1"
                            }`}
                          >
                            {isLeft && (
                              <TimelineCard
                                monthYear={item.monthYear}
                                category={item.category}
                                title={item.title}
                              />
                            )}
                          </div>

                          {/* Center dot */}
                          <div className="hidden md:flex w-0 md:w-auto md:flex-col md:items-center">
                            <div className="relative w-3 h-3 rounded-full shadow-md border-2" style={{ backgroundColor: '#3652A4', borderColor: '#181818' }} />
                          </div>

                          {/* Right column */}
                          <div
                            className={`hidden md:flex w-1/2 ${
                              isLeft ? "justify-start pl-8" : "justify-start pl-8 order-2"
                            }`}
                          >
                            {!isLeft && (
                              <TimelineCard
                                monthYear={item.monthYear}
                                category={item.category}
                                title={item.title}
                              />
                            )}
                          </div>

                          {/* Mobile: full width card */}
                          <div className="md:hidden w-full">
                            <TimelineCard
                              monthYear={item.monthYear}
                              category={item.category}
                              title={item.title}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Virtual RobotX (VRX) Competition 2022 */}
            <section className="mb-20 md:mb-32">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 mb-12 md:mb-16 text-center uppercase tracking-tight">
                Virtual RobotX (VRX) Competition 2022
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
                {/* Left Side - Caption */}
                <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
                  <p>
                    VRX is the simulation-based counterpart to the Maritime RobotX Challenge, designed to introduce students to autonomous maritime systems through a Gazebo-based virtual environment. Organised by RoboNation in collaboration with the U.S. Office of Naval Research (ONR), Naval Postgraduate School (NPS), and Open Robotics (OR), VRX provides an open-source platform for teams to design, test, and refine autonomous surface vehicle solutions — entirely in simulation.
                  </p>
                  <p>
                    Archimedes competed in the 2022 edition of VRX and achieved a 3rd place finish, missing second place by just 1 point. Alongside the USD $1,000 prize, the team was recognised with multiple special awards:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remarkable Video Submission Award</li>
                    <li>Biggest Leap in Ranking (Phase 2 to Phase 3)</li>
                    <li>Phenomenal Open-Source Contributor</li>
                    <li>Fee Waiver for the 2023 RoboBoat Competition</li>
                  </ul>
                </div>

                {/* Right Side - Photo Carousel */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0a0a0a]">
                  <div className="relative w-full h-full">
                    {vrx2022Photos.map((photo, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          index === currentVRXPhoto ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={photo}
                          alt={`VRX 2022 Photo ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentVRXPhoto((prev) => (prev - 1 + vrx2022Photos.length) % vrx2022Photos.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                    aria-label="Previous photo"
                  >
                    <span className="text-white text-xl">←</span>
                  </button>
                  <button
                    onClick={() => setCurrentVRXPhoto((prev) => (prev + 1) % vrx2022Photos.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                    aria-label="Next photo"
                  >
                    <span className="text-white text-xl">→</span>
                  </button>

                  {/* Photo Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {vrx2022Photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVRXPhoto(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentVRXPhoto
                            ? 'bg-white w-8'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to photo ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

/* Reusable timeline card */
function TimelineCard(props: {
  monthYear: string;
  category: Exclude<Category, "ALL">;
  title: string;
}) {
  const { monthYear, category, title } = props;

  return (
    <div className="bg-[#181818] border border-[#1e1e1e] rounded-3xl shadow-sm px-6 py-5 max-w-md hover:shadow-lg hover:-translate-y-1 hover:border-white/20 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md" style={{ color: '#9AB0B8' }}>
          {category}
        </span>
        <span className="text-xs font-semibold" style={{ color: '#3652A4' }}>
          {monthYear}
        </span>
      </div>
      <p className="text-sm md:text-base text-white leading-snug">{title}</p>
    </div>
  );
}
