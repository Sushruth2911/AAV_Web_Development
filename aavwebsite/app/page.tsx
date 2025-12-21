"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type CarouselItem = {
  title: string;
  subtitle?: string;
  image: string; // put images in /public and reference like "/carousel/1.jpg"
  href?: string;
};

export default function Home() {
  // ===== Carousel data (replace with your own images) =====
  const items: CarouselItem[] = useMemo(
    () => [
      {
        title: "Project Build",
        subtitle: "Systems + Integration",
        image: "/carousel/slide1.jpg",
        href: "/about/team",
      },
      {
        title: "RobotX",
        subtitle: "Maritime Autonomy",
        image: "/carousel/slide2.jpg",
        href: "/competitions/robotx-2024",
      },
      {
        title: "SUAS",
        subtitle: "Aerial Mission Systems",
        image: "/carousel/slide3.jpg",
        href: "/competitions/suas-2025",
      },
      {
        title: "Field Tests",
        subtitle: "Iterate Fast",
        image: "/carousel/slide4.jpg",
        href: "/newsroom",
      },
      {
        title: "Sponsors",
        subtitle: "Partners",
        image: "/carousel/slide5.jpg",
        href: "/sponsors/2024",
      },
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
    // reset interval whenever active changes (so manual clicks feel responsive)
    if (intervalRef.current) window.clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setActive((p) => clampIndex(p + 1));
    }, 3500);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, items.length]);

  // Pause autoplay on hover (optional)
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

  // Helper to pick visible indices: prev, active, next
  const prevIdx = clampIndex(active - 1);
  const nextIdx = clampIndex(active + 1);

  return (
    <>
      <Navbar />
      <main className="bg-[#121212] text-white font-sans min-h-screen">
        
        {/* 🚀 Trailer Section */}
        <section className="py-60 text-center border-b border-[#1e1e1e]">
          <h2 className="text-xl md:text-2xl font-medium">
            🚀 Trailer Section (Coming Soon)
          </h2>
        </section>


        {/* ===== 6 Boxes (2 rows x 2 cols on md) ===== */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
            <h4 className="text-2xl font-bold">ASV</h4>
            <Link href="/asv/1" className="text-sm text-gray-300 hover:text-white transition">
              View More →
            </Link>
          </div>

          <div className="bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-[#1e1e1e]">
            <h4 className="text-2xl font-bold">UAV</h4>
            <Link href="/uav/1" className="text-sm text-gray-300 hover:text-white transition">
              View More →
            </Link>
          </div>

          <div className="bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
            <h4 className="text-2xl font-bold">RobotX</h4>
            <Link
              href="/competitions/robotx-2024"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>

          <div className="bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-[#1e1e1e]">
            <h4 className="text-2xl font-bold">SUAS</h4>
            <Link
              href="/competitions/suas-2025"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              View More →
            </Link>
          </div>

          <div className="bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]">
            <h4 className="text-2xl font-bold">Sponsors</h4>
            <Link href="/sponsors/2024" className="text-sm text-gray-300 hover:text-white transition">
              View More →
            </Link>
          </div>

          <div className="bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-[#1e1e1e]">
            <h4 className="text-2xl font-bold">Newsroom</h4>
            <Link href="/newsroom" className="text-sm text-gray-300 hover:text-white transition">
              View More →
            </Link>
          </div>
        </section>

        {/* ===== Carousel (below the 6 boxes) ===== */}
        <section className="border-b border-[#1e1e1e]">
          <div
            className="max-w-7xl mx-auto px-6 md:px-10 py-16"
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            <div className="flex items-center justify-between mb-8">

              {/* dots */}
              {/* <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === active ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div> */}
            </div>

            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={goPrev}
                aria-label="Previous slide"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border border-white/15 bg-black/40 backdrop-blur hover:bg-black/60 transition grid place-items-center"
              >
                <span className="text-xl">‹</span>
              </button>

              {/* Right Arrow */}
              <button
                onClick={goNext}
                aria-label="Next slide"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border border-white/15 bg-black/40 backdrop-blur hover:bg-black/60 transition grid place-items-center"
              >
                <span className="text-xl">›</span>
              </button>

              {/* Slides layout: prev | active (bigger) | next */}
              <div className="flex items-center justify-center gap-6 md:gap-8">
                <CarouselCard
                  item={items[prevIdx]}
                  variant="side"
                  onClick={goPrev}
                />
                <CarouselCard
                  item={items[active]}
                  variant="active"
                  onClick={() => items[active].href && (window.location.href = items[active].href!)}
                />
                <CarouselCard
                  item={items[nextIdx]}
                  variant="side"
                  onClick={goNext}
                />
              </div>
            </div>
          </div>
        </section>

<section className="border-b border-[#1e1e1e]">
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: About Us */}
      <Link
        href="/about/aboutus"
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src="/13. Section 5.1 - About Us.jpeg"
            alt="About Us"
            fill
            priority={false}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
          <div className="text-white/95">
            <p className="text-xs uppercase tracking-wider text-white/70">
              Learn more
            </p>
            <p className="text-lg font-semibold">About Us</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15">
            Discover
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>

      {/* Card 2: Our Team */}
      <Link
        href="/about/team"
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src="/14. Section 5.2 - Our Team.png"
            alt="Our Team"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
          <div className="text-white/95">
            <p className="text-xs uppercase tracking-wider text-white/70">
              Meet the people
            </p>
            <p className="text-lg font-semibold">Our Team</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15">
            Discover
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>

      {/* Card 3: Contact Us */}
      <Link
        href="/contact"
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src="/15. Section 5.3 - Contact Us.jpeg"
            alt="Contact Us"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
          <div className="text-white/95">
            <p className="text-xs uppercase tracking-wider text-white/70">
              Get in touch
            </p>
            <p className="text-lg font-semibold">Contact Us</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15">
            Discover
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </div>
  </div>
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
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-[#181818] text-left transition-all duration-500 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-white/30",
        isActive
          ? "w-[78%] md:w-[520px] h-[320px] md:h-[380px] shadow-2xl"
          : "w-[54%] md:w-[320px] h-[240px] md:h-[280px] opacity-80 hover:opacity-95",
      ].join(" ")}
    >
      {/* image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        sizes={isActive ? "(max-width: 768px) 78vw, 520px" : "(max-width: 768px) 54vw, 320px"}
        priority={isActive}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.20),transparent_55%)]" />

      {/* text */}
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

          <span
            className={[
              "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur transition",
              isActive ? "opacity-100" : "opacity-0 md:opacity-70",
            ].join(" ")}
          >
            View
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </button>

  );
}
