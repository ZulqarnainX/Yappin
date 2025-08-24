import React from 'react'
import Image from 'next/image';
import { MessageCircle, Users, Zap, ArrowRight } from 'lucide-react'; // Importing icons from lucide-react
import Link from 'next/link';

const topics = [
  {
    text: "Python",
    img: "/python.jpg",
    desc: "Let’s get into Python development — whether you enjoy writing scripts, building bots, automating tasks, or using powerful tools like Django, Flask, or Pandas.",
    slug: "python-ai"
  },
  {
    text: "Frontend Development",
    img: "/frontend.jpg",
    desc: "Discuss everything UI-focused — from HTML and CSS to React, Next.js, animations, and building beautiful, responsive user interfaces.",
    slug: "frontend-tech"
  },
  {
    text: "Community Projects",
    img: "/community.jpg",
    desc: "Show what you’re working on, team up with others, help out with open-source projects, or get feedback from other creators in our community.",
    slug: "projects"
  },
  {
    text: "Freelancing & Career",
    img: "/freelancing.jpg",
    desc: "Ask for portfolio reviews, share job hunting tips, or discuss freelance life, rates, and client experiences.",
    slug: "career"
  },
  {
    text: "Gaming & Esports",
    img: "/gaming.jpg",
    desc: "Whether you're into chill game nights or intense PvP and esports — connect with other gamers, share your experiences, and find teammates to squad up with.",
    slug: "gaming"
  },
  {
    text: "Anime & Fandoms",
    img: "/anime.jpg",
    desc: "Join conversations about anime, manga, fan theories, new releases, and your favorite fandoms. Share your anime list or fan art.",
    slug: "anime-talks"
  },
];


const Forums = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] overflow-hidden bg-gradient-to-b from-[#CDF5FD] via-[#89CFF3] to-[#00A9FF] font-inter text-gray-800 antialiased">
  <div className='container mx-auto py-10 px-4 sm:px-6 lg:px-8'> 
    <h1 className='text-5xl sm:text-5xl lg:text-4xl font-extrabold leading-tight text-gray-900 mb-12 text-center drop-shadow-lg'> 
      Discussion Forums
    </h1>
    <div className='flex flex-wrap justify-center gap-8'> 
      {topics.map(topic => (
        <div key={topic.img} className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 flex flex-col items-center text-center transform hover:-translate-y-2'> 
          <Image alt={topic.text} src={topic.img} width={80} height={80} className='mb-4 object-contain rounded-full' /> 
          <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{topic.text}</h2> 
          <p className='text-gray-600 mb-4 flex-grow'>{topic.desc}</p> 
          
          <Link href={`/forum/${topic.slug}`}>
          <button className="group px-4 py-2 rounded-full bg-[#3f4ef3] font-semibold text-white text-[17px] shadow-xl hover:bg-blue-700 transition duration-300 flex items-center space-x-3 cursor-pointer">
              <span>Discuss Now</span>
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default Forums

export const metadata = {
  title: 'Forums - Yappin',
  description: 'Join the discussion forums on Yappin and connect with other users.',
}
