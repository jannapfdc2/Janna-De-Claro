import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileText,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';
import type { ReactNode } from 'react';

type RevealProps = {
  key?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
};

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];

const experiences = [
  {
    position: 'Project Coordinator',
    organization: 'Suweco Tablas Energy Corp.',
    period: 'May 2025 — Present',
    type: 'Project Operations',
    bullets: [
      'Coordinate project timelines, deliverables, and stakeholder communication.',
      'Coordinate procurement requests, material deliveries, and payment follow-ups to support daily project operations.',
      'Route documents and approvals for purchase requests, cash advances, diesel requests, and other transactions.',
      'Maintain procurement, budget, and project monitoring records; prepare weekly reports, meeting minutes, and presentations.',
      'Work with site teams, purchasing staff, and internal departments to keep information and requests moving.',
    ],
  },
  {
    position: 'Bookkeeper',
    organization: 'Part-time',
    period: 'Oct 2024 — Apr 2025',
    type: 'Finance & Records',
    bullets: [
      'Maintained financial records and logged transactions with attention to detail.',
      'Used QuickBooks for basic bookkeeping tasks and accurate financial documentation.',
    ],
  },
  {
    position: 'Business Process Analyst Intern',
    organization: 'Five Star Bus Co.',
    period: 'Sep 2023 — Dec 2023',
    type: 'Workflow Improvement',
    bullets: [
      'Analyzed business processes and documented workflows to identify opportunities for improvement.',
      'Developed and implemented a workflow to help streamline an internal company process.',
      'Prepared process documentation and reports to communicate findings and recommendations.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Administrative Support',
    intro: 'Keeping the details organized and the work moving.',
    icon: ClipboardList,
    skills: ['Document Management', 'Data Entry', 'Meeting Minutes', 'Reporting', 'Follow-ups'],
  },
  {
    title: 'Project Coordination',
    intro: 'Connecting people, records, and project priorities.',
    icon: BriefcaseBusiness,
    skills: ['Procurement Monitoring', 'Budget Monitoring', 'Team Coordination', 'Task Tracking'],
  },
  {
    title: 'Process & Analysis',
    intro: 'Finding clearer ways to approach everyday operations.',
    icon: Workflow,
    skills: ['Workflow Analysis', 'Process Improvement', 'Process Documentation', 'Lean Six Sigma'],
  },
  {
    title: 'Tools & Digital Skills',
    intro: 'Comfortable learning and adapting to digital workflows.',
    icon: Monitor,
    skills: ['Microsoft Office', 'QuickBooks (Basic)', 'AI Tools', 'AI Automation Workflows', 'AI Workspaces', 'Basic Coding', 'Presentations'],
  },
];

function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: reducedMotion ? 0 : 0.58, delay: reducedMotion ? 0 : delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </Reveal>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 16);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">Skip to content</a>
      <header className={'site-header' + (isScrolled ? ' is-scrolled' : '')}>
        <nav className="nav-container container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Janna De Claro - home">
            JDC<span className="brand-dot">.</span>
          </a>
          <div className="desktop-nav">
            {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </div>
          <a className="nav-contact" href="#contact">Let's connect <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </nav>
        <div id="mobile-navigation" className={'mobile-nav' + (menuOpen ? ' open' : '')}>
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section id="home" className="hero">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="container hero-grid">
            <motion.div
              className="hero-content"
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.75, ease: 'easeOut' }}
            >
              <div className="status-pill"><span className="status-dot" /> Open to opportunities</div>
              <p className="hero-eyebrow">HELLO, I'M JANNA PATRICIA DE CLARO</p>
              <h1>Organized by nature.<br /><em>Driven by improvement.</em></h1>
              <p className="hero-role">Project Coordinator <span> / </span> Administrative Support <span> / </span> Process Improvement</p>
              <p className="hero-description">I help teams stay organized, keep project operations on track, and bring clarity to everyday workflows—with an Industrial Engineering background and a creative interest in digital projects.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#experience">Explore my experience <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a className="btn btn-secondary" href="#projects">View projects <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
            </motion.div>
            <motion.div
              className="hero-aside"
              initial={reducedMotion ? false : { opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.17, ease: 'easeOut' }}
            >
              <div className="overview-card">
                <div className="overview-top"><span>MY FOCUS</span><Sparkles size={18} aria-hidden="true" /></div>
                <p className="overview-quote">Turning complex tasks into <em>clear, organized workflows.</em></p>
                <div className="overview-divider" />
                <div className="overview-row"><CheckCircle2 size={17} aria-hidden="true" /> Administrative operations</div>
                <div className="overview-row"><CheckCircle2 size={17} aria-hidden="true" /> Project coordination</div>
                <div className="overview-row"><CheckCircle2 size={17} aria-hidden="true" /> Process documentation</div>
                <div className="overview-bottom"><span>DETAIL-ORIENTED · ADAPTABLE</span><ArrowDownRight size={22} aria-hidden="true" /></div>
              </div>
              <div className="aside-decoration" aria-hidden="true" />
            </motion.div>
          </div>
          <div className="hero-scroll container"><a href="#about">SCROLL TO EXPLORE <ChevronDown size={15} aria-hidden="true" /></a></div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-layout">
            <SectionHeading eyebrow="01 / ABOUT ME" title="A structured mind. A thoughtful approach." />
            <Reveal className="about-copy" delay={0.1}>
              <p>I'm a Bachelor of Science in Industrial Engineering graduate from the Technological Institute of the Philippines – Quezon City, with hands-on experience in project coordination, procurement and budget monitoring, administrative support, and process improvement.</p>
              <p>From tracking documents and supporting project teams to developing a workflow during my internship, I enjoy creating order in busy environments. I bring adaptability, multitasking, attention to detail, and clear communication to every role. I'm also exploring AI tools, automation workflows, AI workspaces, and modern website projects to keep expanding my digital skills.</p>
              <div className="about-highlights">
                <div><span className="highlight-number">2+</span><span className="highlight-label">Years of experience</span></div>
                <div><span className="highlight-number">03</span><span className="highlight-label">Professional roles</span></div>
                <div><span className="highlight-number">01</span><span className="highlight-label">Professional certification</span></div>
                <div><span className="highlight-number">BS</span><span className="highlight-label">Industrial Engineering</span></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="container">
            <SectionHeading eyebrow="02 / EXPERIENCE" title="Where experience meets execution." description="A blend of project operations, bookkeeping support, and hands-on process improvement." />
            <div className="experience-list">
              {experiences.map((experience, index) => (
                <Reveal key={experience.position} className="experience-card" delay={index * 0.08}>
                  <div className="experience-index">0{index + 1}</div>
                  <div className="experience-body">
                    <div className="experience-header">
                      <div><p className="experience-type">{experience.type}</p><h3>{experience.position}</h3><p className="experience-company">{experience.organization}</p></div>
                      <span className="period-chip">{experience.period}</span>
                    </div>
                    <ul className="experience-bullets">
                      {experience.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={16} aria-hidden="true" /><span>{bullet}</span></li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <SectionHeading eyebrow="03 / EXPERTISE" title="Skills that keep things moving." description="Practical capabilities developed through real work, collaboration, and ongoing learning." />
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <Reveal key={group.title} className="skill-card" delay={index * 0.06}>
                    <div className="skill-icon"><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></div>
                    <h3>{group.title}</h3>
                    <p>{group.intro}</p>
                    <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <SectionHeading eyebrow="04 / SELECTED WORK" title="Beyond the day-to-day." description="A selection of work that reflects both my structured and creative sides." />
            <Reveal className="project-card">
              <div className="project-visual" role="img" aria-label="Illustrative solar website design concept, not an actual project screenshot">
                <div className="project-browser">
                  <div className="browser-top"><div className="browser-dots"><i /><i /><i /></div><span>SOLAR WEBSITE / CONCEPT COVER</span></div>
                  <div className="solar-scene">
                    <span className="solar-scene-eyebrow">CLEAN ENERGY · MODERN DESIGN</span>
                    <strong>POWERING A<br />BRIGHTER FUTURE.</strong>
                    <span className="solar-scene-cta">Explore solar solutions <ArrowUpRight size={13} aria-hidden="true" /></span>
                    <div className="solar-sun" />
                    <div className="solar-panels" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <span key={index} />)}</div>
                  </div>
                </div>
                <p className="visual-disclaimer">Illustrative cover · project screenshot to be added</p>
              </div>
              <div className="project-content">
                <div className="project-label">FEATURED PROJECT <span>01</span></div>
                <h3>Solar Business<br />Website Redesign</h3>
                <p>A redesign of an earlier solar business website project, focused on presenting solar energy services through a modern, polished digital experience.</p>
                <div className="project-meta"><span>Website Redesign</span><span>October 2024 — April 2025</span></div>
                <p className="project-note"><FileText size={16} aria-hidden="true" /> Project preview and live link can be added once the final files are available.</p>
              </div>
            </Reveal>
            <Reveal className="project-footnote"><Sparkles size={18} aria-hidden="true" /><span>I'm interested in how good systems and thoughtful design can make work easier for people.</span></Reveal>
          </div>
        </section>

        <section id="education" className="section education-section">
          <div className="container">
            <SectionHeading eyebrow="05 / BACKGROUND" title="Built on continuous learning." />
            <div className="education-grid">
              <Reveal className="education-card">
                <div className="education-icon"><GraduationCap size={22} aria-hidden="true" /></div>
                <p className="education-category">EDUCATION</p>
                <h3>BS Industrial Engineering</h3>
                <p>Technological Institute of the Philippines – Quezon City</p>
                <span>Bachelor's Degree</span>
              </Reveal>
              <Reveal className="education-card" delay={0.08}>
                <div className="education-icon"><GraduationCap size={22} aria-hidden="true" /></div>
                <p className="education-category">EDUCATION</p>
                <h3>Senior High School — STEM</h3>
                <p>Science, Technology, Engineering & Mathematics</p>
                <span>SHS Diploma</span>
              </Reveal>
              <Reveal className="education-card education-card-accent" delay={0.16}>
                <div className="education-icon"><Award size={22} aria-hidden="true" /></div>
                <p className="education-category">CERTIFICATION</p>
                <h3>Lean Six Sigma White Belt</h3>
                <p>Professional Certification</p>
                <span>Certified</span>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-layout">
            <Reveal>
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" />06 / GET IN TOUCH</p>
              <h2>Let's make great<br /><em>work happen.</em></h2>
              <p className="contact-intro">Open to Virtual Assistant, Administrative Support, Project Coordination, and collaborative opportunities.</p>
              <a className="btn btn-gold" href="mailto:jannapfdc2@gmail.com?subject=Opportunity%20to%20Connect">Say hello <ArrowUpRight size={17} aria-hidden="true" /></a>
              <p className="resume-note">Resume available upon request.</p>
            </Reveal>
            <Reveal className="contact-info" delay={0.1}>
              <a href="mailto:jannapfdc2@gmail.com"><Mail size={20} aria-hidden="true" /><span><small>EMAIL</small>jannapfdc2@gmail.com</span><ArrowUpRight size={17} className="contact-arrow" aria-hidden="true" /></a>
              <a href="tel:+639762476313"><Phone size={20} aria-hidden="true" /><span><small>PHONE</small>+63 976 247 6313</span><ArrowUpRight size={17} className="contact-arrow" aria-hidden="true" /></a>
              <div><MapPin size={20} aria-hidden="true" /><span><small>LOCATION</small>San Mateo, Rizal, Philippines</span></div>
              <a href="https://github.com/jannapfdc2/Janna-De-Claro" target="_blank" rel="noopener noreferrer"><Github size={20} aria-hidden="true" /><span><small>GITHUB</small>View my portfolio repository</span><ArrowUpRight size={17} className="contact-arrow" aria-hidden="true" /></a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner"><a href="#home" className="footer-brand">JDC<span>.</span></a><p>© {new Date().getFullYear()} Janna Patricia De Claro. All rights reserved.</p><a href="#home">Back to top ↑</a></div>
      </footer>
    </div>
  );
}
