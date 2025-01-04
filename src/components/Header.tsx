import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { events } from '../data/events';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  return (
    <header className="bg-navy-900 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Tech Club</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <div className="relative group">
              <button 
                className="flex items-center hover:text-blue-400 transition"
                onMouseEnter={() => setShowEvents(true)}
                onMouseLeave={() => setShowEvents(false)}
              >
                Events <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {showEvents && (
                <div 
                  className="absolute top-full left-0 bg-navy-800 py-2 rounded-md shadow-lg w-48"
                  onMouseEnter={() => setShowEvents(true)}
                  onMouseLeave={() => setShowEvents(false)}
                >
                  {events.map(event => (
                    <Link
                      key={event.id}
                      to={`/events/${event.id}`}
                      className="block px-4 py-2 hover:bg-navy-700"
                    >
                      {event.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
            <Link to="/team" className="hover:text-blue-400 transition">Team</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-blue-400">Home</Link>
              <div className="relative">
                <button 
                  className="flex items-center hover:text-blue-400"
                  onClick={() => setShowEvents(!showEvents)}
                >
                  Events <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {showEvents && (
                  <div className="pl-4 mt-2 space-y-2">
                    {events.map(event => (
                      <Link
                        key={event.id}
                        to={`/events/${event.id}`}
                        className="block hover:text-blue-400"
                      >
                        {event.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/projects" className="hover:text-blue-400">Projects</Link>
              <Link to="/team" className="hover:text-blue-400">Team</Link>
              <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}