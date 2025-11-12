export function SponsorsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-amber-950/20 to-orange-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,53,15,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,119,6,0.2),transparent_50%)]" />

      {/* Content Container */}
      <div className="container relative z-10 px-4 py-20 md:py-28 text-center">
        {/* Heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance tracking-tight">
          <span className="text-white">Our </span>
          <span className="bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Partners
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed">
          At Archimedes Autonomous Vehicles, our achievements are powered by the unwavering trust and support of
          visionary partners who believe in shaping the future of maritime autonomy in Singapore.
        </p>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-gray-500 uppercase tracking-wider">Scroll to Explore</p>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
