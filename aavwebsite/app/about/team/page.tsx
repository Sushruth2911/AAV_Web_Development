"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  group: string;
}

const team2024_25: TeamMember[] = [
  // Leads
  { name: "Darren Suen", role: "Team Lead", group: "Leads" },
  { name: "Li Tz Yuan", role: "Deputy Team Lead", group: "Leads" },
  { name: "Li Tz Lung", role: "Deputy Team Lead", group: "Leads" },
  { name: "Prof. Xie Ming", role: "Technical Advisor", group: "Leads" },
  
  // Mechanical
  { name: "Ho Ky Trung", role: "Mechanical Lead", group: "Mechanical" },
  { name: "Jiang Zihao", role: "Mechanical Member", group: "Mechanical" },
  { name: "Santhana Bose", role: "Mechanical Member", group: "Mechanical" },
  
  // Software - Perception
  { name: "Zhang Qile", role: "Perception Lead", group: "Software" },
  { name: "Song Jieni", role: "Perception Member", group: "Software" },
  { name: "Zhang Yan", role: "Perception Member", group: "Software" },
  { name: "Chan Wei Hua", role: "Perception Member", group: "Software" },
  
  // Software - Planning
  { name: "Yang Siyang", role: "Planning Lead", group: "Software" },
  { name: "Song Ziyi", role: "Planning Member", group: "Software" },
  { name: "Deng Haoyuan", role: "Planning Member", group: "Software" },
  { name: "Wong Rui Yue", role: "Planning Member", group: "Software" },
  
  // Software - Controls & Communications
  { name: "Zhao Jiayan", role: "Controls & Communications Lead", group: "Software" },
  { name: "Yan Zhenqi", role: "Controls Member", group: "Software" },
  { name: "Chang Yu Wei", role: "Controls Member", group: "Software" },
  { name: "Weng Shizhuo", role: "Controls Member", group: "Software" },
  { name: "Pang Wentao", role: "Communications Member", group: "Software" },
  { name: "Akshay Viswanath", role: "Communications Member", group: "Software" },
  { name: "Mayank Shandilya", role: "Communications Member", group: "Software" },
  
  // UAV
  { name: "Benjamin Tai", role: "UAV Lead", group: "UAV" },
  { name: "Darren Suen", role: "UAV Member", group: "UAV" },
  { name: "Frentzen Seow", role: "UAV Member", group: "UAV" },
  { name: "Zachariah Lim", role: "UAV Member", group: "UAV" },
  
  // Business & Development
  { name: "Li Tz Yuan", role: "Business Management & Logistics", group: "Business & Development" },
  { name: "Li Tz Lung", role: "Business Management & Logistics", group: "Business & Development" },
  { name: "Akshay Viswanath", role: "Web Developer", group: "Business & Development" },
];

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
  { name: "Ghosh Shoumil", role: "Electrical Hardware Lead", photo: "Ghosh Shoumil.jpg", group: "Electrical" },
  { name: "Ishita Singhal", role: "Electrical Hardware Member", group: "Electrical" },
  { name: "Sakthi Deena", role: "Electrical Hardware Member", group: "Electrical" },
  
  // Software
  { name: "Andre Khoo", role: "Perception Lead", photo: "Andre Khoo.jpg", group: "Software" },
  { name: "Sujith Harirajan", role: "Perception Member", photo: "Sujith Harirajan.jpg", group: "Software" },
  { name: "Samantha Ngeow", role: "Perception Member", photo: "Samantha Ngeow.jpg", group: "Software" },
  { name: "Aloysius Chia", role: "Perception Member", photo: "Aloysius Chia.jpeg", group: "Software" },
  { name: "Dinh Quang Anh", role: "Perception Member", photo: "Dinh Quang Anh.jpg", group: "Software" },
  { name: "Ryan Wong", role: "Planning Lead", photo: "Ryan Wong.jpg", group: "Software" },
  { name: "Maaya Juneja", role: "Planning Member", group: "Software" },
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

const groupOrder2024_25 = [
  "Leads",
  "Mechanical",
  "Software",
  "UAV",
  "Business & Development",
];

const groupOrder2025_26 = [
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

// Map of member names to actual photo filenames (prevents 404 errors)
const photoMap: Record<string, string> = {
  "Darren Suen": "Darren Suen.png",
  "Li Tz Yuan": "Li Tz Yuan.jpeg",
  "Li Tz Lung": "Li Tz Lung.jpeg",
  "Prof. Xie Ming": "Prof. Xie Ming.jpeg",
  "Ho Ky Trung": "Ho Ky Trung.png",
  "Jiang Zihao": "Jiang Zihao.png",
  "Santhana Bose": "Santhana Bose.png",
  "Zhang Qile": "Zhang Qile.png",
  "Song Jieni": "Song Jieni.png",
  "Zhang Yan": "Zhang Yan.png",
  "Chan Wei Hua": "Chan Wei Hua.png",
  "Yang Siyang": "Yang Siyang.png",
  "Song Ziyi": "Song Ziyi.png",
  "Deng Haoyuan": "Deng Haoyuan.png",
  "Wong Rui Yue": "Wong Rui Yue.png",
  "Zhao Jiayan": "Zhao Jiayan.png",
  "Yan Zhenqi": "Yan Zhenqi.png",
  "Chang Yu Wei": "Chang Yu Wei.png",
  "Weng Shizhuo": "Weng Shizhuo.jpg",
  "Pang Wentao": "Pang Wentao.png",
  "Akshay Viswanath": "Akshay Viswanath.png",
  "Mayank Shandilya": "Mayank Shandilya.jpg",
  "Benjamin Tai": "Benjamin Tai.png",
  "Frentzen Seow": "Frentzen Seow.png",
  "Zachariah Lim": "Zachariah Lim.png",
};

function TeamMemberCard({ member, activeTab }: { member: TeamMember; activeTab: string }) {
  const [imageError, setImageError] = useState(false);
  const [triedPaths, setTriedPaths] = useState<string[]>([]);
  
  // Get photo path - for 2024-25 tab, check /Team/2024/ first with both jpg/png, then fallback to /Team/
  const getPhotoPath = (): string | null => {
    if (member.photo) {
      return `/Team/${member.photo}`;
    }
    
    const mappedPhoto = photoMap[member.name];
    if (!mappedPhoto) {
      return null;
    }
    
    // Extract base name without extension
    const baseName = mappedPhoto.replace(/\.(jpg|jpeg|png)$/i, '');
    
    // For 2024-25 tab, try /Team/2024/ first with both extensions
    if (activeTab === "2024-25") {
      // Try .png first, then .jpg
      if (!triedPaths.some(p => p.includes('/Team/2024/'))) {
        return `/Team/2024/${baseName}.png`;
      }
      if (triedPaths.length === 1 && triedPaths[0].includes('/Team/2024/')) {
        return `/Team/2024/${baseName}.jpg`;
      }
    }
    
    // Fallback to regular /Team/ folder
    return `/Team/${mappedPhoto}`;
  };
  
  const photoPath = getPhotoPath();
  const hasPhoto = photoPath && !imageError;

  const handleImageError = () => {
    if (photoPath) {
      setTriedPaths([...triedPaths, photoPath]);
      
      // If we've tried both 2024 extensions, fallback to regular folder
      const tried2024Count = triedPaths.filter(p => p.includes('/Team/2024/')).length;
      if (activeTab === "2024-25" && tried2024Count < 2 && photoPath.includes('/Team/2024/')) {
        // Will try next extension on next render
        return;
      }
    }
    setImageError(true);
  };
  
  // Reset error state when activeTab changes
  useEffect(() => {
    setImageError(false);
    setTriedPaths([]);
  }, [activeTab]);

  return (
    <div className="group bg-[#181818] border border-[#1e1e1e] rounded-lg p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-[#1e1e1e]">
          {hasPhoto ? (
            <Image
              src={photoPath}
              alt={member.name}
              fill
              className="object-cover"
              style={{ objectPosition: 'center 20%' }}
              onError={handleImageError}
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
  const [activeTab, setActiveTab] = useState("2024-25");

  // Group team members by their group based on active tab
  const currentTeam = activeTab === "2024-25" ? team2024_25 : team2025_26;
  const currentGroupOrder = activeTab === "2024-25" ? groupOrder2024_25 : groupOrder2025_26;
  
  const groupedMembers = currentTeam.reduce((acc, member) => {
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
                  onClick={() => setActiveTab("2024-25")}
                  className={`px-6 py-3 text-sm font-semibold transition-all duration-300 relative ${
                    activeTab === "2024-25" ? "text-white" : "text-gray-400"
                  }`}
                  style={activeTab === "2024-25" ? {
                    borderBottom: "2px solid #3652A4"
                  } : {}}
                >
                  2024-25
                </button>
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
              </div>
            </section>

            {/* TEAM CONTENT */}
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
                      src={activeTab === "2024-25" ? "/Team/Team Photo 2024.png" : "/Team/1. Team Photo.png"}
                      alt={`Team Photo ${activeTab}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </section>

              {/* Group Sections */}
              {currentGroupOrder.map((groupName) => {
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
                          <TeamMemberCard key={`${member.name}-${index}-${member.group}`} member={member} activeTab={activeTab} />
                        ))}
                      </div>
                    </section>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
