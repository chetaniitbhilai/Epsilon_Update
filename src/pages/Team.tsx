import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { teamMembers } from '../data/team';

export default function Team() {
  const mentor = teamMembers.filter(member => member.role === 'Mentor');
  const coordinators = teamMembers.filter(member => member.role === 'Coordinator');
  const coreMembers = teamMembers.filter(member => member.role === 'Core Member');

  return (
    <div className="min-h-screen bg-navy-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-center mb-16">Our Team</h1>

          {/* Mentor */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-8">Mentor</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              {mentor.map((member, index) => (
                <TeamCard member={member} index={index} key={member.id} />
              ))}
            </div>
          </div>

          {/* Coordinators */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-8">Coordinators</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              {coordinators.map((member, index) => (
                <TeamCard member={member} index={index} key={member.id} />
              ))}
            </div>
          </div>

          {/* Core Members */}
          <div>
            <h2 className="text-3xl font-semibold text-center mb-8">Core Members</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              {coreMembers.map((member, index) => (
                <TeamCard member={member} index={index} key={member.id} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-navy-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 object-cover transition-transform transform hover:scale-110"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-center mb-2">{member.name}</h3>
        <p className="text-blue-400 text-center mb-4">{member.role}</p>

        <div className="flex justify-center gap-6">
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          )}
          {member.socialLinks.github && (
            <a
              href={member.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
