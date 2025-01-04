'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import HeroTitle from '@/components/HeroTitle';
import InteractiveBackground from '@/components/InteractiveBackground';
import StatsCard from '@/components/StatsCard';
import ImpactGrid from '@/components/ImpactGrid';
import FeaturedProject from '@/components/FeaturedProject';

const achievements = [
  {
    title: "Microsoft Ignite After Party",
    description: "Presented insights on Phi-3 language models to Korean MVPs, demonstrating how technical knowledge transcends language barriers.",
    link: "https://lnkd.in/gpQ_MY7k",
    tags: ["Presentation", "Phi-3", "AI"]
  },
  {
    title: "Phi-3 Models Tutorial",
    description: "Created a comprehensive guide making complex AI concepts accessible through detailed step-by-step explanations.",
    link: "https://lnkd.in/gFnGq5i2",
    tags: ["Tutorial", "AI", "Technical Writing"]
  },
  {
    title: "Tech Community Impact",
    description: "Published 7 technical tutorials reaching over 127,000 developers on Microsoft Tech Community.",
    link: "https://lnkd.in/gtCVEg-D",
    tags: ["Community", "Technical Writing"]
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <InteractiveBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl text-center space-y-12">
          <HeroTitle />

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Translating complex AI concepts into action. Breaking down barriers and connecting global developers through open source.
          </motion.p>

          <motion.div 
            className="flex justify-center gap-6 text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a 
              href="https://github.com/skytin1004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/minseok-song-b6347b26a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bounce">
            <FaArrowRight className="rotate-90 text-gray-400" />
          </div>
        </motion.div>
      </section>

      {/* Impact Grid Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
          </motion.h2>
          <ImpactGrid />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gray-400">2024</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Highlights
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300
                         border border-white/10 hover:border-blue-500/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {achievement.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gray-400">Featured</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Project
            </span>
          </motion.h2>

          <FeaturedProject
            title="Co-op Translator"
            description="An open-source tool that automates multilingual translations for markdown and images, making technical documentation accessible worldwide. Helping thousands of developers access technical content in their native language."
            image="/images/co-op-translator.png"
            github="https://github.com/Azure/co-op-translator"
            external="https://techcommunity.microsoft.com/t5/educator-developer-blog/automate-markdown-and-image-translations-using-co-op-translator/ba-p/4263474"
            tags={['Azure OpenAI', 'Azure Computer Vision', 'Python', 'Open Source']}
          />
        </div>
      </section>
    </main>
  );
}
