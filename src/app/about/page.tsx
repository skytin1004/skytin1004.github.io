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
              organization="Inha University"
              description="Received the highest recognition for outstanding contributions to the Azure Co-op Translator project. Led innovative developments in open-source software."
              iconType="trophy"
              iconColor="text-yellow-400"
              imagePath={[
                "/images/awards/i-oss-award.png",
                "/images/awards/i-oss-award-2.png"
              ]}
              link="https://swuniv.inha.ac.kr/swuniv/12703/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc3d1bml2JTJGMzExMyUyRjE0MTU0NiUyRmFydGNsVmlldy5kbyUzRnBhZ2UlM0QxJTI2c3JjaENvbHVtbiUzRCUyNnNyY2hXcmQlM0QlMjZiYnNDbFNlcSUzRCUyNmJic09wZW5XcmRTZXElM0QlMjZyZ3NCZ25kZVN0ciUzRCUyNnJnc0VuZGRlU3RyJTNEJTI2aXNWaWV3TWluZSUzRGZhbHNlJTI2cGFzc3dvcmQlM0QlMjY%3D"
            />
            <AwardCard
              title="Microsoft Educator Developer Blog: Most Viewed"
              date="September 2024"
              organization="Microsoft Tech Community"
              description="Article on 'Fine-Tune and Integrate Custom Phi-3 / 3.5 Models in Azure AI Studio' received over 8,000 views"
              iconType="newspaper"
              iconColor="text-blue-400"
              imagePath={[
                "/images/fintune-phi-aistudio.png",
                "/images/awards/finetune-phi-ai-studio-award.png"
              ]}
              link="https://techcommunity.microsoft.com/blog/educatordeveloperblog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow-in-azure-ai-studio/4191726?wt.mc_id=studentamb_279723"
            />
            <AwardCard
              title="Microsoft Educator Developer Blog: Most Viewed"
              date="July 2024"
              organization="Microsoft Tech Community"
              description="Article on 'Fine-Tune and Integrate Custom Phi-3 Models' received over 11,500 views"
              iconType="newspaper"
              iconColor="text-blue-400"
              imagePath={[
                "/images/finetune-phi.png",
                "/images/awards/finetune-phi-award.png"
              ]}
              link="https://techcommunity.microsoft.com/blog/educatordeveloperblog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow-step-by-step-guide/4178612?wt.mc_id=studentamb_279723"
            />
            <AwardCard
              title="Microsoft Educator Developer Blog: Most Viewed"
              date="November 2023"
              organization="Microsoft Tech Community"
              description="Article on 'Teach ChatGPT to Answer Questions: Using Azure AI Search & Azure OpenAI (Lang Chain)' received over 21,600 views"
              iconType="newspaper"
              iconColor="text-blue-400"
              imagePath={[
                "/images/teach-chatgpt.png",
                "/images/awards/teach-chatgpt-award.jpeg"
              ]}
              link="https://techcommunity.microsoft.com/blog/educatordeveloperblog/teach-chatgpt-to-answer-questions-using-azure-ai-search--azure-openai-lang-chain/3969713?wt.mc_id=studentamb_279723"
            />
            <AwardCard
              title="Microsoft Learn Student Ambassador"
              date="August 2023 - Present"
              description="Part of a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future."
              iconType="users"
              iconColor="text-purple-400"
              imagePath="/images/mlsa.png"
              link="https://mvp.microsoft.com/studentambassadors/certificate/e67c5642-76f5-4d5d-858b-f58a17c6bdcd"
            />
            <AwardCard
              title="2023 ChatGPT Microsoft Azurethon Award"
              date="May 2023"
              organization="Organized by AIFactory, Sponsored by Microsoft Korea"
              description="Won the Prompt Engineering Services category award at Microsoft Azurethon. Created an innovative ChatGPT prompt that generates supply chain optimization reports using Operations Planning Models from industrial engineering."
              iconType="trophy"
              iconColor="text-yellow-400"
              imagePath={[
                "/images/awards/azurethon.png",
                "/images/awards/2023ChatGPTMSazurethon.jpg"
              ]}
              link="https://aifactory.space/task/2290/discussion/268"
            />
          </div>
        </motion.section>
      </div>
    </main>
  );
}
