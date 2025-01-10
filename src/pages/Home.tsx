import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Code, Users, Lightbulb, Rocket } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { GradientText } from '../components/ui/Typography';
import FullWidthSlider from '../components/FullWidthSlider';

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const images = [
    'https://via.placeholder.com/1920x1080/FF5733/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/1920x1080/33FF57/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/1920x1080/3357FF/FFFFFF?text=Slide+3',
    'https://via.placeholder.com/1920x1080/FF33A1/FFFFFF?text=Slide+4',
  ];

  return (


    <div className="min-h-screen bg-navy-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              <GradientText>Welcome to Epsilon Club</GradientText>

            </h1>

      <FullWidthSlider  />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Empowering students to innovate, create, and lead in the world of robotics
            </p>
          </div>

          {/* Full-Width Slider */}
          <div className="w-full h-[60vh]">
            <Slider {...sliderSettings} className="w-full h-full">
              {images.map((src, index) => (
                <div key={index} className="w-full h-full">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
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
              { icon: Code, title: "Workshops", description: "Hands-on sessions on cutting-edge technologies" },
              { icon: Users, title: "Community", description: "Connect with like-minded tech enthusiasts" },
              { icon: Lightbulb, title: "Innovation", description: "Transform ideas into impactful solutions" },
              { icon: Rocket, title: "Growth", description: "Accelerate your technical career" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
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
