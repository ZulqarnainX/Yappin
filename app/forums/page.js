import React from 'react'

const topics = [
  {
    text: "Python",
    img: "/python.png",
    desc: "Let's dive deep into Python development — whether you're into scripting, building bots, automating tasks, or exploring powerful libraries like Django, Flask, or Pandas.",
  },
  {
    text: "Frontend Development",
    img: "/frontend.png",
    desc: "Discuss everything UI-focused — from HTML and CSS to React, Next.js, animations, and building beautiful, responsive user interfaces.",
  },
  {
    text: "Community Projects",
    img: "/community.png",
    desc: "Showcase what you’re building, find collaborators, contribute to open-source, or get feedback from fellow makers in our creator-driven space.",
  },
  {
    text: "AI & Machine Learning",
    img: "/ai.png",
    desc: "Explore the cutting edge of artificial intelligence, from training ML models to working with LLMs like ChatGPT, computer vision, and more.",
  },
  {
    text: "Gaming & Esports",
    img: "/gaming.png",
    desc: "From chill gaming sessions to high-stakes PvP and esports talk — connect with gamers, share clips, and find people to squad up with.",
  },
  {
    text: "Anime & Fandoms",
    img: "/anime.png",
    desc: "Join discussions on anime, manga, fan theories, upcoming releases, and niche fandoms. Share fan art, cosplay, or your anime list!",
  },
];


const Forums = () => {
  return (
    <div className='container bg-red-700 mx-auto my-28'>
      <h1>Discussion Forums</h1>
      <div>
        {topics.map(topic => {
          return <div key={topic.img}
          className='shadoww-lg bg-slate-500'>
            <h2>{topic.text}</h2>
            <p>{topic.desc}</p>
            {topic.text}</div>
        })}
      </div>
    </div>
  )
}

export default Forums
