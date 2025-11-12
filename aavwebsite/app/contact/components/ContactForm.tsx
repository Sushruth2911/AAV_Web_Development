"use client"

import { useState } from "react"

export function ContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate submission
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-8">
      <div className="w-full max-w-lg p-8 bg-zinc-800 rounded-xl shadow-lg space-y-6">
        <h2 className="text-4xl font-semibold text-white text-center">Send Us a Message</h2>
        <p className="text-gray-400 text-center mb-6">
          Have a question or want to collaborate? We&apos;d love to hear from you. Fill out the form and we’ll respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-white font-medium">Name *</label>
            <input
              id="name"
              placeholder="Your full name"
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-2 border-2 border-gray-700 text-white bg-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500"
            />
            {focusedField === "name" && <span className="text-xs text-orange-400">Required</span>}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-white font-medium">Email *</label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-2 border-2 border-gray-700 text-white bg-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500"
            />
            {focusedField === "email" && <span className="text-xs text-orange-400">Required</span>}
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label htmlFor="subject" className="text-white font-medium">Subject *</label>
            <select
              id="subject"
              onChange={() => setFocusedField("subject")}
              className="w-full px-4 py-2 border-2 border-gray-700 text-white bg-gray-800 focus:outline-none focus:border-orange-500"
            >
              <option>Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="sponsorship">Sponsorship Opportunity</option>
              <option value="collaboration">Technical Collaboration</option>
              <option value="outreach">Outreach Program</option>
              <option value="recruitment">Join Our Team</option>
              <option value="media">Media & Press</option>
            </select>
            {focusedField === "subject" && <span className="text-xs text-orange-400">Required</span>}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-white font-medium">Message *</label>
            <textarea
              id="message"
              placeholder="Tell us more about your inquiry..."
              rows={6}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-2 border-2 border-gray-700 text-white bg-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500"
            />
            {focusedField === "message" && <span className="text-xs text-orange-400">Required</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full bg-linear-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  )
}
