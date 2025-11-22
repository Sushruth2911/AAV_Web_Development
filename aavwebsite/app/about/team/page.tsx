"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";

const teamMembers = [
  {
    name: "Lyn Bryan",
    role: "CEO",
    funFact: "Can recite the entire periodic table backwards while juggling.",
    linkedin: "#",
  },
  {
    name: "Lauren Pyloa",
    role: "VP Growth & Development",
    funFact: "Once won a hot dog eating contest at a tech conference.",
    linkedin: "#",
  },
  {
    name: "Raenee Thomas",
    role: "VP Finance & Operations",
    funFact: "Has a secret TikTok account with 50k followers doing spreadsheet ASMR.",
    linkedin: "#",
  },
  {
    name: "Mitchell Fawcett",
    role: "VP Strategy",
    funFact: "Believes pineapple on pizza is a valid strategic choice.",
    linkedin: "#",
  },
  {
    name: "Jivan Segal",
    role: "VP Sales & Marketing",
    funFact: "Can turn any conversation into a pitch, even at a dentist.",
    linkedin: "#",
  },
  {
    name: "Darren Maller",
    role: "Creative Director",
    funFact: "Argues with Figma like it's a person who owes him money.",
    linkedin: "#",
  },
];

const compositionStats = [
  { label: "Executive", value: "55%" },
  { label: "Design", value: "11%" },
  { label: "Sales", value: "11%" },
  { label: "Leadership", value: "23%" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <Navbar />

      {/* Page background with subtle gradient + blobs */}
      <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-slate-50">
        <div className="relative pt-28 pb-20">
          {/* Glowing blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-32 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
            <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/5 blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center text-sm text-teal-300 hover:text-teal-200 hover:underline mb-6 transition-colors"
            >
              ← Back to Home
            </Link>

            {/* HERO SECTION */}
            <section className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-500/20 via-cyan-400/20 to-sky-500/20 border border-teal-400/40 text-xs font-medium text-teal-200 shadow-[0_0_40px_rgba(45,212,191,0.35)] mb-4">
                <span className="text-sm">👥</span>
                Our Team 2025
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Meet the Innovators
                <br />
                Behind{" "}
                <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
                  Our Success
                </span>
              </h1>

              <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-300/90">
                A diverse team of passionate experts driving innovation in
                autonomous maritime systems and shaping the future of ocean
                technology.
              </p>
            </section>

            {/* TEAM CARDS GRID */}
            <section className="mb-20">
              <div className="grid gap-8 md:grid-cols-3">
                {teamMembers.map((member, index) => (
                  <article
                    key={member.name}
                    className="group bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-950/90 rounded-3xl border border-slate-700/70 shadow-[0_18px_45px_rgba(15,23,42,0.85)] flex flex-col items-center text-center px-6 py-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(34,211,238,0.35)] hover:border-teal-400/70"
                    style={{
                      // tiny staggered animation feeling on load
                      animation: `fadeUp 0.6s ease forwards`,
                      animationDelay: `${index * 0.05}s`,
                      opacity: 0,
                    } as React.CSSProperties}
                  >
                    {/* Avatar placeholder (gradient ring, initials) */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full bg-teal-400/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-teal-500 via-cyan-500 to-sky-500 flex items-center justify-center ring-4 ring-slate-900">
                        <span className="text-2xl font-extrabold text-slate-950 drop-shadow-sm">
                          {getInitials(member.name)}
                        </span>
                      </div>
                    </div>

                    {/* Name + Role */}
                    <h3 className="text-xl font-semibold mb-1 text-slate-50">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-teal-300 mb-6">
                      {member.role}
                    </p>

                    {/* Fun fact */}
                    <div className="w-full bg-slate-900/80 rounded-2xl border border-teal-500/25 px-4 py-4 text-left mb-6 backdrop-blur-sm">
                      <div className="inline-flex items-center px-2 py-1 rounded-full bg-slate-900/80 text-[11px] font-semibold text-teal-200 mb-2 border border-teal-500/40">
                        Fun Fact
                      </div>
                      <p className="text-sm text-slate-200/90 italic leading-relaxed">
                        {member.funFact}
                      </p>
                    </div>

                    {/* LinkedIn button */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center justify-center w-full rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 text-slate-950 text-sm font-semibold py-2.5 hover:brightness-110 hover:shadow-[0_0_25px_rgba(56,189,248,0.7)] transition-all"
                    >
                      <span className="mr-2">🔗</span>
                      Connect on LinkedIn
                    </a>
                  </article>
                ))}
              </div>
            </section>

            {/* TEAM COMPOSITION */}
            <section className="mb-20">
              <div className="text-center mb-10">
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-teal-500/15 text-xs font-medium text-teal-200 mb-4 border border-teal-400/30">
                  📊 Team Breakdown
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                  Our Team Composition
                </h2>
                <p className="max-w-2xl mx-auto text-slate-300/90 text-sm md:text-base">
                  A balanced mix of leadership, strategy, design, and business
                  expertise working together towards a common goal.
                </p>
              </div>

              <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] items-center">
                {/* Circular “chart” placeholder */}
                <div className="flex items-center justify-center">
                  <div className="relative w-64 h-64 rounded-full bg-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.9)] overflow-hidden">
                    {/* fake segments with gradients */}
                    <div className="absolute inset-0 bg-[conic-gradient(from_220deg,rgba(45,212,191,0.8)_0deg,rgba(45,212,191,0.8)_200deg,rgba(56,189,248,0.9)_200deg,rgba(56,189,248,0.9)_260deg,rgba(129,140,248,0.9)_260deg,rgba(129,140,248,0.9)_320deg,rgba(15,23,42,1)_320deg,rgba(15,23,42,1)_360deg)]" />
                    <div className="absolute inset-8 rounded-full bg-slate-950" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">
                          Team Mix
                        </div>
                        <div className="text-sm text-slate-200">
                          Visual representation of leadership, design, sales &
                          strategy.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="space-y-4">
                  {compositionStats.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between bg-slate-900/80 rounded-2xl shadow-[0_16px_40px_rgba(15,23,42,0.7)] border border-slate-700/70 px-6 py-4 backdrop-blur-sm hover:border-teal-400/60 hover:shadow-[0_20px_55px_rgba(45,212,191,0.45)] transition-all"
                    >
                      <div>
                        <div className="font-semibold text-slate-50">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-400">
                          Team department
                        </div>
                      </div>
                      <div className="text-teal-300 font-extrabold text-xl">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* BEHIND THE SCENES – gradient tiles */}
            <section className="mb-20">
              <div className="text-center mb-10">
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-cyan-500/15 text-xs font-medium text-cyan-200 mb-4 border border-cyan-400/30">
                  🎥 Team Moments
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                  Behind the Scenes
                </h2>
                <p className="max-w-2xl mx-auto text-slate-300/90 text-sm md:text-base">
                  Capturing the spirit of collaboration and camaraderie that
                  drives our team forward.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Card 1 */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_22px_60px_rgba(34,211,238,0.45)] bg-gradient-to-br from-teal-500 via-cyan-500 to-sky-500 p-6 md:p-8 flex flex-col justify-end min-h-[220px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(34,211,238,0.75)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,250,252,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.55),transparent_60%)]" />
                  <div className="relative">
                    <h3 className="text-lg font-semibold mb-1 text-slate-950 drop-shadow-sm">
                      Our Team
                    </h3>
                    <p className="text-sm text-slate-900/80">
                      United in our mission to innovate and excel in autonomous
                      maritime technology.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_22px_60px_rgba(251,191,36,0.45)] bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 p-6 md:p-8 flex flex-col justify-end min-h-[220px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(248,113,113,0.75)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,250,252,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.65),transparent_60%)]" />
                  <div className="relative">
                    <h3 className="text-lg font-semibold mb-1 text-slate-950 drop-shadow-sm">
                      Team Bonding
                    </h3>
                    <p className="text-sm text-slate-900/85">
                      Building stronger connections through shared experiences
                      and memorable moments.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA SECTION */}
            <section className="border-t border-slate-800 pt-12 pb-4 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                Want to Join Our Team?
              </h2>
              <p className="max-w-xl mx-auto text-slate-300/90 text-sm md:text-base mb-6">
                We&apos;re always looking for talented individuals who share our
                passion for innovation and excellence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 text-slate-950 text-sm font-semibold shadow-[0_0_25px_rgba(56,189,248,0.7)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(45,212,191,0.9)] transition-all"
                >
                  View Open Positions
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-slate-600 bg-slate-900/70 text-sm font-semibold text-slate-50 hover:border-teal-300 hover:bg-slate-900/90 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Tiny inline keyframe for fadeUp animation (safe, optional) */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            transform: translateY(12px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
