import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight, BriefcaseBusiness, ChartNoAxesCombined, Code2, GraduationCap,
  Mail, MapPin, Menu, Phone, X, Award, Workflow, MonitorSmartphone,
  PanelsTopLeft, CheckCircle2, FileText
} from "lucide-react";

const experiences = [
  {
    role: "Project Coordinator",
    company: "Suweco Tablas Energy Corp.",
    location: "Pasig City, Philippines",
    date: "May 2025 – Present",
    points: [
      "Coordinate procurement requests, material deliveries, and payment follow-ups to support daily project operations.",
      "Manage document routing and approvals for purchase requests, cash advances, diesel requests, and other project transactions.",
      "Maintain procurement, budget, and monitoring reports to track project status and support decision-making.",
      "Prepare weekly reports, meeting minutes, and presentation-ready documents for team and management review.",
      "Liaise with site teams, purchasing staff, and internal departments to ensure timely updates and smooth project coordination."
    ]
  },
  {
    role: "Bookkeeper",
    company: "Part-time",
    location: "Remote",
    date: "Oct 2024 – Apr 2025",
    points: [
      "Managed client accounts and maintained accurate financial records using QuickBooks.",
      "Processed invoices, monitored expenses, and kept bookkeeping documentation organized.",
      "Assisted in tracking financial transactions and supporting daily accounting operations."
    ]
  },
  {
    role: "Business Process Analyst Intern",
    company: "Pangasinan Five Star Bus Co.",
    location: "Quezon City, Philippines",
    date: "September 2023 – December 2023",
    points: [
      "Evaluated existing business processes and workflows to identify areas for improvement.",
      "Created and documented process flowcharts for operational analysis and reporting.",
      "Analyzed workflow efficiency and recommended process enhancement strategies.",
      "Assisted in business operations through data gathering and process evaluation."
    ]
  }
];

const skillGroups = [
  {
    title: "Project & Operations",
    icon: BriefcaseBusiness,
    skills: ["Project Coordination & Monitoring", "Construction Project Administration", "Procurement Monitoring", "Budget Monitoring", "Administrative Support"]
  },
  {
    title: "Process & Documentation",
    icon: Workflow,
    skills: ["Workflow Analysis", "Process Improvement", "Project Documentation", "Report Preparation", "Digital Records Management"]
  },
  {
    title: "Tools & Digital Skills",
    icon: MonitorSmartphone,
    skills: ["Microsoft Office", "Google Workspace", "Google Sheets", "Notion (Exploratory)", "QuickBooks", "Google Apps Script", "Supabase", "GitHub", "Vercel", "ChatGPT", "Claude", "Codex", "Ollama (Exploratory)"]
  },
  {
    title: "Professional Strengths",
    icon: ChartNoAxesCombined,
    skills: ["Resourcefulness", "Multitasking", "Attention to Detail", "Analytical Thinking", "Problem Solving", "Time Management"]
  }
];

const projects = [
  {
    name: "Solar Panel Business Website Redesign",
    type: "Website Design & Development",
    description: "A responsive solar business website concept with a guided proposal builder. Visitors can explore how solar planning works, compare system options, estimate potential savings, and prepare a preliminary proposal.",
    tags: ["React", "TypeScript", "Vite", "Responsive UI"],
    image: `${import.meta.env.BASE_URL}projects/solar-redesign.jpg`,
    imageAlt: "Sunward solar website redesign with a guided solar plan and rooftop solar preview"
  }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#b38b3d]"><span className="h-px w-9 bg-[#b38b3d]" />{children}</div>;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const initialSection = document.getElementById(window.location.hash.slice(1));
    initialSection?.scrollIntoView({ behavior: "instant" });
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#1c2841]">
      <a className="skip-link" href="#home">Skip to content</a>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#f8f7f4]/95 py-3 shadow-sm backdrop-blur-lg" : "bg-transparent py-5"}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
          <a href="#home" className="font-serif text-xl font-bold tracking-tight">J. De Claro<span className="text-[#b38b3d]">.</span></a>
          <div className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a className="hover:text-[#b38b3d]" href="#about">About</a>
            <a className="hover:text-[#b38b3d]" href="#experience">Experience</a>
            <a className="hover:text-[#b38b3d]" href="#projects">Projects</a>
            <a className="hover:text-[#b38b3d]" href="#skills">Skills</a>
            <a className="hover:text-[#b38b3d]" href="#education">Education</a>
            <a className="hover:text-[#b38b3d]" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="hidden rounded-full bg-[#1c2841] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#344563] lg:inline-flex">Let's connect <ArrowUpRight size={15} className="ml-2" /></a>
          <button ref={menuButtonRef} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" className="rounded-lg p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-gray-200 bg-[#f8f7f4] px-6 py-4 shadow-lg lg:hidden">
          {["about", "experience", "projects", "skills", "education", "contact"].map((item) => <a key={item} onClick={closeMenu} href={`#${item}`} className="block py-3 text-sm font-medium capitalize">{item}</a>)}
        </nav>}
      </header>

      <main>
      <section id="home" tabIndex={-1} className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-gray-200/70 px-5 pb-20 pt-32 md:px-8">
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#e9dfca]/60 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e5dcc9] bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8d6b2f]"><span className="h-2 w-2 rounded-full bg-[#b38b3d]" /> Professional Portfolio</div>
            <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">Janna Patricia<br className="hidden sm:block" /> <span className="text-[#b38b3d]">De Claro</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#687080] md:text-xl">Industrial Engineering Graduate <span className="mx-2 text-[#b38b3d]">·</span> Project Coordinator</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#687080]">Detail-oriented professional with experience in project coordination, procurement monitoring, documentation, bookkeeping, and business process analysis. Interested in using technology and process improvement to make work more organized and efficient.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-full bg-[#1c2841] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#344563]">Explore my projects <ArrowUpRight size={17} className="ml-2" /></a>
              <a href="#experience" className="inline-flex items-center rounded-full border border-[#cfd2d8] bg-white/60 px-7 py-3.5 text-sm font-semibold transition hover:border-[#1c2841]">View experience</a>
              <a href={`${import.meta.env.BASE_URL}Janna-Patricia-De-Claro-Resume.pdf`} download className="inline-flex items-center rounded-full border border-[#cfd2d8] bg-white/60 px-7 py-3.5 text-sm font-semibold transition hover:border-[#1c2841]"><FileText size={16} className="mr-2" /> Download resume</a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 right-8 hidden text-right text-[10px] uppercase tracking-[0.25em] text-[#687080] md:block">Portfolio · {new Date().getFullYear()}</div>
      </section>

      <section id="about" className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>About me</SectionLabel>
          <div className="mt-7 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <h2 className="font-serif text-3xl font-semibold leading-tight md:text-5xl">Organized thinking.<br /><span className="text-[#b38b3d]">Practical solutions.</span></h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#687080]">I earned a Bachelor of Science in Industrial Engineering from the Technological Institute of the Philippines – Quezon City. My experience spans project coordination, procurement and budget monitoring, workflow analysis, bookkeeping, report preparation, and administrative support. I enjoy learning digital tools and exploring ways to improve workflows through technology.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#f8f7f4] p-6"><p className="font-serif text-3xl font-semibold">BS</p><p className="mt-2 text-xs text-[#687080]">Industrial Engineering</p></div>
              <div className="rounded-2xl bg-[#f8f7f4] p-6"><p className="font-serif text-3xl font-semibold">3</p><p className="mt-2 text-xs text-[#687080]">Professional roles</p></div>
              <div className="rounded-2xl bg-[#f8f7f4] p-6"><p className="font-serif text-3xl font-semibold">1</p><p className="mt-2 text-xs text-[#687080]">Professional certification</p></div>
              <div className="rounded-2xl bg-[#f8f7f4] p-6"><p className="font-serif text-3xl font-semibold">∞</p><p className="mt-2 text-xs text-[#687080]">Curiosity to keep learning</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-7 font-serif text-3xl font-semibold md:text-5xl">Work history</h2>
          <div className="mt-12 space-y-5">
            {experiences.map((exp, index) => <motion.article key={exp.role} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-3xl border border-[#e9e7e1] bg-white p-7 shadow-[0_8px_30px_rgba(28,40,65,0.035)] md:p-10">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div><h3 className="text-xl font-bold">{exp.role}</h3><p className="mt-1 font-semibold text-[#a47d32]">{exp.company}</p><p className="mt-1 text-xs text-[#687080]">{exp.location}</p></div>
                <span className="w-fit rounded-full bg-[#f4f0e7] px-4 py-2 text-xs font-semibold text-[#82652f]">{exp.date}</span>
              </div>
              <ul className="mt-7 space-y-3">{exp.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-7 text-[#687080]"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#b38b3d]" />{point}</li>)}</ul>
            </motion.article>)}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#1c2841] px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Selected work</SectionLabel>
          <div className="mt-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="font-serif text-3xl font-semibold md:text-5xl">Featured project</h2>
            <p className="max-w-md text-sm leading-7 text-[#c2c9d3]">A website redesign project exploring digital presentation, user experience, and practical business tools.</p>
          </div>
          {projects.map((project) => <article key={project.name} className="mt-12 grid overflow-hidden rounded-[2rem] bg-[#273550] md:grid-cols-2">
            <a href={project.image} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-center gap-4 bg-[#e8dfcd] p-5 text-[#1c2841] sm:p-8" aria-label="View the solar website redesign preview">
              <img src={project.image} alt={project.imageAlt} width={1265} height={712} loading="lazy" decoding="async" className="aspect-video w-full rounded-xl object-cover shadow-xl transition-transform group-hover:scale-[1.02]" />
              <span className="flex items-center justify-between text-xs font-semibold">View design preview <ArrowUpRight size={16} aria-hidden="true" /></span>
            </a>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4b66f]"><PanelsTopLeft size={16} /> {project.type}</div>
              <h3 className="mt-5 font-serif text-3xl font-semibold">{project.name}</h3>
              <p className="mt-5 text-sm leading-7 text-[#c2c9d3]">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] text-[#e3e7ed]">{tag}</span>)}</div>
              <p className="mt-8 flex items-center gap-2 text-xs text-[#d4b66f]"><Code2 size={15} /> Built with React and TypeScript</p>
            </div>
          </article>)}
        </div>
      </section>

      <section id="skills" className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Skills & tools</SectionLabel>
          <h2 className="mt-7 font-serif text-3xl font-semibold md:text-5xl">What I bring to the table</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => { const Icon = group.icon; return <motion.article key={group.title} initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-3xl border border-[#e9e7e1] bg-[#fbfaf8] p-7 md:p-8">
              <div className="flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#a47d32] shadow-sm"><Icon size={20} /></span><h3 className="font-bold">{group.title}</h3></div>
              <div className="mt-6 flex flex-wrap gap-2">{group.skills.map(skill => <span key={skill} className="rounded-full border border-[#e5e2da] bg-white px-3 py-2 text-xs text-[#606979]">{skill}</span>)}</div>
            </motion.article>; })}
          </div>
        </div>
      </section>

      <section id="education" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Education & certification</SectionLabel>
          <h2 className="mt-7 font-serif text-3xl font-semibold md:text-5xl">Academic background</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-[#e9e7e1] bg-white p-8"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2ecdf] text-[#a47d32]"><GraduationCap /></span><h3 className="mt-6 text-lg font-bold">BS Industrial Engineering</h3><p className="mt-2 text-sm font-semibold text-[#a47d32]">Technological Institute of the Philippines – Quezon City</p><p className="mt-2 text-sm text-[#687080]">2019 – 2024</p></article>
            <article className="rounded-3xl border border-[#e9e7e1] bg-white p-8"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2ecdf] text-[#a47d32]"><Award /></span><h3 className="mt-6 text-lg font-bold">Certified Lean Six Sigma White Belt (CLSSWB)</h3><p className="mt-2 text-sm font-semibold text-[#a47d32]">ASK LEX PH Academy LMS</p><p className="mt-2 text-sm text-[#687080]">Professional certification</p></article>
          </div>
        </div>
      </section>

      </main>
      <footer id="contact" className="bg-[#151e30] px-5 pb-8 pt-24 text-white md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Get in touch</SectionLabel>
          <div className="mt-7 grid gap-12 md:grid-cols-[1fr_0.8fr]">
            <div><h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">Let's create<br /><span className="text-[#d4b66f]">what's next.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-[#aeb7c5]">I'm open to professional opportunities and collaborations. Feel free to reach out.</p></div>
            <div className="space-y-4">
              <a href="mailto:jannapfdc2@gmail.com" className="flex items-center gap-4 rounded-2xl bg-[#202c42] p-5 transition hover:bg-[#2a3953]"><Mail className="text-[#d4b66f]" /><span className="text-sm">jannapfdc2@gmail.com</span><ArrowUpRight className="ml-auto" size={17} /></a>
              <a href="tel:+639762476313" className="flex items-center gap-4 rounded-2xl bg-[#202c42] p-5 transition hover:bg-[#2a3953]"><Phone className="text-[#d4b66f]" /><span className="text-sm">+63 976 247 6313</span><ArrowUpRight className="ml-auto" size={17} /></a>
              <div className="flex items-center gap-4 rounded-2xl bg-[#202c42] p-5"><MapPin className="text-[#d4b66f]" /><span className="text-sm">San Mateo, Rizal, Philippines</span></div>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#8792a3] sm:flex-row"><span>© {new Date().getFullYear()} Janna Patricia De Claro. All rights reserved.</span><a className="hover:text-white" href="#home">Back to top ↑</a></div>
        </div>
      </footer>
    </div>
  );
}
