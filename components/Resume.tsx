
import React from 'react';
import { BriefcaseIcon, AcademicCapIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-amber-400"></span>
    </h2>
  <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">Snapshot of my academic journey, hands‑on experience, and core technical strengths.</p>
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
      <div className="w-2 h-2 bg-amber-400 rounded-full" />
    </div>
    <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-zinc-700" />
    <h3 className="text-lg font-semibold text-white leading-snug">{title}</h3>
    <p className="text-xs tracking-wide text-amber-400 mb-1 uppercase">{date}</p>
    <p className="text-sm text-zinc-300 font-medium mb-3">{institution}</p>
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
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BriefcaseIcon className="w-6 h-6 mr-3 text-amber-400" />
              Experience
            </h3>
            <div className="relative">
              <TimelineItem
                title="Undergraduate Grading Assistant – Whitacre College of Engineering"
                date="Aug 2025 – Present"
                institution="Texas Tech University, Lubbock, TX"
              >
                <ul className="list-disc list-inside space-y-1">
                  <li>Evaluated C programming lab assignments for correctness, efficiency & standards.</li>
                  <li>Helped design lab exercises, exams, and rubrics (recursion, pointers, ADTs, memory).</li>
                  <li>Supported delivery: proctoring, feedback, grading consistency across large cohorts.</li>
                </ul>
              </TimelineItem>
              <TimelineItem
                title="Student Analyst – IT Help Central"
                date="Jun 2025 – Aug 2025"
                institution="Texas Tech University"
              >
                <ul className="list-disc list-inside space-y-1">
                  <li>Provided first‑line technical support (hardware, software, network) with FERPA compliance.</li>
                  <li>Used ticketing & remote tools to streamline tracking and resolution.</li>
                  <li>Collaborated on escalations & produced clear documentation for knowledge reuse.</li>
                </ul>
              </TimelineItem>
              <TimelineItem
                title="Teaching Assistant & Research Intern"
                date="Sep 2022 – Aug 2022"
                institution="Canopy Nepal, Kathmandu, Bagmati"
              >
                <ul className="list-disc list-inside space-y-1">
                  <li>Facilitated academic sessions promoting inclusive learning for middle school students.</li>
                  <li>Conducted 50+ structured student interviews; tracked progress across four schools.</li>
                  <li>Supported equity research (literature reviews, data analysis, outreach planning).</li>
                </ul>
              </TimelineItem>
            </div>
          </div>
          {/* Education & Projects */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AcademicCapIcon className="w-6 h-6 mr-3 text-amber-400" />
                Education
              </h3>
              <div className="relative">
                <TimelineItem
                  title="Bachelor of Science in Computer Science (GPA: 3.93)"
                  date="Expected Dec 2026"
                  institution="Texas Tech University, Lubbock, TX"
                >
                  <p>Honors: Dean’s List (Spring 2023 – Fall 2025)</p>
                </TimelineItem>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BriefcaseIcon className="w-6 h-6 mr-3 text-amber-400" />
                Project Highlight
              </h3>
              <div className="bg-zinc-800/60 border border-zinc-700 rounded-lg p-6 space-y-3">
                <h4 className="text-lg font-semibold text-white">Database Management System</h4>
                <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
                  <li>RESTful API (Node.js, Express, MongoDB) with JWT auth & role‑based access.</li>
                  <li>Implemented CRUD, Nodemailer email flows, validation, secure file uploads.</li>
                  <li>Prototype React front‑end enabling account & inventory management workflows.</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BriefcaseIcon className="w-6 h-6 mr-3 text-amber-400" />
                Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700">
                  <p className="text-amber-400 font-semibold mb-2">Programming & Tools</p>
                  <p className="text-zinc-300 leading-relaxed">Python • C • Java • JavaScript • SQL • MongoDB • Express • React • Node.js</p>
                </div>
                <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700">
                  <p className="text-amber-400 font-semibold mb-2">Certifications</p>
                  <p className="text-zinc-300 leading-relaxed">MERN Development – Deerwalk Inst. of Techn. • Customer Service – Test Dome</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
