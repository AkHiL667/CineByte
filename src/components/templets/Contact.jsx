import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="w-full min-h-screen overflow-y-auto overflow-x-hidden bg-[#1F1E24] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-block mb-8">
          <i className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-white transition-colors"></i>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-title mb-4">Get in Touch</h1>
          <p className="text-zinc-400 text-lg">Let's create something amazing together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-[#6556CD]">Contact Information</h2>
              <div className="space-y-6">
                <a href="mailto:konda.akhil456@gmail.com" 
                   className="flex items-center space-x-4 text-zinc-300 hover:text-[#6556CD] transition-colors">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm">konda.akhil456@gmail.com</p>
                  </div>
                </a>

                <a href="https://github.com/AkHiL667" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center space-x-4 text-zinc-300 hover:text-[#6556CD] transition-colors">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                    <i className="ri-github-line text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm">@AkHiL667</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/akhil-konda-abb9252a0/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center space-x-4 text-zinc-300 hover:text-[#6556CD] transition-colors">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                    <i className="ri-linkedin-line text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm">Akhil Konda</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-[#6556CD]">Current Status</h2>
              <div className="flex items-center space-x-3 text-zinc-300">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p>Available for new projects</p>
              </div>
            </div>
          </div>

          {/* Right Column - About Me */}
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-[#6556CD]">About Me</h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                I'm a passionate Frontend Developer with a keen eye for creating beautiful, 
                responsive, and user-friendly web applications. My expertise lies in modern 
                web technologies and frameworks.
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-[#6556CD] font-semibold mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-zinc-700 rounded-full text-sm text-zinc-300 hover:bg-[#6556CD] transition-colors">React.js</span>
                    <span className="px-4 py-2 bg-zinc-700 rounded-full text-sm text-zinc-300 hover:bg-[#6556CD] transition-colors">Tailwind CSS</span>
                    <span className="px-4 py-2 bg-zinc-700 rounded-full text-sm text-zinc-300 hover:bg-[#6556CD] transition-colors">JavaScript</span>
                    <span className="px-4 py-2 bg-zinc-700 rounded-full text-sm text-zinc-300 hover:bg-[#6556CD] transition-colors">HTML5</span>
                    <span className="px-4 py-2 bg-zinc-700 rounded-full text-sm text-zinc-300 hover:bg-[#6556CD] transition-colors">CSS3</span>
                    <span className="px-4 py-2 bg-zinc-700 rounded-full text-sm text-zinc-300 hover:bg-[#6556CD] transition-colors">Responsive Design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-[#6556CD]">Let's Work Together</h2>
              <p className="text-zinc-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Feel free to reach out through any of the platforms 
                listed here.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-zinc-400">
          <p>© 2025 Cinebyte. All rights reserved.</p>
          <p className="mt-2">Designed & Developed by Akhil</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
