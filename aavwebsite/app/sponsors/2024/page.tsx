"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

const platinumSponsors = [
  {
    name: "FSTD",
    fullName: "Future Systems & Technology Directorate",
    description: "FSTD has provided financial support for our Autonomous Maritime System (AMS) project. FSTD leads the Singapore Armed Forces' master plan for research and development investments, focusing on delivering innovative concepts and disruptive technologies to achieve cutting-edge capabilities on the battlefield.",
    logo: "/FSTD.png",
    contribution: "Financial Support for AMS",
  },
  {
    name: "SMF",
    fullName: "Singapore Maritime Foundation",
    description: "Singapore Maritime Foundation (SMF) has generously provided our team with travel bursaries. SMF collaborates with various stakeholders in Singapore's maritime ecosystem to build a skilled, maritime-ready workforce, including initiatives like the MaritimeONE Scholarship.",
    logo: "/SMF.png",
    contribution: "Travel Bursaries",
  },
  {
    name: "RSYC",
    fullName: "Republic of Singapore Yacht Club",
    description: "Republic of Singapore Yacht Club (RSYC), Asia's oldest and Singapore's only member-owned yacht club, has supported our project by providing testing locations and a berthing lot for our Unmanned Surface Vessel (USV).",
    logo: "/RSYC.png",
    contribution: "Testing Locations & Berthing",
  },
  {
    name: "Kim Heng",
    fullName: "Kim Heng",
    description: "Kim Heng, an offshore marine service contractor with over 50 years of experience, specialises in providing engineering, procurement, construction and installation support. They have generously financed the development of our AMS.",
    logo: "/KimHeng.png",
    contribution: "AMS Development Financing",
  },
];

const silverSponsors = [
  {
    name: "ONE",
    fullName: "Ocean Network Express",
    description: "ONE has provided cash sponsorship to support our project.",
    logo: "/ONE.png",
    contribution: "Cash Sponsorship",
  },
  {
    name: "Wilhelmsen",
    fullName: "Wilhelmsen",
    description: "Wilhelmsen has provided cash sponsorship to support our project.",
    logo: "/Wilhelmsen.png",
    contribution: "Cash Sponsorship",
  },
];

const bronzeSponsors = [
  {
    name: "MEO",
    fullName: "MEO",
    description: "MEO has provided support to our project.",
    logo: "/MEO.png",
    contribution: "Sponsorship",
  },
];

export default function Sponsors2024Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#121212] text-white font-sans">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                Our 2024 Sponsors
              </h1>
              
              {/* Hero Image */}
              <div className="relative w-full max-w-4xl mx-auto mb-12">
                <div className="relative w-full">
                  <Image
                    src="/Sponsors.png"
                    alt="Our Sponsors"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>

              {/* Description */}
              <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
                <p>
                  At Archimedes Autonomous Vehicles, our achievements today would not have been possible without the steadfast trust and support of our sponsors. We are deeply grateful for their confidence in our mission and for their generous contributions, which enable us to continually develop innovative platforms that are shaping the future of maritime autonomy in Singapore.
                </p>
                <p>
                  Each contribution, regardless of its size or form, plays a pivotal role in advancing our project and helping us navigate the course ahead. If you are interested in joining us as a sponsor and supporting the future of maritime autonomy, we would be delighted to hear from you. Please feel free to reach out to us at:
                </p>
                <div className="pt-4">
                  <a
                    href="mailto:contact@ntuarchimedes.org"
                    className="inline-flex items-center gap-2 text-[#3652A4] hover:text-[#4a6bc7] transition-colors font-semibold text-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@ntuarchimedes.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platinum Sponsors */}
        <section className="py-16 md:py-24 border-t border-[#1e1e1e]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
                Platinum Sponsors
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3652A4] to-transparent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {platinumSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-[#181818] border border-[#1e1e1e] rounded-3xl p-8 hover:border-[#3652A4]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3652A4]/10"
                >
                  {/* Logo */}
                  <div className="relative w-full h-32 mb-6 bg-white rounded-lg flex items-center justify-center p-4">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{sponsor.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{sponsor.fullName}</p>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#3652A4]/20 text-[#3652A4] border border-[#3652A4]/30">
                      {sponsor.contribution}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{sponsor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Silver Sponsors */}
        <section className="py-16 md:py-24 border-t border-[#1e1e1e]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
                Silver Sponsors
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {silverSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-[#181818] border border-[#1e1e1e] rounded-3xl p-8 hover:border-gray-400/50 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Logo */}
                  <div className="relative w-full h-24 mb-6 bg-white rounded-lg flex items-center justify-center p-4">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{sponsor.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{sponsor.fullName}</p>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gray-400/20 text-gray-300 border border-gray-400/30">
                      {sponsor.contribution}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{sponsor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bronze Sponsors */}
        <section className="py-16 md:py-24 border-t border-[#1e1e1e]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
                Bronze Sponsors
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {bronzeSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-[#181818] border border-[#1e1e1e] rounded-3xl p-6 hover:border-amber-600/50 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Logo */}
                  <div className="relative w-full h-20 mb-4 bg-white rounded-lg flex items-center justify-center p-3">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain p-3"
                    />
                  </div>

                  <div className="mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">{sponsor.name}</h3>
                    <p className="text-xs text-gray-400 mb-2">{sponsor.fullName}</p>
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-amber-600/20 text-amber-400 border border-amber-600/30">
                      {sponsor.contribution}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">{sponsor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Sponsor Section */}
        <section className="py-16 md:py-24 border-t border-[#1e1e1e]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
                  Become a Sponsor
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#3652A4] to-transparent"></div>
                
                <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Join us in shaping the future of maritime autonomy in Singapore. Your support enables us to push the boundaries of innovation and develop cutting-edge autonomous systems that make a real impact.
                  </p>
                  <p className="text-justify">
                    As a sponsor, you'll be part of a team that's making history in autonomous maritime technology. We offer various sponsorship tiers with benefits tailored to your organization's needs.
                  </p>
                  <p className="font-semibold text-white">
                    Together, we can navigate the future of maritime autonomy.
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="mailto:contact@ntuarchimedes.org"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#3652A4] hover:bg-[#4a6bc7] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Get in Touch
                  </a>
                </div>
              </div>

              {/* Right Side - Team Photo */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/AAV Team Pic.jpeg"
                  alt="AAV Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
