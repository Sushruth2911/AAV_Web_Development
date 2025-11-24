"use client";

import React from "react";
import Navbar from "@/components/navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#121212] text-white font-sans min-h-screen pt-20">
        {/* 🚀 Contact Header */}
        <section className="py-20 text-center bg-[#1a1a1a] text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-yellow-500">
            Get In <span className="text-6xl md:text-7xl text-orange-500">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Have questions about our autonomous systems? Interested in sponsorship or collaboration? We’d love to hear from you.
          </p>

          {/* Let's Connect Button */}
          <a
            href="#contact-form"
            className="inline-block bg-linear-to-r from-orange-500 to-yellow-500 text-black font-semibold px-8 py-4 rounded-full text-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300"
          >
            Let&apos;s Connect
          </a>
        </section>

        {/* 🚀 Contact Form & Info Section */}
        <section className="px-10 py-40 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-b border-[#1e1e1e] gap-10">
          {/* Contact Form */}
          <div className="md:w-1/2 space-y-6 p-6 bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <h2 className="text-3xl font-semibold text-center mb-6">Send Us a Message</h2>
            <p className="text-gray-400 text-center mb-6">
              Have a question or want to collaborate? Fill out the form, and we&apos;ll respond within 24 hours.
            </p>
            <form className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-300 font-medium">
                  Name *
                </label>
                <input
                  id="name"
                  placeholder="Your full name"
                  className="w-full p-4 bg-zinc-800 border-2 border-zinc-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:bg-zinc-800 focus:shadow-lg focus:shadow-orange-500/20 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300 font-medium">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full p-4 bg-zinc-800 border-2 border-zinc-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:bg-zinc-800 focus:shadow-lg focus:shadow-orange-500/20 transition-all duration-300"
                />
              </div>

              {/* Subject Dropdown */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-gray-300 font-medium">
                  Subject *
                </label>
                <select
                  id="subject"
                  className="w-full p-4 bg-zinc-800 border-2 border-zinc-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:bg-zinc-800 focus:shadow-lg focus:shadow-orange-500/20 transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="collaboration">Collaboration</option>
                </select>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full p-4 bg-zinc-800 border-2 border-zinc-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:bg-zinc-800 focus:shadow-lg focus:shadow-orange-500/20 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-orange-500 to-yellow-500 text-black font-semibold p-4 rounded-lg hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/2 space-y-6 p-6 bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <h2 className="text-3xl font-semibold text-center mb-6">Contact Information</h2>
            <p className="text-gray-400 text-center mb-6">
              Reach out for sponsorship, collaboration, outreach programs, or to join our team. We typically respond within 24-48 hours.
            </p>
            {/* Email */}
            <div className="contact-item flex items-center gap-4 p-4 bg-zinc-700 rounded-lg hover:border-orange-500 hover:ring-2 hover:ring-orange-500 transition-all duration-300">
              <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-yellow-500 text-white flex items-center justify-center rounded-xl">
                📧
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium text-white">contact@ntuarchimedes.org</div>
              </div>
            </div>
            {/* Phone */}
            <div className="contact-item flex items-center gap-4 p-4 bg-zinc-700 rounded-lg hover:border-orange-500 hover:ring-2 hover:ring-orange-500 transition-all duration-300">
              <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-yellow-500 text-white flex items-center justify-center rounded-xl">
                📞
              </div>
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="font-medium text-white">+65 6790 4321</div>
              </div>
            </div>
            {/* Location */}
            <div className="contact-item flex items-center gap-4 p-4 bg-zinc-700 rounded-lg hover:border-orange-500 hover:ring-2 hover:ring-orange-500 transition-all duration-300">
              <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-yellow-500 text-white flex items-center justify-center rounded-xl">
                📍
              </div>
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="font-medium text-white">School of MAE, NTU Singapore</div>
              </div>
            </div>

            {/* Social Media Follow Us */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="space-y-4">
                {/* Instagram */}
                <div className="contact-item flex items-center gap-4 p-4 bg-zinc-700 rounded-lg hover:border-orange-500 hover:ring-2 hover:ring-orange-500 transition-all duration-300">
                  <div className="w-10 h-10 bg-linear-to-br from-pink-500 to-orange-500 text-white flex items-center justify-center rounded-xl">
                    📸
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Instagram</div>
                    <div className="font-medium text-white">@ntuarchimedes</div>
                  </div>
                  <a
                    href="https://instagram.com/ntuarchimedes"
                    target="_blank"
                    className="text-sm text-orange-500 hover:underline"
                  >
                    Follow
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="contact-item flex items-center gap-4 p-4 bg-zinc-700 rounded-lg hover:border-orange-500 hover:ring-2 hover:ring-orange-500 transition-all duration-300">
                  <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center rounded-xl">
                    💼
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LinkedIn</div>
                    <div className="font-medium text-white">NTU Archimedes</div>
                  </div>
                  <a
                    href="https://linkedin.com/company/ntuarchimedes"
                    target="_blank"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Follow
                  </a>
                </div>

                {/* YouTube */}
                <div className="contact-item flex items-center gap-4 p-4 bg-zinc-700 rounded-lg hover:border-orange-500 hover:ring-2 hover:ring-orange-500 transition-all duration-300">
                  <div className="w-10 h-10 bg-linear-to-br from-red-500 to-red-600 text-white flex items-center justify-center rounded-xl">
                    🎥
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">YouTube</div>
                    <div className="font-medium text-white">Archimedes AAV</div>
                  </div>
                  <a
                    href="https://youtube.com/@ntuarchimedes"
                    target="_blank"
                    className="text-sm text-red-500 hover:underline"
                  >
                    Follow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
