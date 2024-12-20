'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl text-center space-y-8">
          <h1 className="text-6xl font-bold">
            Hello, I'm <span className="text-blue-400">Minseok Song</span>
          </h1>
          
          <div className="space-y-2 text-2xl text-gray-300">
            <p>Maintainer of Co-op Translator at Microsoft Azure</p>
            <p>Microsoft Learn Student Ambassador</p>
          </div>

          <div className="flex justify-center gap-6 text-3xl">
            <a href="https://github.com/skytin1004" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/minseok-song-b6347b26a" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
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
                making technical documentation accessible worldwide. Built with Azure AI Services.
              </p>
              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                <li>Developed and maintained an automated multilingual translation system using Azure AI services</li>
                <li>Integrated Azure OpenAI and Azure Computer Vision for text extraction and translation</li>
                <li>Managed the transition of the Co-op Translator project to open source on GitHub</li>
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
