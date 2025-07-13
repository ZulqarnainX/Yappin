"use client"

import Image from "next/image";
import Particles from "@/Reactbits/Particles/Particles";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <div className="bg-[#CDF5FD]">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Particles
            particleColors={['#00A9FF', '#89CFF3']}
            particleCount={1000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>
    </main>
  );
}
