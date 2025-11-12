"use client"

import { useState } from "react"
import { ExternalLink, Copy, Check } from "lucide-react"

const contactDetails = [
  {
    icon: "✉️",
    label: "Email",
    value: "contact@ntuarchimedes.org",
    link: "mailto:contact@ntuarchimedes.org",
    copyable: true,
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+65 6790 4321",
    link: "tel:+6567904321",
    copyable: true,
  },
  {
    icon: "📍",
    label: "Location",
    value: "School of MAE, NTU Singapore",
    link: "https://maps.google.com/?q=NTU+Singapore",
    copyable: false,
  },
]

const socialLinks = [
  {
    icon: "📸",
    label: "Instagram",
    handle: "@ntuarchimedes",
    link: "https://instagram.com/ntuarchimedes",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    handle: "NTU Archimedes",
    link: "https://linkedin.com/company/ntuarchimedes",
  },
  {
    icon: "▶️",
    label: "YouTube",
    handle: "Archimedes AAV",
    link: "https://youtube.com/@ntuarchimedes",
  },
]

export function ContactInfo() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-8 py-12">
      <div className="w-full max-w-xl space-y-6 bg-zinc-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">Contact Information</h2>
        <p className="text-gray-400 mb-6">
          Reach out for sponsorship, collaboration, outreach programs, or to join our team. We typically respond within 24-48 hours.
        </p>

        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg">
              <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-yellow-500 text-white flex items-center justify-center rounded-xl">
                {detail.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">{detail.label}</div>
                <div className="font-medium text-white">{detail.value}</div>
              </div>
              <div className="flex gap-2">
                {detail.copyable && (
                  <button
                    onClick={() => handleCopy(detail.value, index)}
                    className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-white" />
                    )}
                  </button>
                )}
                <a href={detail.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {socialLinks.map((social, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
              <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-orange-500 text-white flex items-center justify-center rounded-xl">
                {social.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">{social.label}</div>
                <div className="font-medium text-white">{social.handle}</div>
              </div>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
