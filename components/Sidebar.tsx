import React, { useState } from 'react';
import { HomeIcon, UserIcon, DocumentTextIcon, BriefcaseIcon, MailIcon, GitHubIcon, LinkedInIcon, MenuIcon, XIcon } from './Icons';

const Sidebar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };
  
  // Content for the always-expanded mobile menu
  const MobileSidebarContent = () => (
    <div className="flex flex-col h-full p-4">
        <h1 className="text-2xl font-bold text-white mb-8 text-center">Eshan Shrestha</h1>
        <nav className="flex-grow space-y-2">
          <a href="#home" onClick={handleLinkClick} className="flex items-center space-x-4 px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg"><HomeIcon /> <span>Home</span></a>
          <a href="#about" onClick={handleLinkClick} className="flex items-center space-x-4 px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg"><UserIcon /> <span>About</span></a>
          <a href="#resume" onClick={handleLinkClick} className="flex items-center space-x-4 px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg"><DocumentTextIcon /> <span>Resume</span></a>
          <a href="#portfolio" onClick={handleLinkClick} className="flex items-center space-x-4 px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg"><BriefcaseIcon /> <span>Portfolio</span></a>
          <a href="#contact" onClick={handleLinkClick} className="flex items-center space-x-4 px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg"><MailIcon /> <span>Contact</span></a>
        </nav>
        <div className="flex justify-center space-x-4 text-zinc-400">
          <a href="#" className="hover:text-white transition-colors"><GitHubIcon /></a>
          <a href="#" className="hover:text-white transition-colors"><LinkedInIcon /></a>
        </div>
    </div>
  );

  // Content for the hover-to-expand desktop menu
  const DesktopSidebarContent = () => (
    <div className="flex flex-col h-full p-4 pt-8 overflow-hidden">
        {/* Header section */}
        <div className="mb-10 flex items-center justify-center group-hover:justify-start group-hover:px-2" style={{ minHeight: '48px' }}>
            {/* Collapsed State: Circled Initials */}
            <div className="group-hover:hidden w-12 h-12 flex items-center justify-center border-2 border-amber-400 rounded-full text-white font-bold text-lg transition-all duration-300">
                ES
            </div>

            {/* Expanded State: Full Name with graphical flair */}
            <h1 className="hidden group-hover:block text-3xl font-bold text-white transition-all duration-300 relative">
                Eshan Shrestha
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-amber-400/80 rounded-full"></span>
            </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow space-y-3">
            <a href="#home" className="flex items-center px-3 py-4 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg transition-colors duration-200 justify-center group-hover:justify-start">
                <HomeIcon className="w-7 h-7 flex-shrink-0" />
                <span className="font-semibold text-base whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-200 max-w-0 group-hover:max-w-xs overflow-hidden">Home</span>
            </a>
            <a href="#about" className="flex items-center px-3 py-4 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg transition-colors duration-200 justify-center group-hover:justify-start">
                <UserIcon className="w-7 h-7 flex-shrink-0" />
                <span className="font-semibold text-base whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-200 max-w-0 group-hover:max-w-xs overflow-hidden">About</span>
            </a>
            <a href="#resume" className="flex items-center px-3 py-4 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg transition-colors duration-200 justify-center group-hover:justify-start">
                <DocumentTextIcon className="w-7 h-7 flex-shrink-0" />
                <span className="font-semibold text-base whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-200 max-w-0 group-hover:max-w-xs overflow-hidden">Resume</span>
            </a>
            <a href="#portfolio" className="flex items-center px-3 py-4 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg transition-colors duration-200 justify-center group-hover:justify-start">
                <BriefcaseIcon className="w-7 h-7 flex-shrink-0" />
                <span className="font-semibold text-base whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-200 max-w-0 group-hover:max-w-xs overflow-hidden">Portfolio</span>
            </a>
            <a href="#contact" className="flex items-center px-3 py-4 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg transition-colors duration-200 justify-center group-hover:justify-start">
                <MailIcon className="w-7 h-7 flex-shrink-0" />
                <span className="font-semibold text-base whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-200 max-w-0 group-hover:max-w-xs overflow-hidden">Contact</span>
            </a>
        </nav>

        {/* Social Links at the bottom */}
        <div className="flex flex-wrap justify-center gap-4 text-zinc-400 pb-4">
          <a href="#" className="hover:text-white transition-colors"><GitHubIcon /></a>
          <a href="#" className="hover:text-white transition-colors"><LinkedInIcon /></a>
        </div>
    </div>
  );

  return (
    <>
      <button 
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-zinc-800 rounded-md"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>
      {/* Mobile Sidebar */}
       <aside className={`fixed top-0 left-0 h-full w-64 bg-zinc-800/90 backdrop-blur-sm border-r border-zinc-700/50 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <MobileSidebarContent />
      </aside>
       {/* Desktop Sidebar */}
       <aside className="hidden md:block fixed top-0 left-0 h-full w-20 hover:w-64 bg-zinc-800/90 backdrop-blur-sm border-r border-zinc-700/50 shadow-2xl transition-all duration-300 ease-in-out group z-40">
        <DesktopSidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;