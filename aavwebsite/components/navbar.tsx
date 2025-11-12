"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1c1c1c] border-b border-gray-800 text-white z-1000">
      <div className="w-full flex justify-between items-center px-8 py-6 md:py-8">
        {/* ✅ Logo */}
        <div>
          <Link href="/" className="font-bold text-xl hover:text-gray-300">
            AAV - LOGO
          </Link>
        </div>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-base relative">
          <Link href="/" className="hover:text-gray-300">Home</Link>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-300">About ▼</button>
            <div className="absolute hidden group-hover:block bg-[#1c1c1c] border border-gray-700 mt-2 rounded-md w-40 z-2000">
              <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-800">Our Team</Link>
              <Link href="/about/achievements" className="block px-4 py-2 hover:bg-gray-800">Achievements</Link>
              <Link href="/about/news" className="block px-4 py-2 hover:bg-gray-800">News</Link>
            </div>
          </div>

          <Link href="/asv" className="hover:text-gray-300">ASV</Link>

          {/* UAV Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-300">UAV ▼</button>
            <div className="absolute hidden group-hover:block bg-[#1c1c1c] border border-gray-700 mt-2 rounded-md w-40 z-2000">
              <Link href="/uav/1" className="block px-4 py-2 hover:bg-gray-800">UAV 1.0</Link>
              <Link href="/uav/2" className="block px-4 py-2 hover:bg-gray-800">UAV 2.0</Link>
            </div>
          </div>

          {/* Competitions Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-300">Competitions ▼</button>
            <div className="absolute hidden group-hover:block bg-[#1c1c1c] border border-gray-700 mt-2 rounded-md w-40 z-2000">
              <Link href="/competitions/robosub" className="block px-4 py-2 hover:bg-gray-800">RoboSub</Link>
              <Link href="/competitions/robotx" className="block px-4 py-2 hover:bg-gray-800">RobotX</Link>
            </div>
          </div>
          <Link href="/outreach" className="hover:text-gray-300">Outreach</Link>
          <Link href="/sponsors" className="hover:text-gray-300">Sponsors</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>

        {/* ✅ Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="md:hidden px-8 pb-4 flex flex-col space-y-3 text-sm text-right bg-[#1c1c1c] border-t border-gray-800 z-1500">
          <Link href="/" className="hover:text-gray-300">Home</Link>

          {/* Mobile About Dropdown */}
          <div>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "about" ? null : "about")
              }
              className="w-full text-right hover:text-gray-300"
            >
              About ▼
            </button>
            {openDropdown === "about" && (
              <div className="flex flex-col space-y-1 mt-2 pr-4 text-gray-300">
                <Link href="/about/team" className="hover:text-white">Our Team</Link>
                <Link href="/about/achievements" className="hover:text-white">Achievements</Link>
                <Link href="/about/news" className="hover:text-white">News</Link>
              </div>
            )}
          </div>

          <Link href="/asv" className="hover:text-gray-300">ASV</Link>

          {/* Mobile UAV Dropdown */}
          <div>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "uav" ? null : "uav")
              }
              className="w-full text-right hover:text-gray-300"
            >
              UAV ▼
            </button>
            {openDropdown === "uav" && (
              <div className="flex flex-col space-y-1 mt-2 pr-4 text-gray-300">
                <Link href="/uav/1" className="hover:text-white">UAV 1.0</Link>
                <Link href="/uav/2" className="hover:text-white">UAV 2.0</Link>
              </div>
            )}
          </div>

          {/* Mobile Competitions Dropdown */}
          <div>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "competitions" ? null : "competitions")
              }
              className="w-full text-right hover:text-gray-300"
            >
              Competitions ▼
            </button>
            {openDropdown === "competitions" && (
              <div className="flex flex-col space-y-1 mt-2 pr-4 text-gray-300">
                <Link href="/competitions/robosub" className="hover:text-white">RoboSub</Link>
                <Link href="/competitions/robotx" className="hover:text-white">RobotX</Link>
              </div>
            )}
          </div>

          <Link href="/sponsors" className="hover:text-gray-300">Sponsors</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
      )}
    </header>
  );
}
