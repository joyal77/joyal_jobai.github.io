import React from 'react';
import SectionHeader from '../common/SectionHeader';
import NetworkTopology from '../visualizations/NetworkTopology';

export default function Networking() {
  return (
    <section id="networking" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Infrastructure & Protocols"
          title="Systems & Computer Networking"
          subtitle="Deep theoretical and hands-on understanding of network protocols, packet routing, switching layers, DNS/DHCP administration, and Linux system fundamentals."
        />

        <NetworkTopology />
      </div>
    </section>
  );
}
