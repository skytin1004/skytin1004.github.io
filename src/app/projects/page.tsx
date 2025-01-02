'use client';

import { FaGithub, FaExternalLinkAlt, FaAward, FaCode, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import AnimatedCard from '@/components/AnimatedCard';
import GradientText from '@/components/GradientText';

const projects = [
  {
    title: 'Co-op Translator',
    description: 'An open-source tool that automates multilingual translations for markdown and images, making technical documentation accessible worldwide.',
    icon: FaCode,
    gradient: 'from-blue-600/20 to-cyan-600/20',
    hoverGradient: 'hover:from-blue-500/30 hover:to-cyan-500/30',
    links: {
      github: 'https://github.com/Azure/co-op-translator',
      external: 'https://techcommunity.microsoft.com/t5/educator-developer-blog/automate-markdown-and-image-translations-using-co-op-translator/ba-p/4263474'
    },
    highlights: [
      'Developed and maintained an automated multilingual translation system using Azure AI services',
      'Integrated Azure OpenAI and Azure Computer Vision for text extraction and translation',
      'Managed the transition of the Co-op Translator project to open source on GitHub'
    ],
    tags: ['Python', 'Azure OpenAI', 'Azure Computer Vision']
  },
  {
    title: 'IBAS Web Service',
    description: 'Led the development team for Inha Bigdata Analysis Society\'s web platform. Implemented backend services and data engineering solutions.',
    icon: FaDatabase,
    gradient: 'from-purple-600/20 to-pink-600/20',
    hoverGradient: 'hover:from-purple-500/30 hover:to-pink-500/30',
    links: {
      external: 'https://www.inhabas.com/'
    },
    tags: ['Java', 'Spring Boot', 'SQL']
  },
  {
    title: 'Apache Iceberg Contributions',
    description: 'Contributed to Apache Iceberg by modernizing test frameworks and improving documentation.',
    icon: FaAward,
    gradient: 'from-yellow-600/20 to-orange-600/20',
    hoverGradient: 'hover:from-yellow-500/30 hover:to-orange-500/30',
    links: {
      github: 'https://github.com/apache/iceberg'
    },
    highlights: [
      'Migrated test suites from JUnit4 to JUnit5 across multiple packages',
      'Improved documentation and test coverage',
      'Contributed to core functionality improvements'
    ],
    tags: ['Java', 'JUnit', 'Open Source']
  },
  {
    title: 'Microsoft Phi-3 Cookbook Contributions',
    description: 'Major contributor to Microsoft\'s official Phi-3 Cookbook project, providing comprehensive end-to-end tutorials and improving documentation quality.',
    icon: FaAward,
    gradient: 'from-green-600/20 to-blue-600/20',
    hoverGradient: 'hover:from-green-500/30 hover:to-blue-500/30',
    links: {
      github: 'https://github.com/microsoft/Phi-3CookBook/'
    },
    highlights: [
      'Created end-to-end tutorials for fine-tuning and evaluating Phi-3 models in Azure AI Studio',
      'Implemented automated documentation link validation using GitHub Actions',
      'Added multilingual support in 6 languages using Co-op Translator'
    ],
    tags: ['Azure AI Studio', 'Phi-3', 'Documentation']
  },
  {
    title: 'Microsoft Tech Community Knowledge Sharing',
    description: 'Active contributor to Microsoft Tech Community, creating comprehensive tutorials and guides for Azure AI services.',
    icon: FaCode,
    gradient: 'from-red-600/20 to-yellow-600/20',
    hoverGradient: 'hover:from-red-500/30 hover:to-yellow-500/30',
    links: {
      external: 'https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/1759928'
    },
    highlights: [
      'Created tutorials and guides for Azure AI services',
      'Reached over 150,000 views on Microsoft Tech Community',
      'Helped developers worldwide implement AI solutions effectively'
    ],
    tags: ['Azure OpenAI', 'Azure AI Studio', 'Technical Writing']
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Featured"
          highlight="Projects"
          subtitle="A collection of my most impactful work and contributions"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <AnimatedCard
                key={index}
                delay={index * 0.2}
                gradient={project.gradient}
                hoverGradient={project.hoverGradient}
                className="p-8"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-4xl text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-6">
                    <div className="flex justify-between items-start">
                      <h2 className="text-2xl font-bold">{project.title}</h2>
                      <div className="flex gap-4">
                        {project.links.github && (
                          <motion.a 
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-blue-400 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <FaGithub />
                          </motion.a>
                        )}
                        {project.links.external && (
                          <motion.a 
                            href={project.links.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-blue-400 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <FaExternalLinkAlt />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg">
                      {project.description}
                    </p>

                    {project.highlights && (
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, i) => (
                          <motion.li 
                            key={i}
                            className="flex items-start gap-2 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                          >
                            <span className="text-blue-400 mt-1.5">•</span>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium
                                   hover:bg-white/10 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
