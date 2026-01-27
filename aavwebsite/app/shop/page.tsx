"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";

type Category = "All" | "Apparel" | "Accessories" | "Stickers";

interface Product {
  id: number;
  name: string;
  price: string;
  category: Exclude<Category, "All">;
  label: string;
  description: string;
  highlight?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "AAV Core Tee",
    price: "$29.90",
    category: "Apparel",
    label: "Apparel",
    description: "Premium cotton tee with minimal AAV wordmark.",
    highlight: true,
  },
  {
    id: 2,
    name: "Maritime Hoodie",
    price: "$59.90",
    category: "Apparel",
    label: "Apparel",
    description: "Oversized fleece hoodie for late-night debugging.",
  },
  {
    id: 3,
    name: "Mission Cap",
    price: "$24.90",
    category: "Accessories",
    label: "Accessories",
    description: "Low-profile cap with embroidered logo.",
  },
  {
    id: 4,
    name: "Telemetry Mug",
    price: "$18.90",
    category: "Accessories",
    label: "Accessories",
    description: "Ceramic mug with subtle circuit pattern.",
  },
  {
    id: 5,
    name: "AAV Sticker Pack",
    price: "$9.90",
    category: "Stickers",
    label: "Stickers",
    description: "Waterproof stickers for laptops & pelican cases.",
  },
  {
    id: 6,
    name: "Debug Mode Tee",
    price: "$32.90",
    category: "Apparel",
    label: "Apparel",
    description: "Gradient graphic tee inspired by sonar scans.",
  },
];

const categories: Category[] = ["All", "Apparel", "Accessories", "Stickers"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#121212] text-white font-sans">
        <div className="pt-32 pb-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
          {/* HERO */}
          <section className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold shadow-sm mb-4 backdrop-blur-md" style={{ color: '#9AB0B8' }}>
              <span className="text-sm">✨</span> Official Store
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-white">
              Team <span style={{ color: '#3652A4' }}>Shop</span>
            </h1>

            <p className="max-w-xl mx-auto text-sm md:text-base" style={{ color: '#9AB0B8' }}>
              Premium merch for builders, dreamers, and late-night debuggers.
            </p>
          </section>

          {/* CATEGORY FILTER */}
          <section className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#181818] border border-[#1e1e1e] shadow-sm px-3 py-2">
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 text-xs md:text-sm rounded-full transition-all duration-200 ${
                      active
                        ? "shadow-md scale-105"
                        : "bg-transparent hover:bg-white/5"
                    }`}
                    style={active ? {
                      backgroundColor: '#3652A4',
                      color: '#FFFFFF'
                    } : {
                      color: '#9AB0B8'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </section>

          {/* PRODUCTS GRID */}
          <section className="grid gap-8 md:grid-cols-2">
            {filtered.map((product) => (
              <article
                key={product.id}
                className="group bg-[#181818] border border-[#1e1e1e] rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1.5 hover:border-white/20 transition-all duration-200"
              >
                {/* "Image" area – gradient, no actual images needed */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={product.highlight ? {
                      background: 'linear-gradient(to bottom right, rgba(54,82,164,0.3), rgba(0,130,78,0.2), rgba(18,18,18,0.8))'
                    } : {
                      background: 'linear-gradient(to bottom right, rgba(18,18,18,0.9), rgba(30,30,30,0.8))'
                    }}
                  />
                  {/* abstract product mock shape */}
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="w-40 h-52 rounded-3xl bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center">
                      <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#9AB0B8' }}>
                        {product.category === "Apparel"
                          ? "Apparel Mock"
                          : product.category === "Accessories"
                          ? "Accessory Mock"
                          : "Sticker Mock"}
                      </span>
                    </div>
                  </div>

                  {/* category pill */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold shadow-sm backdrop-blur-md" style={{ color: '#9AB0B8' }}>
                      {product.label}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-6 pt-5 pb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      {product.name}
                    </h3>
                    <p className="text-sm" style={{ color: '#9AB0B8' }}>
                      {product.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="text-lg font-extrabold" style={{ color: '#3652A4' }}>
                      {product.price}
                    </div>
                    <button className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase active:scale-95 transition-all" style={{ backgroundColor: '#3652A4', color: '#FFFFFF' }}>
                      Add to cart
                    </button>
                  </div>
                </div>

                {/* subtle bottom accent bar */}
                <div className="h-1" style={{ background: 'linear-gradient(to right, #3652A4, #00824E, transparent)', opacity: 0.8 }} />
              </article>
            ))}
          </section>

          {/* FOOTER CTA */}
          <section className="mt-16 text-center">
            <p className="text-sm mb-4" style={{ color: '#9AB0B8' }}>
              Want something custom for your sub-team or sponsor?
            </p>
            <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" style={{ backgroundColor: '#181818', color: '#FFFFFF', borderColor: '#1e1e1e' }}>
              ✉️ Contact us for custom orders
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
