import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        
        <div className="space-y-12">
          {/* Co-op Translator */}
          <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Co-op Translator</h2>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Azure/co-op-translator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400 transition"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://techcommunity.microsoft.com/t5/educator-developer-blog/automate-markdown-and-image-translations-using-co-op-translator/ba-p/4263474" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400 transition"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-gray-300">
                An open-source tool that automates multilingual translations for markdown and images,
                making technical documentation accessible worldwide. Built with Azure AI Services.
              </p>
              <ul className="space-y-4 text-gray-300 list-disc list-inside">
                <li>Developed and maintained an automated multilingual translation system using Azure AI services</li>
                <li>Integrated Azure OpenAI and Azure Computer Vision for text extraction and translation</li>
                <li>Managed the transition of the Co-op Translator project to open source on GitHub</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-md text-sm">Python</span>
                <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-md text-sm">Azure OpenAI</span>
                <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-md text-sm">Azure Computer Vision</span>
              </div>
            </div>
          </div>

          {/* IBAS Web Service */}
          <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">IBAS Web Service</h2>
              <a 
                href="https://www.inhabas.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-400 transition"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Led the development team for Inha Bigdata Analysis Society's web platform. 
              Implemented backend services and data engineering solutions to support the society's activities.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">Java</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">Spring Boot</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">SQL</span>
            </div>
          </div>

          {/* Apache Iceberg Contributions */}
          <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Apache Iceberg Contributions</h2>
              <a 
                href="https://github.com/apache/iceberg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>
            </div>
              <p className="mb-4">
                Contributed to Apache Iceberg by modernizing test frameworks and improving documentation.
                Made significant contributions in migrating test suites from JUnit4 to JUnit5 across multiple packages.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                  Migrated test suites from JUnit4 to JUnit5 in various packages including avro, core, aws, deltalake, snowflake,
                  orc, rest, hadoop, catalog, encryption, inmemory, io, view, deletes, expressions, and auth packages
                </li>
                <li>
                  Implemented s3MockExtension annotation while migrating AWS package tests
                </li>
                <li>
                  Enhanced documentation related to AWS and revised markdown tables
                </li>
              </ul>
              <div className="space-y-2">
                <p className="font-semibold">Key Pull Requests:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <a href="https://github.com/apache/iceberg/pull/8380" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      PR #8380: Switch tests from JUnit4 to JUnit5 in avro, data.avro package
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/apache/iceberg/pull/7861" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      PR #7861: Core: Switch tests to Junit5 in rest, hadoop pakages
                    </a>
                  </li>
                </ul>
              </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">Java</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">JUnit</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">Open Source</span>
            </div>
          </div>

          {/* Microsoft Phi-3 Cookbook Contributions */}
          <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Microsoft Phi-3 Cookbook Contributions</h2>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/microsoft/Phi-3CookBook/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400 transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Major contributor to Microsoft's official Phi-3 Cookbook project, providing comprehensive end-to-end tutorials
              and improving documentation quality. Created multilingual support using Co-op Translator and implemented
              automated link validation workflows.
            </p>
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-blue-400">Key Contributions:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Created end-to-end tutorials for fine-tuning and evaluating Phi-3 models in Azure AI Studio</li>
                <li>Implemented automated documentation link validation using GitHub Actions</li>
                <li>Added multilingual support in 6 languages using Co-op Translator</li>
                <li>Resolved critical issues in model fine-tuning parameters and environment configurations</li>
                <li>22+ merged pull requests improving documentation and features</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">Azure AI Studio</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">Phi-3</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">Documentation</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">GitHub Actions</span>
            </div>
          </div>

          {/* Microsoft Tech Community Knowledge Sharing */}
          <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Microsoft Tech Community Contributions</h2>
              <a 
                href="https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/1759928" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-400 transition"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Active contributor to Microsoft Tech Community, creating comprehensive tutorials and guides for Azure AI services.
              Articles have reached over 150,000 views, helping developers worldwide implement AI solutions effectively.
            </p>
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-blue-400">Technical Articles:</h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a 
                    href="https://techcommunity.microsoft.com/t5/educator-developer-blog/automate-markdown-and-image-translations-using-co-op-translator/ba-p/4263474" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Automate Markdown and Image Translations Using Co-op Translator
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    • Case study: Automating Phi-3 Cookbook's multilingual documentation using Co-op Translator
                    <br />
                    • Demonstrated practical application of automated translation workflow
                  </p>
                </li>
                <li>
                  <a 
                    href="https://techcommunity.microsoft.com/t5/educator-developer-blog/evaluate-fine-tuned-phi-3-3-5-models-in-azure-ai-studio-focusing/ba-p/4227850" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Evaluate Fine-tuned Phi-3/3.5 Models in Azure AI Studio
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    • Most viewed article (September 2024) with 8,000+ views
                    <br />
                    • Focus on Microsoft's Responsible AI principles
                  </p>
                </li>
                <li>
                  <a 
                    href="https://techcommunity.microsoft.com/t5/educator-developer-blog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow-in/ba-p/4191726" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Fine-Tune and Integrate Custom Phi-3 Models (Low-code approach)
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    • Most viewed article (July 2024) with 11,500+ views
                    <br />
                    • Comprehensive guide for Azure AI Studio implementation
                  </p>
                </li>
                <li>
                  <a 
                    href="https://techcommunity.microsoft.com/t5/educator-developer-blog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow/ba-p/4178612" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Fine-Tune and Integrate Custom Phi-3 Models (Code-first approach)
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    • Step-by-step guide for developers
                    <br />
                    • Detailed implementation with Prompt Flow
                  </p>
                </li>
                <li>
                  <a 
                    href="https://techcommunity.microsoft.com/t5/educator-developer-blog/build-a-chatbot-service-to-ensure-safe-conversations-using-azure/ba-p/4143628" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Build a Chatbot Service with Azure Content Safety & Azure OpenAI
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    • Integration guide for safe AI conversations
                    <br />
                    • Practical implementation of content moderation
                  </p>
                </li>
                <li>
                  <a 
                    href="https://techcommunity.microsoft.com/t5/educator-developer-blog/teach-chatgpt-to-answer-questions-using-azure-ai-search-amp/ba-p/3969713" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Teach ChatGPT to Answer Questions with Azure AI Search (LangChain)
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    • Ranked #1 on Google for 'teach chatgpt'
                    <br />
                    • Most viewed article (Nov-Dec 2023)
                  </p>
                </li>
                <li>
                  <a 
                    href="https://techcommunity.microsoft.com/t5/educator-developer-blog/teach-chatgpt-to-answer-questions-using-azure-ai-search-amp/ba-p/3985395" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Teach ChatGPT to Answer Questions with Azure AI Search (Semantic Kernel)
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    • Alternative implementation using Semantic Kernel
                    <br />
                    • Comprehensive comparison with LangChain approach
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">Azure OpenAI</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">Azure AI Studio</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">Technical Writing</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">Knowledge Sharing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
