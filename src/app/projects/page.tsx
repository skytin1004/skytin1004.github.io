'use client';

import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaTimes } from 'react-icons/fa';
import { SiApache } from 'react-icons/si';
import { BsMicrosoft } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import AnimatedCard from '@/components/AnimatedCard';
import Image from 'next/image';
import { useState } from 'react';

const IbasIcon = ({ className }: { className?: string }) => (
  <div className={className}>
    <Image
      src="/images/logos/ibas_main_logo.png"
      alt="IBAS Logo"
      width={32}
      height={32}
      className="w-full h-full object-contain"
    />
  </div>
);

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  hoverGradient: string;
  links: {
    github?: string;
    external?: string;
    contributions?: string;
    issues?: string;
    notion?: string;
  };
  highlights?: string[];
  tags: string[];
  images?: string[];
  achievements?: {
    title: string;
    description: string;
    links: {
      title: string;
      url: string;
      description?: string;
      views?: string;
      status?: string;
      featured?: boolean;
      impact?: string;
    }[];
  }[];
  blogPosts?: {
    title: string;
    url: string;
    views?: string;
    status?: string;
    featured?: boolean;
  }[];
}

const projects: Project[] = [
  {
    title: 'Maintainer of Co-op Translator',
    description: 'Redesigned and rebuilt the existing POC version of Co-op Translator into a Python CLI tool. This open-source project helps developers translate their technical documentation into multiple languages by automatically handling markdown files and embedded images.It preserves markdown formatting while translating content and can extract, translate, and replace text from images, making documentation truly accessible worldwide. Currently serving as the main maintainer after successfully transitioning it to Azure Opensource.',
    icon: BsMicrosoft,
    gradient: 'from-blue-600/20 to-cyan-600/20',
    hoverGradient: 'hover:from-blue-500/30 hover:to-cyan-500/30',
    links: {
      github: 'https://github.com/Azure/co-op-translator',
      external: 'https://techcommunity.microsoft.com/t5/educator-developer-blog/automate-markdown-and-image-translations-using-co-op-translator/ba-p/4263474',
      contributions: 'https://github.com/Azure/co-op-translator/pulls?q=is%3Apr+author%3Askytin1004+is%3Aclosed'
    },
    achievements: [
      {
        title: 'Key Pull Requests',
        description: 'Significant improvements to translation automation and project functionality',
        links: [
          {
            title: "Redesigned Architecture to Support Multiple LLM Services in Co-op Translator",
            url: "https://github.com/Azure/co-op-translator/pull/63",
            description: "Refactored the architecture of Co-op Translator to support multiple language and vision model providers, including OpenAI and Azure OpenAI. Introduced abstract base classes, modularized provider-specific configurations, and reorganized utilities for enhanced maintainability. The redesign ensures better separation of concerns and facilitates the integration of new LLM and vision services like Anthropic or Google Cloud Vision. Functional testing confirmed core functionalities remain intact.",
            status: "Merged",
            impact: "Improved extensibility and maintainability of the Co-op Translator, enabling easier integration of diverse LLM and vision services for future scalability."
          },
          {
            title: "Improve Disclaimer to Indicate Translation by Generative AI and Resolve Issues with Skipped Chunks in Markdown Translation",
            url: "https://github.com/Azure/co-op-translator/pull/17",
            description: "Enhanced the disclaimer to inform users that translations are performed by generative AI, ensuring transparency about the source and limitations. Resolved issues with skipped chunks and incomplete document translations by implementing a sequential processing mechanism for markdown files. Introduced a `process_api_requests_sequential` method to ensure reliable and consistent translation by processing markdown files one at a time. Updated the `translate_all_markdown_files` method to utilize this sequential processing approach.",
            status: "Merged",
            impact: "Improved user trust through enhanced disclaimers and ensured complete and accurate translation of markdown documents, addressing previous issues with skipped or partially translated chunks."
          },
          {
            title: "Modularize Project for Diverse Test Cases",
            url: "https://github.com/Imperial-EE-Microsoft/co_op_translator/pull/1",
            description: "Refactored the project structure to enhance maintainability and facilitate diverse testing scenarios. Introduced separate modules for configurations, image processing, text translation, and utilities. Centralized configuration management using a `Config` class and segregated development and production settings. Added initial testing infrastructure with unit tests for each module and a template for integration tests. Improved documentation by adding detailed docstrings and updating the README.",
            status: "Merged",
            impact: "Enhanced project scalability, improved code organization, and streamlined the process of adding new features or tests."
          }
        ]
      }
    ],
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
    title: 'Core Contributor to the Microsoft Phi-3 Cookbook',
    description: 'Contributed to Microsoft\'s Phi-3 Cookbook project by creating comprehensive tutorials, managing pull requests, and resolving critical issues. Enhanced the project\'s accessibility through multilingual support and improved documentation structure.',
    icon: BsMicrosoft,
    gradient: 'from-blue-600/20 to-cyan-600/20',
    hoverGradient: 'hover:from-blue-500/30 hover:to-cyan-500/30',
    links: {
      github: 'https://github.com/microsoft/Phi-3CookBook/',
      contributions: 'https://github.com/microsoft/Phi-3CookBook/pulls?q=is%3Apr+author%3Askytin1004+is%3Aclosed',
    },
    achievements: [
      {
        title: 'Major Tutorials',
        description: 'Created comprehensive tutorials for Phi-3 implementation',
        links: [
          {
            title: 'Fine-tune and Integrate custom Phi-3 models with Prompt flow',
            url: 'https://github.com/microsoft/Phi-3CookBook/blob/main/md/06.E2ESamples/E2E_Phi-3-FineTuning_PromptFlow_Integration.md',
            description: 'Step-by-step guide for fine-tuning Phi-3 models with Prompt Flow integration',
            views: '31,000+ views',
            featured: true
          },
          {
            title: 'Fine-tune and Integrate custom Phi-3 models with Prompt flow in Azure AI Foundry',
            url: 'https://github.com/microsoft/Phi-3CookBook/blob/main/md/06.E2ESamples/E2E_Phi-3-FineTuning_PromptFlow_Integration_AIstudio.md',
            description: 'Comprehensive guide for deploying and managing Phi-3 models in Azure AI Studio',
            views: '20,000+ views',
            featured: true
          },
          {
            title: 'Evaluate the Fine-tuned Phi-3 / Phi-3.5 Model in Azure AI Foundry Focusing on Microsoft\'s Responsible AI Principles',
            url: 'https://github.com/microsoft/Phi-3CookBook/blob/main/md/06.E2ESamples/E2E_Phi-3-Evaluation_AIstudio.md',
            description: 'Detailed guide on model evaluation with Microsoft\'s Responsible AI principles',
            featured: true
          }
        ]
      },
      {
        title: 'Key Pull Requests',
        description: 'Significant improvements to documentation and functionality',
        links: [
          {
            title: 'Automated Documentation Link Validation',
            url: 'https://github.com/microsoft/Phi-3CookBook/pull/74',
            description: 'Implemented GitHub Actions workflow for automated link checking',
            status: 'Merged',
            impact: 'Improved documentation reliability'
          },
          {
            title: 'Multilingual Support Integration',
            url: 'https://github.com/microsoft/Phi-3CookBook/pull/205',
            description: 'Added support for 6 languages using Co-op Translator',
            status: 'Merged',
            impact: 'Enhanced global accessibility'
          }
        ]
      },
      {
        title: 'Issue Management',
        description: 'Resolved critical documentation and implementation issues',
        links: [
          {
            title: 'Flash Attention supports only fp16 and bf16 data type for Phi-3-small-128K fine-tuning using QLoRA',
            url: 'https://github.com/microsoft/Phi-3CookBook/issues/127',
            description: 'Resolved Flash Attention issue',
            status: 'Closed',
            impact: 'Provided solution for users'
          },
          {
            title: 'QLoRA parameters missing in 04.Finetuning /Phi-3-finetune-qlora-python.ipynb',
            url: 'https://github.com/microsoft/Phi-3CookBook/issues/94',
            description: 'Resolved missing QLoRA parameters in the notebook',
            status: 'Closed',
            impact: 'Enhanced functionality'
          }
        ]
      }
    ],
    tags: ['Azure AI Studio', 'Phi-3', 'Documentation', 'GitHub Actions']
  },
  {
    title: 'Microsoft Tech Community Knowledge Sharing',
    description: 'Actively shared knowledge and expertise through Microsoft Tech Community blog posts, focusing on Azure AI services, language models, and responsible AI practices.',
    icon: BsMicrosoft,
    gradient: 'from-blue-600/20 to-cyan-600/20',
    hoverGradient: 'hover:from-blue-500/30 hover:to-cyan-500/30',
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
      '/images/eval-phi.png',
      '/images/build-chatbot.png',
      '/images/automate-co-op-translator.png'
    ],
    blogPosts: [
      {
        title: 'Teach ChatGPT to Answer Questions: Using Azure AI Search & Azure OpenAI (Lang Chain)',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/teach-chatgpt-to-answer-questions-using-azure-ai-search--azure-openai-lang-chain/3969713?wt.mc_id=studentamb_279723',
        views: '42,000+ views',
        featured: true
      },
      {
        title: 'Teach ChatGPT to Answer Questions: Using Azure AI Search & Azure OpenAI (Semantic Kernel)',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/teach-chatgpt-to-answer-questions-using-azure-ai-search--azure-openai-semantic-k/3985395?wt.mc_id=studentamb_279723',
        views: '25,000+ views',
        featured: true
      },
      {
        title: 'Fine-Tune and Integrate Custom Phi-3 Models with Prompt Flow: Step-by-Step Guide',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow-step-by-step-guide/4178612?wt.mc_id=studentamb_279723',
        views: '31,000+ views',
        featured: true
      },
      {
        title: 'Fine-Tune and Integrate Custom Phi-3 Models with Prompt Flow in Azure AI Studio',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow-in-azure-ai-studio/4191726?wt.mc_id=studentamb_279723',
        views: '20,000+ views',
        featured: true
      },
      {
        title: 'Evaluate Fine-tuned Phi-3 / 3.5 Models in Azure AI Studio Focusing on Microsoft\'s Responsible AI',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/evaluate-fine-tuned-phi-3--35-models-in-azure-ai-studio-focusing-on-microsofts-responsible-ai/4227850?wt.mc_id=studentamb_279723',
        views: '19,000+ views',
        featured: true
      },
      {
        title: 'Build a chatbot service to ensure safe conversations: Using Azure Content Safety & Azure OpenAI',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/build-a-chatbot-service-to-ensure-safe-conversations-using-azure-content-safety-/4143628?wt.mc_id=studentamb_279723',
        views: '7,300+ views'
      },
      {
        title: 'Automate Markdown and Image Translations Using Co-op Translator: Phi-3 Cookbook Case Study',
        url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/automate-markdown-and-image-translations-using-co-op-translator-phi-3-cookbook-case-study/4263474?wt.mc_id=studentamb_279723',
        views: '1,700+ views'
      }
    ]
  },
  {
    title: 'Led the development of the Inha Bigdata Analysis Society (IBAS) web service',
    description: 'Led the development of IBAS\'s Learning Management System (LMS) backend features. Implemented contest and project board systems with advanced sorting and file management capabilities. Established project structure with code conventions using SpotlessApply and integrated automated checks via GitHub Actions. Created comprehensive project documentation including API specifications, architecture diagrams, and development guidelines. Handled data migration and implemented file classification system for thumbnails, images, and other file types.',
    icon: IbasIcon,
    gradient: 'from-purple-600/20 to-pink-600/20',
    hoverGradient: 'hover:from-purple-500/30 hover:to-pink-500/30',
    links: {
      github: 'https://github.com/InhaBas/Inhabas.com-api',
      external: 'https://www.inhabas.com/',
      contributions: 'https://github.com/InhaBas/Inhabas.com-api/pulls?q=is%3Apr+is%3Aclosed+author%3Askytin1004',
      notion: 'https://sparkly-lunge-241.notion.site/IBAS-049505480e5f4bebbb01bfc9b1e9c3c0'
    },
    achievements: [
      {
        title: 'Key Pull Requests',
        description: 'Significant improvements to backend infrastructure and functionality',
        links: [
          {
            title: "[feature/Inhabas#252] Implement 'My Information' Feature for Viewing User's Posts, Comments, and Budget Applications",
            url: "https://github.com/InhaBas/Inhabas.com-api/pull/255",
            description: "Developed and integrated functionalities for retrieving a user's written posts, comments, and budget application history, including DTOs, services, repositories, and controllers. Ensured robust testing through Swagger and implemented refactoring for optimized code structure.",
            status: "Merged",
            impact: "Improved user experience by providing comprehensive access to personal activity data."
          },
          {
            title: "[feature/Inhabas#241] Implement Project Board API Functionality",
            url: "https://github.com/InhaBas/Inhabas.com-api/pull/249",
            description: "Developed comprehensive API functionality for the project board, including controllers, services, and repositories. Reviewed and resolved commit conflicts, and integrated GitHub Actions for build verification. Implemented refactoring based on peer reviews to ensure code quality and consistency.",
            status: "Merged",
            impact: "Enhanced project management capabilities by enabling robust interaction with the project board API."
          }
          ,
          {
            title: "[feature/Inhabas#234] Implement File Classification Functionality",
            url: "https://github.com/InhaBas/Inhabas.com-api/pull/236",
            description: "Developed functionality to classify attached files into thumbnails, images, and other files when viewing a single board post. Introduced `ClassifyFiles` and `ClassifiedFiles` classes to handle file categorization during board creation or modification. Ensured proper testing and seamless integration with existing board services.",
            status: "Merged",
            impact: "Improved user experience by enabling clear organization of attached files, facilitating better content management and access."
          }
        ]
      }
    ],
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
    description: 'Contributed to Apache Iceberg by modernizing the test framework and improving documentation. Focused on migrating test suites from JUnit4 to JUnit5, enhancing code readability with AssertJ, and increasing overall test coverage.',
    icon: SiApache,
    gradient: 'from-orange-600/20 to-red-600/20',
    hoverGradient: 'hover:from-orange-500/30 hover:to-red-500/30',
    links: {
      github: 'https://github.com/apache/iceberg',
      contributions: 'https://github.com/apache/iceberg/pulls?q=is%3Apr+author%3Askytin1004+is%3Aclosed',
    },
    highlights: [
      'Migrated multiple packages (rest, hadoop, catalog, encryption, inmemory, io, avro, data.avro, etc) from JUnit4 to JUnit5',
      'Replaced @Rule TemporaryFolder with @TempDir and addressed namespace listing/file handling issues',
      'Integrated AssertJ for more expressive assertions, improving code readability and consistency',
      'Collaborated with maintainers through detailed reviews, resolving issues and merging',
      'Standardized the test framework usage across core modules, boosting reliability and maintainability'
    ],
    achievements: [
      {
        title: 'Key Pull Requests',
        description: 'Led the migration of test suites from JUnit4 to JUnit5',
        links: [
          {
            title: 'Core: Switch tests to Junit5 in rest, hadoop pakages',
            url: 'https://github.com/apache/iceberg/pull/7861',
            description: 'Migrated tests in the rest and hadoop packages from JUnit4 to JUnit5, modernizing the test framework and enhancing maintainability. Integrated AssertJ for improved readability and expressiveness, and resolved issues related to directory handling and namespace listing in HadoopCatalog tests.',
            status: 'Merged',
            impact: 'Enhanced test maintainability'
          },
          {
            title: 'Core: Switch tests to Junit5 in multiple packages',
            url: 'https://github.com/apache/iceberg/pull/7767',
            description: 'Migrated tests in the catalog, encryption, inmemory, io, and view packages from JUnit4 to JUnit5, modernizing the test framework and improving maintainability. Resolved directory handling and data validation issues in critical test cases. Clarified containsAll vs. containsExactlyInAnyOrder usage with maintainers',
            status: 'Merged',
            impact: 'Enhanced test maintainability'
          },
          {
            title: 'Core: Switch tests to JUnit5 in avro, data.avro packages',
            url: 'https://github.com/apache/iceberg/pull/8380',
            description: 'Migrated tests in avro and data.avro packages from JUnit4 to JUnit5, improving file handling and test maintainability.',
            status: 'Merged',
            impact: 'Enhanced test maintainability'
          }
        ]
      }
    ],
    tags: ['Apache', 'Java', 'Testing', 'JUnit5', 'Open Source']
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
                      {project.icon && <project.icon className="w-8 h-8 text-white" />}
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
                        {project.links.notion && (
                          <motion.a 
                            href={project.links.notion}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-blue-400 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <FaDatabase />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg">
                      {project.description}
                    </p>

                    {project.images && (
                      <div className={`mt-4 grid grid-cols-2 ${project.images?.length >= 4 ? 'md:grid-cols-3 lg:flex lg:flex-row lg:overflow-x-auto' : 'md:grid-cols-2'} gap-2`}>
                        {project.images?.map((image, i) => (
                          <div 
                            key={i} 
                            className={`relative w-full ${(project.images?.length || 0) >= 4 
                              ? 'h-32 md:h-36 lg:w-40 lg:h-40 lg:flex-shrink-0' 
                              : 'h-48 md:h-48'} rounded-lg overflow-hidden cursor-pointer`}
                            onClick={() => setSelectedImage(image)}
                          >
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${i + 1}`}
                              fill
                              className="object-contain hover:scale-105 transition-transform duration-300"
                              sizes={(project.images?.length || 0) >= 4 
                                ? "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                : "(max-width: 768px) 50vw, 50vw"}
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

                    {project.achievements && (
                      <div className="mt-6 space-y-6">
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-200 mb-3">{achievement.title}</h3>
                            <div className="grid grid-cols-1 gap-3">
                              {achievement.links.map((link, j) => (
                                <motion.a
                                  key={j}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 * j }}
                                  whileHover={{ scale: 1.01 }}
                                >
                                  <div className="flex flex-col">
                                    <span className="text-gray-200 group-hover:text-white font-medium block w-full break-words mb-2">
                                      {link.title}
                                    </span>
                                    <div className="flex gap-2 flex-wrap flex-shrink-0 mb-2">
                                      {link.status && (
                                        <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">
                                          {link.status}
                                        </span>
                                      )}
                                    </div>
                                    {link.description && (
                                      <p className="text-gray-400 text-sm break-words">
                                        {link.description}
                                      </p>
                                    )}
                                  </div>
                                  <FaExternalLinkAlt className="w-4 h-4 text-gray-400 group-hover:text-gray-300 ml-4 flex-shrink-0 transition-colors" />
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Quick links */}
                        {project.links && (
                          <div className="flex flex-wrap items-center gap-3 mt-6">
                            {project.links.github && (
                              <motion.a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 hover:text-blue-400 rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                              >
                                <FaGithub className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                <span className="text-sm">Repository</span>
                              </motion.a>
                            )}
                            {project.links.contributions && (
                              <motion.a
                                href={project.links.contributions}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 hover:text-blue-400 rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                              >
                                <FaCode className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                <span className="text-sm">All PRs</span>
                              </motion.a>
                            )}
                            {project.links.issues && (
                              <motion.a
                                href={project.links.issues}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 hover:text-blue-400 rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                              >
                                <FaTimes className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                <span className="text-sm">All Issues</span>
                              </motion.a>
                            )}
                            {project.links.notion && (
                              <motion.a
                                href={project.links.notion}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 hover:text-blue-400 rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                              >
                                <FaDatabase className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                <span className="text-sm">Notion</span>
                              </motion.a>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {project.blogPosts && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Featured Articles</h3>
                        <div className="space-y-2">
                          {project.blogPosts.map((post, i) => (
                            <motion.a
                              key={i}
                              href={post.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group block bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-all duration-300"
                              whileHover={{ scale: 1.01 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * i }}
                            >
                              <div className="flex items-center justify-between overflow-hidden">
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col">
                                    <span className="text-gray-200 group-hover:text-white font-medium block w-full break-words mb-2">
                                      {post.title}
                                    </span>
                                    <div className="flex gap-2 flex-wrap flex-shrink-0 mb-2">
                                      {post.views && (
                                        <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">
                                          {post.views}
                                        </span>
                                      )}
                                      {post.status && (
                                        <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">
                                          {post.status}
                                        </span>
                                      )}
                                      {post.featured && (
                                        <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-300 rounded-full">
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <FaExternalLinkAlt className="w-4 h-4 text-gray-400 group-hover:text-gray-300 flex-shrink-0 transition-colors ml-2" />
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
