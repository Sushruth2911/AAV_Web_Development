// "use client";

// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useMemo, useRef, useState } from "react";

// type CarouselItem = {
//   title: string;
//   subtitle?: string;
//   image: string; // put images in /public and reference like "/carousel/1.jpg"
//   href?: string;
// };

// export default function Home() {
//   // ===== Carousel data (replace with your own images) =====
//   const items: CarouselItem[] = useMemo(
//     () => [
//       {
//         title: "Arrival",
//         subtitle: "to California",
//         image: "/carousel/slide1.jpg",
//       },
//       {
//         title: "Walmart",
//         subtitle: "runs",
//         image: "/carousel/slide2.jpg",
//       },
//       {
//         title: "Interaction",
//         subtitle: "with strangers",
//         image: "/carousel/slide3.jpg",
//       },
//       {
//         title: "Team Dinner",
//         subtitle: "Shake Shack",
//         image: "/carousel/slide4.jpg",
//       },
//       {
//         title: "Sightseeing",
//         subtitle: "after competition",
//         image: "/carousel/slide5.jpg",
//       },
//     ],
//     []
//   );

//   const [active, setActive] = useState(0);
//   const intervalRef = useRef<number | null>(null);

//   const clampIndex = (i: number) => (i + items.length) % items.length;

//   const goNext = () => setActive((p) => clampIndex(p + 1));
//   const goPrev = () => setActive((p) => clampIndex(p - 1));

//   // Auto-play
//   useEffect(() => {
//     // reset interval whenever active changes (so manual clicks feel responsive)
//     if (intervalRef.current) window.clearInterval(intervalRef.current);

//     intervalRef.current = window.setInterval(() => {
//       setActive((p) => clampIndex(p + 1));
//     }, 3500);

//     return () => {
//       if (intervalRef.current) window.clearInterval(intervalRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [active, items.length]);

//   // Pause autoplay on hover (optional)
//   const pause = () => {
//     if (intervalRef.current) window.clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   };
//   const resume = () => {
//     if (intervalRef.current) return;
//     intervalRef.current = window.setInterval(() => {
//       setActive((p) => clampIndex(p + 1));
//     }, 3500);
//   };

//   // Keyboard controls
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") goPrev();
//       if (e.key === "ArrowRight") goNext();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [items.length]);

//   // Helper to pick visible indices: prev, active, next
//   const prevIdx = clampIndex(active - 1);
//   const nextIdx = clampIndex(active + 1);

//   return (
//     <>
//       <Navbar />
//       <main className="bg-[#121212] text-white font-sans min-h-screen">
        
//     {/* 🚀 Trailer Section */}
//     <section className="border-b border-[#1e1e1e]">
//     <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
//       <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black aspect-21/9">
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//         >
//           <source src="/videos/trailer.mp4.mov" type="video/mp4" />
//         </video>

//         <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
//         <div className="absolute bottom-8 left-8">
//           <h2 className="text-2xl md:text-4xl font-bold">NTU AAV</h2>
//           <p className="mt-2 text-white/75">Autonomous Aerial & Surface Vehicles</p>
//         </div>
//       </div>
//     </div>
//   </section>


//   {/* ===== 6 Boxes (2 rows x 2 cols on md) ===== */}
//   <section className="grid grid-cols-1 md:grid-cols-2">
//     <div className="group relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
//       {/* Background image */}
//       <Image
//         src="/asv.png"
//         alt="ASV background"
//         fill
//         priority
//         sizes="(max-width: 768px) 100vw, 50vw"
//         className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
//       />
//         {/* Optional: lighter overlay (helps text pop, but doesn't darken too much) */}
//   <div className="absolute inset-0 bg-black/20" />
//       {/* Content */}
//       <h4 className="relative z-10 text-2xl font-bold">ASV</h4>
//       <Link
//         href="/asv"
//         className="relative z-10 text-sm text-gray-300 hover:text-white transition"
//       >
//         View More →
//       </Link>
//     </div>


//     <div className="group relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
//       {/* Background image */}
//       <Image
//         src="/UAV1.png"
//         alt="UAV background"
//         fill
//         priority
//         sizes="(max-width: 768px) 100vw, 50vw"
//         className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
//       />
//         {/* Optional: lighter overlay (helps text pop, but doesn't darken too much) */}
//   <div className="absolute inset-0 bg-black/20" />
//       {/* Content */}
//       <h4 className="relative z-10 text-2xl font-bold">UAV</h4>
//       <Link
//         href="/asv"
//         className="relative z-10 text-sm text-gray-300 hover:text-white transition"
//       >
//         View More →
//       </Link>
//     </div>

//         <div className="group relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
//       {/* Background image */}
//       <Image
//         src="/ROBOTX.png"
//         alt="ROBOTX background"
//         fill
//         priority
//         sizes="(max-width: 768px) 100vw, 50vw"
//         className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
//       />
//         {/* Optional: lighter overlay (helps text pop, but doesn't darken too much) */}
//   <div className="absolute inset-0 bg-black/20" />
//       {/* Content */}
//       <h4 className="relative z-10 text-2xl font-bold">RobotX</h4>
//       <Link
//         href="/asv"
//         className="relative z-10 text-sm text-gray-300 hover:text-white transition"
//       >
//         View More →
//       </Link>
//     </div>

//         <div className="group relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
//       {/* Background image */}
//       <Image
//         src="/SUAS.png"
//         alt="SUAS background"
//         fill
//         priority
//         sizes="(max-width: 768px) 100vw, 50vw"
//         className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
//       />
//         {/* Optional: lighter overlay (helps text pop, but doesn't darken too much) */}
//   <div className="absolute inset-0 bg-black/20" />
//       {/* Content */}
//       <h4 className="relative z-10 text-2xl font-bold">SUAS</h4>
//       <Link
//         href="/asv"
//         className="relative z-10 text-sm text-gray-300 hover:text-white transition"
//       >
//         View More →
//       </Link>
//     </div>

//         <div className="group relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
//       {/* Background image */}
//       <Image
//         src="/Sponsors.png"
//         alt="Sponsors background"
//         fill
//         priority
//         sizes="(max-width: 768px) 100vw, 50vw"
//         className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
//       />
//         {/* Optional: lighter overlay (helps text pop, but doesn't darken too much) */}
//   <div className="absolute inset-0 bg-black/20" />
//       {/* Content */}
//       <h4 className="relative z-10 text-2xl font-bold">Sponsors</h4>
//       <Link
//         href="/asv"
//         className="relative z-10 text-sm text-gray-300 hover:text-white transition"
//       >
//         View More →
//       </Link>
//     </div>

//         <div className="group relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
//       {/* Background image */}
//       <Image
//         src="/NewsRoom.png"
//         alt="newsroom background"
//         fill
//         priority
//         sizes="(max-width: 768px) 100vw, 50vw"
//         className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
//       />
//       {/* Optional: lighter overlay (helps text pop, but doesn't darken too much) */}
//       <div className="absolute inset-0 bg-black/20" />
//       {/* Content */}
//       <h4 className="relative z-10 text-2xl font-bold">Newsroom</h4>
//       <Link
//         href="/asv"
//         className="relative z-10 text-sm text-gray-300 hover:text-white transition"
//       >
//         View More →
//       </Link>
//     </div>
// </section>

//         <section className="border-b border-[#1e1e1e]">
//   <div
//     className="max-w-7xl mx-auto px-6 md:px-10 py-20"
//     onMouseEnter={pause}
//     onMouseLeave={resume}
//   >
//     <div className="relative">
//       {/* Left Arrow */}
//       <button
//         onClick={goPrev}
//         aria-label="Previous slide"
//         className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full border border-white/15 bg-black/40 backdrop-blur hover:bg-black/60 transition grid place-items-center"
//       >
//         <span className="text-2xl">‹</span>
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={goNext}
//         aria-label="Next slide"
//         className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full border border-white/15 bg-black/40 backdrop-blur hover:bg-black/60 transition grid place-items-center"
//       >
//         <span className="text-2xl">›</span>
//       </button>

//       <div className="flex items-center justify-center gap-6 md:gap-10">
//         <CarouselCard item={items[prevIdx]} variant="side" onClick={goPrev} />
//         <CarouselCard
//           item={items[active]}
//           variant="active"
//           onClick={() => items[active].href && (window.location.href = items[active].href!)}
//         />
//         <CarouselCard item={items[nextIdx]} variant="side" onClick={goNext} />
//       </div>
//     </div>
//   </div>
// </section>


// <section className="border-b border-[#1e1e1e]">
//   <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {/* Card 1: About Us */}
//       <Link
//         href="/about/aboutus"
//         className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg"
//       >
//         <div className="relative aspect-4/3">
//           <Image
//             src="/Aboutus.jpg"
//             alt="About Us"
//             fill
//             priority={false}
//             className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
//             sizes="(max-width: 768px) 100vw, 33vw"
//           />
//           <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
//         </div>

//         <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
//           <div className="text-white/95">
//             <p className="text-xs uppercase tracking-wider text-white/70">
//               Learn more
//             </p>
//             <p className="text-lg font-semibold">About Us</p>
//           </div>
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15">
//             Discover
//             <span className="transition-transform duration-300 group-hover:translate-x-1">
//               →
//             </span>
//           </span>
//         </div>
//       </Link>

//       {/* Card 2: Our Team */}
//       <Link
//         href="/about/team"
//         className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg"
//       >
//         <div className="relative aspect-4/3">
//           <Image
//             src="/ourteam.jpg"
//             alt="Our Team"
//             fill
//             className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
//             sizes="(max-width: 768px) 100vw, 33vw"
//           />
//           <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
//         </div>

//         <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
//           <div className="text-white/95">
//             <p className="text-xs uppercase tracking-wider text-white/70">
//               Meet the people
//             </p>
//             <p className="text-lg font-semibold">Our Team</p>
//           </div>
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15">
//             Discover
//             <span className="transition-transform duration-300 group-hover:translate-x-1">
//               →
//             </span>
//           </span>
//         </div>
//       </Link>

//       {/* Card 3: Contact Us */}
//       <Link
//         href="/contact"
//         className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg"
//       >
//         <div className="relative aspect-4/3">
//           <Image
//             src="/contactus.jpg"
//             alt="Contact Us"
//             fill
//             className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
//             sizes="(max-width: 768px) 100vw, 33vw"
//           />
//           <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
//         </div>

//         <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
//           <div className="text-white/95">
//             <p className="text-xs uppercase tracking-wider text-white/70">
//               Get in touch
//             </p>
//             <p className="text-lg font-semibold">Contact Us</p>
//           </div>
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15">
//             Discover
//             <span className="transition-transform duration-300 group-hover:translate-x-1">
//               →
//             </span>
//           </span>
//         </div>
//       </Link>
//     </div>
//   </div>
//   <Footer />
// </section>

//       </main>
//     </>
//   );
// }

// function CarouselCard({
//   item,
//   variant,
//   onClick,
// }: {
//   item: CarouselItem;
//   variant: "active" | "side";
//   onClick?: () => void;
// }) {
//   const isActive = variant === "active";

//   return (
//     <button
//       onClick={onClick}
// className={[
//   "group relative overflow-hidden rounded-3xl border border-white/10 bg-[#181818] text-left transition-all duration-500 ease-out",
//   "focus:outline-none focus:ring-2 focus:ring-white/30",
//   "will-change-transform hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.55)]",
//   isActive
//     ? "w-[86%] md:w-[640px] h-[360px] md:h-[520px]"
//     : "w-[58%] md:w-[380px] h-[260px] md:h-[360px] opacity-85 hover:opacity-100",
// ].join(" ")}

//     >
//       {/* image */}
//       <Image
//         src={item.image}
//         alt={item.title}
//         fill
//         className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//         sizes={isActive ? "(max-width: 768px) 78vw, 520px" : "(max-width: 768px) 54vw, 320px"}
//         priority={isActive}
//       />

//       {/* overlay */}
//       <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.20),transparent_55%)]" />

//       {/* text */}
//       <div className="absolute bottom-0 left-0 right-0 p-6">
//         <div className="flex items-end justify-between gap-6">
//           <div>
//             <h4 className={`font-bold tracking-tight ${isActive ? "text-4xl" : "text-2xl"}`}>
//               {item.title}
//             </h4>
//             {item.subtitle ? (
//               <p className={`mt-1 text-white/75 ${isActive ? "text-base" : "text-sm"}`}>
//                 {item.subtitle}
//               </p>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </button>

//   );
// }


"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type CarouselItem = {
  title: string;
  subtitle?: string;
  image: string;
  href?: string;
};

export default function Home() {
  const items: CarouselItem[] = useMemo(
    () => [
      { title: "Arrival", subtitle: "to California", image: "/carousel/slide1.jpg" },
      { title: "Walmart", subtitle: "runs", image: "/carousel/slide2.jpg" },
      { title: "Interaction", subtitle: "with strangers", image: "/carousel/slide3.jpg" },
      { title: "Team Dinner", subtitle: "Shake Shack", image: "/carousel/slide4.jpg" },
      { title: "Sightseeing", subtitle: "after competition", image: "/carousel/slide5.jpg" },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const clampIndex = (i: number) => (i + items.length) % items.length;
  const goNext = () => setActive((p) => clampIndex(p + 1));
  const goPrev = () => setActive((p) => clampIndex(p - 1));

  // Auto-play
  useEffect(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setActive((p) => clampIndex(p + 1));
    }, 3500);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, items.length]);

  const pause = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const resume = () => {
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      setActive((p) => clampIndex(p + 1));
    }, 3500);
  };

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  // Scroll reveal (adds reveal-in when elements enter viewport)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("reveal-in");
            obs.unobserve(e.target); // one-time reveal
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // mouse position for glow-card highlight hotspot
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".glow-card"));
    const onMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${mx}%`);
      el.style.setProperty("--my", `${my}%`);
    };
    cards.forEach((c) => c.addEventListener("mousemove", onMove));
    return () => cards.forEach((c) => c.removeEventListener("mousemove", onMove));
  }, []);

  const prevIdx = clampIndex(active - 1);
  const nextIdx = clampIndex(active + 1);

  return (
    <>
      <Navbar />
      <main className="bg-[#121212] text-white font-sans min-h-screen">
        {/* 🚀 Trailer Section */}
        <section className="border-b border-[#1e1e1e]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black aspect-21/9 floaty reveal">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/videos/trailer.mp4.mov" type="video/mp4" />
              </video>

              {/* existing gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* shimmer overlay (decorative) */}
              <div className="absolute inset-0 hero-shimmer" />

              <div
                className="absolute bottom-8 left-8 reveal"
                style={{ "--reveal-delay": active ? "0ms" : "70ms" } as React.CSSProperties}
              >
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                  NTU AAV
                </h2>
                <p className="mt-2 text-white/75">
                  Autonomous Aerial & Surface Vehicles
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 6 Boxes ===== */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="group glow-card reveal relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e] transition-transform duration-500 hover:-translate-y-1">
            <Image
              src="/asv.png"
              alt="ASV background"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <h4 className="relative z-10 text-2xl font-bold tracking-tight">ASV</h4>
            <Link
              href="/asv"
              className="relative z-10 text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>

          <div
            className="group glow-card reveal relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e] transition-transform duration-500 hover:-translate-y-1"
                style={{ "--reveal-delay": active ? "0ms" : "70ms" } as React.CSSProperties}
          >
            <Image
              src="/UAV1.png"
              alt="UAV background"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <h4 className="relative z-10 text-2xl font-bold tracking-tight">UAV</h4>
            <Link
              href="/asv"
              className="relative z-10 text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>

          <div
            className="group glow-card reveal relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e] transition-transform duration-500 hover:-translate-y-1"
                style={{ "--reveal-delay": active ? "0ms" : "70ms" } as React.CSSProperties}
          >
            <Image
              src="/ROBOTX.png"
              alt="ROBOTX background"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <h4 className="relative z-10 text-2xl font-bold tracking-tight">RobotX</h4>
            <Link
              href="/asv"
              className="relative z-10 text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>

          <div
            className="group glow-card reveal relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e] transition-transform duration-500 hover:-translate-y-1"
                style={{ "--reveal-delay": active ? "0ms" : "70ms" } as React.CSSProperties}
          >
            <Image
              src="/SUAS.png"
              alt="SUAS background"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <h4 className="relative z-10 text-2xl font-bold tracking-tight">SUAS</h4>
            <Link
              href="/asv"
              className="relative z-10 text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>

          <div
            className="group glow-card reveal relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e] transition-transform duration-500 hover:-translate-y-1"
                style={{ "--reveal-delay": active ? "0ms" : "70ms" } as React.CSSProperties}
          >
            <Image
              src="/Sponsors.png"
              alt="Sponsors background"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <h4 className="relative z-10 text-2xl font-bold tracking-tight">Sponsors</h4>
            <Link
              href="/asv"
              className="relative z-10 text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>

          <div
            className="group glow-card reveal relative overflow-hidden bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e] transition-transform duration-500 hover:-translate-y-1"
                style={{ "--reveal-delay": active ? "0ms" : "70ms" } as React.CSSProperties}
          >
            <Image
              src="/NewsRoom.png"
              alt="newsroom background"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <h4 className="relative z-10 text-2xl font-bold tracking-tight">Newsroom</h4>
            <Link
              href="/asv"
              className="relative z-10 text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>
        </section>

        {/* Carousel */}
        <section className="border-b border-[#1e1e1e]">
          <div
            className="max-w-7xl mx-auto px-6 md:px-10 py-20 reveal"
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            <div className="relative">
              <button
                onClick={goPrev}
                aria-label="Previous slide"
                className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full border border-white/15 bg-black/40 backdrop-blur hover:bg-black/60 transition grid place-items-center btn-pop"
              >
                <span className="text-2xl">‹</span>
              </button>

              <button
                onClick={goNext}
                aria-label="Next slide"
                className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full border border-white/15 bg-black/40 backdrop-blur hover:bg-black/60 transition grid place-items-center btn-pop"
              >
                <span className="text-2xl">›</span>
              </button>

              <div className="flex items-center justify-center gap-6 md:gap-10">
                <CarouselCard item={items[prevIdx]} variant="side" onClick={goPrev} />
                <CarouselCard
                  item={items[active]}
                  variant="active"
                  onClick={() =>
                    items[active].href && (window.location.href = items[active].href!)
                  }
                />
                <CarouselCard item={items[nextIdx]} variant="side" onClick={goNext} />
              </div>
            </div>
          </div>
        </section>

        {/* 3 cards */}
        <section className="border-b border-[#1e1e1e]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/about/aboutus"
                className="group glow-card reveal relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-4/3">
                  <Image
                    src="/Aboutus.jpg"
                    alt="About Us"
                    fill
                    priority={false}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                  <div className="text-white/95">
                    <p className="text-xs uppercase tracking-wider text-white/70">
                      Learn more
                    </p>
                    <p className="text-lg font-semibold">About Us</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15 btn-pop">
                    Discover
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>

              <Link
                href="/about/team"
                className="group glow-card reveal relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg transition-transform duration-500 hover:-translate-y-1"
                style={{ "--reveal-delay": active ? "0ms" : "70ms" } as React.CSSProperties}
              >
                <div className="relative aspect-4/3">
                  <Image
                    src="/ourteam.jpg"
                    alt="Our Team"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                  <div className="text-white/95">
                    <p className="text-xs uppercase tracking-wider text-white/70">
                      Meet the people
                    </p>
                    <p className="text-lg font-semibold">Our Team</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15 btn-pop">
                    Discover
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>

              <Link
                href="/contact"
                className="group glow-card reveal relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg transition-transform duration-500 hover:-translate-y-1"
                style={{ "--reveal-delay": active ? "0ms" : "70ms" } as React.CSSProperties}
              >
                <div className="relative aspect-4/3">
                  <Image
                    src="/contactus.jpg"
                    alt="Contact Us"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                  <div className="text-white/95">
                    <p className="text-xs uppercase tracking-wider text-white/70">
                      Get in touch
                    </p>
                    <p className="text-lg font-semibold">Contact Us</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15 btn-pop">
                    Discover
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <Footer />
        </section>
      </main>
    </>
  );
}

function CarouselCard({
  item,
  variant,
  onClick,
}: {
  item: CarouselItem;
  variant: "active" | "side";
  onClick?: () => void;
}) {
  const isActive = variant === "active";

  return (
    <button
      onClick={onClick}
      className={[
        "group glow-card reveal relative overflow-hidden rounded-3xl border border-white/10 bg-[#181818] text-left transition-all duration-500 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-white/30",
        "will-change-transform hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.55)]",
        isActive
          ? "w-[86%] md:w-[640px] h-[360px] md:h-[520px]"
          : "w-[58%] md:w-[380px] h-[260px] md:h-[360px] opacity-85 hover:opacity-100",
      ].join(" ")}
      style={{ "--reveal-delay": isActive ? "0ms" : "70ms" } as React.CSSProperties}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        sizes={isActive ? "(max-width: 768px) 78vw, 520px" : "(max-width: 768px) 54vw, 320px"}
        priority={isActive}
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h4 className={`font-bold tracking-tight ${isActive ? "text-4xl" : "text-2xl"}`}>
              {item.title}
            </h4>
            {item.subtitle ? (
              <p className={`mt-1 text-white/75 ${isActive ? "text-base" : "text-sm"}`}>
                {item.subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </button>
  );
}
