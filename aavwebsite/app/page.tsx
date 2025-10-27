"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#121212] text-white font-sans min-h-screen pt-20">
        {/* 🚀 Trailer Section */}
        <section className="py-50 text-center border-b border-[#1e1e1e]">
          <h2 className="text-xl md:text-2xl font-medium">
            🚀 Trailer Section (Coming Soon)
          </h2>
        </section>

        {/* 🧠 Innovation Section */}
        <section className="px-10 py-40 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-b border-[#1e1e1e] gap-10">
          <div className="md:w-1/2 space-y-3">
            <h3 className="text-lg font-semibold">Innovation in Motion</h3>
            <p className="text-gray-300 leading-relaxed">
              Our team at NTU AAV is constantly pushing boundaries in UAV and
              autonomous vehicle technologies.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end gap-4">
            <div className="bg-[#2a2a2a] h-24 w-24 rounded-md"></div>
            <div className="bg-[#2a2a2a] h-24 w-24 rounded-md"></div>
            <div className="bg-[#2a2a2a] h-24 w-24 rounded-md"></div>
          </div>
        </section>

        {/* 🪄 ASV / UAV Section */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#181818] h-72 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
            <div>
              <h4 className="text-2xl font-bold">ASV</h4>
            </div>
            <Link
              href="/asv"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>
          <div className="bg-[#181818] h-72 p-10 flex flex-col justify-between border-b border-[#1e1e1e]">
            <div>
              <h4 className="text-2xl font-bold">UAV</h4>
            </div>
            <Link
              href="/uav"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>
        </section>

        {/* 🏆 Competitions Section */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#181818] h-72 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
            <div>
              <h4 className="text-2xl font-bold">RobotX</h4>
            </div>
            <Link
              href="/competitions/robotx"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>
          <div className="bg-[#181818] h-72 p-10 flex flex-col justify-between border-b border-[#1e1e1e]">
            <div>
              <h4 className="text-2xl font-bold">SUAS</h4>
            </div>
            <Link
              href="/competitions/suas"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>
        </section>

        <section className="bg-[#0d0d0d] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1e1e1e] border-t border-[#1e1e1e]">
          {/* Column 1 */}
          <div className="flex justify-center items-center py-50 hover:bg-[#141414] transition">
            <Link
              href="/about/team"
              className="text-lg font-medium hover:text-white hover:underline transition"
            >
              Our Team →
            </Link>
          </div>

          {/* Column 2 */}
          <div className="flex justify-center items-center py-50 hover:bg-[#141414] transition">
            <Link
              href="/about/achievements"
              className="text-lg font-medium hover:text-white hover:underline transition"
            >
              Our Achievements →
            </Link>
          </div>

          {/* Column 3 */}
          <div className="flex justify-center items-center py-50 hover:bg-[#141414] transition">
            <Link
              href="/about/outreach"
              className="text-lg font-medium hover:text-white hover:underline transition"
            >
              Outreach →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
