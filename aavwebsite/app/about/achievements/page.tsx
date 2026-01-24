"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function AchievementsPage() {
  const [currentRobotXPhoto, setCurrentRobotXPhoto] = useState(0);
  const [currentVRXPhoto, setCurrentVRXPhoto] = useState(0);
  
  // RobotX 2024 photos
  const robotx2024Photos = [
    "/Achievements/RobotX2024/Cert_RBX2024.png",
    "/Achievements/RobotX2024/CompetingTeams_RBX2024.png",
    "/Achievements/RobotX2024/Brothers_RBX2024.png",
    "/Achievements/RobotX2024/Fireworks_RBX2024.png",
    "/Achievements/RobotX2024/Winning_RBX2024.png",
  ];

  // VRX 2022 photos
  const vrx2022Photos = [
    "/Achievements/VRX2022/ASV_Dock_VRX22.png",
    "/Achievements/VRX2022/ASV_DockDeliver_VRX22.png",
    "/Achievements/VRX2022/ASV_Obstacle_VRX22.png",
    "/Achievements/VRX2022/ASV_Orientation_VRX22.png",
    "/Achievements/VRX2022/ASVLocAndChar_VRX22.png",
    "/Achievements/VRX2022/ASVWayfinding_VRX22.png",
    "/Achievements/VRX2022/ASVWildlife_VRX22.png",
    "/Achievements/VRX2022/Cert_VRX22.png",
    "/Achievements/VRX2022/OSContCert_VRX22.png",
    "/Achievements/VRX2022/RankImpCert_VRX22.png",
    "/Achievements/VRX2022/VideoCert_VRX22.png",
    "/Achievements/VRX2022/WaiverCert_VRX22.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRobotXPhoto((prev) => (prev + 1) % robotx2024Photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [robotx2024Photos.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVRXPhoto((prev) => (prev + 1) % vrx2022Photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [vrx2022Photos.length]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#121212] text-white font-sans">
        <div className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center text-sm mb-8 md:mb-12 text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>

            {/* Section 1: Maritime RobotX Challenge 2024 */}
            <section className="mb-20 md:mb-32">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-center uppercase tracking-tight">
                Achievements
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 mb-12 md:mb-16 text-center uppercase tracking-tight">
                Maritime RobotX 2024
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
                {/* Left Side - Caption */}
                <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
                  <p className="text-xl md:text-2xl font-semibold text-white mb-4">
                    Archimedes achieved 5th place in the Autonomy Challenge and was awarded USD $4,000.
                  </p>
                  <p>
                    Going into RobotX 2024, we faced significant challenges. With no prior experience in RobotX and no senior members to guide us — unlike many other teams — we had to figure everything out from scratch. On top of that, having international dissertation students on the team introduced coordination issues, as time zone differences and limited opportunities for in-person testing slowed down collaboration.
                  </p>
                  <p>
                    Logistically, navigating legal documentation and the strict cargo requirements for international shipment was daunting. But Tz Yuan, our Deputy Team Lead (current Team Lead), stepped up and successfully managed the entire shipment process, ensuring our equipment reached the U.S. and returned safely — no small feat for a first-time team.
                  </p>
                  <p>
                    Despite limited resources and numerous setbacks, we pressed on. Many of our systems weren't functioning as expected in the early stages. We didn't think we would make it to the semi-finals of the Autonomy Challenge, let alone the finals. But through continuous iteration and adjustment, we made steady progress.
                  </p>
                  <p>
                    Ultimately, these efforts culminated in our strongest performance in a decade — a result that reflects the boldness and perseverance of the entire team.
                  </p>
                </div>

                {/* Right Side - Photo Carousel */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0a0a0a]">
                  <div className="relative w-full h-full">
                    {robotx2024Photos.map((photo, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          index === currentRobotXPhoto ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={photo}
                          alt={`RobotX 2024 Photo ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentRobotXPhoto((prev) => (prev - 1 + robotx2024Photos.length) % robotx2024Photos.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                    aria-label="Previous photo"
                  >
                    <span className="text-white text-xl">←</span>
                  </button>
                  <button
                    onClick={() => setCurrentRobotXPhoto((prev) => (prev + 1) % robotx2024Photos.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                    aria-label="Next photo"
                  >
                    <span className="text-white text-xl">→</span>
                  </button>

                  {/* Photo Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {robotx2024Photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentRobotXPhoto(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentRobotXPhoto
                            ? 'bg-white w-8'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to photo ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Virtual RobotX (VRX) Competition 2022 */}
            <section className="mb-20 md:mb-32">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 mb-12 md:mb-16 text-center uppercase tracking-tight">
                Virtual RobotX (VRX) Competition 2022
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
                {/* Left Side - Caption */}
                <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
                  <p>
                    VRX is the simulation-based counterpart to the Maritime RobotX Challenge, designed to introduce students to autonomous maritime systems through a Gazebo-based virtual environment. Organised by RoboNation in collaboration with the U.S. Office of Naval Research (ONR), Naval Postgraduate School (NPS), and Open Robotics (OR), VRX provides an open-source platform for teams to design, test, and refine autonomous surface vehicle solutions — entirely in simulation.
                  </p>
                  <p>
                    Archimedes competed in the 2022 edition of VRX and achieved a 3rd place finish, missing second place by just 1 point. Alongside the USD $1,000 prize, the team was recognised with multiple special awards:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remarkable Video Submission Award</li>
                    <li>Biggest Leap in Ranking (Phase 2 to Phase 3)</li>
                    <li>Phenomenal Open-Source Contributor</li>
                    <li>Fee Waiver for the 2023 RoboBoat Competition</li>
                  </ul>
                </div>

                {/* Right Side - Photo Carousel */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0a0a0a]">
                  <div className="relative w-full h-full">
                    {vrx2022Photos.map((photo, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          index === currentVRXPhoto ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={photo}
                          alt={`VRX 2022 Photo ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentVRXPhoto((prev) => (prev - 1 + vrx2022Photos.length) % vrx2022Photos.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                    aria-label="Previous photo"
                  >
                    <span className="text-white text-xl">←</span>
                  </button>
                  <button
                    onClick={() => setCurrentVRXPhoto((prev) => (prev + 1) % vrx2022Photos.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all z-10"
                    aria-label="Next photo"
                  >
                    <span className="text-white text-xl">→</span>
                  </button>

                  {/* Photo Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {vrx2022Photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVRXPhoto(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentVRXPhoto
                            ? 'bg-white w-8'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to photo ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
