'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMicrophone, FaCalendar, FaMapMarkerAlt, FaUsers, FaYoutube, FaGithub, FaGlobe } from 'react-icons/fa';

interface Talk {
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
  attendees?: number;
  recording?: string;
  slides?: string;
  image?: string;
}

const talks: Talk[] = [
  {
    title: "Fine-tuning and Evaluating Phi Models in Azure AI Studio",
    event: "Microsoft Developer Korea",
    date: "December 2024",
    location: "Seoul, South Korea",
    description: "Demonstrated how to fine-tune and evaluate Microsoft's Phi-3 models using Azure AI Studio, showcasing practical applications and performance improvements.",
    attendees: 150,
    recording: "https://youtube.com/...",
    slides: "https://github.com/...",
    image: "/images/talks/phi-models.jpg"
  },
  {
    title: "Building AI-Powered Applications with Azure OpenAI",
    event: "Inha University Tech Festival",
    date: "November 2024",
    location: "Incheon, South Korea",
    description: "Shared insights on developing AI applications using Azure OpenAI, featuring live coding demonstrations and best practices for implementation.",
    attendees: 200,
    recording: "https://youtube.com/...",
    slides: "https://github.com/...",
    image: "/images/talks/azure-openai.jpg"
  },
  {
    title: "Streamlining Development with Azure Co-op Translator",
    event: "Open Source Conference 2024",
    date: "October 2024",
    location: "Virtual",
    description: "Introduced Azure Co-op Translator, an open-source tool for translating technical documentation, and discussed its impact on the developer community.",
    attendees: 300,
    recording: "https://youtube.com/...",
    slides: "https://github.com/...",
    image: "/images/talks/coop-translator.jpg"
  }
];

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-purple-600/30" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
        <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Speaking
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Sharing knowledge and experiences through technical talks and workshops. 
              Focus on AI development, Azure cloud services, and open-source contributions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Presentations */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-3 mb-12">
              <FaMicrophone className="text-3xl text-blue-400" />
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Featured Presentations
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="aspect-video relative rounded-xl overflow-hidden">
                    <a href="https://www.youtube.com/watch?v=jX_swfH_KNU" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="block">
                      <Image
                        src="/images/open-ms-thumbnail.jpg"
                        alt="Open at Microsoft presentation thumbnail"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </a>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                      Unlocking Multilingual Accessibility with Co-op Translator
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-blue-400" />
                        November 12, 2024
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-purple-400" />
                        Open at Microsoft
                      </div>
                    </div>
                    <p className="text-gray-300">
                      An 18-minute introduction and quick guide on how to use Co-op Translator, presented at Microsoft's 
                      open-source showcase event, Open at Microsoft.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.youtube.com/watch?v=jX_swfH_KNU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-full transition-colors"
                      >
                        <FaYoutube />
                        Watch Recording
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="aspect-video relative rounded-xl overflow-hidden">
                    <a href="https://www.youtube.com/watch?v=boTtKVPBLAc" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="block">
                      <Image
                        src="/images/reactor-thumbnail.jpg"
                        alt="Microsoft Reactor presentation thumbnail"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </a>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                      Unlocking Multilingual Mastery: Dive into Co-op Translator with Azure
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-blue-400" />
                        December 2, 2024
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-purple-400" />
                        Microsoft Reactor
                      </div>
                    </div>
                    <p className="text-gray-300">
                      A comprehensive one-hour session at Microsoft Reactor, covering everything from understanding Co-op Translator's fundamentals 
                      to a live demonstration of its capabilities, including setup and best practices.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.youtube.com/watch?v=boTtKVPBLAc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-full transition-colors"
                      >
                        <FaYoutube />
                        Watch Recording
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conference & Meetup Talks */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-3 mb-12">
              <FaGlobe className="text-3xl text-blue-400" />
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Conference & Meetup Talks
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 rounded-3xl p-6 backdrop-blur-sm border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="aspect-video relative rounded-xl overflow-hidden">
                    <Image
                      src="/images/2024-DDD-seoul.jpg"
                      alt="DDD Seoul Workshop"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                      DDD Seoul Workshop
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-blue-400" />
                        December 8, 2024
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-purple-400" />
                        Seoul
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Conducted a 90-minute workshop on "Integrating Azure AI Services into Your Project", demonstrating 
                    chatbot development with Azure OpenAI Service and Azure AI Foundry integration.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 rounded-3xl p-6 backdrop-blur-sm border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="aspect-video relative rounded-xl overflow-hidden">
                    <Image
                      src="/images/2024-ignite-with-mvp.jpg"
                      alt="Microsoft Ignite After Party with MVPs"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                      Microsoft Ignite After Party with MVPs
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-blue-400" />
                        November 30, 2024
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-purple-400" />
                        Seoul
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Presented insights on the Phi-3 small language model and its applications at Microsoft Ignite After Party. 
                    Shared knowledge and collaborated with Microsoft MVPs in reviewing Ignite sessions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 rounded-3xl p-6 backdrop-blur-sm border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="aspect-video relative rounded-xl overflow-hidden">
                    <Image
                      src="/images/2023-lang-chain-meetup.jpg"
                      alt="LangChain Korea Meetup"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                      LangChain Korea Meetup
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-blue-400" />
                        November 30, 2023
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-purple-400" />
                        Seoul
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Presented on "Efficient Information Extraction in QA Systems", focusing on leveraging Azure AI Search's 
                    reranking capabilities for accurate information retrieval from large PDF datasets.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
