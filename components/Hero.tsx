import React, { useState, useEffect } from 'react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const TITLES = [
  "an Aspiring Software Engineer",
  "a Cybersecurity Enthusiast",
  "a Help Desk Professional"
];

const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = TITLES[titleIndex];
      if (isDeleting) {
        setDisplayedTitle(fullTitle.substring(0, displayedTitle.length - 1));
      } else {
        setDisplayedTitle(fullTitle.substring(0, displayedTitle.length + 1));
      }

      if (!isDeleting && displayedTitle === fullTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedTitle === '') {
        setIsDeleting(false);
        setTitleIndex((prevIndex) => (prevIndex + 1) % TITLES.length);
      }
    };

    const typingSpeed = isDeleting ? 75 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedTitle, isDeleting, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden -mt-16">
       <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full -translate-y-1/4 translate-x-1/4 blur-3xl"></div>
       <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-500/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-zinc-300 mb-2">Hello,</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              I'm <span className="text-amber-400">Eshan Shrestha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-zinc-300 mb-6">
              I'm <span className="text-amber-400 border-b-2 border-amber-400">{displayedTitle}</span>
              <span className="animate-ping">|</span>
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Currently a pursuing a Bachelor's degree in Computer Science at Texas Tech University, with a passion for software development and cybersecurity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#portfolio" className="bg-amber-400 text-zinc-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-500 transition-colors duration-300">
                View My Work
              </a>
              <a href="#contact" className="bg-zinc-800 text-white font-semibold px-6 py-3 rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors duration-300">
                Get In Touch
              </a>
            </div>
            <div className="flex justify-center space-x-5 text-zinc-400">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-amber-400 hover:text-zinc-900 transition-all duration-300"><GitHubIcon /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-amber-400 hover:text-zinc-900 transition-all duration-300"><LinkedInIcon /></a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;