"use client";

import Navbar from "@/components/navbar"; // same import as your Home page
import Link from "next/link";

/** ----- Data (no images) ----- */
type VisitItem = {
  id: string;
  title: string;
  category: string;
  date: string;
  href: string;
  location?: string;
  featured?: boolean;
  summary?: string;
};

const ITEMS: VisitItem[] = [
  {
    id: "feature-minister",
    title: "Minister for Education, Singapore",
    category: "Ministerial Visit",
    date: "Aug 16, 2024",
    location: "Singapore",
    href: "/outreach/minister-education",
    featured: true,
    summary:
      "Showcased our Autonomous Maritime System and discussed pathways for talent development and research collaboration.",
  },
  { id: "pku", title: "Peking University (PKU), China", category: "Academic Visit", date: "Oct 1, 2024", href: "/outreach/pku" },
  { id: "moe", title: "Ministry of Education (MOE), Singapore", category: "Government Visit", date: "Sep 25, 2024", href: "/outreach/moe" },
  { id: "rub", title: "Royal University of Bhutan (RUB)", category: "International Collaboration", date: "Jun 26, 2024", href: "/outreach/rub" },
  { id: "kvis", title: "Kamnoetvidya Science Academy (KVIS), Thailand", category: "Student Outreach", date: "Jun 3, 2024", href: "/outreach/kvis" },
  { id: "hci", title: "Hwa Chong Institution (HCI), Singapore", category: "Talent Development", date: "May 27, 2024", href: "/outreach/hci" },
];

export default function OutreachPage() {
  const feature = ITEMS.find((i) => i.featured)!;
  const right = ITEMS.filter((i) => !i.featured).slice(0, 2);
  const bottom = ITEMS.filter((i) => !i.featured).slice(2);

  return (
    <>
      <Navbar />

      {/* match Home page shell */}
      <main className="bg-[#121212] text-white font-sans min-h-screen">
        {/* HERO (same vibe as Home’s trailer block) */}
        <section className="py-24 text-center border-b border-[#1e1e1e] relative">
          <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(70%_60%_at_50%_0%,black_40%,transparent_80%)] bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(14,165,233,.12),transparent)]" />
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Building Connections <br className="hidden md:block" />
            Through <span className="bg-linear-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-zinc-300">
            Showcasing our Autonomous Maritime System to global leaders in education and government.
          </p>
        </section>

        {/* BENTO GRID (dark, image-less, sleek) */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          {/* Row 1: feature + two stacked */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <BentoCard item={feature} variant="feature" />
            </div>
            <div className="flex flex-col gap-6">
              {right.map((it) => (
                <BentoCard key={it.id} item={it} />
              ))}
            </div>
          </div>

          {/* Row 2: three equal */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {bottom.map((it) => (
              <BentoCard key={it.id} item={it} />
            ))}
          </div>
        </section>

      </main>
    </>
  );
}

/* ----------------- Card (no images) ----------------- */

function BentoCard({
  item,
  variant = "default",
}: {
  item: VisitItem;
  variant?: "default" | "feature";
}) {
  const surface =
    "relative isolate overflow-hidden rounded-2xl md:rounded-3xl border border-[#1e1e1e] bg-[#181818] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1e1e1e]";
  const aspect = variant === "feature" ? "aspect-[2/1] min-h-[360px]" : "aspect-[16/10] min-h-[220px]";

  return (
    <Link href={item.href} className={`${surface} block`}>
      {/* decorative, subtle gradients per category */}
      <div className={`absolute inset-0 opacity-40 ${gradientClass(item.category)}`} />
      {/* faint grid texture */}
      <div className="absolute inset-0 mask-[linear-gradient(to_bottom,black,transparent_90%)] bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-size-[20px_20px] opacity-[.06]" />

      <div className={`relative ${aspect} p-6 md:p-7 flex flex-col justify-end`}>
        <div className="absolute left-6 right-6 top-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-200 ring-1 ring-white/10">
            <Dot className="h-3 w-3" /> {item.category}
          </span>
        </div>

        <h3 className={variant === "feature" ? "text-2xl md:text-3xl font-semibold" : "text-lg md:text-xl font-semibold"}>
          {item.title}
        </h3>

        {variant === "feature" && item.summary && (
          <p className="mt-2 max-w-2xl text-sm text-zinc-300">{item.summary}</p>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            {item.date}
          </span>
          {item.location && (
            <span className="inline-flex items-center gap-1">
              <PinIcon className="h-4 w-4" />
              {item.location}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

/* ----------------- helpers ----------------- */

function gradientClass(category: string) {
  if (category.includes("Ministerial"))
    return "bg-[radial-gradient(900px_600px_at_20%_-10%,rgba(14,165,233,.35),transparent)]";
  if (category.includes("Academic"))
    return "bg-[radial-gradient(900px_600px_at_80%_-10%,rgba(59,130,246,.35),transparent)]";
  if (category.includes("Government"))
    return "bg-[radial-gradient(900px_600px_at_50%_-10%,rgba(2,132,199,.35),transparent)]";
  if (category.includes("Student"))
    return "bg-[radial-gradient(900px_600px_at_80%_-10%,rgba(34,197,94,.35),transparent)]";
  if (category.includes("Talent"))
    return "bg-[radial-gradient(900px_600px_at_20%_-10%,rgba(236,72,153,.35),transparent)]";
  return "";
}

function Dot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 8" fill="currentColor" {...props}>
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}
function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    </svg>
  );
}
function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M12 22s7-5.33 7-12A7 7 0 1 0 5 10c0 6.67 7 12 7 12z" />
      <circle cx="12" cy="10" r="3" strokeWidth="2" />
    </svg>
  );
}
