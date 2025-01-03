'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaAward, FaCertificate, FaTrophy, FaNewspaper, FaUsers, FaTools, FaShareAlt, FaGithub, FaCode } from 'react-icons/fa';
import AwardCard from '@/components/AwardCard';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-purple-600/30" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
        <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center justify-between">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Minseok Song
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              A passionate AI Engineer and Open Source Maintainer, dedicated to making technical knowledge accessible worldwide.
            </p>
          </motion.div>
          <motion.div
            className="hidden md:block w-96 h-96 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-full p-4"
              priority
            />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-20 space-y-32">
        {/* Journey Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
          <div className="relative bg-white/5 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              My Journey
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p className="leading-relaxed">
                I started programming in 2010 with a simple obstacle avoidance game that ignited my passion 
                for programming. Since then, I've dedicated myself to creating software that brings happiness 
                and comfort to people.
              </p>
              <p className="leading-relaxed">
                I chose to study Industrial Management Engineering at Inha University to combine a business mindset 
                with programming skills, aiming to proactively lead projects and communicate effectively with team members.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <FaGraduationCap className="text-blue-500" />
              Education
            </h2>
            <div className="space-y-4">
              <motion.div 
                className="group bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">Industrial Management Engineering</h3>
                <p className="text-gray-400">Inha University</p>
                <p className="text-gray-400">2020 - 2026</p>
              </motion.div>
              <motion.div 
                className="group bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">Artificial Intelligence Engineering</h3>
                <p className="text-gray-400">Inha University</p>
                <p className="text-gray-400">2020 - 2026</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Certifications Section */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <FaCertificate className="text-purple-500" />
              Certifications
            </h2>
            <div className="space-y-4">
              <motion.div 
                className="group bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">Azure AI Fundamentals</h3>
                <p className="text-gray-400">Microsoft</p>
                <p className="text-gray-400">September 2024</p>
                <p className="text-sm text-gray-500 mt-2">Credential ID: 953CBDBADA1E302</p>
              </motion.div>
              <motion.div 
                className="group bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">OPIC IH</h3>
                <p className="text-gray-400">ACTFL</p>
                <p className="text-gray-400">September 2024</p>
                <p className="text-sm text-gray-500 mt-2">Credential ID: 4FIR-FGXS-UYFK-M94Y-ZR5E</p>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Awards & Recognition */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <FaAward className="text-blue-500" />
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AwardCard
              title="Inha Open Source Software Festival - 1st Place"
              date="December 2024"
              description="Received the highest recognition for outstanding contributions to the Azure Co-op Translator project. Led innovative developments in open-source software, presenting the project's impact at INHA Creative Space."
              iconType="trophy"
              iconColor="text-yellow-400"
              imagePath="/images/awards/oss-festival.jpg"
            />
            <AwardCard
              title="Microsoft Educator Developer Blog: Most Viewed"
              date="September 2024"
              description="Article on 'Evaluate Fine-tuned Phi-3 / 3.5 Models in Azure AI Studio' received over 8,000 views"
              iconType="newspaper"
              iconColor="text-blue-400"
            />
            <AwardCard
              title="Microsoft Educator Developer Blog: Most Viewed"
              date="July 2024"
              description="Article on 'Fine-Tune and Integrate Custom Phi-3 Models' received over 11,500 views"
              iconType="newspaper"
              iconColor="text-blue-400"
            />
            <AwardCard
              title="Microsoft Educator Developer Blog: Most Viewed"
              date="November 2023"
              description="Article on 'Teach ChatGPT to Answer Questions: Using Azure AI Search & Azure OpenAI (Lang Chain)' received over 21,600 views"
              iconType="newspaper"
              iconColor="text-blue-400"
            />
            <AwardCard
              title="Microsoft Learn Student Ambassador"
              date="August 2023 - Present"
              description="Part of a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future."
              iconType="users"
              iconColor="text-purple-400"
            />
            <AwardCard
              title="2023 ChatGPT Microsoft Azurethon Award"
              date="May 2023"
              organization="Organized by AIFactory, Sponsored by Microsoft Korea"
              description="Won the Prompt Engineering Services category award at Microsoft Azurethon. Created an innovative ChatGPT prompt that generates supply chain optimization reports using Operations Planning Models from industrial engineering."
              iconType="trophy"
              iconColor="text-yellow-400"
              imagePath="/images/awards/azurethon.jpg"
            />
          </div>
        </motion.section>

        {/* Contributions Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <FaTools className="text-green-400" />
            Contributions & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="group relative bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <FaShareAlt className="text-2xl text-blue-400" />
                  <h3 className="text-2xl font-semibold">Technical Assets</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Created and maintained comprehensive guides for AI model fine-tuning and integration, 
                  reaching over 127,000 developers through Microsoft's platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Documentation</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Tutorials</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Best Practices</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <FaGithub className="text-2xl text-purple-400" />
                  <h3 className="text-2xl font-semibold">Open Source Tools</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Developed Azure Co-op Translator and other open-source tools to streamline 
                  AI implementation processes and enhance development workflows.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Azure Tools</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Process Automation</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Developer Tools</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
