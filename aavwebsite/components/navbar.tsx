// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-[#1c1c1c] border-b border-gray-800 text-white z-50">
//       <div className="w-full flex justify-between items-center px-8 py-6 md:py-8">
//         {/* Logo */}
//         <Link href="/" className="font-bold text-xl hover:text-gray-300">
//           AAV - LOGO
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-8 text-base relative z-50">
//           <Link href="/" className="hover:text-gray-300">
//             Home
//           </Link>

//           {/* About Dropdown */}
//           <div className="relative group inline-block">
//             <button className="hover:text-gray-300">
//               About ▼
//             </button>
//             <div
//               className="
//                 absolute left-0 top-full
//                 hidden group-hover:block
//                 bg-[#1c1c1c] border border-gray-700
//                 rounded-md w-40
//                 z-50
//               "
//             >
//               <Link href="/about/aboutus" className="block px-4 py-2 hover:bg-gray-800">
//                 About Us
//               </Link>
//               <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-800">
//                 Our Team
//               </Link>
//               <Link href="/about/achievements" className="block px-4 py-2 hover:bg-gray-800">
//                 Achievements
//               </Link>
//               <Link href="/about/news" className="block px-4 py-2 hover:bg-gray-800">
//                 News
//               </Link>
//             </div>
//           </div>

//           {/* ASV */}
//           <Link href="/asv" className="hover:text-gray-300">
//             ASV
//           </Link>

//           {/* UAV Dropdown */}
//           <div className="relative group inline-block">
//             <button className="hover:text-gray-300">
//               UAV ▼
//             </button>
//             <div
//               className="
//                 absolute left-0 top-full
//                 hidden group-hover:block
//                 bg-[#1c1c1c] border border-gray-700
//                 rounded-md w-40
//                 z-50
//               "
//             >
//               <Link href="/uav/1" className="block px-4 py-2 hover:bg-gray-800">
//                 UAV 1.0
//               </Link>
//               <Link href="/uav/2" className="block px-4 py-2 hover:bg-gray-800">
//                 UAV 2.0
//               </Link>
//             </div>
//           </div>

//           {/* Competitions Dropdown */}
//           <div className="relative group inline-block">
//             <button className="hover:text-gray-300">
//               Competitions ▼
//             </button>
//             <div
//               className="
//                 absolute left-0 top-full
//                 hidden group-hover:block
//                 bg-[#1c1c1c] border border-gray-700
//                 rounded-md w-40
//                 z-50
//               "
//             >
//               <Link href="/competitions/robosub" className="block px-4 py-2 hover:bg-gray-800">
//                 RoboSub
//               </Link>
//               <Link href="/competitions/robotx" className="block px-4 py-2 hover:bg-gray-800">
//                 RobotX
//               </Link>
//             </div>
//           </div>

//           <Link href="/outreach" className="hover:text-gray-300">
//             Outreach
//           </Link>
//           <Link href="/sponsors" className="hover:text-gray-300">
//             Sponsors
//           </Link>
//           <Link href="/shop" className="hover:text-gray-300">
//             Shop
//           </Link>
//           <Link href="/contact" className="hover:text-gray-300">
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden focus:outline-none z-50"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMenuOpen && (
//         <nav className="md:hidden px-8 pb-4 flex flex-col space-y-3 text-sm text-right bg-[#1c1c1c] border-t border-gray-800 z-40">
//           <Link href="/" className="hover:text-gray-300">
//             Home
//           </Link>

//           {/* Mobile About Dropdown */}
//           <div>
//             <button
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "about" ? null : "about")
//               }
//               className="w-full text-right hover:text-gray-300"
//             >
//               About ▼
//             </button>
//             {openDropdown === "about" && (
//               <div className="flex flex-col space-y-1 mt-2 pr-4 text-gray-300">
//                 <Link href="/about/aboutus" className="hover:text-white">
//                   About
//                 </Link>
//                 <Link href="/about/team" className="hover:text-white">
//                   Our Team
//                 </Link>
//                 <Link href="/about/achievements" className="hover:text-white">
//                   Achievements
//                 </Link>
//                 <Link href="/about/news" className="hover:text-white">
//                   News
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link href="/asv" className="hover:text-gray-300">
//             ASV
//           </Link>

//           {/* Mobile UAV Dropdown */}
//           <div>
//             <button
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "uav" ? null : "uav")
//               }
//               className="w-full text-right hover:text-gray-300"
//             >
//               UAV ▼
//             </button>
//             {openDropdown === "uav" && (
//               <div className="flex flex-col space-y-1 mt-2 pr-4 text-gray-300">
//                 <Link href="/uav/1" className="hover:text-white">
//                   UAV 1.0
//                 </Link>
//                 <Link href="/uav/2" className="hover:text-white">
//                   UAV 2.0
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile Competitions Dropdown */}
//           <div>
//             <button
//               onClick={() =>
//                 setOpenDropdown(
//                   openDropdown === "competitions" ? null : "competitions"
//                 )
//               }
//               className="w-full text-right hover:text-gray-300"
//             >
//               Competitions ▼
//             </button>
//             {openDropdown === "competitions" && (
//               <div className="flex flex-col space-y-1 mt-2 pr-4 text-gray-300">
//                 <Link href="/competitions/robosub" className="hover:text-white">
//                   RoboSub
//                 </Link>
//                 <Link href="/competitions/robotx" className="hover:text-white">
//                   RobotX
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link href="/sponsors" className="hover:text-gray-300">
//             Sponsors
//           </Link>
//           <Link href="/shop" className="hover:text-gray-300">
//             Shop
//           </Link>
//           <Link href="/contact" className="hover:text-gray-300">
//             Contact
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }


// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 text-white z-50">
//       <div className="w-full flex justify-between items-center px-8 py-3 md:py-4">
//         {/* Bigger logo */}
//         <Link href="/" className="flex items-center hover:opacity-90">
//           <Image
//             src="/aavlogo.jpg"
//             alt="AAV Logo"
//             width={220}
//             height={70}
//             priority
//             className="h-14 w-auto object-contain"
//           />
//         </Link>

//         {/* Desktop Nav (BIGGER FONT) */}
//         <nav className="hidden md:flex space-x-8 text-lg relative z-50">
//           <Link href="/" className="hover:text-gray-300">
//             Home
//           </Link>

//           {/* About Dropdown */}
//           <div className="relative group inline-block">
//             <button className="hover:text-gray-300">About ▼</button>
//             <div
//               className="
//                 absolute left-0 top-full
//                 hidden group-hover:block
//                 bg-black border border-gray-700
//                 rounded-md w-44
//                 z-50
//               "
//             >
//               <Link href="/about/aboutus" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 About Us
//               </Link>
//               <Link href="/about/team" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 Our Team
//               </Link>
//               <Link href="/about/achievements" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 Achievements
//               </Link>
//               <Link href="/about/news" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 News
//               </Link>
//             </div>
//           </div>

//           {/* ASV Dropdown */}
//           <div className="relative group inline-block">
//             <button className="hover:text-gray-300">ASV ▼</button>
//             <div
//               className="
//                 absolute left-0 top-full
//                 hidden group-hover:block
//                 bg-black border border-gray-700
//                 rounded-md w-60
//                 z-50
//               "
//             >
//               <Link href="/asv/1" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 ASV 1.0 (RobotX 2024)
//               </Link>
//               <Link href="/asv/2" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 ASV 2.0 (RobotX 2026)
//               </Link>
//             </div>
//           </div>

//           {/* UAV Dropdown */}
//           <div className="relative group inline-block">
//             <button className="hover:text-gray-300">UAV ▼</button>
//             <div
//               className="
//                 absolute left-0 top-full
//                 hidden group-hover:block
//                 bg-black border border-gray-700
//                 rounded-md w-60
//                 z-50
//               "
//             >
//               <Link href="/uav/1" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 UAV 1.0 (RobotX 2024)
//               </Link>
//               <Link href="/uav/2" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 UAV 2.0 (SUAS 2025)
//               </Link>
//               <Link href="/uav/3" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 UAV 3.0 (RobotX 2026)
//               </Link>
//             </div>
//           </div>

//           {/* Competitions Dropdown */}
//           <div className="relative group inline-block">
//             <button className="hover:text-gray-300">Competitions ▼</button>
//             <div
//               className="
//                 absolute left-0 top-full
//                 hidden group-hover:block
//                 bg-black border border-gray-700
//                 rounded-md w-52
//                 z-50
//               "
//             >
//               <Link href="/competitions/robotx-2024" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 RobotX 2024
//               </Link>
//               <Link href="/competitions/suas-2025" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 SUAS 2025
//               </Link>
//               <Link href="/competitions/robotx-2026" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 RobotX 2026
//               </Link>
//             </div>
//           </div>

//           <Link href="/outreach" className="hover:text-gray-300">
//             Outreach
//           </Link>

//           {/* Sponsors Dropdown */}
//           <div className="relative group inline-block">
//             <button className="hover:text-gray-300">Sponsors ▼</button>
//             <div
//               className="
//                 absolute left-0 top-full
//                 hidden group-hover:block
//                 bg-black border border-gray-700
//                 rounded-md w-44
//                 z-50
//               "
//             >
//               <Link href="/sponsors/2024" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 2024 Sponsors
//               </Link>
//               <Link href="/sponsors/2026" className="block px-4 py-3 hover:bg-gray-800 text-base">
//                 2026 Sponsors
//               </Link>
//             </div>
//           </div>

//           <Link href="/shop" className="hover:text-gray-300">
//             Shop
//           </Link>

//           <Link href="/newsroom" className="hover:text-gray-300">
//             Newsroom
//           </Link>

//           <Link href="/contact" className="hover:text-gray-300">
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden focus:outline-none z-50"
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu (BIGGER FONT) */}
//       {isMenuOpen && (
//         <nav className="md:hidden px-8 pb-4 flex flex-col space-y-3 text-base text-right bg-black border-t border-gray-800 z-40">
//           <Link href="/" className="hover:text-gray-300">
//             Home
//           </Link>

//           <div>
//             <button
//               onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
//               className="w-full text-right hover:text-gray-300"
//             >
//               About ▼
//             </button>
//             {openDropdown === "about" && (
//               <div className="flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base">
//                 <Link href="/about/aboutus" className="hover:text-white">
//                   About Us
//                 </Link>
//                 <Link href="/about/team" className="hover:text-white">
//                   Our Team
//                 </Link>
//                 <Link href="/about/achievements" className="hover:text-white">
//                   Achievements
//                 </Link>
//                 <Link href="/about/news" className="hover:text-white">
//                   News
//                 </Link>
//               </div>
//             )}
//           </div>

//           <div>
//             <button
//               onClick={() => setOpenDropdown(openDropdown === "asv" ? null : "asv")}
//               className="w-full text-right hover:text-gray-300"
//             >
//               ASV ▼
//             </button>
//             {openDropdown === "asv" && (
//               <div className="flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base">
//                 <Link href="/asv/1" className="hover:text-white">
//                   ASV 1.0 (RobotX 2024)
//                 </Link>
//                 <Link href="/asv/2" className="hover:text-white">
//                   ASV 2.0 (RobotX 2026)
//                 </Link>
//               </div>
//             )}
//           </div>

//           <div>
//             <button
//               onClick={() => setOpenDropdown(openDropdown === "uav" ? null : "uav")}
//               className="w-full text-right hover:text-gray-300"
//             >
//               UAV ▼
//             </button>
//             {openDropdown === "uav" && (
//               <div className="flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base">
//                 <Link href="/uav/1" className="hover:text-white">
//                   UAV 1.0 (RobotX 2024)
//                 </Link>
//                 <Link href="/uav/2" className="hover:text-white">
//                   UAV 2.0 (SUAS 2025)
//                 </Link>
//                 <Link href="/uav/3" className="hover:text-white">
//                   UAV 3.0 (RobotX 2026)
//                 </Link>
//               </div>
//             )}
//           </div>

//           <div>
//             <button
//               onClick={() => setOpenDropdown(openDropdown === "competitions" ? null : "competitions")}
//               className="w-full text-right hover:text-gray-300"
//             >
//               Competitions ▼
//             </button>
//             {openDropdown === "competitions" && (
//               <div className="flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base">
//                 <Link href="/competitions/robotx-2024" className="hover:text-white">
//                   RobotX 2024
//                 </Link>
//                 <Link href="/competitions/suas-2025" className="hover:text-white">
//                   SUAS 2025
//                 </Link>
//                 <Link href="/competitions/robotx-2026" className="hover:text-white">
//                   RobotX 2026
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link href="/outreach" className="hover:text-gray-300">
//             Outreach
//           </Link>

//           <div>
//             <button
//               onClick={() => setOpenDropdown(openDropdown === "sponsors" ? null : "sponsors")}
//               className="w-full text-right hover:text-gray-300"
//             >
//               Sponsors ▼
//             </button>
//             {openDropdown === "sponsors" && (
//               <div className="flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base">
//                 <Link href="/sponsors/2024" className="hover:text-white">
//                   2024 Sponsors
//                 </Link>
//                 <Link href="/sponsors/2026" className="hover:text-white">
//                   2026 Sponsors
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link href="/shop" className="hover:text-gray-300">
//             Shop
//           </Link>

//           <Link href="/newsroom" className="hover:text-gray-300">
//             Newsroom
//           </Link>

//           <Link href="/contact" className="hover:text-gray-300">
//             Contact
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }

"use client";

import CardNav from './CardNav';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      // Always visible on non-home pages
      setIsVisible(true);
      return;
    }

    // On home page, hide initially and show after scrolling
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsVisible(scrollPosition > viewportHeight * 0.8);
    };

    // Check initial scroll position
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const items = [
    {
      label: "About",
      bgColor: "rgba(13, 7, 22, 0.7)", // Dark purple with transparency for glass effect
      textColor: "#fff",
      links: [
        { label: "About Us", href: "/about/aboutus", ariaLabel: "About Us" },
        { label: "Our Team", href: "/about/team", ariaLabel: "Our Team" },
        { label: "Achievements", href: "/about/achievements", ariaLabel: "Achievements" },
      ]
    },
    {
      label: "ASV",
      bgColor: "rgba(23, 13, 39, 0.7)", // Darker purple with transparency
      textColor: "#fff",
      links: [
        { label: "ASV 1.0 (RobotX 2024)", href: "/asv/1", ariaLabel: "ASV 1.0 (RobotX 2024)" },
        { label: "ASV 2.0 (RobotX 2026)", href: "/asv/2", ariaLabel: "ASV 2.0 (RobotX 2026)" }
      ]
    },
    {
      label: "UAV",
      bgColor: "rgba(30, 20, 45, 0.7)", // Medium purple with transparency
      textColor: "#fff",
      links: [
        { label: "UAV 1.0 (RobotX 2024)", href: "/uav/1", ariaLabel: "UAV 1.0 (RobotX 2024)" },
        { label: "UAV 2.0 (SUAS 2025)", href: "/uav/2", ariaLabel: "UAV 2.0 (SUAS 2025)" },
        { label: "UAV 3.0 (RobotX 2026)", href: "/uav/3", ariaLabel: "UAV 3.0 (RobotX 2026)" }
      ]
    },
    {
      label: "Community",
      bgColor: "rgba(39, 30, 55, 0.7)", // Even darker purple with transparency
      textColor: "#fff",
      links: [
        { label: "Outreach", href: "/outreach", ariaLabel: "Outreach" },
        { label: "2024 Sponsors", href: "/sponsors/2024", ariaLabel: "2024 Sponsors" },
        { label: "2026 Sponsors", href: "/sponsors/2026", ariaLabel: "2026 Sponsors" }
      ]
    },
    {
      label: "Resources",
      bgColor: "rgba(45, 35, 60, 0.7)", // Darkest purple with transparency
      textColor: "#fff",
      links: [
        { label: "Shop", href: "/shop", ariaLabel: "Shop" },
        { label: "Newsroom", href: "/about/news", ariaLabel: "Newsroom" },
        { label: "Contact", href: "/contact", ariaLabel: "Contact" }
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <CardNav
        logo="/Updated AAV Logo (White).png"
        logoAlt="AAV Logo"
        items={items}
        baseColor="#fff"
        menuColor="#fff"
        buttonBgColor="rgba(255, 255, 255, 0.1)"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </header>
  );
}
