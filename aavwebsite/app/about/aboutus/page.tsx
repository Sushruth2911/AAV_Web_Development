"use client";

import Link from "next/link";
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
                🛟 Est. 2012
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

          {/* QUICK NAV CARDS */}
          <section className="max-w-6xl mx-auto px-4 md:px-6 mt-6 mb-16">
            <div className="grid gap-6 md:grid-cols-3">
              <QuickCard
                icon="👥"
                title="Our Team"
                description="Meet the diverse group of passionate students driving innovation in maritime robotics."
                linkLabel="Explore"
                href="/about/team"
              />
              <QuickCard
                icon="🏆"
                title="Achievements"
                description="Discover our competition wins, technical milestones, and journey of excellence."
                linkLabel="View Achievements"
                href="/about/achievements"
              />
              <QuickCard
                icon="🌐"
                title="Outreach"
                description="Explore our visits, demonstrations, and community engagement initiatives."
                linkLabel="See Outreach"
                href="/outreach"
              />
            </div>
          </section>

          {/* ORIGIN STORY */}
          <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16">
            <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] items-start">
              <div>
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#e6f7fa] text-xs font-semibold text-[#008fb3] shadow-sm mb-4">
                  🧭 Our Origin
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  How It All Started
                </h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                  In 2012, Professor Xie Ming was invited by RoboNation to
                  establish NTU&apos;s first team for the RobotX Challenge. The
                  team was formed specifically for this competition, and made
                  their debut in 2014 when Singapore hosted the inaugural
                  RobotX event.
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Since then, our team has competed internationally, representing
                  NTU across multiple continents and continuously pushing the
                  boundaries of autonomous maritime technology.
                </p>
              </div>

              {/* year cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {originMilestones.map((item) => (
                  <div
                    key={item.year}
                    className="bg-white rounded-3xl border border-slate-200 shadow-sm px-6 py-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="text-xl font-extrabold text-[#008fb3] mb-1">
                      {item.year}
                    </div>
                    <div className="text-sm text-slate-600">{item.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DIVERSE TEAM */}
          <section className="max-w-6xl mx-auto px-4 md:px-6 mb-16">
            <div className="text-center mb-8">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#e6f7fa] text-xs font-semibold text-[#008fb3] shadow-sm mb-4">
                👥 Team Composition
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Our Diverse Team
              </h2>
            </div>

            <div className="bg-[#f1f9fb] border border-[#d7eef5] rounded-3xl px-6 md:px-10 py-8 md:py-10 text-center mb-8">
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
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
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-6 py-6 md:py-7">
                <h3 className="text-xl font-semibold mb-6">Academic Level</h3>
                <div className="space-y-5">
                  <LevelRow label="Undergraduates" value="18" colorClass="bg-[#00a3b5]" />
                  <LevelRow label="Postgraduates" value="14" colorClass="bg-[#22c55e]" />
                </div>
              </div>

              {/* Engineering discipline */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-6 py-6 md:py-7">
                <h3 className="text-xl font-semibold mb-6">
                  Engineering Discipline
                </h3>
                <div className="space-y-4">
                  <LevelRow
                    label="Mechanical Engineering"
                    value="19"
                    colorClass="bg-[#059669]"
                  />
                  <LevelRow
                    label="Smart Manufacturing"
                    value="7"
                    colorClass="bg-[#06b6d4]"
                  />
                  <LevelRow
                    label="Electrical Engineering"
                    value="4"
                    colorClass="bg-[#8b5cf6]"
                  />
                  <LevelRow
                    label="Computer Engineering"
                    value="2"
                    colorClass="bg-[#f97316]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* NEWS & PROGRESS */}
          <section className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#e6f7fa] text-xs font-semibold text-[#008fb3] shadow-sm mb-4">
                📢 Latest Updates
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                News &amp; Progress
              </h2>
              <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-600">
                Stay updated with our latest technical achievements and team
                milestones.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {newsItems.map((item) => (
                <article
                  key={item.title}
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm px-6 py-6 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
                >
                  <span className="inline-flex w-fit px-3 py-1 rounded-full bg-[#e6f7fa] text-[11px] font-semibold text-[#008fb3] mb-3">
                    {item.tag}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <div className="text-xs text-slate-500 mb-3">{item.date}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/news"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-sm font-semibold text-slate-800 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
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
