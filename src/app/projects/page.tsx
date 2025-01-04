'use client';

import { FaGithub, FaExternalLinkAlt, FaAward, FaCode, FaDatabase, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import AnimatedCard from '@/components/AnimatedCard';
import GradientText from '@/components/GradientText';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    title: 'Co-op Translator',
    description: 'Redesigned and rebuilt the existing POC version of Co-op Translator into a Python CLI tool. This open-source project helps developers translate their technical documentation into multiple languages by automatically handling markdown files and embedded images.It preserves markdown formatting while translating content and can extract, translate, and replace text from images, making documentation truly accessible worldwide. Currently serving as the main maintainer after successfully transitioning it to Azure Opensource.',
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
    tags: ['Python', 'Azure OpenAI', 'Azure Computer Vision'],
    images: [
      '/images/co-op-translator.png',
      '/images/projects/co-op-translator-demo.png'
    ]
  },
  {
    title: 'Inha Bigdata Analysis Society (IBAS) Web Service',
    description: 'Led the development of IBAS\'s Learning Management System (LMS) backend features. Implemented contest and project board systems with advanced sorting and file management capabilities. Established project structure with code conventions using SpotlessApply and integrated automated checks via GitHub Actions. Created comprehensive project documentation including API specifications, architecture diagrams, and development guidelines. Handled data migration and implemented file classification system for thumbnails, images, and other file types.',
    icon: FaDatabase,
    gradient: 'from-purple-600/20 to-pink-600/20',
    hoverGradient: 'hover:from-purple-500/30 hover:to-pink-500/30',
    links: {
      github: 'https://github.com/InhaBas',
      external: 'https://www.inhabas.com/'
    },
    highlights: [
      'Implemented contest and project board systems with advanced sorting functionality',
      'Created comprehensive project documentation',
      'Established code conventions and integrated SpotlessApply with GitHub Actions',
      'Developed comprehensive file classification system for various file types',
      'Handled data migration'
    ],
    tags: ['Java', 'Spring Boot', 'MariaDB', 'JUnit5'],
    images: [
      '/images/projects/ibas-architecture.png',
      '/images/projects/ibas-demo.gif'
    ]
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
    description: 'Actively contributed to the Microsoft Tech Community by writing comprehensive technical articles about Azure OpenAI and Azure AI Studio. Shared practical implementations, best practices, and solutions for common challenges in AI development. Articles focus on topics like fine-tuning models, prompt engineering, and efficient API usage.',
    icon: FaAward,
    gradient: 'from-green-600/20 to-emerald-600/20',
    hoverGradient: 'hover:from-green-500/30 hover:to-emerald-500/30',
    links: {
      external: 'https://techcommunity.microsoft.com/users/minseok_song/2076234'
    },
    highlights: [
      'Authored 10+ technical articles about Azure AI services',
      'Reached over 150,000 views on Microsoft Tech Community',
      'Helped developers worldwide implement AI solutions effectively'
    ],
    tags: ['Azure OpenAI', 'Azure AI Studio', 'Technical Writing'],
    images: [
      '/images/teach-chatgpt.png',
      '/images/finetune-phi.png',
      '/images/finetune-phi-aistudio.png',
      '/images/eval-phi.png'
    ],
    blogPosts: [
      {
        title: 'Teach ChatGPT to Answer Questions: Using Azure AI Search & Azure OpenAI (Lang Chain)',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/teach-chatgpt-to-answer-questions-using-azure-ai-search--azure-openai-lang-chain/3969713?wt.mc_id=studentamb_279723',
        views: 42000
      },
      {
        title: 'Teach ChatGPT to Answer Questions: Using Azure AI Search & Azure OpenAI (Semantic Kernel)',
        url: 'https://techcommunity.microsoft.com/blog/EducatorDeveloperBlog/teach-chatgpt-to-answer-questions-using-azure-ai-search--azure-openai-semantic-k/3985395?wt.mc_id=studentamb_279723',
        views: 25000
      },
      {
        title: 'Fine-Tune and Integrate Custom Phi-3 Models with Prompt Flow: Step-by-Step Guide',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow-step-by-step-guide/4178612?wt.mc_id=studentamb_279723',
        views: 31000
      },
      {
        title: 'Fine-Tune and Integrate Custom Phi-3 Models with Prompt Flow in Azure AI Studio',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow-in-azure-ai-studio/4191726?wt.mc_id=studentamb_279723',
        views: 20000
      },
      {
        title: 'Evaluate Fine-tuned Phi-3 / 3.5 Models in Azure AI Studio Focusing on Microsoft\'s Responsible AI',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/evaluate-fine-tuned-phi-3--3-5-models-in-azure-ai-studio-focusing-on-microsofts-/4227850?wt.mc_id=studentamb_279723',
        views: 19000
      },
      {
        title: 'Build a chatbot service to ensure safe conversations: Using Azure Content Safety & Azure OpenAI',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/build-a-chatbot-service-to-ensure-safe-conversations-using-azure-content-safety-/4143628?wt.mc_id=studentamb_279723',
        views: 7300
      },
      {
        title: 'Automate Markdown and Image Translations Using Co-op Translator: Phi-3 Cookbook Case Study',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/automate-markdown-and-image-translations-using-co-op-translator-phi-3-cookbook-c/4263474?wt.mc_id=studentamb_279723',
        views: 1700
      }
    ]
  }
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

                    {project.images && (
                      <div className={`mt-6 grid gap-4 ${project.images.length >= 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
                        {project.images.map((image, i) => (
                          <div 
                            key={i} 
                            className="relative h-48 rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                          >
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${i + 1}`}
                              fill
                              className="object-contain hover:scale-105 transition-transform duration-300"
                              sizes={project.images.length >= 4 ? 
                                "(max-width: 768px) 50vw, 25vw" : 
                                "(max-width: 768px) 100vw, 50vw"}
                            />
                          </div>
                        ))}
                      </div>
                    )}

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

                    {project.blogPosts && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Featured Articles</h3>
                        <div className="grid gap-3">
                          {project.blogPosts.map((post, i) => (
                            <motion.a
                              key={i}
                              href={post.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                              whileHover={{ scale: 1.02 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * i }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-gray-300 group-hover:text-white transition-colors">
                                  {post.title}
                                </span>
                                <div className="flex items-center gap-4">
                                  <span className="text-sm text-gray-400">
                                    {post.views.toLocaleString()}+ views
                                  </span>
                                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                                </div>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </div>
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 text-white/80 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <FaTimes className="text-2xl" />
            </motion.button>
            <div className="relative w-full max-w-5xl aspect-video">
              <Image
                src={selectedImage}
                alt="Full size image"
                fill
                className="object-contain"
                quality={95}
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
