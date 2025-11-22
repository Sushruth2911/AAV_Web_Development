"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";

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

const vrxAwards = [
  {
    icon: "🏅",
    title: "Remarkable Video",
    subtitle: "Outstanding presentation quality",
  },
  {
    icon: "📈",
    title: "Biggest Leap",
    subtitle: "Most improved performance",
  },
  {
    icon: "⭐",
    title: "Phenomenal OSS",
    subtitle: "Open source excellence",
  },
  {
    icon: "🎁",
    title: "RoboBoat Fee Waiver",
    subtitle: "2023 competition entry",
  },
];

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

      <main className="min-h-screen bg-[#f5f7f9] text-slate-900">
        <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center text-sm text-[#008fb3] hover:underline mb-6"
          >
            ← Back to Home
          </Link>

          {/* SECTION 1 – VRX 2022 */}
          <section className="mb-20 text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#e6f7fa] text-xs font-semibold text-[#008fb3] mb-4 shadow-sm">
              🏆 Achievements
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              Virtual RobotX <span className="text-[#008fb3]">2022</span>
            </h1>

            {/* Stats row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 mt-8 mb-8">
              <StatBlock label="Place" value="3rd" />
              <StatBlock label="Prize" value="$1K" />
              <StatBlock label="Awards" value="5" />
            </div>


            {/* Award cards */}
            <div className="grid gap-6 md:grid-cols-2 mt-6">
              {vrxAwards.map((award) => (
                <div
                  key={award.title}
                  className="flex flex-col items-start text-left bg-white rounded-3xl border border-slate-200 shadow-sm px-6 py-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="text-2xl mb-3">{award.icon}</div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">
                    {award.title}
                  </h3>
                  <p className="text-sm text-slate-500">{award.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2 – OUR JOURNEY SO FAR */}
          <section>
            <div className="text-center mb-10">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#e6f7fa] text-xs font-semibold text-[#008fb3] mb-4 shadow-sm">
                📍 Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Our Journey So Far
              </h2>
              <p className="text-sm md:text-base text-slate-500">
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
                        ? "bg-[#008fb3] text-white border-[#008fb3] shadow-md scale-105"
                        : "bg-[#e5f1f5] text-slate-700 border-transparent hover:bg-[#d7e8ee] hover:shadow-sm hover:scale-105"
                    }`}
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
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#b7e3ec]" />
                {/* Boat that travels */}
                <div
                  className="absolute left-1/2 w-12 h-12 rounded-full bg-[#e6f7fa] flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
                  style={{ top: `${boatProgress * 100}%` }}
                >
                  <span className="text-[#008fb3] text-2xl">🚤</span>
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
                        <div className="relative w-3 h-3 rounded-full bg-[#008fb3] border-4 border-[#e6f7fa] shadow-md" />
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
          </section>
        </div>
      </main>
    </>
  );
}

/* Stat block for VRX numbers */
function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center px-4 py-2 rounded-2xl bg-white shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <div className="text-4xl font-extrabold text-[#008fb3]">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">
        {label}
      </div>
    </div>
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
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-6 py-5 max-w-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold text-slate-600 px-3 py-1 rounded-full bg-[#e6f7fa]">
          {category}
        </span>
        <span className="text-xs font-semibold text-[#008fb3]">
          {monthYear}
        </span>
      </div>
      <p className="text-sm md:text-base text-slate-800 leading-snug">{title}</p>
    </div>
  );
}
