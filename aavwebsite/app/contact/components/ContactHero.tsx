import { Sparkles } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-950/40 via-black to-yellow-950/40" />
      <div className="absolute inset-0 bg-[url('/circuit-board-pattern.png')] opacity-5 bg-cover bg-center" />

      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 px-4 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-medium text-orange-400">Let&apos;s Connect</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-balance">
          <span className="text-white">Get In </span>
          <span className="bg-linear-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-balance leading-relaxed">
          Have questions about our autonomous systems? Interested in sponsorship or collaboration? We&apos;d love to hear
          from you.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </section>
  )
}
