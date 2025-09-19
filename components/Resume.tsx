
import React from 'react';
import { BriefcaseIcon, AcademicCapIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-amber-400"></span>
    </h2>
    <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quis cupiditate.</p>
  </div>
);

const TimelineItem: React.FC<{
  title: string;
  date: string;
  institution: string;
  children: React.ReactNode;
}> = ({ title, date, institution, children }) => (
  <div className="relative pl-12 pb-10">
    <div className="absolute left-0 top-1 w-6 h-6 bg-zinc-800 border-2 border-amber-400 rounded-full flex items-center justify-center">
      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
    </div>
    <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-zinc-700"></div>

    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-sm text-amber-400 mb-2">{date}</p>
    <p className="text-md text-zinc-300 font-medium mb-3">{institution}</p>
    <div className="text-zinc-400 space-y-2 text-sm">
      {children}
    </div>
  </div>
);


const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20">
      <SectionTitle>Resume</SectionTitle>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BriefcaseIcon className="w-6 h-6 mr-3 text-amber-400" />
              Professional Experience
            </h3>
            <div className="relative">
              <TimelineItem
                title="Senior Software Architect"
                date="2022 - Present"
                institution="Tech Innovations Inc."
              >
                <ul className="list-disc list-inside">
                  <li>Lead the architectural design and implementation of enterprise-scale applications</li>
                  <li>Mentor team of 12 developers and establish technical best practices</li>
                  <li>Drive adoption of microservices architecture and cloud-native solutions</li>
                  <li>Reduce system downtime by 75% through improved architecture and monitoring</li>
                </ul>
              </TimelineItem>

              <TimelineItem
                title="Lead Developer"
                date="2019 - 2022"
                institution="Digital Solutions Corp."
              >
                 <ul className="list-disc list-inside">
                  <li>Spearheaded development of company's flagship product reaching 1M+ users</li>
                  <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
                  <li>Managed team of 8 developers across multiple projects</li>
                  <li>Increased code test coverage from 45% to 90%</li>
                </ul>
              </TimelineItem>
            </div>
          </div>
          
          <div>
             <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AcademicCapIcon className="w-6 h-6 mr-3 text-amber-400" />
              Education
            </h3>
             <div className="relative">
              <TimelineItem
                title="Master of Science in Computer Science"
                date="2017 - 2019"
                institution="Stanford University"
              >
                <p>Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.</p>
              </TimelineItem>

              <TimelineItem
                title="Bachelor of Science in Computer Science"
                date="2013 - 2017"
                institution="Massachusetts Institute of Technology (MIT)"
              >
                 <p>Graduated summa cum laude. Captain of the university coding team.</p>
              </TimelineItem>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
