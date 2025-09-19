import React from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-amber-400"></span>
    </h2>
  </div>
);

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="p-6 bg-zinc-800/50 rounded-xl text-center">
        <p className="text-4xl font-bold text-amber-400 mb-2">{value}</p>
        <p className="text-zinc-400">{label}</p>
    </div>
);

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
      <strong className="text-white block">{label}</strong>
      <span className="text-zinc-400">{value}</span>
  </div>
);


const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <SectionTitle>About Me</SectionTitle>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-1 bg-zinc-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <img 
              src="https://picsum.photos/seed/portfolio2/200/200"
              alt="Eshan Shrestha"
              className="w-32 h-32 rounded-full mb-6 border-4 border-zinc-700"
            />
            <h3 className="text-2xl font-semibold text-white mb-1">Eshan Shrestha</h3>
            <p className="text-amber-400 mb-6">Creative Director & Developer</p>
            <div className="space-y-4 text-left w-full">
              <div className="flex items-center p-3 bg-zinc-900/50 rounded-lg">
                <MailIcon className="w-5 h-5 mr-3 text-amber-400" />
                <span className="text-zinc-300">Shanoy921@gmail.com</span>
              </div>
              <div className="flex items-center p-3 bg-zinc-900/50 rounded-lg">
                <PhoneIcon className="w-5 h-5 mr-3 text-amber-400" />
                <span className="text-zinc-300">+1 9799433700</span>
              </div>
              <div className="flex items-center p-3 bg-zinc-900/50 rounded-lg">
                <LocationMarkerIcon className="w-5 h-5 mr-3 text-amber-400" />
                <span className="text-zinc-300">Lubbock, TX</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-4">Aspiring Software Engineer And Cybersecurity Enthusiast</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              I am an aspiring software engineer with a strong interest in cybersecurity. I enjoy tackling complex problems and finding innovative solutions through code. 
              With a background in help desk support, I bring a unique perspective to software development, focusing on user-centric design and robust security practices.
            </p>
            <p className="text-zinc-400 mb-4 leading-relaxed">
              I am actively advancing my cybersecurity expertise through the CompTIA Security+ certification and the Google Cybersecurity Professional Certificate. At the same time, I serve as a Grading Assistant for the Texas Tech Whitacre College of Engineering, where I refine analytical skills, support student learning, and stay closely connected to academic best practices.
            </p>
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <InfoItem label="Specialization" value="Software Development & Cybersecurity" />
                <InfoItem label="Education" value="Bachelor of Science in Computer Science, Texas Tech University" />
                <InfoItem label="Languages" value="English, Nepali, Hindi, Deutsch" />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-amber-400 text-zinc-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-500 transition-colors duration-300">
                Download Resume
              </a>
              <a href="#contact" className="bg-zinc-800 text-white font-semibold px-6 py-3 rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors duration-300">
                Contact Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;