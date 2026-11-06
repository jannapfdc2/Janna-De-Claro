import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight, BriefcaseBusiness, GraduationCap,
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

const services = [
  {
    title: "Administrative support",
    description: "Keep everyday information organized and ready for your team to use.",
    tasks: "Spreadsheet updates, document organization, meeting minutes, and report preparation."
  },
  {
    title: "Project coordination support",
    description: "Keep track of what is moving, what is pending, and what needs a follow-up.",
    tasks: "Activity and deadline tracking, team follow-ups, procurement monitoring, and status reports."
  },
  {
    title: "Bookkeeping support",
    description: "Maintain organized records that make day-to-day transactions easier to review.",
    tasks: "QuickBooks record updates, invoice processing, expense tracking, and supporting documentation."
  },
  {
    title: "Process documentation",
    description: "Make the steps in a workflow easier to understand and follow.",
    tasks: "Process flowcharts, workflow documentation, data gathering, and process review."
  }
];

const skillGroups = [
  {
    title: "Tools I use at work",
    icon: BriefcaseBusiness,
    description: "Used in project coordination, administrative tasks, and my previous remote bookkeeping role.",
    skills: ["Google Sheets", "Google Drive", "Google Docs", "Microsoft Excel", "Microsoft Word", "QuickBooks"]
  },
  {
    title: "Coordination & documentation",
    icon: Workflow,
    description: "Practical skills developed through construction operations and process analysis.",
    skills: ["Project tracking", "Procurement monitoring", "Budget monitoring", "Report preparation", "Meeting minutes", "Document routing", "Process mapping"]
  },
  {
    title: "Personal projects & digital tools",
    icon: MonitorSmartphone,
    description: "Tools I use to explore ideas, plan workflows, and build personal projects with AI assistance. I review and refine the output.",
    skills: ["ChatGPT", "Claude", "Codex", "Supabase", "GitHub", "Vercel", "Google Apps Script"]
  },
  {
    title: "Currently exploring",
    icon: PanelsTopLeft,
    description: "Tools I am learning through exploration and practice.",
    skills: ["Notion", "n8n", "Ollama"]
  }
];

const projects = [
  {
    name: "Solar Website & Proposal Builder",
    type: "Personal project · AI-assisted development",
    description: "Two designs for a solar business website: an original solar-energy walkthrough and proposal builder, followed by a redesigned experience for exploring system options, potential savings, and preliminary proposals.",
    tags: ["Workflow planning", "AI-assisted development", "Interface design"],
    previews: [
      {
        label: "Redesign",
        name: "Sunward solar website",
        description: "A refreshed business website with guided solar planning and a proposal builder.",
        image: `${import.meta.env.BASE_URL}projects/solar-redesign.jpg`,
        imageAlt: "Sunward solar website redesign with a guided solar plan and rooftop solar preview",
        width: 1265,
        height: 712
      },
      {
        label: "Original design",
        name: "STEC solar website",
        description: "The original sunrise-to-night solar walkthrough and residential proposal builder.",
        image: `${import.meta.env.BASE_URL}projects/solar-original.jpg`,
        imageAlt: "Original STEC solar website with a solar-powered house at sunrise and an Explore Solar Demo button",
        width: 1234,
        height: 712
      }
    ]
  }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-3 text-sm font-semibold text-[#8d6b2f]"><span className="h-px w-9 bg-[#b38b3d]" />{children}</div>;
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
            <a className="hover:text-[#b38b3d]" href="#services">Services</a>
            <a className="hover:text-[#b38b3d]" href="#about">About</a>
            <a className="hover:text-[#b38b3d]" href="#experience">Experience</a>
            <a className="hover:text-[#b38b3d]" href="#projects">Projects</a>
            <a className="hover:text-[#b38b3d]" href="#skills">Skills</a>
            <a className="hover:text-[#b38b3d]" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="hidden rounded-full bg-[#1c2841] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#344563] lg:inline-flex">Let's connect <ArrowUpRight size={15} className="ml-2" /></a>
          <button ref={menuButtonRef} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" className="rounded-lg p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-gray-200 bg-[#f8f7f4] px-6 py-4 shadow-lg lg:hidden">
          {["services", "about", "experience", "projects", "skills", "education", "contact"].map((item) => <a key={item} onClick={closeMenu} href={`#${item}`} className="block py-3 text-sm font-medium capitalize">{item}</a>)}
        </nav>}
      </header>

      <main>
      <section id="home" tabIndex={-1} className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-gray-200/70 px-5 pb-20 pt-32 md:px-8">
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#e9dfca]/60 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-7 max-w-fit rounded-full border border-[#e5dcc9] bg-white/70 px-4 py-2 text-xs font-semibold leading-5 text-[#82652f]">Open to remote virtual assistant & freelance opportunities</p>
            <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">Janna Patricia<br className="hidden sm:block" /> <span className="text-[#b38b3d]">De Claro</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#687080] md:text-xl">Administrative & project support for remote teams</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#687080]">I help keep documents organized, trackers updated, and follow-ups moving. I bring hands-on project coordination experience and previous remote bookkeeping work to virtual assistant and freelance support roles.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center rounded-full bg-[#1c2841] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#344563]">View my services <ArrowUpRight size={17} className="ml-2" /></a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-[#cfd2d8] bg-white/60 px-7 py-3.5 text-sm font-semibold transition hover:border-[#1c2841]">Work with me</a>
              <a href={`${import.meta.env.BASE_URL}Janna-Patricia-De-Claro-Resume.pdf`} download className="inline-flex items-center rounded-full border border-[#cfd2d8] bg-white/60 px-7 py-3.5 text-sm font-semibold transition hover:border-[#1c2841]"><FileText size={16} className="mr-2" /> Download resume</a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 right-8 hidden text-right text-[10px] uppercase tracking-[0.25em] text-[#687080] md:block">Portfolio · {new Date().getFullYear()}</div>
      </section>

      <section id="services" className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>How I can help</SectionLabel>
          <div className="mt-7 grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
            <h2 className="max-w-xl font-serif text-3xl font-semibold leading-tight md:text-5xl">More order in your<br className="hidden sm:block" /> everyday work.</h2>
            <p className="max-w-md text-sm leading-7 text-[#687080]">Practical remote support for the records, tasks, and follow-ups that keep your business moving.</p>
          </div>
          <div className="mt-12 border-t border-[#e5e2da]">
            {services.map((service) => <article key={service.title} className="grid gap-4 border-b border-[#e5e2da] py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <div><p className="text-sm leading-7 text-[#1c2841]">{service.description}</p><p className="mt-2 max-w-2xl text-sm leading-7 text-[#687080]">{service.tasks}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>About me</SectionLabel>
          <div className="mt-7 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <h2 className="font-serif text-3xl font-semibold leading-tight md:text-5xl">A practical understanding<br className="hidden sm:block" /> of how work gets done.</h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#687080]">I'm Janna, an Industrial Engineering graduate and Project Coordinator with experience in construction administration, remote bookkeeping, and business process analysis. My work involves keeping records accurate, coordinating updates, and following through on pending tasks.</p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#687080]">I'm bringing that experience into virtual assistant and freelance work from home. I enjoy turning scattered information into clear trackers, organized documents, and useful reports, and learning the tools a task requires.</p>
            </div>
            <aside className="border-l-2 border-[#b38b3d] pl-6 md:mt-2">
              <h3 className="font-semibold">Experience I bring to remote work</h3>
              <ul className="mt-5 space-y-5 text-sm leading-7 text-[#687080]">
                <li><strong className="block font-semibold text-[#1c2841]">Project & team follow-ups</strong>Coordinating with site teams, purchasing staff, and internal departments.</li>
                <li><strong className="block font-semibold text-[#1c2841]">Remote bookkeeping</strong>Maintaining QuickBooks records, invoices, and expense documentation.</li>
                <li><strong className="block font-semibold text-[#1c2841]">Organized reporting</strong>Preparing monitoring reports, meeting minutes, and process flowcharts.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-7 font-serif text-3xl font-semibold md:text-5xl">Work history</h2>
          <div className="mt-12 space-y-5">
            {experiences.map((exp) => <article key={exp.role} className="rounded-3xl border border-[#e9e7e1] bg-white p-7 shadow-[0_8px_30px_rgba(28,40,65,0.035)] md:p-10">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div><h3 className="text-xl font-bold">{exp.role}</h3><p className="mt-1 font-semibold text-[#a47d32]">{exp.company}</p><p className="mt-1 text-xs text-[#687080]">{exp.location}</p></div>
                <span className="w-fit rounded-full bg-[#f4f0e7] px-4 py-2 text-xs font-semibold text-[#82652f]">{exp.date}</span>
              </div>
              <ul className="mt-7 space-y-3">{exp.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-7 text-[#687080]"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#b38b3d]" />{point}</li>)}</ul>
            </article>)}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#1c2841] px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Selected work</SectionLabel>
          <div className="mt-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="font-serif text-3xl font-semibold md:text-5xl">Featured project</h2>
            <p className="max-w-md text-sm leading-7 text-[#c2c9d3]">A personal project showing how I plan workflows and explore digital tools, with the original design and redesign available to preview.</p>
          </div>
          {projects.map((project) => <article key={project.name} className="mt-12 overflow-hidden rounded-[2rem] bg-[#273550]">
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#d4b66f]"><PanelsTopLeft size={16} /> {project.type}</div>
              <h3 className="mt-5 font-serif text-3xl font-semibold">{project.name}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#c2c9d3]">{project.description}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#c2c9d3]"><strong className="font-semibold text-white">My contribution:</strong> I planned the features and proposal workflow, used Claude to assist with development, and explored Supabase for storing project data. These previews show my personal project work and learning.</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] text-[#e3e7ed]">{tag}</span>)}</div>
            </div>
            <div className="grid gap-5 px-5 pb-5 sm:px-8 sm:pb-8 md:grid-cols-2">
              {project.previews.map((preview) => <div key={preview.label} className="overflow-hidden rounded-2xl bg-[#e8dfcd] text-[#1c2841]">
                <a href={preview.image} target="_blank" rel="noopener noreferrer" className="group block p-4 sm:p-5" aria-label={`View ${preview.label.toLowerCase()} preview: ${preview.name}`}>
                  <div className="mb-4 flex items-center justify-between gap-3"><span className="text-xs font-bold uppercase tracking-[0.15em] text-[#82652f]">{preview.label}</span><span className="flex items-center gap-1 text-xs font-semibold">View preview <ArrowUpRight size={16} aria-hidden="true" /></span></div>
                  <div className="overflow-hidden rounded-xl"><img src={preview.image} alt={preview.imageAlt} width={preview.width} height={preview.height} loading="lazy" decoding="async" className="aspect-video w-full object-cover shadow-xl transition-transform group-hover:scale-[1.02]" /></div>
                  <h4 className="mt-5 font-serif text-xl font-semibold">{preview.name}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#606979]">{preview.description}</p>
                </a>
              </div>)}
            </div>
          </article>)}
        </div>
      </section>

      <section id="skills" className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Skills & tools</SectionLabel>
          <h2 className="mt-7 font-serif text-3xl font-semibold md:text-5xl">Skills grounded in the work</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => { const Icon = group.icon; return <article key={group.title} className="rounded-3xl border border-[#e9e7e1] bg-[#fbfaf8] p-7 md:p-8">
              <div className="flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#a47d32] shadow-sm"><Icon size={20} /></span><h3 className="font-bold">{group.title}</h3></div>
              <p className="mt-5 text-sm leading-7 text-[#687080]">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">{group.skills.map(skill => <span key={skill} className="rounded-full border border-[#e5e2da] bg-white px-3 py-2 text-xs text-[#606979]">{skill}</span>)}</div>
            </article>; })}
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
          <SectionLabel>Let's work together</SectionLabel>
          <div className="mt-7 grid gap-12 md:grid-cols-[1fr_0.8fr]">
            <div><h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">Need a hand keeping<br />work organized?</h2><p className="mt-6 max-w-md text-sm leading-7 text-[#aeb7c5]">I'm open to remote virtual assistant and freelance support opportunities. Tell me what you need help with, your preferred hours, and the scope of the work so we can discuss a good fit.</p></div>
            <div className="space-y-4">
              <a href="mailto:jannapfdc2@gmail.com?subject=Virtual%20assistant%20%26%20freelance%20support%20inquiry" className="flex items-center gap-4 rounded-2xl bg-[#202c42] p-5 transition hover:bg-[#2a3953]"><Mail className="text-[#d4b66f]" /><span className="text-sm">jannapfdc2@gmail.com</span><ArrowUpRight className="ml-auto" size={17} /></a>
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
