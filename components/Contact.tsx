import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { LocationMarkerIcon, PhoneIcon, MailIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-amber-400"></span>
    </h2>
  </div>
);

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const ContactInfoItem: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center text-amber-400 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="text-zinc-400">{children}</div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

  
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          form.current?.reset();
      }, (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-20">
      <SectionTitle>Contact</SectionTitle>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          
        <div className="bg-amber-400/10 border border-amber-400/20 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
        <p className="text-zinc-300 mb-8">
          Based in Lubbock, TX — open to internships, part‑time software roles, and collaboration on engineering projects.
        </p>
        <div className="space-y-6">
          <ContactInfoItem icon={<PhoneIcon />} title="Phone Number">
            <p>+1 9799433700</p>
          </ContactInfoItem>
          <ContactInfoItem icon={<MailIcon />} title="Email Address">
            <p>esshrest@ttu.edu</p>
            <p>shanoy921@gmail.com</p>
          </ContactInfoItem>
          <ContactInfoItem icon={<LocationMarkerIcon />} title="LinkedIn">
            <a href="https://www.linkedin.com/in/eshan-shrestha-1792aa342/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
          View LinkedIn Profile
            </a>
          </ContactInfoItem>
        </div>
          </div>
          
          <div className="bg-zinc-800 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
        <p className="text-zinc-400 mb-8">
          I'm actively seeking new opportunities and welcome recruiters to reach out. Open to discussing various roles and ideas!
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" name="user_name" placeholder="Your Name" required className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-shadow" />
                <input type="email" name="user_email" placeholder="Your Email" required className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-shadow" />
                </div>
                <input type="text" name="subject" placeholder="Subject" required className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-shadow" />
                <textarea name="message" placeholder="Message" rows={5} required className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-shadow"></textarea>
                <div className="text-center">
                <button type="submit" disabled={status === 'sending'} className="bg-amber-400 text-zinc-900 font-semibold px-8 py-3 rounded-full hover:bg-amber-500 transition-colors duration-300 disabled:bg-zinc-500 disabled:cursor-not-allowed">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {status === 'success' && <p className="text-center text-green-500 mt-4">Message sent successfully!</p>}
              {status === 'error' && <p className="text-center text-red-500 mt-4">Failed to send message. Please try again later.</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;