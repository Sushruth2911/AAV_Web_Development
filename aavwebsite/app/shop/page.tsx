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

      <main className="min-h-screen bg-gradient-to-b from-[#f5fbff] via-[#f6f7fb] to-[#f3f5f9] text-slate-900">
        <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
          {/* HERO */}
          <section className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e7f7fb] text-xs font-semibold text-[#008fb3] shadow-sm mb-4">
              <span className="text-sm">✨</span> Official Store
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              Team <span className="text-[#008fb3]">Shop</span>
            </h1>

            <p className="max-w-xl mx-auto text-sm md:text-base text-slate-500">
              Premium merch for builders, dreamers, and late-night debuggers.
            </p>
          </section>

          {/* CATEGORY FILTER */}
          <section className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/70 shadow-[0_12px_35px_rgba(15,23,42,0.08)] px-3 py-2 border border-slate-100">
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 text-xs md:text-sm rounded-full transition-all duration-200 ${
                      active
                        ? "bg-[#008fb3] text-white shadow-md scale-105"
                        : "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
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
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-slate-100 hover:shadow-[0_25px_65px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 transition-all duration-200"
              >
                {/* “Image” area – gradient, no actual images needed */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-sky-200 via-slate-100 to-slate-200 ${
                      product.highlight
                        ? "from-[#0ea5e9] via-[#22d3ee] to-[#e0f2fe]"
                        : ""
                    }`}
                  />
                  {/* abstract product mock shape */}
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="w-40 h-52 rounded-3xl bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.30)] border border-slate-200 flex items-center justify-center">
                      <span className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
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
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-slate-700 shadow-sm">
                      {product.label}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-6 pt-5 pb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="text-lg font-extrabold text-[#00a3b5]">
                      {product.price}
                    </div>
                    <button className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wide uppercase hover:bg-slate-800 active:scale-95 transition-all">
                      Add to cart
                    </button>
                  </div>
                </div>

                {/* subtle bottom accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#00a3b5] via-[#38bdf8] to-transparent opacity-80" />
              </article>
            ))}
          </section>

          {/* FOOTER CTA */}
          <section className="mt-16 text-center">
            <p className="text-sm text-slate-500 mb-4">
              Want something custom for your sub-team or sponsor?
            </p>
            <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-slate-900 text-xs md:text-sm font-semibold border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              ✉️ Contact us for custom orders
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
