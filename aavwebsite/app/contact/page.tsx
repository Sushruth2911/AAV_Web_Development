"use client";

import Navbar from "@/components/navbar";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <>
      {/* 🧭 Navbar */}
      <Navbar />

      <main className="bg-linear-to-b from-[#1a0000] to-[#000000] text-white min-h-screen pt-32 px-6 md:px-12">
        {/* Heading Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-red-500 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? We&apos;d love to hear from you.
          </p>
        </section>

        {/* Contact Form & Info */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Form */}
          <div className="bg-[#1c1c1c]/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-[#2a2a2a]">
            <h2 className="text-2xl font-bold text-red-500 mb-6">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* Right: Info */}
          <ContactInfo />
        </section>
      </main>
    </>
  );
}
