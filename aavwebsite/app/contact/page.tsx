"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";

// Social Media Icons
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const ContactPage = () => {
  // Email obfuscation - split into parts to avoid bot scraping
  const emailParts = ['contact', '@', 'ntuarchimedes', '.', 'org'];
  
  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Reconstruct email only when clicked
    const email = emailParts.join('');
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#121212] text-white font-sans min-h-screen">
        {/* 🚀 Contact Header */}
        <section className="pt-40 pb-24 text-center text-white relative overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-40 top-10 h-80 w-80 rounded-full blur-3xl opacity-30" style={{ backgroundColor: 'rgba(54,82,164,0.3)' }} />
            <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full blur-3xl opacity-20" style={{ backgroundColor: 'rgba(0,130,78,0.2)' }} />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/10 border border-white/20 backdrop-blur-md" style={{ color: '#9AB0B8' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wide">Let's Connect</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-white leading-tight">
              Get In{" "}
              <span 
                className="relative inline-block"
                style={{ 
                  background: 'linear-gradient(135deg, #3652A4 0%, #00824E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Touch
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#3652A4] to-[#00824E] opacity-50 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-0 max-w-2xl mx-auto leading-relaxed" style={{ color: '#9AB0B8' }}>
              Have questions about our autonomous systems? Interested in sponsorship or collaboration? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* 🚀 Contact Form & Info Section */}
        <section id="contact-form" className="px-4 md:px-10 pt-12 pb-20 md:pb-40 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="space-y-6 p-8 bg-[#181818] border border-[#1e1e1e] rounded-2xl shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-3 text-white">Send Us a Message</h2>
              <p className="text-sm text-justify" style={{ color: '#9AB0B8' }}>
                Have a question or want to collaborate? Fill out the form, and we&apos;ll respond within 24 hours.
              </p>
            </div>
            <form className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium block" style={{ color: '#9AB0B8' }}>
                  Name *
                </label>
                <input
                  id="name"
                  placeholder="Your full name"
                  className="w-full p-4 bg-[#1e1e1e] border-2 rounded-lg text-white placeholder:text-gray-500 focus:bg-[#1e1e1e] focus:shadow-lg focus:shadow-[#3652A4]/20 transition-all duration-300 outline-none"
                  style={{ borderColor: '#1e1e1e' }}
                  onFocus={(e) => e.target.style.borderColor = '#3652A4'}
                  onBlur={(e) => e.target.style.borderColor = '#1e1e1e'}
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium block" style={{ color: '#9AB0B8' }}>
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full p-4 bg-[#1e1e1e] border-2 rounded-lg text-white placeholder:text-gray-500 focus:bg-[#1e1e1e] focus:shadow-lg focus:shadow-[#3652A4]/20 transition-all duration-300 outline-none"
                  style={{ borderColor: '#1e1e1e' }}
                  onFocus={(e) => e.target.style.borderColor = '#3652A4'}
                  onBlur={(e) => e.target.style.borderColor = '#1e1e1e'}
                />
              </div>

              {/* Subject Dropdown */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium block" style={{ color: '#9AB0B8' }}>
                  Subject *
                </label>
                <select
                  id="subject"
                  className="w-full p-4 bg-[#1e1e1e] border-2 rounded-lg text-white focus:bg-[#1e1e1e] focus:shadow-lg focus:shadow-[#3652A4]/20 transition-all duration-300 outline-none cursor-pointer"
                  style={{ borderColor: '#1e1e1e' }}
                  onFocus={(e) => e.target.style.borderColor = '#3652A4'}
                  onBlur={(e) => e.target.style.borderColor = '#1e1e1e'}
                >
                  <option value="" className="bg-[#1e1e1e]">Select a subject</option>
                  <option value="general" className="bg-[#1e1e1e]">General Inquiry</option>
                  <option value="sponsorship" className="bg-[#1e1e1e]">Sponsorship</option>
                  <option value="collaboration" className="bg-[#1e1e1e]">Collaboration</option>
                </select>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium block" style={{ color: '#9AB0B8' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full p-4 bg-[#1e1e1e] border-2 rounded-lg text-white placeholder:text-gray-500 focus:bg-[#1e1e1e] focus:shadow-lg focus:shadow-[#3652A4]/20 transition-all duration-300 outline-none resize-none"
                  style={{ borderColor: '#1e1e1e' }}
                  onFocus={(e) => e.target.style.borderColor = '#3652A4'}
                  onBlur={(e) => e.target.style.borderColor = '#1e1e1e'}
                />
              </div>

              <button
                type="submit"
                className="w-full font-semibold p-4 rounded-lg hover:scale-[1.02] hover:shadow-lg hover:shadow-[#3652A4]/30 transition-all duration-300 text-white"
                style={{ backgroundColor: '#3652A4' }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 p-8 bg-[#181818] border border-[#1e1e1e] rounded-2xl shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-3 text-white">Contact Information</h2>
              <p className="text-sm text-justify" style={{ color: '#9AB0B8' }}>
                Reach out for sponsorship, collaboration, outreach programs, or to join our team. We typically respond within 24-48 hours.
              </p>
            </div>
            {/* Email */}
            <button 
              onClick={handleEmailClick}
              className="contact-item w-full flex items-center gap-4 p-5 bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl hover:border-[#3652A4]/50 hover:bg-[#252525] transition-all duration-300 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 text-white flex items-center justify-center rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#3652A4' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-wide mb-1" style={{ color: '#9AB0B8' }}>Email</div>
                <div className="font-medium text-white">Send us an email</div>
              </div>
              <svg className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#3652A4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Location */}
            <div className="contact-item flex items-center gap-4 p-5 bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl hover:border-[#3652A4]/50 hover:bg-[#252525] transition-all duration-300 group">
              <div className="w-12 h-12 text-white flex items-center justify-center rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#3652A4' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-wide mb-1" style={{ color: '#9AB0B8' }}>Location</div>
                <div className="font-medium text-white">School of MAE, NTU Singapore</div>
              </div>
            </div>

            {/* Social Media Follow Us */}
            <div className="mt-8 pt-8 border-t" style={{ borderColor: '#1e1e1e' }}>
              <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
              <div className="space-y-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com/ntuarchimedes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item flex items-center gap-4 p-5 bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl hover:border-[#E4405F]/50 hover:bg-[#252525] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 text-white flex items-center justify-center rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#E4405F' }}>
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-wide mb-1" style={{ color: '#9AB0B8' }}>Instagram</div>
                    <div className="font-medium text-white">@ntuarchimedes</div>
                  </div>
                  <svg className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#E4405F' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/ntuarchimedes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item flex items-center gap-4 p-5 bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl hover:border-[#0077B5]/50 hover:bg-[#252525] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 text-white flex items-center justify-center rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#0077B5' }}>
                    <LinkedInIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-wide mb-1" style={{ color: '#9AB0B8' }}>LinkedIn</div>
                    <div className="font-medium text-white">NTU Archimedes</div>
                  </div>
                  <svg className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#0077B5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@ntuarchimedes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item flex items-center gap-4 p-5 bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl hover:border-[#FF0000]/50 hover:bg-[#252525] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 text-white flex items-center justify-center rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#FF0000' }}>
                    <YouTubeIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-wide mb-1" style={{ color: '#9AB0B8' }}>YouTube</div>
                    <div className="font-medium text-white">Archimedes AAV</div>
                  </div>
                  <svg className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#FF0000' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
