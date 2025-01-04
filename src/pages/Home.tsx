import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, Rocket } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { GlowText, GradientText } from '../components/ui/Typography';

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-24 relative"
        >
          <div className="text-center mb-16 relative">
            
              <h1 className="text-6xl font-bold mb-6">
                <GradientText>Welcome to Epsilon Club</GradientText>
              </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Empowering students to innovate, create, and lead in the world of robotics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">About Us</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                Epsilon Club is One of the Clubs of IIT Bhilai, that deals with Technical knowledge and helps develop interests of the students in Robotics. Robots are one of the most important hardware implementations in the history of technology which ease the human efforts when in use, in industries : like painting robots, assembly robots, etc. , or in a place with specific targeted use, like Drones : in giving aerial view of a particular place, or as humanoid robots which represent the development of Artificial Intelligence.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our mission is to provide a platform for students to develop their technical skills,
                  collaborate on innovative projects, and connect with industry professionals.
                </p>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <img 
                src="./images/session1_2023.jpg"
                alt="Tech Club Meeting"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Workshops",
                description: "Hands-on sessions on cutting-edge technologies"
              },
              {
                icon: Users,
                title: "Community",
                description: "Connect with like-minded tech enthusiasts"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Transform ideas into impactful solutions"
              },
              {
                icon: Rocket,
                title: "Growth",
                description: "Accelerate your technical career"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card  className="p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-blue-500/10 rounded-lg mb-4">
                      <item.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Members" },
              { number: "50+", label: "Projects" },
              { number: "100+", label: "Events" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card shine className="p-6">
                  <h3 className="text-4xl font-bold mb-2">
                    <GradientText>{stat.number}</GradientText>
                  </h3>
                  <p className="text-gray-300">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}