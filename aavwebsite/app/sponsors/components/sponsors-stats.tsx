import { Infinity } from "lucide-react";

export function SponsorsStats() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-black via-amber-950/20 to-orange-950/30" />

      <div className="container mx-auto px-4">
        {/* Flex container to center and align items on the same line */}
        <div className="flex justify-center items-center gap-12 max-w-6xl mx-auto">
          {/* First Stat: Years Combined Experience */}
          <div className="text-center flex flex-col items-center">
            <div className="font-display text-7xl md:text-8xl font-bold mb-4 bg-linear-to-br from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
              50+
            </div>
            <p className="text-gray-400 uppercase tracking-widest text-sm">
              Years Combined
              <br />
              Experience
            </p>
          </div>

          {/* Second Stat: Trusted Partners */}
          <div className="text-center flex flex-col items-center">
            <div className="font-display text-7xl md:text-8xl font-bold mb-4 bg-linear-to-br from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              7
            </div>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Trusted Partners</p>
          </div>

          {/* Third Stat: Innovation Potential */}
          <div className="text-center flex flex-col items-center">
            <div className="mb-4">
              <Infinity
                className="w-32 h-32 md:w-40 md:h-40"
                strokeWidth={1.5}
                style={{
                  stroke: "url(#infinity-gradient)",
                }}
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="infinity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#eab308" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Innovation Potential</p>
          </div>
        </div>
      </div>
    </section>
  );
}

