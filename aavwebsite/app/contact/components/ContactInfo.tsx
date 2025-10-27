"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <div className="space-y-8 bg-[#1c1c1c]/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-[#2a2a2a]">
      <div>
        <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-red-600 p-3 rounded-md">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-semibold">hello@example.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-600 p-3 rounded-md">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="font-semibold">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-600 p-3 rounded-md">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="font-semibold">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Follow us</h2>
        <div className="flex gap-4">
          <Link
            href="#"
            className="bg-[#0f0f0f] p-3 rounded-md hover:bg-red-600 transition"
          >
            <Github size={20} />
          </Link>
          <Link
            href="#"
            className="bg-[#0f0f0f] p-3 rounded-md hover:bg-red-600 transition"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="#"
            className="bg-[#0f0f0f] p-3 rounded-md hover:bg-red-600 transition"
          >
            <Twitter size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
