import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="w-full min-h-screen overflow-y-auto overflow-x-hidden bg-[#1F1E24] text-white p-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-block mb-8">
          <i className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-white transition-colors"></i>
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-title mb-4">About Cinebyte</h1>
          <p className="text-zinc-400 text-lg">Your Ultimate Movie & TV Show Companion</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-[#6556CD]">Our Story</h2>
              <p className="text-zinc-300 leading-relaxed">
                Cinebyte was born from a passion for cinema and technology. Launched in May 2025, 
                we've created a platform that brings the magic of movies and TV shows to your 
                fingertips. Our mission is to make entertainment discovery seamless and enjoyable 
                for everyone.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-[#6556CD]">What We Offer</h2>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-center">
                  <i className="ri-movie-2-line text-[#6556CD] mr-3 text-xl"></i>
                  Trending Movies & TV Shows
                </li>
                <li className="flex items-center">
                  <i className="ri-tv-line text-[#6556CD] mr-3 text-xl"></i>
                  Popular TV Series
                </li>
                <li className="flex items-center">
                  <i className="ri-star-line text-[#6556CD] mr-3 text-xl"></i>
                  Top Rated Content
                </li>
                <li className="flex items-center">
                  <i className="ri-search-line text-[#6556CD] mr-3 text-xl"></i>
                  Advanced Search Features
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-[#6556CD]">Technology Stack</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <i className="ri-reactjs-line text-3xl text-[#61DAFB] mb-2"></i>
                  <p className="text-zinc-300">React.js</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <i className="ri-vite-line text-3xl text-[#646CFF] mb-2"></i>
                  <p className="text-zinc-300">Vite</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <i className="ri-tailwind-css-line text-3xl text-[#38B2AC] mb-2"></i>
                  <p className="text-zinc-300">Tailwind CSS</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <i className="ri-database-2-line text-3xl text-[#032541] mb-2"></i>
                  <p className="text-zinc-300">TMDB API</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-[#6556CD]">Developer</h2>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#6556CD] rounded-full flex items-center justify-center">
                  <i className="ri-user-line text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Akhil</h3>
                  <p className="text-zinc-400">Frontend Developer</p>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <a href="https://github.com/AkHiL667" target="_blank" rel="noopener noreferrer" 
                   className="text-zinc-400 hover:text-white transition-colors">
                  <i className="ri-github-line text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/akhil-konda-abb9252a0/" target="_blank" rel="noopener noreferrer"
                   className="text-zinc-400 hover:text-white transition-colors">
                  <i className="ri-linkedin-line text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-zinc-400">
          <p>© 2025 Cinebyte. All rights reserved.</p>
          <p className="mt-2">Powered by The Movie Database (TMDB)</p>
        </div>
      </div>
    </div>
  )
}

export default About
