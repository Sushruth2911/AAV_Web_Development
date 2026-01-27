"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/navbar";

type Category =
  | "AI & Technology"
  | "Competition"
  | "Team Life"
  | "Announcements"
  | "Sustainability";

interface Article {
  id: number;
  title: string;
  category: Category;
  date: string;
  readTime: string;
  summary: string;
  featured?: boolean;
}

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

export default function NewsPage() {
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const q = query.toLowerCase().trim();

    if (!q) return articles;

    return articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q)
      );
    });
  }, [query]);

  const featuredArticles = filteredArticles.filter((a) => a.featured);
  const nonFeaturedArticles = filteredArticles.filter((a) => !a.featured);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#121212] text-white font-sans">
        {/* HERO / HEADER */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#121212]" />
          <div className="absolute -left-40 top-10 h-80 w-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(54,82,164,0.1)' }} />
          <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(0,130,78,0.08)' }} />

          <div className="relative max-w-5xl mx-auto px-4 md:px-6 pt-28 pb-16 text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold shadow-sm mb-5 backdrop-blur-md" style={{ color: '#9AB0B8' }}>
              🔄 Latest Updates
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              News &amp; <span style={{ color: '#3652A4' }}>Insights</span>
            </h1>

            <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-400 mb-8 leading-relaxed">
              Stay updated with our latest breakthroughs, competition wins, and
              behind-the-scenes stories from the world of autonomous maritime
              systems.
            </p>

            {/* Search bar */}
            <div className="max-w-xl mx-auto mb-10">
              <div className="flex items-center bg-[#181818] border border-[#1e1e1e] rounded-full px-4 py-2 hover:border-white/20 transition-all">
                <span className="mr-2" style={{ color: '#9AB0B8' }}>🔍</span>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm md:text-base text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Hero stats */}
            <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
              <StatCard label="Articles" value="8+" />
              <StatCard label="Categories" value="5" />
              <StatCard label="Readers" value="10K+" />
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 space-y-12">
          {/* FEATURED STORIES */}
          {featuredArticles.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-sm" style={{ color: '#3652A4' }}>📈</span>
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
      </main>
    </>
  );
}

/* --- SMALL COMPONENTS --- */

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#181818] border border-[#1e1e1e] rounded-3xl px-6 py-4 shadow-sm hover:border-white/20 transition-all">
      <div className="text-2xl font-extrabold mb-1" style={{ color: '#3652A4' }}>
        {value}
      </div>
      <div className="text-xs uppercase tracking-wide" style={{ color: '#9AB0B8' }}>
        {label}
      </div>
    </div>
  );
}

interface Article {
  id: number;
  title: string;
  category: Category;
  date: string;
  readTime: string;
  summary: string;
  featured?: boolean;
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
          <div className="flex items-center gap-4 text-xs" style={{ color: '#9AB0B8' }}>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold backdrop-blur-md" style={{ color: '#3652A4' }}>
            Featured
          </span>
        </div>
      </div>

      {/* Summary */}
      <div className="px-6 py-4">
        <p className="text-sm text-gray-400">{article.summary}</p>
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
        <span className="inline-flex w-fit px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold mb-3 backdrop-blur-md" style={{ color: '#9AB0B8' }}>
          {article.category}
        </span>
        <h3 className="text-base md:text-lg font-semibold mb-2 text-white">
          {article.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 flex-1">
          {article.summary}
        </p>
        <div className="flex items-center gap-3 text-xs border-t pt-3" style={{ color: '#9AB0B8', borderColor: '#1e1e1e' }}>
          <span>📅 {article.date}</span>
          <span>•</span>
          <span>⏱ {article.readTime}</span>
        </div>
      </div>
    </article>
  );
}
