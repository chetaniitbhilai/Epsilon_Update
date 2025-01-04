export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  details: string;
}