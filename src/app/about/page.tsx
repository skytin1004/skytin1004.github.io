import Image from 'next/image';
import { FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Introduction */}
        <section>
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-72 h-72 relative rounded-xl overflow-hidden flex-shrink-0 shadow-2xl ring-2 ring-white/10">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover object-[center_75%] hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-8">About Me</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                I started programming in 2010 with a simple obstacle avoidance game that ignited my passion 
                for programming. Since then, I've dedicated myself to creating software that brings happiness 
                and comfort to people.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                I chose to study Industrial Management Engineering at Inha University to combine a business mindset 
                with programming skills, aiming to proactively lead projects and communicate effectively with team members.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-blue-400" />
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Inha University</h3>
              <p className="text-gray-400">Bachelor's degree in Industrial Management Engineering</p>
              <p className="text-gray-400">2020 - 2026</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Inha University</h3>
              <p className="text-gray-400">Bachelor's degree in Artificial Intelligence Engineering</p>
              <p className="text-gray-400">2020 - 2026</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaCertificate className="text-blue-400" />
            Certifications
          </h2>
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Microsoft Certified: Azure AI Fundamentals</h3>
              <p className="text-gray-400">Issued: September 2024</p>
              <p className="text-gray-300 mt-2">Credential ID: 953CBDBADA1E302</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">OPIC IH (Intermediate High)</h3>
              <p className="text-gray-400">Issued: September 2024</p>
              <p className="text-gray-300 mt-2">Credential ID: 4FIR-FGXS-UYFK-M94Y-ZR5E</p>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaAward className="text-blue-400" />
            Awards & Recognition
          </h2>
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Inha Open Source Software Festival - 1st Place Award (President&apos;s Award)</h3>
              <p className="text-gray-400">December 2024</p>
              <p className="text-gray-300 mt-2">
                Received the highest recognition for outstanding contributions to the Azure Co-op Translator project. 
                Led innovative developments in open-source software, presenting the project&apos;s impact at INHA Creative Space. 
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Microsoft Educator Developer Blog: Most Viewed (September 2024)</h3>
              <p className="text-gray-400">September 2024</p>
              <p className="text-gray-300 mt-2">
                Article on "Evaluate Fine-tuned Phi-3 / 3.5 Models in Azure AI Studio" received over 8,000 views
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Microsoft Educator Developer Blog: Most Viewed (July 2024)</h3>
              <p className="text-gray-400">July 2024</p>
              <p className="text-gray-300 mt-2">
                Article on "Fine-Tune and Integrate Custom Phi-3 Models" received over 11,500 views
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Microsoft Educator Developer Blog: Most Viewed (November 2023)</h3>
              <p className="text-gray-400">November 2023</p>
              <p className="text-gray-300 mt-2">
                Article on "Teach ChatGPT to Answer Questions: Using Azure AI Search & Azure OpenAI (Lang Chain)" received over 21,600 views
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Microsoft Learn Student Ambassador</h3>
              <p className="text-gray-400">August 2023 - Present</p>
              <p className="text-gray-300 mt-2">
                Part of a global group of campus leaders who are eager to help fellow students, create robust tech communities 
                and develop technical and career skills for the future.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">2023 ChatGPT Microsoft Azurethon Award</h3>
              <p className="text-gray-400">May 2023</p>
              <p className="text-gray-300 mt-2">
              Won the Prompt Engineering Services category award at Microsoft Azurethon. Created an innovative ChatGPT prompt 
              that generates supply chain optimization reports using Operations Planning Models from industrial engineering.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
