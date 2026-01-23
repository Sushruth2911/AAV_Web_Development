"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  group: string;
}

const team2025_26: TeamMember[] = [
  // Leads
  { name: "Li Tz Yuan", role: "Team Lead", photo: "Li Tz Yuan.jpeg", group: "Leads" },
  { name: "Li Tz Lung", role: "Deputy Team Lead", photo: "Li Tz Lung.jpeg", group: "Leads" },
  { name: "Mayank Shandilya", role: "Deputy Team Lead", photo: "Mayank Shandilya.jpg", group: "Leads" },
  { name: "Prof. Xie Ming", role: "Technical Advisor", photo: "Prof. Xie Ming.jpeg", group: "Leads" },
  { name: "Prof. Erkan Kayacan", role: "Technical Advisor", photo: "Prof. Erkan Kayacan.jpg", group: "Leads" },
  
  // Mechanical
  { name: "Marco Louis Rudyanto", role: "Mechanical Lead", group: "Mechanical" },
  { name: "Rafid Akil", role: "Mechanical Member", photo: "Rafid Akil.jpg", group: "Mechanical" },
  { name: "Vu Quang Hien", role: "Mechanical Member", photo: "Vu Quang Hien.jpg", group: "Mechanical" },
  
  // Electrical
  { name: "Terry Teh", role: "Electrical Software Lead", photo: "Terry Teh.jpg", group: "Electrical" },
  { name: "Vansh Jain", role: "Electrical Software Member", group: "Electrical" },
  { name: "Ong Dun Yan", role: "Electrical Software Member", group: "Electrical" },
  { name: "Ghosh Shoumil", role: "Electrical Hardware Lead", photo: "Ghosh Shoumil.jpg", group: "Electrical" },
  { name: "Isita Singhai", role: "Electrical Hardware Member", group: "Electrical" },
  { name: "Sakthi Deena", role: "Electrical Hardware Member", group: "Electrical" },
  
  // Software
  { name: "Andre Khoo", role: "Perception Lead", photo: "Andre Khoo.jpg", group: "Software" },
  { name: "Sujith Harirajan", role: "Perception Member", photo: "Sujith Harirajan.jpg", group: "Software" },
  { name: "Samantha Ngeow", role: "Perception Member", photo: "Samantha Ngeow.jpg", group: "Software" },
  { name: "Aloysius Chia", role: "Perception Member", photo: "Aloysius Chia.jpeg", group: "Software" },
  { name: "Dinh Quang Anh", role: "Perception Member", photo: "Dinh Quang Anh.jpg", group: "Software" },
  { name: "Ryan Wong", role: "Planning Lead", photo: "Ryan Wong.jpg", group: "Software" },
  { name: "Khai Nguyen", role: "Planning Member", group: "Software" },
  { name: "Maaya Juneja", role: "Planning Member", group: "Software" },
  { name: "Wesley Koh", role: "Planning Member", group: "Software" },
  { name: "Weng Shizhuo", role: "Controls Lead", photo: "Weng Shizhuo.jpg", group: "Software" },
  { name: "Josiah Wei", role: "Controls Member", photo: "Josiah Wei.jpg", group: "Software" },
  { name: "Karthik Mepurath", role: "Controls Member", photo: "Karthik Mepurath.jpg", group: "Software" },
  { name: "Akshay Viswanath", role: "Communications Lead", photo: "Akshay Viswanath.png", group: "Software" },
  { name: "Ryan Chen", role: "Communications Member", photo: "Ryan Chen.jpg", group: "Software" },
  { name: "Alankritha Thaigarajan", role: "Communications Member", photo: "Alankritha Thaigarajan.jpg", group: "Software" },
  { name: "Racshanyaa Jagadish", role: "Communications Member", group: "Software" },
  
  // UAV
  { name: "Chan Jin You", role: "UAV Lead", photo: "Chan Jin You.jpg", group: "UAV" },
  { name: "Hu Tingli", role: "UAV Member", photo: "Hu Tingli.jpg", group: "UAV" },
  { name: "Vishnu Venkatesan", role: "UAV Member", group: "UAV" },
  { name: "Sujith Harirajan", role: "UAV Member", photo: "Sujith Harirajan.jpg", group: "UAV" },
  
  // Acoustics
  { name: "Rithvik Ravikumar", role: "Acoustics Lead", photo: "Rithvik Ravikumar.jpg", group: "Acoustics" },
  { name: "Harshan Elangovan", role: "Acoustics Member", photo: "Harshan Elangovan.jpg", group: "Acoustics" },
  { name: "Saanvi Khemka", role: "Acoustics Member", photo: "Saanvi Khemka.jpg", group: "Acoustics" },
  
  // Business Management
  { name: "Li Tz Yuan", role: "Biz Mag Lead", photo: "Li Tz Yuan.jpeg", group: "Business Management" },
  { name: "Li Tz Lung", role: "Biz Mag Lead", photo: "Li Tz Lung.jpeg", group: "Business Management" },
  { name: "Arun Thiru", role: "Biz Mag Member", photo: "Arun Thiru.jpg", group: "Business Management" },
  { name: "Sametha Sampathkumar", role: "Biz Mag Member", photo: "Sametha Sampathkumar.jpg", group: "Business Management" },
  
  // Web Development
  { name: "Sushruth Muthukrishnan", role: "Web Dev Lead", photo: "Sushruth Muthukrishnan.jpeg", group: "Web Development" },
  { name: "Murugappan Venkatesh", role: "Web Dev Member", group: "Web Development" },
  { name: "Dinh Quang Anh", role: "Web Dev Member", photo: "Dinh Quang Anh.jpg", group: "Web Development" },
  { name: "Racshanyaa Jagadish", role: "Web Dev Member", group: "Web Development" },
  
  // Media & Publicity
  { name: "Dawn Tan", role: "Creative Director", photo: "Dawn Tan.jpg", group: "Media & Publicity" },
  { name: "Teoh Sim Kee", role: "Graphic Designer", group: "Media & Publicity" },
  { name: "Keefe Chen", role: "3D Artist", group: "Media & Publicity" },
  { name: "Megan Lim", role: "Cinematographer & Video Producer", group: "Media & Publicity" },
  { name: "Megan Tan", role: "Cinematographer & Video Producer", group: "Media & Publicity" },
  { name: "Jaime Aw", role: "Video Editor & Effects Specialist", photo: "Jaime Aw.jpg", group: "Media & Publicity" },
  
  // Logistics
  { name: "Aaditya Gunda", role: "Logs Lead", photo: "Aaditya Gunda.jpg", group: "Logistics" },
];

const groupOrder = [
  "Leads",
  "Mechanical",
  "Electrical",
  "Software",
  "UAV",
  "Acoustics",
  "Business Management",
  "Web Development",
  "Media & Publicity",
  "Logistics",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = useState(false);
  const hasPhoto = member.photo && !imageError;

  return (
    <div className="group bg-[#181818] border border-[#1e1e1e] rounded-lg p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-[#1e1e1e]">
          {hasPhoto ? (
            <Image
              src={`/Team/${member.photo}`}
              alt={member.name}
              fill
              className="object-cover"
              style={{ objectPosition: 'center 20%' }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3652A4, #00824E)' }}>
              <span className="text-lg md:text-xl font-bold text-white">
                {getInitials(member.name)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Name + Role */}
      <h3 className="text-base md:text-lg font-semibold mb-1 text-white">
        {member.name}
      </h3>
      <p className="text-sm text-gray-300">
        {member.role}
      </p>
    </div>
  );
}

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("2025/26");

  // Group team members by their group
  const groupedMembers = team2025_26.reduce((acc, member) => {
    if (!acc[member.group]) {
      acc[member.group] = [];
    }
    acc[member.group].push(member);
    return acc;
  }, {} as Record<string, TeamMember[]>);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#121212] text-white font-sans">
        <div className="relative pt-24 pb-20">
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center text-sm mb-8 md:mb-12 text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>

            {/* HERO SECTION */}
            <section className="text-center mb-16 md:mb-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
                Our Team
              </h1>

              <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300">
                A diverse team of passionate experts driving innovation in
                autonomous maritime systems and shaping the future of ocean
                technology.
              </p>
            </section>

            {/* TABS */}
            <section className="mb-12 md:mb-16">
              <div className="flex justify-center gap-4 border-b border-[#1e1e1e]">
                <button
                  onClick={() => setActiveTab("2025/26")}
                  className={`px-6 py-3 text-sm font-semibold transition-all duration-300 relative ${
                    activeTab === "2025/26" ? "text-white" : "text-gray-400"
                  }`}
                  style={activeTab === "2025/26" ? {
                    borderBottom: "2px solid #3652A4"
                  } : {}}
                >
                  2025/26
                </button>
                {/* Add more tabs here in the future */}
              </div>
            </section>

            {/* TEAM CONTENT */}
            {activeTab === "2025/26" && (
              <div className="space-y-20 md:space-y-24">
                {/* Team Photo */}
                <section>
                  <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
                      Team Photo
                    </h2>
                  </div>
                  <div className="relative w-full rounded-lg overflow-hidden border border-[#1e1e1e] bg-[#181818]">
                    <div className="relative aspect-video w-full">
                      <Image
                        src="/Team/1. Team Photo.png"
                        alt="Team Photo 2025/26"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </section>

                {/* Group Sections */}
                {groupOrder.map((groupName, groupIndex) => {
                  const members = groupedMembers[groupName] || [];
                  if (members.length === 0) return null;

                  return (
                    <div key={groupName}>
                      <section className="mb-12 md:mb-16">
                        <div className="mb-8 md:mb-12">
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
                            {groupName}
                          </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                          {members.map((member, index) => (
                            <TeamMemberCard key={`${member.name}-${index}`} member={member} />
                          ))}
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
