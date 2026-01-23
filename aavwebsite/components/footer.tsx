// "use client";

// import Link from "next/link";

// export default function Footer() {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="mt-0 border-t border-white/10 bg-[#000000] text-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Column 1 */}
//           <div>
//             <h3 className="text-xl font-semibold tracking-tight">NTU AAV</h3>
//           </div>

//           {/* Column 2 */}
//           <div>
//             <h4 className="text-xl font-semibold tracking-tight">Useful Links</h4>
//             <ul className="mt-6 space-y-3 text-white/85">
//               <li>
//                 <Link className="hover:text-white transition" href="/">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:text-white transition" href="/about/team">
//                   Team Members
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:text-white transition" href="/outreach">
//                   Outreach
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:text-white transition" href="/sponsors/2024">
//                   Sponsors
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div>
//             <h4 className="text-xl font-semibold tracking-tight">Competitions</h4>
//             <ul className="mt-6 space-y-3 text-white/85">
//               <li>
//                 <Link className="hover:text-white transition" href="/competitions/robotx-2024">
//                   RobotX
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:text-white transition" href="/competitions/suas-2025">
//                   SUAS
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:text-white transition" href="/competitions/robonation">
//                   RoboNation
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom row */}
//         <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-8">
//           <p className="text-sm text-white/70">
//             © {new Date().getFullYear()} NTU AAV. All rights reserved.
//           </p>

//           {/* Back to top */}
//           <button
//             onClick={scrollToTop}
//             aria-label="Back to top"
//             className="h-11 w-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition grid place-items-center"
//           >
//             <span className="text-xl">↑</span>
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="mt-0 border-t border-white/10 bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* Make col-1 wider, push col-2+3 to the right, reduce gap between 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_0.7fr_0.7fr] gap-12 md:gap-10">
          {/* Column 1 */}
          <div>
            {/* Logos row */}
            <div className="flex items-center gap-4">
              <Image
                src="/logos/aav.png"
                alt="NTU AAV logo"
                width={500}
                height={500}
                className="rounded-md border border-white/10 bg-white/5"
                priority={false}
              />

              {/*
              <Image
                src="/logos/ntu-mae.png"
                alt="NTU MAE logo"
                width={44}
                height={44}
                className="rounded-md border border-white/10 bg-white/5"
                priority={false}
              />
              */}
            </div>

            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
              Building competition-ready systems and showcasing innovation through outreach
              and performance.
            </p>

            {/* Socials with logos */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/ntu_aav?igsh=MTNlemNxczMyNzN0dA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:text-white hover:bg-white/10 transition"
                aria-label="NTU AAV Instagram"
              >
                <Image
                  src="/logos/instagram.avif"
                  alt="Instagram"
                  width={25}
                  height={25}
                  className="opacity-90"
                />
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/archimedes-autonomous-vehicles/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:text-white hover:bg-white/10 transition"
                aria-label="NTU AAV LinkedIn"
              >
                <Image
                  src="/logos/linkedin.png"
                  alt="LinkedIn"
                  width={25}
                  height={25}
                  className="opacity-90"
                />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="md:justify-self-end md:pr-2">
            <h4 className="text-xl font-semibold tracking-tight">Useful Links</h4>
            <ul className="mt-6 space-y-3 text-white/85">
              <li>
                <Link className="hover:text-white transition" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/about/team">
                  Team Members
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/outreach">
                  Outreach
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/sponsors/2024">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:justify-self-end">
            <h4 className="text-xl font-semibold tracking-tight">Competitions</h4>
            <ul className="mt-6 space-y-3 text-white/85">
              <li>
                <Link className="hover:text-white transition" href="/competitions/robotx-2024">
                  RobotX
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/competitions/suas-2025">
                  SUAS
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/competitions/robonation">
                  RoboNation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-8">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} NTU AAV. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="h-11 w-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition grid place-items-center"
          >
            <span className="text-xl">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
