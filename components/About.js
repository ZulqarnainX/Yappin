"use client"
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-[#CDF5FD] via-[#89CFF3] to-[#00A9FF]">
      <div className="w-full max-w-4xl p-8 sm:p-12 text-center text-[#242f40]">

        {/* Your original heading style */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-in">
          About Yappin
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-4 text-gray-700 animate-fade-in delay-100">
          Yappin is a chat app designed for seamless communication. Built using modern tools like <strong>Next.js</strong>, <strong>Stream API</strong>, and <strong>NextAuth</strong>, it's here to provide a clean, secure messaging experience.
        </p>

        <p className="text-base sm:text-lg mb-4 text-gray-700 animate-fade-in delay-200">
          The project is still in early development. You might face bugs or missing features — but that's the beauty of building in public. If you're a developer, you're welcome to contribute!
        </p>

        <p className="text-base sm:text-lg mb-6 text-gray-700 animate-fade-in delay-300">
          The entire app is being shaped with feedback from users like you and built by someone who loves frontend and modern design — <strong>Zulqarnain</strong>.
        </p>

        <div className="flex justify-center gap-4 flex-wrap animate-fade-in delay-400">
          <Link href="https://github.com/ZulqarnainX" target="_blank" rel="noopener noreferrer">
            <button className="cursor-pointer flex items-center gap-2 bg-black hover:bg-[#1a1919] text-white px-5 py-3 rounded-full transition shadow-md">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width={20} height={20} className="invert" />
              GitHub
            </button>
          </Link>

          <Link href="https://www.linkedin.com/in/zulqarnainx/" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#005582] text-white px-5 py-3 rounded-full transition shadow-md cursor-pointer">
              <img src="https://images.seeklogo.com/logo-png/38/2/linkedin-black-icon-logo-png_seeklogo-387472.png" alt="LinkedIn" width={20} height={20}
              className='invert' />
              LinkedIn
              
            </button>
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-10 animate-fade-in delay-500">
          Designed with ❤️ by Zulqarnain
        </p>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeInUp 0.7s ease forwards;
        }

        .animate-fade-in.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in.delay-300 { animation-delay: 0.3s; }
        .animate-fade-in.delay-400 { animation-delay: 0.4s; }
        .animate-fade-in.delay-500 { animation-delay: 0.5s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
