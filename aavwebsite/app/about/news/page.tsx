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

      <main className="min-h-screen bg-[#f5f7f9] text-slate-900">
        {/* HERO / HEADER */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-[#f5fbff] via-[#eef4fb] to-[#f5f7f9]" />
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,#dbeafe_0,transparent_55%),radial-gradient(circle_at_bottom,#e0f2fe_0,transparent_55%)]" />

          <div className="relative max-w-5xl mx-auto px-4 md:px-6 pt-28 pb-16 text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/70 backdrop-blur text-xs font-semibold text-[#008fb3] shadow-sm mb-5 border border-white/70">
              🔄 Latest Updates
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              News &amp; <span className="text-[#008fb3]">Insights</span>
            </h1>

            <p className="max-w-3xl mx-auto text-sm md:text-base text-slate-600 mb-8 leading-relaxed">
              Stay updated with our latest breakthroughs, competition wins, and
              behind-the-scenes stories from the world of autonomous maritime
              systems.
            </p>

            {/* Search bar */}
            <div className="max-w-xl mx-auto mb-10">
              <div className="flex items-center bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow-[0_14px_40px_rgba(15,23,42,0.12)] border border-slate-100">
                <span className="text-slate-400 mr-2">🔍</span>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm md:text-base text-slate-700 placeholder:text-slate-400"
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
                <span className="text-sm text-[#008fb3]">📈</span>
                <h2 className="text-2xl md:text-3xl font-extrabold">
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
            <h2 className="text-2xl md:text-3xl font-extrabold">
              All Articles
            </h2>

            {nonFeaturedArticles.length === 0 && (
              <p className="text-sm text-slate-500">
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
    <div className="bg-white/90 backdrop-blur rounded-3xl px-6 py-4 border border-slate-100 shadow-sm">
      <div className="text-2xl font-extrabold text-[#008fb3] mb-1">
        {value}
      </div>
      <div className="text-xs uppercase tracking-wide text-slate-500">
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
    <article className="bg-white rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.18)] border border-slate-200 hover:shadow-[0_26px_60px_rgba(15,23,42,0.22)] hover:-translate-y-1.5 transition-all duration-200 flex flex-col">
      {/* “Image” area – gradient placeholder */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-sky-500 via-sky-700 to-slate-900 opacity-90" />
        <div className="absolute inset-0 mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0,transparent_60%)]" />
        <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-5">
          <span className="inline-flex w-fit px-3 py-1 rounded-full bg-black/40 text-[11px] font-semibold text-white mb-2">
            {article.category}
          </span>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
            {article.title}
          </h3>
          <div className="flex items-center gap-4 text-xs text-slate-100/90">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-[#008fb3] shadow">
            Featured
          </span>
        </div>
      </div>

      {/* Summary */}
      <div className="px-6 py-4">
        <p className="text-sm text-slate-600">{article.summary}</p>
      </div>
    </article>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col">
      {/* gradient placeholder for image */}
      <div className="h-40 bg-linear-to-br from-slate-100 via-sky-100 to-slate-200" />

      <div className="px-6 py-5 flex flex-col flex-1">
        <span className="inline-flex w-fit px-3 py-1 rounded-full bg-[#e6f7fa] text-[11px] font-semibold text-[#008fb3] mb-3">
          {article.category}
        </span>
        <h3 className="text-base md:text-lg font-semibold mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-slate-600 mb-4 flex-1">
          {article.summary}
        </p>
        <div className="flex items-center gap-3 text-xs text-slate-500 border-t border-slate-100 pt-3">
          <span>📅 {article.date}</span>
          <span>•</span>
          <span>⏱ {article.readTime}</span>
        </div>
      </div>

      <div className="h-1 bg-linear-to-r from-[#008fb3] via-[#38bdf8] to-transparent" />
    </article>
  );
}
