import { SponsorsHero } from "./components/sponsors-hero"
import { SponsorsStats } from "./components/sponsors-stats"
import { SponsorsPlatinum } from "./components/sponsors-platinum"
import { SponsorsGold } from "./components/sponsors-gold"
import { SponsorsSilver } from "./components/sponsors-silver"
import { SponsorsBronze } from "./components/sponsors-bronze"
import Navbar from "@/components/navbar";

export default function SponsorsPage() {
  return (
    <><Navbar />
    <main className="min-h-screen bg-black">
          <SponsorsHero />
          <SponsorsStats />
          <SponsorsPlatinum />
          <SponsorsGold />
          <SponsorsSilver />
          <SponsorsBronze />
      </main></>
  )
}

