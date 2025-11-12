import { Star, Sparkles, ArrowUpRight } from "lucide-react";

const silverSponsors = [
  {
    name: "ONE",
    type: "Cash Sponsorship",
    description: "Ocean Network Express supporting autonomous maritime innovation through strategic sponsorship.",
    url: "#",
  },
  {
    name: "Wilhelmsen",
    type: "Cash Sponsorship",
    description: "Global maritime leader advancing our R&D with significant financial contributions.",
    url: "#",
  },
];

export function SponsorsSilver() {
  return (
    <section className="relative py-8 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-black via-slate-900/20 to-black" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-slate-400 to-slate-600 flex items-center justify-center">
              <Star className="w-8 h-8 text-black fill-black" />
            </div>
            <div>
              <h2 className="font-display text-5xl font-bold text-white">Silver</h2>
              <p className="text-slate-400 text-lg">Core Partners</p>
            </div>
            <div className="w-48 h-px bg-linear-to-r from-transparent via-slate-600/50 to-transparent" />
          </div>

          {/* Grid of Sponsors */}
          <div className="grid md:grid-cols-2 gap-6">
            {silverSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50 rounded-3xl p-8 hover:border-slate-500/30 transition-transform transform hover:scale-105 duration-300 will-change-transform ring-1 ring-transparent group-hover:ring-slate-500/20"
              >
                {/* Dots on top-right */}
                <div className="absolute top-6 right-6 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-500/40" />
                  <div className="w-2 h-2 rounded-full bg-slate-500/20" />
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-slate-300 to-slate-500 flex items-center justify-center mb-6 shadow-md">
                  <Sparkles className="w-8 h-8 text-black" />
                </div>

                <h3 className="font-display text-3xl font-bold text-white mb-4">{sponsor.name}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{sponsor.description}</p>

                {/* Link Icon */}
                <a
                  href={sponsor.url}
                  className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
