'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const contacts = [
  {
    name: 'GitHub',
    url: 'https://github.com/skytin1004',
    icon: FaGithub,
    color: 'hover:text-gray-300',
    description: 'Check out my open-source projects and contributions'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/minseok-song-b6347b26a',
    icon: FaLinkedin,
    color: 'hover:text-blue-400',
    description: 'Connect with me professionally and explore my career journey'
  },
  {
    name: 'Email',
    url: 'mailto:skytin1004@gmail.com',
    icon: FaEnvelope,
    color: 'hover:text-red-400',
    description: 'Send me an email for collaborations or inquiries'
  }
];

export default function ContactPage() {
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
              Contact Me
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Let's connect! Whether you're interested in collaboration, have questions about my work, 
              or just want to say hello, I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <contact.icon className={`text-4xl ${contact.color} transition-colors`} />
                    <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {contact.name}
                    </h2>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {contact.description}
                  </p>
                  <div className="pt-4">
                    <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                      Connect →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="relative py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Looking Forward to Connecting
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always open to new opportunities, collaborations, and interesting conversations. 
              Currently maintaining Co-op Translator at Microsoft Azure and actively contributing to open-source projects.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
