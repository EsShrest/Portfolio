import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-20 p-4 sm:p-8 md:p-12 transition-all duration-300">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <footer className="text-center py-8 text-zinc-500 border-t border-zinc-800 mt-12">
          © Copyright SnapFolio. All Rights Reserved
        </footer>
      </main>
    </div>
  );
};

export default App;