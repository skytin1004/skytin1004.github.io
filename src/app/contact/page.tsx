import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBlog } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Links */}
          <div className="space-y-8">
            <a 
              href="mailto:skytin1004@gmail.com"
              className="block p-6 bg-white/5 rounded-lg hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-blue-400" />
                <div>
                  <h2 className="text-xl font-semibold">Email</h2>
                  <p className="text-gray-300">skytin1004@gmail.com</p>
                </div>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/minseok-song-b6347b26a"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white/5 rounded-lg hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-2xl text-blue-400" />
                <div>
                  <h2 className="text-xl font-semibold">LinkedIn</h2>
                  <p className="text-gray-300">Minseok Song</p>
                </div>
              </div>
            </a>

            <a 
              href="https://skytin1004.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white/5 rounded-lg hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-4">
                <FaBlog className="text-2xl text-blue-400" />
                <div>
                  <h2 className="text-xl font-semibold">Blog</h2>
                  <p className="text-gray-300">skytin1004.github.io</p>
                </div>
              </div>
            </a>
          </div>

          {/* Message */}
          <div className="bg-white/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Let's Connect!</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm always interested in new opportunities, collaborations, and connecting with fellow developers. 
              Whether you have a question about my projects or just want to say hi, feel free to reach out!
            </p>
            <p className="text-gray-300 mt-4">
              Currently maintaining Co-op Translator at Microsoft Azure and actively contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
