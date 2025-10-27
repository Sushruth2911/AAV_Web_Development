"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert("✅ Thank you! Your message has been sent.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm text-gray-300 mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
          className="w-full p-3 rounded-md bg-[#0f0f0f] border border-[#333] focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your@email.com"
          className="w-full p-3 rounded-md bg-[#0f0f0f] border border-[#333] focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Tell us what's on your mind..."
          className="w-full p-3 rounded-md bg-[#0f0f0f] border border-[#333] focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-3 bg-red-600 hover:bg-red-700 transition rounded-md font-semibold flex justify-center items-center gap-2"
      >
        Send Message
        <span>🚀</span>
      </button>
    </form>
  );
}
