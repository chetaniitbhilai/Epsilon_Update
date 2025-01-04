import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Research Assistant",
    description: "An AI-powered research assistant that helps students with their academic work.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
    technologies: ["Python", "TensorFlow", "React"],
    link: "https://github.com"
  },
  {
    id: 2,
    title: "Smart Campus App",
    description: "Mobile application for campus navigation and event updates.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
    technologies: ["React Native", "Node.js", "MongoDB"],
    link: "https://github.com"
  },
  // Add more projects as needed
];