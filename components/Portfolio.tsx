
import React from 'react';
import { GitHubIcon, LinkIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-amber-400"></span>
    </h2>
    <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">A collection of my recent projects. Each demonstrates my passion for creating clean, efficient, and user-friendly applications.</p>
  </div>
);

const ProjectCard: React.FC<{
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}> = ({ title, description, tags, githubUrl, liveUrl }) => (
  <div className="bg-zinc-800 p-6 rounded-xl shadow-lg flex flex-col group hover:-translate-y-2 transition-transform duration-300">
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{title}</h3>
      <p className="text-zinc-400 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-zinc-700 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
    <div className="mt-auto flex justify-end space-x-3 text-zinc-400">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
        <GitHubIcon className="w-6 h-6" />
      </a>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
        <LinkIcon className="w-6 h-6" />
      </a>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce site with product management, user authentication, and a Stripe payment integration.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Project Management Tool",
      description: "A collaborative tool for teams to manage tasks, track progress, and communicate effectively. Features drag-and-drop boards.",
      tags: ["Vue.js", "Firebase", "SCSS", "Vuex"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets using D3.js, providing insights through various chart types.",
      tags: ["React", "D3.js", "Python", "Flask"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Personal Blog Engine",
      description: "A lightweight, markdown-based blog engine built with Next.js for fast performance and easy content management.",
      tags: ["Next.js", "TypeScript", "MDX", "Vercel"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "A chat application using WebSockets for instant messaging, featuring rooms, private messages, and user presence indicators.",
      tags: ["React", "Socket.IO", "Node.js", "Redis"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "AI-Powered Recipe Generator",
      description: "An app that suggests recipes based on ingredients you have, using the Gemini API for creative and unique ideas.",
      tags: ["React", "Gemini API", "FastAPI"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <SectionTitle>Portfolio</SectionTitle>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
