'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center space-y-8"
        >
          <motion.h1 
            className="text-6xl font-bold"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hello, I'm <span className="text-blue-400 hover:text-blue-300 transition-colors">Minseok Song</span>
          </motion.h1>
          
          <motion.div 
            className="space-y-2 text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>Maintainer of Azure Co-op Translator</p>
            <p>Microsoft Learn Student Ambassador</p>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6 text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://github.com/skytin1004" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-all hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/minseok-song-b6347b26a" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-400 transition-all hover:scale-110">
              <FaLinkedin />
            </a>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-105"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Project</h2>
          
          <div className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition">
            <h3 className="text-2xl font-bold mb-4">Co-op Translator</h3>
            <div className="space-y-6">
              <p className="text-gray-300">
                An open-source tool that automates multilingual translations for markdown and images,
                making technical documentation accessible worldwide. I redesigned the initial project
                which was later adopted by Azure as an official open-source project.
              </p>
              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                <li>Led the redesign of the project that became an official Azure open-source tool</li>
                <li>Integrated Azure OpenAI and Azure Computer Vision for text extraction and translation</li>
                <li>Currently serving as the maintainer, managing contributions and project direction</li>
              </ul>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Azure/co-op-translator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition"
                >
                  View Project
                </a>
                <a 
                  href="https://techcommunity.microsoft.com/t5/educator-developer-blog/automate-markdown-and-image-translations-using-co-op-translator/ba-p/4263474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded transition"
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold mb-4">AI & ML</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Azure OpenAI</li>
                <li>LangChain & Semantic Kernel</li>
                <li>Fine-tuning & RAG</li>
                <li>Prompt Engineering</li>
                <li>Azure Computer Vision</li>
                <li>Vector Database</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Spring Boot</li>
                <li>Django</li>
                <li>RESTful APIs</li>
                <li>SQL & MariaDB</li>
                <li>AWS (EC2)</li>
                <li>Apache Iceberg</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Python & Java</li>
                <li>GitHub</li>
                <li>Prompt Flow</li>
                <li>JUnit Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
