"use client";
import Image from "next/image";
import Particles from "@/Reactbits/Particles/Particles";
import { MessageCircle, Users, Zap, ArrowRight } from 'lucide-react'; // Importing icons from lucide-react
import { RotateWords } from "@/FramerMotion/rotate-words";
import Link from 'next/link'



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#CDF5FD] via-[#89CFF3] to-[#00A9FF] font-inter text-gray-800 antialiased">
      {/* Hero Section */}
      <main className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#00A9FF", "#89CFF3", "#A0E9FF"]}
            particleCount={800}
            particleSpread={12}
            speed={0.15}
            particleBaseSize={125}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
          />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl">
          <h1 className="text-5xl transition-all sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 mb-6">
            <RotateWords text="Chat&nbsp;" words={["Yappfully", "Non-Stop", "Anytime", "Together", "Endless", "Regularly"]} />
            Connect Instantly.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Yappin is real-time messaging that feels smooth, simple, and natural.</p>
          <div className="flex justify-center space-x-4">
            <button className="cursor-pointer group px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full bg-[#3f4ef3] text-white text-base sm:text-lg font-semibold shadow-xl hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 flex items-center space-x-2 sm:space-x-3">
              <Link href="/forums"><span>Start Yappin Now</span></Link>
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="cursor-pointer px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full bg-white text-[#004E89] font-bold text-base sm:text-lg border border-blue-200 shadow-md hover:bg-blue-50 transition duration-300 transform hover:-translate-y-1">
              <Link href="/about">Learn More</Link>
            </button>
          </div>

          <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <img
              src="/1000.gif"
              alt="Yappin Chat Interface Mockup"
              className="w-full h-auto rounded-2xl object-cover shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/1200x600/E0F2FE/2563EB?text=Yappin+Chat+Interface+Screenshot';
              }}
            />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">Why Choose Yappin?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border border-blue-100">
              <div className="flex justify-center mb-6">
                <MessageCircle className="w-16 h-16 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Real-time Messaging</h3>
              <p className="text-gray-600 text-center">
                Experience lightning-fast message delivery and instant updates. Never miss a beat in your conversations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border border-blue-100">
              <div className="flex justify-center mb-6">
                <Users className="w-16 h-16 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Community Forums</h3>
              <p className="text-gray-600 text-center">
                Explore forums based on your interests or start your own. Share ideas, ask questions, and connect with people.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border border-blue-100">
              <div className="flex justify-center mb-6">
                <Zap className="w-16 h-16 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Intuitive Interface</h3>
              <p className="text-gray-600 text-center">
                Enjoy a clean, user-friendly design that makes chatting simple and enjoyable for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Start Yappin?</h2>
          <p className="text-xl mb-10 opacity-90">Be part of something new. Real-time chat made simple and fun.</p>
          <button className="group px-10 py-5 rounded-full bg-white text-blue-700 text-xl font-bold shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-auto space-x-3">
            <span>Get Started Free</span>
            <ArrowRight className="w-7 h-7 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
}