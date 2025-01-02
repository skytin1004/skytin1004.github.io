'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaTools, FaUsers } from 'react-icons/fa';

const showcaseItems = [
  {
    icon: FaLightbulb,
    iconColor: 'text-yellow-400',
    title: 'Sharing Assets',
    impact: 'Technical Writing & Tools',
    description: 'Creating comprehensive guides and documentation at Microsoft Tech Community and Microsoft Phi-3 CookBook, and transforming POC projects into Azure open-source tools and maintenance',
    gradient: 'from-yellow-600/20 to-orange-600/20',
    hoverGradient: 'hover:from-yellow-500/30 hover:to-orange-500/30'
  },
  {
    icon: FaTools,
    iconColor: 'text-blue-400',
    title: 'Automating Tasks',
    impact: 'Azure / Co-op Translator',
    description: 'Redesigning and enhancing existing Co-op Translator into Python-based CLI solution to automate technical documentation translation workflows and migrating to Azure open-source',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    hoverGradient: 'hover:from-blue-500/30 hover:to-cyan-500/30'
  },
  {
    icon: FaUsers,
    iconColor: 'text-purple-400',
    title: 'Community Leadership',
    impact: 'MLSA & IBAS Lead',
    description: 'Leading Microsoft communities as MLSA and speaking at MS events, while leading IBAS development team in migrating society platform from Django to Spring Boot, serving 150+ members',
    gradient: 'from-purple-600/20 to-pink-600/20',
    hoverGradient: 'hover:from-purple-500/30 hover:to-pink-500/30'
  }
];

export default function ImpactGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-gray-400">Transforming</span>{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Ideas
        </span>{' '}
        <span className="text-gray-400">into</span>{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Impact
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {showcaseItems.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div 
                className={`h-full bg-gradient-to-br ${item.gradient} ${item.hoverGradient} p-8 rounded-2xl 
                           backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300
                           group-hover:scale-105 group-hover:shadow-3xl`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Icon className={`text-3xl ${item.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                
                <div className="mb-6 transform group-hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {item.impact}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-transparent 
                              transition-all duration-300 mt-6 rounded-full" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
