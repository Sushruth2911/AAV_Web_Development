// A simple responsive SponsorsTiers section that aligns with other sponsor components.
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Platinum",
    amount: "$10,000+",
    color: "from-slate-400 to-slate-600",
    benefits: [
      "Logo on ASV and UAV",
      "Prominent website placement",
      "Social media recognition",
      "Competition team shirts",
      "Exclusive technical reports",
      "Speaking opportunities at events",
    ],
  },
  {
    name: "Gold",
    amount: "$5,000 - $9,999",
    color: "from-yellow-400 to-yellow-600",
    benefits: [
      "Logo on team materials",
      "Website recognition",
      "Social media mentions",
      "Competition updates",
      "Annual progress reports",
    ],
  },
  {
    name: "Silver",
    amount: "$2,000 - $4,999",
    color: "from-gray-300 to-gray-500",
    benefits: ["Website listing", "Social media recognition", "Newsletter mentions", "Competition results"],
  },
]

export function SponsorsTiers() {
  return (
    <section className="py-24 bg-black">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-10 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">Sponsorship Tiers</h2>
            <p className="text-lg text-gray-400 max-w-3xl">Join us in advancing autonomous systems technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-1.5 w-20 rounded-full bg-linear-to-r ${tier.color} mb-6`} />

                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white">{tier.name}</h3>
                    <div className="text-2xl font-semibold text-gray-300">{tier.amount}</div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {tier.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 text-black font-medium hover:bg-amber-500"
                  >
                    Become a Sponsor
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
