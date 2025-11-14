import React, { useState } from 'react';
import { GitHubIcon, LinkIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-amber-400"></span>
    </h2>
    <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">A curated selection of projects across Software Engineering, Cybersecurity, and AI/Data.</p>
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
  const categories = [
    {
      key: 'software',
      title: 'Software Engineering',
      blurb: 'MERN stack APIs, full stack apps, authentication, and scalable services.',
      projects: [
        {
          title: 'E-Commerce Database Management System',
          description: 'RESTful API (Node.js, Express, MongoDB) with JWT auth, role-based access, email verification, secure file upload, and robust validation.',
          tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST', 'API','MERN Stack'],
          githubUrl: 'https://github.com/EsShrest/E-Commerce-Backend-Management-System',
          liveUrl: 'https://github.com/EsShrest/E-Commerce-Backend-Management-System'
        },
        {
          title: 'E-Commerce React Frontend',
          description: 'React frontend for e-commerce platform with product browsing, cart management, and user authentication.',
          tags: ['React', 'Auth', 'Frontend', 'MERN Stack'],
          githubUrl: 'https://github.com/EsShrest/React-Interface-for-Database-WIP-',
          liveUrl: 'https://github.com/EsShrest/React-Interface-for-Database-WIP-'
        }
      ]
    },
    {
      key: 'ai',
      title: 'AI & Data Learning',
      blurb: 'NLP, sentiment analysis, and data learning experiments.',
      projects: [
        {
          title: 'VADER Sentiment Analysis',
          description: 'Amazon review sentiment classifier using NLTK VADER with compound score logic for polarity labeling and exploratory metrics.',
          tags: ['Python', 'NLTK', 'NLP', 'Sentiment'],
          githubUrl: 'https://github.com/EsShrest/VADER-Sentiment-Analysis',
          liveUrl: 'https://github.com/EsShrest/VADER-Sentiment-Analysis'
        },
         {
          title: 'AI-Powered Chat Filter',
          description: 'A Discord bot for moderating chat channels using Ollama to locally run large language models and process messages containing profanity.',
          tags: ['Python', 'Discord', 'Ollama', 'Moderation'],
          githubUrl: 'https://github.com/EsShrest/Local-AI-Discord-Content-Filter',
          liveUrl: 'https://github.com/EsShrest/Local-AI-Discord-Content-Filter'
        },
        {
          title: 'Concrete Strength Analysis',
          description: 'Group project analyzing concrete manufacturers\' data with varying materials like ash, different temperatures, and resting times to predict compressive strength. Built models using Random Forest and Linear Regression, comparing performance based on metrics like R-squared and MSE.',
          tags: ['Python', 'Machine Learning', 'Random Forest', 'Linear Regression'],
          githubUrl: '#',
          liveUrl: '#'
        }
      ]
    },
    {
      key: 'cyber',
      title: 'Cybersecurity',
      blurb: 'Secure coding, authentication patterns, and foundational analysis.',
      projects: [
        {
          title: 'Auth & Access Patterns Lab',
          description: 'JWT flows, role segmentation, and input hardening patterns inspired by production e-commerce API work.',
          tags: ['Security', 'JWT', 'Hardening'],
          githubUrl: 'https://github.com/EsShrest/E-Commerce-Backend-Management-System',
          liveUrl: 'https://github.com/EsShrest/E-Commerce-Backend-Management-System'
        }
      ]
    }
  ];

  // Per-category starting index
  const [indices, setIndices] = useState<Record<string, number>>({});

  const shift = (key: string, delta: number, length: number, visibleCount = 3) => {
    setIndices((prev) => {
      const current = prev[key] ?? 0;
      if (key === 'software') {
        const maxStart = Math.max(0, length - visibleCount);
        const raw = current + delta;
        if (raw < 0 || raw > maxStart) return prev; // non-wrapping for software
        return { ...prev, [key]: raw };
      }
      const next = (current + delta + length) % length; // wrapping for others
      return { ...prev, [key]: next };
    });
  };

  return (
    <section id="portfolio" className="py-20">
      <SectionTitle>Portfolio</SectionTitle>
      <div className="container mx-auto px-4 space-y-24">
        {categories.map((cat) => {
          const activeIndex = indices[cat.key] ?? 0;
          const visibleCount = 3;
          const total = cat.projects.length;
          const canScroll = total > visibleCount;
          const slice: typeof cat.projects = [];
          for (let i = 0; i < Math.min(visibleCount, total); i++) {
            slice.push(cat.projects[(activeIndex + i) % total]);
          }

          const showPrev = canScroll && (cat.key !== 'software' ? true : activeIndex > 0);
          const showNext = canScroll && (cat.key !== 'software' ? true : activeIndex < Math.max(0, total - visibleCount));

          return (
            <div key={cat.key} className="relative">
              <div className="mb-8 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-zinc-400 text-sm">{cat.blurb}</p>
              </div>
              <div className="flex items-stretch justify-center gap-4">
                {showPrev && (
                  <button
                    onClick={() => shift(cat.key, -1, total, visibleCount)}
                    aria-label={`Previous projects in ${cat.title}`}
                    className="self-center p-3 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:border-amber-400 hover:bg-zinc-700 transition-colors"
                  >
                    <ChevronLeftIcon className="w-6 h-6" />
                  </button>
                )}
                <div className={`grid gap-6 w-full ${slice.length === 1 ? 'max-w-md' : slice.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3 max-w-6xl'} mx-auto`}>
                  {slice.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                  ))}
                </div>
                {showNext && (
                  <button
                    onClick={() => shift(cat.key, 1, total, visibleCount)}
                    aria-label={`Next projects in ${cat.title}`}
                    className="self-center p-3 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:border-amber-400 hover:bg-zinc-700 transition-colors"
                  >
                    <ChevronRightIcon className="w-6 h-6" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
