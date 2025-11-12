import { Star, Sparkles, ArrowUpRight } from "lucide-react";

const bronzeSponsors = [
  {
    name: "MEO",
    type: "Project Support",
    description: "Contributing to maritime education and outreach advancement.",
    url: "#",
  },
];

export function SponsorsBronze() {
  return (
    <section className="relative py-8 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-black via-orange-950/10 to-black" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-orange-600 to-orange-800 flex items-center justify-center">
              <Star className="w-8 h-8 text-black fill-black" />
            </div>
            <div>
              <h2 className="font-display text-5xl font-bold text-white">Bronze</h2>
              <p className="text-orange-500 text-lg">Supporting Partners</p>
            </div>
            <div className="w-48 h-px bg-linear-to-r from-transparent via-orange-600/50 to-transparent" />
          </div>

          {/* Grid of Sponsors */}
          <div className="mx-auto max-w-2xl">
            {bronzeSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50 rounded-3xl p-8 hover:border-orange-600/30 transition-transform transform hover:scale-105 duration-300 will-change-transform ring-1 ring-transparent group-hover:ring-orange-600/20"
              >
                {/* Dots on top-right */}
                <div className="absolute top-6 right-6 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-600/40" />
                  <div className="w-2 h-2 rounded-full bg-orange-600/20" />
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500 to-orange-700 flex items-center justify-center mb-6 shadow-md">
                  <Sparkles className="w-8 h-8 text-black" />
                </div>

                <h3 className="font-display text-3xl font-bold text-white mb-4">{sponsor.name}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{sponsor.description}</p>

                {/* Link Icon */}
                <a
                  href={sponsor.url}
                  className="absolute top-8 right-8 w-10 h-10 rounded-full bg-orange-600/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="w-5 h-5 text-orange-500" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
