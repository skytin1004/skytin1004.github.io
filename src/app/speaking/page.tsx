import { FaMicrophone, FaGlobe, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function SpeakingPage() {
  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Speaking & Events</h1>
        
        <div className="space-y-12">
          {/* Featured Talks */}
          <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FaMicrophone className="text-blue-400" />
              Featured Presentations
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400">
                  Unlocking Multilingual Accessibility with Co-op Translator: A Case Study on Phi-3 Cookbook
                </h3>
                <p className="text-gray-400 mt-1">November 12, 2024</p>
                <div className="mt-4 aspect-video relative overflow-hidden rounded-lg">
                  <a href="https://www.youtube.com/watch?v=jX_swfH_KNU" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block">
                    <Image
                      src="/images/open-ms-thumbnail.jpg"
                      alt="Open at Microsoft presentation thumbnail"
                      width={640}
                      height={360}
                      className="hover:opacity-80 transition"
                    />
                  </a>
                </div>
                <p className="text-gray-300 mt-4">
                  An 18-minute introduction and quick guide on how to use Co-op Translator, presented at Microsoft's 
                  open-source showcase event, Open at Microsoft.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400">
                  Unlocking Multilingual Mastery: Dive into Co-op Translator with Azure
                </h3>
                <p className="text-gray-400 mt-1">December 2, 2024</p>
                <div className="mt-4 aspect-video relative overflow-hidden rounded-lg">
                  <a href="https://www.youtube.com/watch?v=boTtKVPBLAc" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block">
                    <Image
                      src="/images/reactor-thumbnail.jpg"
                      alt="Microsoft Reactor presentation thumbnail"
                      width={640}
                      height={360}
                      className="hover:opacity-80 transition"
                    />
                  </a>
                </div>
                <p className="text-gray-300 mt-4">
                  A comprehensive one-hour session at Microsoft Reactor, covering everything from understanding Co-op Translator's fundamentals 
                  to a live demonstration of its capabilities, including setup and best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Conference Talks */}
          <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FaGlobe className="text-blue-400" />
              Conference & Meetup Talks
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400">DDD Seoul Workshop</h3>
                <p className="text-gray-400 mt-1">December 8, 2024</p>
                <div className="mt-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/2024-DDD-seoul.jpg"
                    alt="DDD Seoul Workshop"
                    width={640}
                    height={360}
                    className="hover:opacity-80 transition"
                  />
                </div>
                <p className="text-gray-300 mt-4">
                  Conducted a 90-minute workshop on "Integrating Azure AI Services into Your Project", demonstrating 
                  chatbot development with Azure OpenAI Service and Azure AI Foundry integration.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400">2024 Microsoft Ignite After Party with MVPs</h3>
                <p className="text-gray-400 mt-1">November 30, 2024</p>
                <div className="mt-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/2024-ignite-with-mvp.jpg"
                    alt="Microsoft Ignite After Party with MVPs"
                    width={640}
                    height={360}
                    className="hover:opacity-80 transition"
                  />
                </div>
                <p className="text-gray-300 mt-4">
                  Presented insights on the Phi-3 small language model and its applications at Microsoft Ignite After Party. 
                  Shared knowledge and collaborated with Microsoft MVPs in reviewing Ignite sessions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400">LangChain Korea Meetup</h3>
                <p className="text-gray-400 mt-1">November 30, 2023</p>
                <div className="mt-4 aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/2023-lang-chain-meetup.jpg"
                    alt="LangChain Korea Meetup"
                    width={640}
                    height={360}
                    className="hover:opacity-80 transition"
                  />
                </div>
                <p className="text-gray-300 mt-4">
                  Presented on "Efficient Information Extraction in QA Systems", focusing on leveraging Azure AI Search's 
                  reranking capabilities for accurate information retrieval from large PDF datasets. Discussed solutions 
                  for filtering relevant information and improving context understanding in QA systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
