"use client";

import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

type EventItem = {
  title: string;
  date: string;
  caption: string;
  media: string; // Placeholder path
};

type Category = "Academic" | "Government" | "Industry" | "Outreach";

type NewsCategory =
  | "AI & Technology"
  | "Competition"
  | "Team Life"
  | "Announcements"
  | "Sustainability";

interface Article {
  id: number;
  title: string;
  category: NewsCategory;
  date: string;
  readTime: string;
  summary: string;
  featured?: boolean;
}

const events: Record<Category, EventItem[]> = {
  Academic: [
    {
      title: "ROSCon",
      date: "27 Oct 2025",
      caption: "",
      media: "/outreach/academic/roscon.jpg",
    },
    {
      title: "Space Systems Lab, U.S.A",
      date: "23 Jun 2025",
      caption: "",
      media: "/outreach/academic/space-systems-lab.jpg",
    },
    {
      title: "United States Naval Academy (USNA), U.S.A",
      date: "23 Jun 2025",
      caption: "",
      media: "/outreach/academic/usna.jpg",
    },
    {
      title: "MAE High Tea",
      date: "10 May 2025",
      caption: "",
      media: "/outreach/academic/mae-high-tea.jpg",
    },
  ],
  Government: [
    {
      title: "Navy @ Vivo, Singapore",
      date: "21 Nov 2025",
      caption: "",
      media: "/outreach/government/navy-vivo.jpg",
    },
    {
      title: "Tuas Naval Base, Singapore",
      date: "23 Apr 2025",
      caption: "Chief of Navy's invitation",
      media: "/outreach/government/tuas-naval-base.jpg",
    },
    {
      title: "Ministry of Education (MOE), Singapore",
      date: "25 Sep 2024",
      caption: "A delegation of educators from the MOE visited our lab for an in-depth demonstration of our AMS. The showcase provided the teachers with insight into the latest developments in autonomous maritime technology and its potential applications.",
      media: "/outreach/government/moe.jpg",
    },
    {
    title: "Minister for Education, Singapore",
      date: "16 Aug 2024",
      caption: "Our team had the honour of presenting the AMS to Singapore's Minister for Education, Mr. Chan Chun Sing. Accompanying the Minister were NTU President Prof. Ho Teck Hua and Prof. Wai Yee Yeong, Chair of NTU School of Mechanical and Aerospace Engineering. The showcase highlighted our innovation in autonomous maritime technology and its implications for future maritime applications.",
      media: "/outreach/government/minister-education.jpg",
    },
  ],
  Industry: [
    {
      title: "Singapore Norway Innovation Conference (SNIC)",
      date: "6 Nov 2025",
      caption: "",
      media: "/outreach/industry/snic.jpg",
    },
    {
      title: "Atlassian Williams Racing (F1)",
      date: "30 Sep 2025",
      caption: "",
      media: "/outreach/industry/atlassian-f1.jpg",
    },
    {
      title: "Pier71 Industry Networking",
      date: "4 Sep 2025",
      caption: "",
      media: "/outreach/industry/pier71.jpg",
    },
    {
      title: "International Maritime Defence Exhibition (IMDEX)",
      date: "8 May 2025",
      caption: "",
      media: "/outreach/industry/imdex.jpg",
    },
    {
      title: "Singapore Maritime Week",
      date: "18 Mar 2025",
      caption: "",
      media: "/outreach/industry/singapore-maritime-week.jpg",
    },
    {
      title: "Maritime Youth Forum",
      date: "23 Jan 2025",
      caption: "",
      media: "/outreach/industry/maritime-youth-forum.jpg",
    },
    {
      title: "SMF New Year's Conversations",
      date: "15 Jan 2025",
      caption: "",
      media: "/outreach/industry/smf-new-year.jpg",
    },
  ],
  Outreach: [
    {
      title: "Raffles Girls' School, Singapore",
      date: "18 Oct 2025",
      caption: "",
      media: "/outreach/outreach/rgs.jpg",
    },
    {
      title: "NTU Homecoming, Singapore",
      date: "11 Oct 2025",
      caption: "",
      media: "/outreach/outreach/ntu-homecoming.jpg",
    },
    {
      title: "Taipei First Girls' High School, Taiwan",
      date: "9 Sep 2025",
      caption: "",
      media: "/outreach/outreach/taipei-first-girls.jpg",
    },
    {
      title: "Live It Up!, Singapore",
      date: "13 - 16 Aug 2025",
      caption: "",
      media: "/outreach/outreach/live-it-up.jpg",
    },
    {
      title: "NTU Open House, Singapore",
      date: "1 Mar 2025",
      caption: "",
      media: "/outreach/outreach/ntu-open-house.jpg",
    },
    {
      title: "Peking University (PKU), China",
      date: "1 Oct 2024",
      caption: "We had the pleasure of welcoming a group of undergraduate students from PKU to our lab. During their visit, we conducted a detailed demonstration of our Autonomous Maritime System (AMS), showcasing its cutting-edge features and capabilities.",
      media: "/outreach/outreach/pku.jpg",
    },
    {
      title: "Royal University of Bhutan (RUB)",
      date: "26 Jun 2024",
      caption: "We hosted a dynamic and engaging session with 16 faculty members from the Samtse College of Education (SCE), RUB. Led by Dr. Rinchen Dorji, President of SCE, the delegation visited our lab where we demonstrated our AMS and discussed potential collaborative efforts in education and research.",
      media: "/outreach/outreach/rub.jpg",
    },
    {
      title: "Kamnoetvidya Science Academy (KVIS), Thailand",
      date: "3 Jun 2024",
      caption: "We were excited to share our AMS with a group of bright students from KVIS. The event was further enriched by the presence of representatives from the Singapore Maritime Foundation (SMF) and Fugro, sparking discussions on maritime innovation and autonomous systems.",
      media: "/outreach/outreach/kvis.jpg",
    },
    {
      title: "Hwa Chong Institution (HCI), Singapore",
      date: "27 May 2024",
      caption: "As part of the Talent and Grooming Attachment initiative between NTU's School of Mechanical and Aerospace Engineering and HCI, we conducted a special session for HCI students. During the session, we presented our AMS and provided insights into its development, encouraging the next generation of engineers and innovators.",
      media: "/outreach/outreach/hci.jpg",
    },
  ],
};

const categories: Category[] = ["Academic", "Government", "Industry", "Outreach"];

const articles: Article[] = [
  {
    id: 1,
    title:
      "Breakthrough in Autonomous Navigation: New AI System Achieves 99% Accuracy",
    category: "AI & Technology",
    date: "March 20, 2025",
    readTime: "5 min read",
    summary:
      "Our latest deep learning model has revolutionised how our maritime robots navigate complex environments, setting new industry standards.",
    featured: true,
  },
  {
    id: 2,
    title: "Team Archimedes Wins International RobotX Championship",
    category: "Competition",
    date: "March 18, 2025",
    readTime: "8 min read",
    summary:
      "After months of preparation, our team secured first place at the prestigious RobotX Challenge, competing against more than 20 international teams.",
    featured: true,
  },
  {
    id: 3,
    title: "Behind the Scenes: A Day in Our Testing Facility",
    category: "Team Life",
    date: "March 15, 2025",
    readTime: "4 min read",
    summary:
      "Get an exclusive look at how we test and refine our autonomous maritime systems in real-world conditions.",
  },
  {
    id: 4,
    title: "New Perception Module: See the Ocean Like Never Before",
    category: "AI & Technology",
    date: "March 12, 2025",
    readTime: "6 min read",
    summary:
      "A new underwater perception stack enables highly reliable object detection with unprecedented clarity and speed.",
  },
  {
    id: 5,
    title:
      "Collaboration Announcement: Partnership with Leading Maritime Institute",
    category: "Announcements",
    date: "March 10, 2025",
    readTime: "3 min read",
    summary:
      "We are excited to announce a new research partnership focused on advancing autonomous maritime systems.",
  },
  {
    id: 6,
    title: "Student Spotlight: Meet the Engineers Shaping Our Future",
    category: "Team Life",
    date: "March 8, 2025",
    readTime: "7 min read",
    summary:
      "An in-depth interview with our student engineers about their journey, challenges, and vision for maritime robotics.",
  },
  {
    id: 7,
    title: "Technical Deep Dive: How Our Communication Protocol Works",
    category: "AI & Technology",
    date: "March 5, 2025",
    readTime: "10 min read",
    summary:
      "A detailed look at the custom protocol that enables seamless communication between all system components.",
  },
  {
    id: 8,
    title:
      "Sustainability in Robotics: Our Commitment to Green Technology",
    category: "Sustainability",
    date: "March 1, 2025",
    readTime: "5 min read",
    summary:
      "Learn about our initiatives to make autonomous maritime systems more environmentally friendly and sustainable.",
  },
];

const categoryColors: Record<Category, { bg: string; border: string; text: string; accent: string }> = {
  Academic: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    accent: "bg-blue-500",
  },
  Government: {
    bg: "bg-[#3652A4]/10",
    border: "border-[#3652A4]/30",
    text: "text-[#3652A4]",
    accent: "bg-[#3652A4]",
  },
  Industry: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    accent: "bg-green-500",
  },
  Outreach: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    accent: "bg-purple-500",
  },
};

type PageMode = "Outreach" | "Newsroom";

export default function OutreachPage() {
  const [pageMode, setPageMode] = useState<PageMode>("Outreach");
  const [activeCategory, setActiveCategory] = useState<Category>("Academic");
  const [carouselIndices, setCarouselIndices] = useState<Record<Category, number>>({
    Academic: 0,
    Government: 0,
    Industry: 0,
    Outreach: 0,
  });
  const [newsQuery, setNewsQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const q = newsQuery.toLowerCase().trim();
    if (!q) return articles;
    return articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q)
      );
    });
  }, [newsQuery]);

  const featuredArticles = filteredArticles.filter((a) => a.featured);
  const nonFeaturedArticles = filteredArticles.filter((a) => !a.featured);

  const currentEvents = events[activeCategory];
  const currentIndex = carouselIndices[activeCategory];
  
  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1; // Mobile: 1 item
    if (window.innerWidth < 1024) return 2; // Tablet: 2 items
    return 3; // Desktop: 3 items
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCarouselIndices((prev) => ({
      ...prev,
      [activeCategory]: (prev[activeCategory] + 1) % Math.max(1, currentEvents.length - itemsPerPage + 1),
    }));
  };

  const prevSlide = () => {
    setCarouselIndices((prev) => ({
      ...prev,
      [activeCategory]: prev[activeCategory] === 0 
        ? Math.max(0, currentEvents.length - itemsPerPage)
        : prev[activeCategory] - 1,
    }));
  };

  // Reset carousel index when category changes
  useEffect(() => {
    setCarouselIndices((prev) => ({
      ...prev,
      [activeCategory]: 0,
    }));
  }, [activeCategory]);

  // Auto-advance carousels
  useEffect(() => {
    if (currentEvents.length === 0) return;
    
    const interval = setInterval(() => {
      setCarouselIndices((prev) => ({
        ...prev,
        [activeCategory]: (prev[activeCategory] + 1) % Math.max(1, currentEvents.length - itemsPerPage + 1),
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeCategory, currentEvents.length, itemsPerPage]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#121212] text-white font-sans">
        {/* Hero Section */}
        <section className="pt-32 pb-20 border-b border-[#1e1e1e]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Page Mode Tabs */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setPageMode("Outreach")}
                className={`px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 ${
                  pageMode === "Outreach"
                    ? "bg-[#3652A4] text-white shadow-lg scale-105"
                    : "bg-[#181818] border border-[#1e1e1e] text-gray-400 hover:border-white/20 hover:text-white"
                }`}
              >
                Outreach
              </button>
              <button
                onClick={() => setPageMode("Newsroom")}
                className={`px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 ${
                  pageMode === "Newsroom"
                    ? "bg-[#3652A4] text-white shadow-lg scale-105"
                    : "bg-[#181818] border border-[#1e1e1e] text-gray-400 hover:border-white/20 hover:text-white"
                }`}
              >
                Newsroom
              </button>
            </div>

            {pageMode === "Outreach" ? (
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
                  Outreach
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-justify">
                  Building connections through innovation. Showcasing our Autonomous Maritime System to global leaders, educators, and industry partners.
                </p>
              </div>
            ) : (
              <div className="text-center mb-16">
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold shadow-sm mb-5 backdrop-blur-md text-gray-400">
                  🔄 Latest Updates
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
                  News &amp; <span className="text-[#3652A4]">Insights</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-justify">
                  Stay updated with our latest breakthroughs, competition wins, and behind-the-scenes stories from the world of autonomous maritime systems.
                </p>
                
                {/* Search bar for newsroom */}
                <div className="max-w-xl mx-auto mt-8">
                  <div className="flex items-center bg-[#181818] border border-[#1e1e1e] rounded-full px-4 py-2 hover:border-white/20 transition-all">
                    <span className="mr-2 text-gray-400">🔍</span>
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={newsQuery}
                      onChange={(e) => setNewsQuery(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-sm md:text-base text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                {/* Hero stats */}
                <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto mt-10">
                  <StatCard label="Articles" value="8+" />
                  <StatCard label="Categories" value="5" />
                  <StatCard label="Readers" value="10K+" />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Main Content - Conditional based on page mode */}
        {pageMode === "Outreach" ? (
          <>
            {/* Category Tabs */}
            <section className="sticky top-20 z-10 bg-[#121212]/95 backdrop-blur-sm border-b border-[#1e1e1e] py-4">
              <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-wrap gap-3 justify-center">
                  {categories.map((category) => {
                    const colors = categoryColors[category];
                    const isActive = activeCategory === category;
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                          isActive
                            ? `${colors.bg} ${colors.border} border-2 ${colors.text} shadow-lg scale-105`
                            : "bg-[#181818] border border-[#1e1e1e] text-gray-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {category}
                        {isActive && (
                          <span className={`ml-2 inline-block w-2 h-2 rounded-full ${colors.accent}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Events Carousel */}
            <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
        style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                  }}
                >
                  {currentEvents.map((event, index) => {
                    const colors = categoryColors[activeCategory];
                    return (
                      <div
                        key={index}
                        className="flex-shrink-0 px-2 md:px-4"
                        style={{ width: `${100 / itemsPerPage}%`, minWidth: `${100 / itemsPerPage}%` }}
                      >
                        <div
                          className={`group bg-[#181818] border ${colors.border} rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full`}
                        >
                          {/* Media Placeholder */}
                          <div className="relative w-full aspect-video bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center border-b border-[#1e1e1e]">
                            <div className="absolute inset-0 bg-[linear-gradient(#ffffff05_1px,transparent_1px),linear-gradient(90deg,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
                            <div className="relative text-center z-10">
                              <div className="text-5xl mb-3 opacity-50">📸</div>
                              <div className="text-xs text-gray-600 px-4 font-mono">{event.media.split('/').pop()}</div>
                            </div>
                            {/* Category Badge */}
                            <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full ${colors.bg} ${colors.border} border backdrop-blur-md shadow-lg`}>
                              <span className={`text-xs font-bold ${colors.text} uppercase tracking-wide`}>{activeCategory}</span>
                            </div>
                            {/* Date Badge */}
                            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                              <span className="text-xs font-semibold text-gray-300">{event.date}</span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-4 leading-tight">{event.title}</h3>

                            {event.caption ? (
                              <p className="text-gray-300 text-sm leading-relaxed text-justify">{event.caption}</p>
                            ) : (
                              <p className="text-gray-500 text-sm italic">More details coming soon...</p>
                            )}
                          </div>
                        </div>
            </div>
                    );
                  })}
            </div>
          </div>

              {/* Navigation Arrows */}
              {currentEvents.length > itemsPerPage && (
                <>
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-[#181818] border border-[#1e1e1e] hover:border-white/40 flex items-center justify-center transition-all z-10 ${
                      currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1e1e1e]'
                    }`}
                    aria-label="Previous"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentIndex >= currentEvents.length - itemsPerPage}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-[#181818] border border-[#1e1e1e] hover:border-white/40 flex items-center justify-center transition-all z-10 ${
                      currentIndex >= currentEvents.length - itemsPerPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1e1e1e]'
                    }`}
                    aria-label="Next"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Carousel Indicators */}
              {currentEvents.length > itemsPerPage && (
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: Math.ceil(currentEvents.length / itemsPerPage) }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCarouselIndices((prev) => ({ ...prev, [activeCategory]: idx }))}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? `${categoryColors[activeCategory].accent} w-8`
                          : 'bg-[#1e1e1e] w-2 hover:bg-[#2a2a2a]'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

            {/* Competitions Section */}
            <section className="py-16 md:py-24 border-t border-[#1e1e1e]">
              <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
                    Our Competitions
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Explore our journey and achievements in international competitions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* RobotX 2024 Link */}
                  <Link
                    href="/competitions/robotx2024"
                    className="group bg-[#181818] border border-[#1e1e1e] rounded-3xl p-8 hover:border-[#3652A4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#3652A4]/10 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#3652A4]/20 border border-[#3652A4]/30 flex items-center justify-center group-hover:bg-[#3652A4]/30 transition-colors">
                        <span className="text-3xl">🚤</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">RobotX 2024</h3>
                        <p className="text-sm text-gray-400">Maritime RobotX Challenge</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                      Our journey to 5th place in the Autonomy Challenge. Explore our timeline, achievements, and the challenges we overcame.
                    </p>
                    <div className="flex items-center text-[#3652A4] font-semibold group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>

                  {/* SUAS Link */}
                  <Link
                    href="/competitions/suas2025"
                    className="group bg-[#181818] border border-[#1e1e1e] rounded-3xl p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        <span className="text-3xl">✈️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">SUAS 2025</h3>
                        <p className="text-sm text-gray-400">Student Unmanned Aerial Systems</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                      Our expansion into aerial autonomy. Discover our participation in the SUAS competition and our UAV development.
                    </p>
                    <div className="flex items-center text-green-400 font-semibold group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            {/* Newsroom Content */}
            <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 space-y-12">
              {/* FEATURED STORIES */}
              {featuredArticles.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-sm text-[#3652A4]">📈</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                      Featured Stories
                    </h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {featuredArticles.map((article) => (
                      <FeaturedCard key={article.id} article={article} />
                    ))}
                  </div>
                </div>
              )}

              {/* ALL ARTICLES */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                  All Articles
                </h2>

                {nonFeaturedArticles.length === 0 && (
                  <p className="text-sm text-gray-400">
                    No articles found for this search term. Try something else.
                  </p>
                )}

                <div className="grid gap-6 md:grid-cols-3">
                  {nonFeaturedArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}

/* Newsroom Components */
function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#181818] border border-[#1e1e1e] rounded-3xl px-6 py-4 shadow-sm hover:border-white/20 transition-all">
      <div className="text-2xl font-extrabold mb-1 text-[#3652A4]">
        {value}
      </div>
      <div className="text-xs uppercase tracking-wide text-gray-400">
        {label}
      </div>
    </div>
  );
}

function FeaturedCard({ article }: { article: Article }) {
  return (
    <article className="bg-[#181818] border border-[#1e1e1e] rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1.5 hover:border-white/20 transition-all duration-200 flex flex-col">
      {/* "Image" area – gradient placeholder */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#181818] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3652A4]/20 via-[#00824E]/15 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-5">
          <span className="inline-flex w-fit px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold text-white mb-2 backdrop-blur-md">
            {article.category}
          </span>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
            {article.title}
          </h3>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold backdrop-blur-md text-[#3652A4]">
            Featured
          </span>
        </div>
      </div>

      {/* Summary */}
      <div className="px-6 py-4">
        <p className="text-sm text-gray-400 text-justify">{article.summary}</p>
      </div>
    </article>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="bg-[#181818] border border-[#1e1e1e] rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-white/20 transition-all duration-200 flex flex-col">
      {/* gradient placeholder for image */}
      <div className="h-40 bg-gradient-to-br from-[#181818] to-[#0a0a0a]" />

      <div className="px-6 py-5 flex flex-col flex-1">
        <span className="inline-flex w-fit px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold mb-3 backdrop-blur-md text-gray-400">
          {article.category}
        </span>
        <h3 className="text-base md:text-lg font-semibold mb-2 text-white">
          {article.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 flex-1 text-justify">
          {article.summary}
        </p>
        <div className="flex items-center gap-3 text-xs border-t pt-3 text-gray-400" style={{ borderColor: '#1e1e1e' }}>
          <span>📅 {article.date}</span>
          <span>•</span>
          <span>⏱ {article.readTime}</span>
        </div>
      </div>
    </article>
  );
}
