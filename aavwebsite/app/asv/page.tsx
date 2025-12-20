import React from "react";

import Navbar from "@/components/navbar";

export default function ASVPage() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-[#f5f7f9] text-slate-900">
        <header className="bg-[#008fb3] text-white py-10 px-6 text-center shadow-sm">
          <h1 className="text-4xl font-bold mb-2">Autonomous Surface Vehicle (ASV)</h1>
          <p className="text-lg opacity-90">Advanced Robotics | Precision Navigation | Intelligent Systems</p>
      </header>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-[#008fb3]">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard title="Power" items={["2 x E60 ePropulsion Lithium Batteries", "Hexsoon Power Distribution Board"]} />
          <FeatureCard title="Core Computing" items={["NVIDIA Jetson Orin NX", "Cube Orange Plus MCU"]} />
          <FeatureCard title="Propulsion" items={["Navy 3.0 Evo", "Herelink Telemetry"]} />
          <FeatureCard title="Vision" items={["ZED 2i Stereo Camera"]} />
          <FeatureCard title="GPS" items={["Hemisphere R632 GNSS Receiver", "Hemisphere A25 Antenna"]} />
          <FeatureCard title="Communications" items={["Ubiquiti Rocket Prism 5AC", "Omni + Sector Antennas"]} />
        </div>
      </section>

      <Section title="Binocular Vision">
        <p>
          The ASV uses the ZED2i, a durable and powerful camera designed for spatial analytics. Combined with YOLO,
          it enables accurate object detection and 3D point cloud generation for depth and coordinate estimation.
        </p>
      </Section>

      <Section title="GPS System">
        <p>
          Powered by the Hemisphere R632 GNSS with RTK support, the ASV achieves 4cm accuracy and 0.01° heading
          precision. The antenna system ensures strong SNR and minimal interference for marine navigation.
        </p>
      </Section>

      <Section title="Hydrophone">
        <p>
          The Teledyne Reson TC4013 hydrophone provides high-sensitivity, omnidirectional detection for underwater
          acoustic analysis and locating sound emitters.
        </p>
      </Section>

      <Section title="Mechanical — Thrusters">
        <p>
          Dual Navy 3.0 Evo motors provide differential thrust, powered by independent 48V E60 batteries for optimal
          maneuverability, stability, and long-range performance.
        </p>
      </Section>

      <Section title="UAV Landing Dock">
        <p>
          A stepper motor–driven docking system clamps and releases UAV legs, enabling secure transport and smooth
          deployment in marine conditions.
        </p>
      </Section>

      <Section title="Racquetball Launcher">
        <p>
          Designed for future trajectory planning, the launcher uses flywheels and a drum mechanism to fire balls with
          controlled speed and precision.
        </p>
      </Section>

      <Section title="Waterproofing & Electrical System">
        <p>
          All electronics are sealed in waterproof enclosures. Solid‑state relays and DC‑DC converters manage 48V →
          24V/12V/7V power distribution for all components including propulsion, MCU, GPS, and vision systems.
        </p>
      </Section>

      <footer className="bg-[#008fb3] text-white text-center py-6 mt-16">
        <p className="text-sm opacity-80">© 2025 NTU Robotics — Autonomous Surface Vehicle Team</p>
      </footer>
    </div>
    </>
  );
}

// Reusable Section Component
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-semibold text-[#008fb3] mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-[#008fb3] mb-3">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
