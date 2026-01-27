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

interface TimelineItem {
  id: number;
  monthYear: string;
  category: Exclude<Category, "ALL">;
  title: string;
}

// Merged timeline data - combining achievements page data with new data, removing duplicates
const timelineItems: TimelineItem[] = [
  // February 2025
  {
    id: 1,
    monthYear: "Feb 2025",
    category: "Team",
    title: "Concluded our recruitment for 2025. New members have begun their onboarding programme.",
  },
  // November 2024
  {
    id: 2,
    monthYear: "Nov 2024",
    category: "Team",
    title: "Secured 5th Place at the 2024 Maritime RobotX Challenge which was held at Nathan Benderson Park, Florida, United States from 3 – 9 November.",
  },
  // October 2024
  {
    id: 3,
    monthYear: "Oct 2024",
    category: "UAV",
    title: "Successfully completed a 30-minute test flight of the new UAV.",
  },
  {
    id: 4,
    monthYear: "Oct 2024",
    category: "Team",
    title: "Conducted the second water test at RSYC.",
  },
  // September 2024
  {
    id: 5,
    monthYear: "Sep 2024",
    category: "Control",
    title: "Conducted the first water test at RSYC, successfully controlling the propellers in the water.",
  },
  {
    id: 6,
    monthYear: "Sep 2024",
    category: "Communication",
    title: "Completed the development of a new GUI, providing a comprehensive view of AMS statuses.",
  },
  {
    id: 7,
    monthYear: "Sep 2024",
    category: "Mechanical",
    title: "Designed the reloading mechanism for the Ball Shooter.",
  },
  {
    id: 8,
    monthYear: "Sep 2024",
    category: "UAV",
    title: "Initiated work on the first-ever UAV landing dock.",
  },
  // August 2024
  {
    id: 9,
    monthYear: "Aug 2024",
    category: "Team",
    title: "Appointed Darren as the new Team Lead",
  },
  {
    id: 10,
    monthYear: "Aug 2024",
    category: "UAV",
    title: "Completed the first UAV flight test.",
  },
  {
    id: 11,
    monthYear: "Aug 2024",
    category: "Team",
    title: "Conducted the second water test site reconnaissance at the Republic of Singapore Yacht Club (RSYC).",
  },
  // July 2024
  {
    id: 12,
    monthYear: "Jul 2024",
    category: "Team",
    title: "Conducted the first un-crating to inspect equipment conditions.",
  },
  // June 2024
  {
    id: 13,
    monthYear: "Jun 2024",
    category: "Team",
    title: "Darren, Yu Wei, and Rui Yue joined the team",
  },
  {
    id: 14,
    monthYear: "Jun 2024",
    category: "UAV",
    title: "Began perception work to identify landing markers and tin cans.",
  },
  {
    id: 15,
    monthYear: "Jun 2024",
    category: "Team",
    title: "Conducted the first water test site reconnaissance at Nanyang Lake.",
  },
  // May 2024
  {
    id: 16,
    monthYear: "May 2024",
    category: "Communication",
    title: "Finalised the ROS-based inter-module communication framework.",
  },
  {
    id: 17,
    monthYear: "May 2024",
    category: "Team",
    title: 'Tz Yuan and Tz Lung joined the team as Deputy Team Leads. The team was officially renamed "Archimedes."',
  },
  {
    id: 18,
    monthYear: "May 2024",
    category: "UAV",
    title: "Initiated development of the new UAV.",
  },
  // March 2024
  {
    id: 19,
    monthYear: "Mar 2024",
    category: "Control",
    title: "Developed and implemented control code for the propeller motor.",
  },
  {
    id: 20,
    monthYear: "Mar 2024",
    category: "Mechanical",
    title: "Completed the initial assembly of the Ball Shooter and began testing.",
  },
  // February 2024
  {
    id: 21,
    monthYear: "Feb 2024",
    category: "Perception",
    title: "Tested the GPS module.",
  },
  {
    id: 22,
    monthYear: "Feb 2024",
    category: "Planning",
    title: "Completed preliminary code improvements for tasks 3 and 4, with successful tests in a simulation environment.",
  },
  // January 2024
  {
    id: 23,
    monthYear: "Jan 2024",
    category: "Perception",
    title: "Set up a stereo vision system and trained it to detect objects, including buoys and obstacles.",
  },
  // December 2023
  {
    id: 24,
    monthYear: "Dec 2023",
    category: "Planning",
    title: "Tested and improved code from the 2022 VRX competition, adapting it to meet the requirements of the 2022 RobotX competition.",
  },
  {
    id: 25,
    monthYear: "Dec 2023",
    category: "Control",
    title: "Achieved manual control of the propeller.",
  },
  {
    id: 26,
    monthYear: "Dec 2023",
    category: "Mechanical",
    title: "Proposed a structural design plan for the Ball Shooter mechanism.",
  },
  // November 2023
  {
    id: 27,
    monthYear: "Nov 2023",
    category: "Control",
    title: "Established the foundational control logic for the ASV.",
  },
  {
    id: 28,
    monthYear: "Nov 2023",
    category: "Communication",
    title: "Initiated the development of the ROS communication framework.",
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

export default function RobotX2024Page() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [boatProgress, setBoatProgress] = useState(0); // 0–1
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  // Placeholder images/videos for journey showcase
  const journeyMedia = [
    { type: 'image', src: '/placeholder-journey-1.jpg', alt: 'Team working on ASV', caption: 'Team collaboration during development' },
    { type: 'image', src: '/placeholder-journey-2.jpg', alt: 'Water testing', caption: 'First water test at RSYC' },
    { type: 'video', src: '/placeholder-journey-1.mp4', alt: 'UAV flight test', caption: 'UAV flight testing' },
    { type: 'image', src: '/placeholder-journey-3.jpg', alt: 'Team celebration', caption: 'Celebrating milestones' },
    { type: 'image', src: '/placeholder-journey-4.jpg', alt: 'Competition preparation', caption: 'Preparing for RobotX 2024' },
  ];

  const filteredTimeline =
    activeCategory === "ALL"
      ? timelineItems
      : timelineItems.filter((item) => item.category === activeCategory);

  // Sort by date (newest first)
  const sortedTimeline = [...filteredTimeline].sort((a, b) => {
    const parseDate = (dateStr: string) => {
      const [month, year] = dateStr.split(' ');
      const monthMap: Record<string, number> = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      };
      return new Date(parseInt(year), monthMap[month] || 0);
    };
    const dateA = parseDate(a.monthYear);
    const dateB = parseDate(b.monthYear);
    return dateB.getTime() - dateA.getTime();
  });

  // Scroll listener for moving logo - smoother animation
  useEffect(() => {
    let rafId: number | null = null;
    
    function handleScroll() {
      if (rafId) return; // Prevent multiple RAF calls
      
      rafId = requestAnimationFrame(() => {
        const el = timelineRef.current;
        if (!el) {
          rafId = null;
          return;
        }

        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // position of viewport center relative to the timeline
        const centerY = viewportHeight / 2;
        const distance = centerY - rect.top;
        const rawProgress = distance / rect.height;
        const clamped = Math.min(Math.max(rawProgress, 0), 1);

        setBoatProgress(clamped);
        rafId = null;
      });
    }

    handleScroll(); // initial
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Auto-advance image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % journeyMedia.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [journeyMedia.length]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#121212] text-white font-sans">
        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Page Title */}
            <div className="text-center mb-16 md:mb-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight">
                RobotX 2024
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 uppercase tracking-tight">
                Our Journey So Far
              </h2>
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
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

            {/* Interactive Timeline */}
            <div ref={timelineRef} className="relative mt-6">
              {/* Center tree trunk + moving logo */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-0 -translate-x-1/2 pointer-events-none">
                {/* Tree trunk - main vertical line */}
                <div 
                  className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transition-all duration-300"
                  style={{ 
                    backgroundColor: hoveredItem ? '#3652A4' : '#1e1e1e',
                  }}
                />
                
                {/* Tree trunk segments - alternating colors for depth */}
                <div className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 opacity-30">
                  {sortedTimeline.map((_, index) => {
                    const segmentHeight = 100 / sortedTimeline.length;
                    const isAlternate = index % 2 === 0;
                    return (
                      <div
                        key={index}
                        className="absolute left-0 w-full transition-all duration-300"
                        style={{
                          top: `${index * segmentHeight}%`,
                          height: `${segmentHeight}%`,
                          backgroundColor: isAlternate ? '#2a2a2a' : '#1e1e1e',
                          borderRadius: '2px',
                        }}
                      />
                    );
                  })}
                </div>
                
                {/* AAV Logo that travels */}
                <div
                  className="absolute left-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out border-2 overflow-hidden bg-[#181818]"
                  style={{ 
                    top: `${boatProgress * 100}%`,
                    borderColor: '#3652A4',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src="/aavlogo.jpg"
                      alt="AAV Logo"
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline cards */}
              <div className="space-y-8">
                {sortedTimeline.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  const isHovered = hoveredItem === item.id;

                  return (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row md:items-center relative"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {/* Left column */}
                      <div
                        className={`hidden md:flex w-1/2 ${
                          isLeft ? "justify-end pr-8" : "justify-end pr-8 order-1"
                        }`}
                      >
                        {isLeft && (
                          <TimelineCard
                            item={item}
                            isHovered={isHovered}
                          />
                        )}
                      </div>

                      {/* Center node - absolutely positioned to align with vertical line */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        {/* Branch line extending to card */}
                        <div
                          className={`absolute top-1/2 w-8 h-0.5 transition-all duration-300 ${
                            isLeft ? 'right-full' : 'left-full'
                          }`}
                          style={{
                            backgroundColor: isHovered ? '#3652A4' : '#3652A4',
                            opacity: isHovered ? 1 : 0.6
                          }}
                        />
                        {/* Circular node - perfectly centered on vertical line */}
                        <div
                          className="relative w-3 h-3 rounded-full shadow-md border-2 transition-all duration-300"
                          style={{
                            backgroundColor: '#3652A4',
                            borderColor: '#181818',
                            transform: isHovered ? 'scale(125%)' : 'scale(100%)',
                          }}
                        />
                      </div>

                      {/* Right column */}
                      <div
                        className={`hidden md:flex w-1/2 ${
                          isLeft ? "justify-start pl-8" : "justify-start pl-8 order-2"
                        }`}
                      >
                        {!isLeft && (
                          <TimelineCard
                            item={item}
                            isHovered={isHovered}
                          />
                        )}
                      </div>

                      {/* Mobile: full width card */}
                      <div className="md:hidden w-full">
                        <TimelineCard
                          item={item}
                          isHovered={false}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Planned vs Achieved Timeline Comparison */}
            <section className="mt-32 mb-32">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16 text-center uppercase tracking-tight">
                Planned vs Achieved
              </h2>
              
              <div className="relative">
                {/* Comparison Timeline */}
                <div className="space-y-8">
                  {/* Timeline Item 1 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-1/2">
                        <div className="bg-[#181818] border border-blue-500/30 rounded-2xl p-6 relative">
                          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                          </div>
                          <div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">Planned</div>
                          <div className="text-sm text-gray-400 mb-3">Jan - Mar 2024</div>
                          <div className="text-white font-medium mb-2">Complete ASV Design & Procurement</div>
                          <div className="text-sm text-gray-300">Finalize mechanical design, order all components, and begin assembly</div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 md:mt-8">
                        <div className="bg-[#181818] border border-green-500/30 rounded-2xl p-6 relative">
                          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">A</span>
                          </div>
                          <div className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wide">Achieved</div>
                          <div className="text-sm text-gray-400 mb-3">Nov 2023 - Mar 2024</div>
                          <div className="text-white font-medium mb-2">Foundation & Initial Development</div>
                          <div className="text-sm text-gray-300">Established control logic, ROS framework, and began mechanical design planning</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-1/2">
                        <div className="bg-[#181818] border border-blue-500/30 rounded-2xl p-6 relative">
                          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                          </div>
                          <div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">Planned</div>
                          <div className="text-sm text-gray-400 mb-3">Apr - Jun 2024</div>
                          <div className="text-white font-medium mb-2">System Integration & First Water Tests</div>
                          <div className="text-sm text-gray-300">Complete integration of all subsystems and conduct initial water testing</div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 md:mt-8">
                        <div className="bg-[#181818] border border-green-500/30 rounded-2xl p-6 relative">
                          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">A</span>
                          </div>
                          <div className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wide">Achieved</div>
                          <div className="text-sm text-gray-400 mb-3">May - Sep 2024</div>
                          <div className="text-white font-medium mb-2">Team Expansion & Water Testing</div>
                          <div className="text-sm text-gray-300">Team grew to 45 members, completed first water test at RSYC, and developed new GUI</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-1/2">
                        <div className="bg-[#181818] border border-blue-500/30 rounded-2xl p-6 relative">
                          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                          </div>
                          <div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">Planned</div>
                          <div className="text-sm text-gray-400 mb-3">Jul - Sep 2024</div>
                          <div className="text-white font-medium mb-2">Refinement & Extended Testing</div>
                          <div className="text-sm text-gray-300">Optimize systems, conduct extended testing sessions, and refine autonomous capabilities</div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 md:mt-8">
                        <div className="bg-[#181818] border border-green-500/30 rounded-2xl p-6 relative">
                          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">A</span>
                          </div>
                          <div className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wide">Achieved</div>
                          <div className="text-sm text-gray-400 mb-3">Oct 2024</div>
                          <div className="text-white font-medium mb-2">Final Preparations & Shipment</div>
                          <div className="text-sm text-gray-300">Completed 30-minute UAV endurance test, final water tests, and successfully shipped equipment to Florida</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item 4 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-1/2">
                        <div className="bg-[#181818] border border-blue-500/30 rounded-2xl p-6 relative">
                          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                          </div>
                          <div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">Planned</div>
                          <div className="text-sm text-gray-400 mb-3">Oct - Nov 2024</div>
                          <div className="text-white font-medium mb-2">Competition & Top 3 Finish</div>
                          <div className="text-sm text-gray-300">Participate in RobotX 2024 and secure a podium position</div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 md:mt-8">
                        <div className="bg-[#181818] border border-green-500/30 rounded-2xl p-6 relative">
                          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">A</span>
                          </div>
                          <div className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wide">Achieved</div>
                          <div className="text-sm text-gray-400 mb-3">Nov 2024</div>
                          <div className="text-white font-medium mb-2">5th Place Finish & $4,000 Prize</div>
                          <div className="text-sm text-gray-300">Achieved 5th place in Autonomy Challenge - our strongest performance in a decade despite starting from scratch</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Journey Images/Videos Slider */}
            <section className="mt-32 mb-32">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16 text-center uppercase tracking-tight">
                Our Journey in Pictures
              </h2>
              
              <div className="relative">
                {/* Image/Video Slider */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#0a0a0a]">
                  {journeyMedia.map((media, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {media.type === 'image' ? (
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                          <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
                            <div className="text-center">
                              <div className="text-4xl mb-4">📷</div>
                              <div className="text-gray-400 text-sm">Placeholder: {media.alt}</div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                          <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
                            <div className="text-center">
                              <div className="text-4xl mb-4">🎥</div>
                              <div className="text-gray-400 text-sm">Placeholder: {media.alt}</div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white text-lg font-semibold">{media.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + journeyMedia.length) % journeyMedia.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                  aria-label="Previous image"
                >
                  <span className="text-white text-xl">←</span>
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % journeyMedia.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                  aria-label="Next image"
                >
                  <span className="text-white text-xl">→</span>
                </button>

                {/* Thumbnail Indicators */}
                <div className="flex gap-3 justify-center mt-6 overflow-x-auto pb-2">
                  {journeyMedia.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-[#3652A4] scale-110'
                          : 'border-[#1e1e1e] hover:border-white/40 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                        {media.type === 'image' ? '📷' : '🎥'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

/* Timeline Card Component */
function TimelineCard({ item, isHovered }: { item: TimelineItem; isHovered: boolean }) {
  return (
    <div
      className={`bg-[#181818] border border-[#1e1e1e] rounded-3xl shadow-sm px-6 py-5 max-w-md transition-all duration-200 ${
        isHovered
          ? "shadow-lg -translate-y-1 border-white/20"
          : "hover:shadow-lg hover:-translate-y-1 hover:border-white/20"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-gray-400">
          {item.category}
        </span>
        <span className="text-xs font-semibold text-[#3652A4]">
          {item.monthYear}
        </span>
      </div>
      <p className="text-sm md:text-base text-white leading-snug text-justify">
        {item.title}
      </p>
    </div>
  );
}
