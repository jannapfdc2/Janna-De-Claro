import InternshipFlowchart from './InternshipFlowchart';
import AnimatedWorkflow from './AnimatedWorkflow';
import ProjectPreview from './ProjectPreview';
import ProjectWalkthrough from './ProjectWalkthrough';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode, KeyboardEvent, FormEvent } from 'react';
import { ChevronDown, ClipboardList, Copy, FileText, Github, GraduationCap, Mail, MapPin, Maximize2, Menu, Phone, Plus, Workflow, Calculator, BriefcaseBusiness, Check, MousePointerClick, X } from 'lucide-react';
import { clientSteps, experiences, inquiryTopics, monitoring, projectWalkthroughs, research, sampleProjects, services, skillGroups } from './portfolioData';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'My approach', href: '#approach' },
  { label: 'About', href: '#about' },
];

function Tabs<T extends { label: string }>({ id, label, items, children, numbered = false }: {
  id: string; label: string; items: T[]; children: (item: T, index: number) => ReactNode; numbered?: boolean;
}) {
  const [active, setActive] = useState(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % items.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + items.length) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }
  return <div className={'tabs tabs-' + id}>
    <div className="tab-list" role="tablist" aria-label={label}>
      {items.map((item, index) => <button key={item.label} type="button" role="tab"
        id={`${id}-tab-${index}`} aria-selected={active === index} aria-controls={`${id}-panel-${index}`}
        tabIndex={active === index ? 0 : -1} ref={(node) => { buttons.current[index] = node; }}
        onClick={() => setActive(index)} onKeyDown={(event) => navigate(event, index)}>
        {numbered && <span className="step-number" aria-hidden="true">{index + 1}</span>}{item.label}
      </button>)}
    </div>
    {items.map((item, index) => <div key={item.label} id={`${id}-panel-${index}`} role="tabpanel"
      aria-labelledby={`${id}-tab-${index}`} hidden={active !== index} tabIndex={0} className="tab-panel">
      {children(item, index)}
    </div>)}
  </div>;
}

function SectionTitle({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><p className="section-label">{label}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>;
}


const timelineEntries = [...experiences].reverse();
const timelineIds = ['process-experience', 'bookkeeping-experience', 'coordination-experience'];
const timelineYears = ['Sep–Dec 2023', 'Oct 2024–Apr 2025', 'May 2025–Present'];
const timelineTitles = ['Process Analyst Intern', 'Bookkeeper', 'Project Coordinator'];
const timelineIcons = [Workflow, Calculator, BriefcaseBusiness];

function ExperienceTimeline() {
  const milestoneButtons = useRef<Array<HTMLButtonElement | null>>([]);
  const [selected, setSelected] = useState(() => {
    const hash = typeof window === 'undefined' ? '' : window.location.hash.slice(1);
    const found = timelineIds.indexOf(hash);
    return found >= 0 ? found : timelineEntries.length - 1;
  });

  useEffect(() => {
    const onHashChange = () => {
      const found = timelineIds.indexOf(window.location.hash.slice(1));
      if (found >= 0) setSelected(found);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % timelineEntries.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + timelineEntries.length) % timelineEntries.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = timelineEntries.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    milestoneButtons.current[next]?.focus();
  }

  const experience = timelineEntries[selected];

  return (
    <div className="experience-timeline-section">
      <p className="experience-timeline-hint">
        <MousePointerClick size={17} aria-hidden="true" />
        Select a milestone to view the details
      </p>
      <div className="experience-timeline" role="tablist" aria-label="Career milestones">
        {timelineEntries.map((item, index) => {
          const Icon = timelineIcons[index];
          const current = selected === index;
          return (
            <button
              key={item.position}
              id={timelineIds[index]}
              ref={element => { milestoneButtons.current[index] = element; }}
              type="button"
              role="tab"
              aria-selected={current}
              aria-controls="experience-detail-panel"
              tabIndex={current ? 0 : -1}
              className={'experience-milestone' + (current ? ' is-active' : '')}
              onClick={() => setSelected(index)}
              onKeyDown={event => navigate(event, index)}
            >
              <span className="experience-hex-outline" aria-hidden="true">
                <span className="experience-hex-inner">
                  <Icon size={28} strokeWidth={1.8} />
                </span>
              </span>
              <span className="experience-milestone-stem" aria-hidden="true" />
              <span className="experience-year-ribbon">{timelineYears[index]}</span>
              <span className="experience-milestone-role">{timelineTitles[index]}</span>
              <span className="experience-milestone-org">{item.organization}</span>
              <span className="experience-milestone-action">
                {current ? 'Viewing details' : 'View details'}
                {current ? <Check size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
              </span>
            </button>
          );
        })}
      </div>
      <div
        className="experience-detail-panel"
        id="experience-detail-panel"
        role="tabpanel"
        aria-labelledby={timelineIds[selected]}
        tabIndex={0}
      >
        <div className="experience-detail-heading">
          <div>
            <p className="experience-type">{experience.type}</p>
            <h3>{experience.position}</h3>
            <p className="experience-detail-org">{experience.organization}</p>
          </div>
          <span className="experience-detail-period">{experience.period}</span>
        </div>
        <div className="experience-body">
          <div className="experience-role-overview">
            <h4><BriefcaseBusiness size={18} aria-hidden="true" /> My Role</h4>
            <p>{experience.roleSummary}</p>
          </div>

          <div className="experience-highlights">
            <section aria-labelledby="experience-responsibilities-label">
              <h4 id="experience-responsibilities-label">
                <ClipboardList size={18} aria-hidden="true" /> Key Responsibilities
              </h4>
              <ul className="experience-short-list">
                {experience.keyResponsibilities.map((item, index) => (
                  <li key={item}>
                    <span className="experience-short-number">{String(index + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="experience-contributions-label">
              <h4 id="experience-contributions-label">
                <Check size={18} aria-hidden="true" /> Contributions & Output
              </h4>
              <ul className="experience-output-list">
                {experience.outputs.map(item => (
                  <li key={item}><Check size={16} aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>
            </section>
          </div>

          {selected === 2 && (
            <details className="experience-monitoring-details">
              <summary>
                <span>Explore what I monitor</span>
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <div className="monitoring-block">
                <h3>What I monitor</h3>
                <p>Using company-provided tracking templates.</p>
                <Tabs id="monitoring" label="Monitoring responsibilities" items={monitoring}>
                  {item => <div className="monitoring-content">
                    <p>{item.text}</p>
                    <p><strong>Records involved:</strong> {item.record}</p>
                  </div>}
                </Tabs>
              </div>
            </details>
          )}

          {selected === 0 && (
            <a href="#cashier-workflow" className="text-link experience-case-link">
              View my internship contribution
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function InternshipContribution() {
  return (
    <section id="cashier-workflow" className="workflow-section section">
      <div className="container workflow-case-study">
        <header className="workflow-case-heading">
          <p className="section-label">Internship contribution / Industrial Engineering</p>
          <h2>Making complex processes clearer.</h2>
          <p>An IE-based case study on documenting a cashier workflow at Five Star Bus Co.</p>
        </header>

        <AnimatedWorkflow />

        <div className="workflow-case-grid">
          <section className="workflow-evidence" aria-labelledby="workflow-output-title">
            <p className="workflow-case-label">02 / THE OUTPUT</p>
            <h3 id="workflow-output-title">Cashier Workflow Documentation</h3>
            <p className="workflow-case-summary">
              4-page process map covering activities, checks, decisions, and handoffs.
            </p>
            <InternshipFlowchart />
          </section>

          <section className="workflow-value" aria-labelledby="workflow-value-title">
            <p className="workflow-case-label">03 / THE VALUE</p>
            <h3 id="workflow-value-title">Why it matters</h3>
            <p className="workflow-case-summary">
              A clearer reference for existing procedures.
            </p>
            <ul className="workflow-value-list">
              <li>
                <strong>Process visibility</strong>
                <span>See how each task connects.</span>
              </li>
              <li>
                <strong>Defined handoffs</strong>
                <span>Clarify roles and decision points.</span>
              </li>
              <li>
                <strong>Supports standardization</strong>
                <span>A foundation for SOP review and training.</span>
              </li>
            </ul>
            <p className="workflow-value-note">
              Potential benefits of documentation; not measured outcomes.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topic, setTopic] = useState(inquiryTopics[0]);
  const [contactStatus, setContactStatus] = useState('');
  const menuRef = useRef<HTMLButtonElement | null>(null);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuRef.current?.focus(); }
    };
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (menuOpen && !menuPanelRef.current?.contains(target) && !menuRef.current?.contains(target)) setMenuOpen(false);
    };
    document.addEventListener('keydown', onEscape);
    document.addEventListener('pointerdown', onPointer);
    return () => { document.removeEventListener('keydown', onEscape); document.removeEventListener('pointerdown', onPointer); };
  }, [menuOpen]);


  // Reveal stable page elements on first entry; keep tab panels and dialogs untouched.
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

    const selector = [
      '.hero-topline',
      '.hero-copy > .hero-role',
      '.hero-copy > h1',
      '.hero-copy > .hero-description',
      '.hero-copy > .hero-actions',
      '.hero-copy > .availability',
      '.portfolio-directory',
      '.hero-bottom > span',
      '.section-heading',
      '.services-section .tabs',
      '.sample-projects-grid > .sample-project',
      '.exploration-note',
      '.workflow-context',
      '.awf-story',
      '.internship-gallery',
      '.experience-list > .experience-detail',
      '.approach-section > .container > .tabs',
      '.approach-section > .container > .text-link',
      '.about-copy > p',
      '.about-copy > .text-link',
      '.skills-grid > .skill-group',
      '.education-records',
      '.academic-work',
      '.contact-copy',
      '.inquiry-form',
    ].join(', ');

    const stagger = (query: string, interval: number) => {
      document.querySelectorAll<HTMLElement>(query).forEach((element, index) => {
        element.style.setProperty('--reveal-delay', Math.min(index, 4) * interval + 'ms');
      });
    };

    stagger('.hero-copy > .hero-role, .hero-copy > h1, .hero-copy > .hero-description, .hero-copy > .hero-actions, .hero-copy > .availability', 90);
    stagger('.hero-bottom > span', 90);
    stagger('.sample-projects-grid > .sample-project', 140);
    stagger('.skills-grid > .skill-group', 110);
    stagger('.experience-list > .experience-detail', 85);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

    document.querySelectorAll<HTMLElement>(selector).forEach(element => {
      element.classList.add('scroll-reveal');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealLinkedDetail = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target instanceof HTMLDetailsElement) target.open = true;
    };
    revealLinkedDetail();
    window.addEventListener('hashchange', revealLinkedDetail);
    return () => window.removeEventListener('hashchange', revealLinkedDetail);
  }, []);

  function composeEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!message) { setContactStatus('Please add a short description of what you need.'); return; }
    const body = `Hi Janna,\n\nI'm interested in ${topic.toLowerCase()}.\n\n${message}\n\n${name ? 'Best,\n' + name : ''}`;
    window.location.href = `mailto:jannapfdc2@gmail.com?subject=${encodeURIComponent('Portfolio inquiry: ' + topic)}&body=${encodeURIComponent(body)}`;
    setContactStatus('Your email app should open with a draft to review and send. You can also email me directly at jannapfdc2@gmail.com.');
  }

  async function copyEmail() {
    try { await navigator.clipboard.writeText('jannapfdc2@gmail.com'); setContactStatus('Email address copied.'); }
    catch { setContactStatus('You can copy my email address here: jannapfdc2@gmail.com.'); }
  }

  return <div className="site-shell">
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header">
      <nav className="container nav-container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Janna De Claro home">JDC<span>.</span></a>
        <div className="desktop-nav">{navLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
        <a href="#contact" className="nav-contact">Let’s work together</a>
        <button type="button" ref={menuRef} className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </nav>
      <div id="mobile-navigation" className="mobile-nav" ref={menuPanelRef} hidden={!menuOpen}>{navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Let’s work together</a></div>
    </header>
    <main id="main" tabIndex={-1}>
      <section id="home" className="hero">
        <div className="container hero-topline"><span>Janna Patricia De Claro</span><span>Industrial Engineering graduate</span></div>
        <div className="container hero-layout">
          <div className="hero-copy"><p className="hero-role">Process & operations support</p><h1>Organized by nature.<br />Driven by improvement.</h1>
            <p className="hero-description">I help teams organize the details, document clear processes, and keep everyday operations moving—with a practical curiosity for digital tools.</p>
            <div className="hero-actions"><a href="#services" className="btn btn-primary">Find the support you need</a><a href="#projects" className="text-link">Explore my work</a></div>
            <p className="availability">Open to project, VA, and collaborative opportunities</p>
          </div>
          <aside className="portfolio-directory" aria-label="Explore the portfolio"><p>A little structure.<br />A clearer way forward.</p><div className="directory-links">
            <a href="#cashier-workflow"><FileText size={19} aria-hidden="true" /><span>See my internship work<span>Process documentation</span></span></a>
            <a href="#projects"><Maximize2 size={19} aria-hidden="true" /><span>Explore my digital projects<span>Systems & personal projects</span></span></a>
            <a href="#approach"><ClipboardList size={19} aria-hidden="true" /><span>Picture working together<span>My approach to your project</span></span></a>
          </div><span className="directory-footer">Thoughtful systems. Practical support.</span></aside>
        </div>
        <div className="container hero-bottom"><span>Project coordination</span><span>Process documentation</span><span>Bookkeeping support</span></div>
      </section>

      <section id="services" className="section services-section"><div className="container">
        <SectionTitle label="How I can help" title="What needs a little more structure?">Choose the kind of support you’re looking for.</SectionTitle>
        <Tabs id="services" label="Types of support" items={services}>{service => <div className="service-content"><div><h3>{service.title}</h3><p>{service.description}</p><a href={service.link} className="text-link">{service.linkLabel}</a></div><div className="service-scope"><p className="sheet-label">Where I can support you</p><ul>{service.tasks.map(task => <li key={task}>{task}</li>)}</ul><p className="evidence-note">{service.evidence}</p></div></div>}</Tabs>
      </div></section>

      <section id="projects" className="section projects-section"><div className="container">
        <SectionTitle label="Systems & personal projects" title="From daily work to digital ideas.">A proposed company portal and a personal solar project, viewed through an Industrial Engineering lens. Select a website preview to explore it, or read the thinking behind each project.</SectionTitle>
        <div className="sample-projects-grid">{sampleProjects.map(project => {
          const Icon = project.icon;
          return <article className="sample-project" key={project.id} aria-labelledby={`${project.id}-title`}>
            <ProjectPreview project={project} />
            <Icon className="project-icon" size={28} aria-hidden="true" />
            <div className="project-heading"><p>{project.category}</p><span>{project.status}</span></div>
            <h3 id={`${project.id}-title`}>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="skill-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <p className="project-demo-note">{project.demoNote}</p>
            <a className="text-link project-walkthrough-link" href={`#${project.walkthroughId}`}>{project.walkthroughLabel}</a>
          </article>;
        })}</div>
        <ProjectWalkthrough walkthrough={projectWalkthroughs[0]} />
        <ProjectWalkthrough walkthrough={projectWalkthroughs[1]} />
        <div className="exploration-note"><span>What connects the work</span><p>I use my Industrial Engineering background to think through processes, organize information, and explore digital tools that make the next step clearer.</p></div>
      </div></section>

      <InternshipContribution />

      <section id="experience" className="section experience-section">
        <div className="container">
          <SectionTitle label="My experience" title="Bringing structure to everyday work.">
            Process mapping, bookkeeping, and project coordination—different roles, one structured approach.
          </SectionTitle>
          <ExperienceTimeline />
        </div>
      </section>

      <section id="approach" className="section approach-section"><div className="container">
        <SectionTitle label="How I work with clients" title="From your challenge to a clear next step.">My proposed approach for new engagements, adapted to your team and agreed scope.</SectionTitle>
        <Tabs id="approach" label="Working together stages" items={clientSteps} numbered>{step => <div className="approach-content"><h3>{step.title}</h3><div className="approach-columns"><div><h4>What I do</h4><p>{step.action}</p></div><div><h4>What I need from you</h4><p>{step.need}</p></div><div><h4>What you receive</h4><p>{step.receive}</p></div></div></div>}</Tabs>
        <a href="#contact" className="text-link">Tell me about your project</a>
      </div></section>

      <section id="about" className="section about-section"><div className="container about-layout">
        <SectionTitle label="About me" title="A structured mind. A curious outlook." />
        <div className="about-copy"><p>I’m Janna, a BS Industrial Engineering graduate from the Technological Institute of the Philippines – Quezon City. My experience spans project coordination, process documentation, administrative support, and part-time bookkeeping.</p><p>I enjoy finding order in busy environments—whether that means following up on project requests, organizing expense records, or mapping how a team’s work flows from one person to the next.</p><p>I bring adaptability, attention to detail, multitasking, and clear communication to my work. I’m also exploring AI tools, automation, and website-based workflows to turn ideas into useful outputs.</p><p className="volunteer-note">I’m open to volunteer opportunities where I can contribute, learn, and support meaningful work.</p><a href="#contact" className="text-link" onClick={() => setTopic('Volunteer opportunity')}>Discuss a volunteer opportunity</a></div>
      </div></section>

      <section id="skills" className="section skills-section"><div className="container">
        <SectionTitle label="Skills in context" title="The tools behind the work." />
        <div className="skills-grid">{skillGroups.map((group, index) => { const Icon = group.icon; return <article className="skill-group" key={group.title}><Icon size={24} aria-hidden="true" /><h3>{group.title}</h3><p>{group.intro}</p><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div><a className="text-link" href={index === 2 ? '#cashier-workflow' : index === 3 ? '#projects' : '#coordination-experience'}>{index === 3 ? 'See digital projects' : 'See related experience'}</a></article>; })}</div>
      </div></section>

      <section id="education" className="section education-section"><div className="container">
        <SectionTitle label="Learning & foundations" title="An Industrial Engineering perspective." />
        <div className="education-layout"><div className="education-records"><div><GraduationCap size={22} aria-hidden="true" /><div><h3>BS Industrial Engineering</h3><p>Technological Institute of the Philippines – Quezon City</p><span>Bachelor’s degree</span></div></div><div><FileText size={22} aria-hidden="true" /><div><h3>Lean Six Sigma White Belt</h3><p>Professional certification</p></div></div><details className="prior-education"><summary>Earlier education <ChevronDown size={18} aria-hidden="true" /></summary><p>Senior High School — STEM<br />Science, Technology, Engineering & Mathematics<br />SHS Diploma</p></details></div>
          <div className="academic-work"><h3>Academic research experience</h3><p>Research projects that shaped how I approach problems.</p>{research.map(item => <details key={item.title}><summary>{item.title}<Plus size={18} aria-hidden="true" /></summary><p>{item.detail}</p></details>)}</div>
        </div>
      </div></section>

      <section id="contact" className="contact-section section"><div className="container contact-layout"><div className="contact-copy"><p className="section-label">Let’s connect</p><h2>What can we organize together?</h2><p>Tell me what your team needs. I’m open to project coordination, virtual assistance, process documentation, bookkeeping support, and collaborative opportunities.</p><div className="contact-links"><a href="mailto:jannapfdc2@gmail.com"><Mail size={20} aria-hidden="true" />jannapfdc2@gmail.com</a><button type="button" onClick={copyEmail}><Copy size={16} aria-hidden="true" />Copy email address</button><a href="tel:+639762476313"><Phone size={20} aria-hidden="true" />+63 976 247 6313</a><p><MapPin size={20} aria-hidden="true" />San Mateo, Rizal, Philippines</p></div><p className="resume-note">Resume available upon request.</p></div>
          <form className="inquiry-form" onSubmit={composeEmail}><h3>Start a conversation</h3><label htmlFor="inquiry-topic">I’m looking for</label><div className="select-wrap"><select id="inquiry-topic" value={topic} onChange={event => setTopic(event.target.value)}>{inquiryTopics.map(item => <option key={item}>{item}</option>)}</select><ChevronDown size={18} aria-hidden="true" /></div><label htmlFor="inquiry-name">Your name <span>(optional)</span></label><input id="inquiry-name" name="name" autoComplete="name" maxLength={100} /><label htmlFor="inquiry-message">What would you like help with?</label><textarea id="inquiry-message" name="message" rows={4} maxLength={1500} required placeholder="A little about your workflow, goals, or project…" /><p className="form-note">This opens a draft in your email app for you to review and send.</p><button type="submit" className="btn btn-gold">Open email draft</button><p className="contact-status" role="status" aria-live="polite">{contactStatus}</p></form>
      </div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a href="#home" className="brand" aria-label="Janna De Claro home">JDC<span>.</span></a><p>© {new Date().getFullYear()} Janna Patricia De Claro</p><a href="https://github.com/jannapfdc2/Janna-De-Claro" target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden="true" />Portfolio repository</a><a href="#home">Back to top</a></div></footer>
  </div>;
}
