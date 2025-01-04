import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { events } from '../data/events';

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));

  if (!event) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-navy-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
            
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            
            <div className="flex items-center gap-2 text-blue-400 mb-6">
              <Calendar className="w-5 h-5" />
              <span>{new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            
            <p className="text-gray-300 text-lg mb-8">{event.description}</p>
            
            <div className="bg-navy-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Event Details</h2>
              <p className="text-gray-300 whitespace-pre-line">{event.details}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}