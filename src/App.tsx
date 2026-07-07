import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ChevronDown, CheckCircle, Briefcase, Search, Monitor, Star, 
  GraduationCap, BookOpen, Award, Mail, Phone, MapPin
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#1c2841] font-sans selection:bg-[#1c2841] selection:text-white pb-0">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#f8f7f4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm font-medium text-[#1c2841]">
          <div className="font-serif font-bold text-xl tracking-tight">
            J. De Claro
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-[#c29b40] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#c29b40] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#c29b40] transition-colors">Skills</a>
            <a href="#education" className="hover:text-[#c29b40] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#c29b40] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 border-b border-gray-200/50">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="bg-[#f0ede6] text-[#1c2841] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
              Professional Portfolio
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1c2841] leading-tight mb-6 md:whitespace-nowrap">
              Janna Patricia De Claro
            </h1>
            
            <p className="text-lg md:text-xl text-[#6b7280] mb-4">
              Industrial Engineering Graduate | Project Coordinator
            </p>
            
            <p className="text-[#6b7280] max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed text-balance">
              Detail-oriented professional with hands-on experience in project coordination, procurement monitoring, process improvement, and administrative support.
            </p>
            
            <div className="flex justify-center gap-4">
              <a href="#contact" className="px-8 py-3 bg-[#1c2841] text-white rounded-full font-medium hover:bg-[#2a3a5a] transition-colors text-sm">
                Get in Touch
              </a>
              <a href="#experience" className="px-8 py-3 bg-transparent text-[#1c2841] border border-[#d1d5db] rounded-full font-medium hover:border-[#1c2841] transition-colors text-sm bg-white/50">
                View Experience
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#c29b40] animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 border-b border-gray-200/50 bg-white w-full flex justify-center">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#c29b40]"></div>
              <h2 className="text-xs font-bold tracking-widest text-[#c29b40] uppercase">
                About Me
              </h2>
            </div>
            
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1c2841] mb-8">
              Background <span style={{ fontFamily: "Georgia, serif" }}>&amp;</span> Expertise
            </h3>
            
            <p className="text-lg text-[#6b7280] leading-relaxed mb-16 max-w-3xl">
              A Bachelor of Science in Industrial Engineering graduate from the Technological Institute of the Philippines - Quezon City, with practical experience in project coordination, procurement and budget monitoring, workflow analysis, process improvement, report preparation, and administrative support. Adept at multitasking, highly adaptable, and committed to driving operational efficiency in every role. Currently researching AI automation workflows and AI workspaces to continuously build and strengthen my skills and knowledge.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-8">
              {[
                { number: "2+", label: "Years Experience" },
                { number: "3", label: "Roles Held" },
                { number: "1", label: "Certification" },
                { number: "BS", label: "IE Degree" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="font-serif text-4xl font-bold text-[#1c2841] mb-2">{stat.number}</div>
                  <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 border-b border-gray-200/50 w-full flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#c29b40]"></div>
            <h2 className="text-xs font-bold tracking-widest text-[#c29b40] uppercase">
              Experience
            </h2>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1c2841] mb-12">
            Work History
          </h3>

          <div className="space-y-6">
            {[
              {
                role: "Project Coordinator",
                company: "Suweco Tablas Energy Corp.",
                date: "May 2025 - Present",
                tasks: [
                  "Coordinate project timelines, deliverables, and stakeholder communication",
                  "Monitor procurement activities and budget allocations",
                  "Prepare project reports and documentation"
                ]
              },
              {
                role: "Bookkeeper",
                company: "Part-time",
                date: "Oct 2024 - Apr 2025",
                tasks: [
                  "Managed financial records and transaction logging",
                  "Utilized QuickBooks for bookkeeping operations",
                  "Ensured accuracy in financial documentation"
                ]
              },
              {
                role: "Business Process Analyst Intern",
                company: "Five Star Bus Co.",
                date: "Sept 2023 - Dec 2023",
                tasks: [
                  "Analyzed existing business workflows and identified inefficiencies",
                  "Proposed process improvement initiatives",
                  "Prepared reports and visual documentation"
                ]
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-[#1c2841]">{exp.role}</h4>
                    <p className="font-medium text-[#c29b40] mt-1">{exp.company}</p>
                  </div>
                  <div className="inline-flex bg-[#f8f7f4] text-[#6b7280] text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
                    {exp.date}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#6b7280] text-sm md:text-base">
                      <div className="mt-1 flex-shrink-0 text-[#c29b40]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 border-b border-gray-200/50 bg-white w-full flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#c29b40]"></div>
            <h2 className="text-xs font-bold tracking-widest text-[#c29b40] uppercase">
              Skills
            </h2>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1c2841] mb-12">
            Core Competencies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                cat: "Project & Coordination",
                icon: <Briefcase className="w-5 h-5 text-[#1c2841]" />,
                skills: ["Project Coordination", "Procurement Monitoring", "Budget Monitoring", "Administrative Support"]
              },
              {
                cat: "Process & Analysis",
                icon: <Search className="w-5 h-5 text-[#1c2841]" />,
                skills: ["Workflow Analysis", "Process Improvement", "Report Preparation", "Lean Six Sigma"]
              },
              {
                cat: "Technical & Office",
                icon: <Monitor className="w-5 h-5 text-[#1c2841]" />,
                skills: ["Microsoft Office", "Basic QuickBooks", "Basic Coding", "Data Entry", "AI Automation Workflows", "AI Workspaces"]
              },
              {
                cat: "Personal Strengths",
                icon: <Star className="w-5 h-5 text-[#1c2841]" />,
                skills: ["Adaptability", "Multitasking", "Attention to Detail", "Communication"]
              }
            ].map((group, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#f8f7f4] p-8 rounded-2xl border border-gray-100"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200">
                      {group.icon}
                    </div>
                    <h4 className="text-lg font-bold text-[#1c2841]">{group.cat}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, j) => (
                      <span key={j} className="bg-white text-[#4b5563] text-sm px-4 py-1.5 rounded-full border border-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certification Section */}
      <section id="education" className="py-32 px-6 border-b border-gray-200/50 bg-[#f8f7f4] w-full flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#c29b40]"></div>
            <h2 className="text-xs font-bold tracking-widest text-[#c29b40] uppercase">
              Education & Certification
            </h2>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1c2841] mb-12">
            Academic Background
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#f0ede6] flex items-center justify-center mb-6">
                <GraduationCap className="w-5 h-5 text-[#1c2841]" />
              </div>
              <h4 className="text-lg font-bold text-[#1c2841] mb-2">BS Industrial Engineering</h4>
              <p className="text-[#c29b40] text-sm font-medium mb-2">Technological Institute of the Philippines &ndash; QC</p>
              <p className="text-[#9ca3af] text-sm">Bachelor's Degree</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#f0ede6] flex items-center justify-center mb-6">
                <BookOpen className="w-5 h-5 text-[#1c2841]" />
              </div>
              <h4 className="text-lg font-bold text-[#1c2841] mb-2">Senior High School &ndash; STEM</h4>
              <p className="text-[#c29b40] text-sm font-medium mb-2">Science, Technology, Engineering & Mathematics</p>
              <p className="text-[#9ca3af] text-sm">SHS Diploma</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm w-full"
          >
            <div className="w-10 h-10 rounded-full bg-[#fcf9f2] border border-[#f0e8d5] flex items-center justify-center mb-6">
              <Award className="w-5 h-5 text-[#c29b40]" />
            </div>
            <h4 className="text-lg font-bold text-[#1c2841] mb-2">Certified Lean Six Sigma White Belt</h4>
            <p className="text-[#c29b40] text-sm font-medium">Professional Certification</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-32 px-6 bg-[#1a2333] text-center border-b border-[#151c2a] w-full flex justify-center relative pb-32">
        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-[#9ca3af] mb-12 text-sm max-w-md mx-auto">
              I'm open to opportunities and collaborations. Feel free to reach out.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full px-4 sm:px-0">
              <a href="mailto:jannapfdc2@gmail.com" className="bg-[#242e42] p-8 rounded-2xl hover:bg-[#2c3850] transition-colors flex flex-col items-center justify-center gap-4 group">
                <Mail className="w-6 h-6 text-[#c29b40] group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs sm:text-sm truncate w-full text-center">jannapfdc2@gmail.com</span>
              </a>
              
              <a href="tel:+639762476313" className="bg-[#242e42] p-8 rounded-2xl hover:bg-[#2c3850] transition-colors flex flex-col items-center justify-center gap-4 group">
                <Phone className="w-6 h-6 text-[#c29b40] group-hover:scale-110 transition-transform" />
                <span className="text-white text-sm">+63 976 247 6313</span>
              </a>
              
              <div className="bg-[#242e42] p-8 rounded-2xl flex flex-col items-center justify-center gap-4">
                <MapPin className="w-6 h-6 text-[#c29b40]" />
                <span className="text-white text-sm text-center">San Mateo, Rizal, Philippines</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 py-8 border-t border-[#242e42] w-full px-6 bg-[#1a2333]">
              <p className="text-xs text-[#6b7280]">
                &copy; {new Date().getFullYear()} Janna Patricia De Claro. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
