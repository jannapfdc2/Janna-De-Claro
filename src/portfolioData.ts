import { ClipboardList, BriefcaseBusiness, Workflow, Monitor, LayoutDashboard, Sun } from 'lucide-react';

export const experiences = [
  {
    position: 'Project Coordinator',
    organization: 'Suweco Tablas Energy Corp.',
    period: 'May 2025 — Present',
    type: 'Project Operations',
    bullets: [
      'Coordinate project timelines, deliverables, and stakeholder communication.',
      'Coordinate procurement requests, material deliveries, and payment follow-ups with site teams, purchasing staff, and internal departments.',
      'Support the flow of documents and approvals for purchase requests, cash advances, diesel requests, and other transactions.',
      'Use company-provided tracking templates to organize procurement, project budget, and delivery updates for daily monitoring and follow-ups.',
      'Prepare weekly reports, meeting minutes, and presentations to organize project information and support team coordination.',
    ],
  },
  {
    position: 'Bookkeeper',
    organization: 'Part-time',
    period: 'Oct 2024 — Apr 2025',
    type: 'Finance & Records',
    bullets: [
      'Categorized client transactions and expenses to maintain organized financial records for review.',
      'Used QuickBooks for basic bookkeeping and financial documentation, applying attention to detail and consistent record organization.',
    ],
  },
  {
    position: 'Business Process Analyst Intern',
    organization: 'Five Star Bus Co.',
    period: 'Sep 2023 — Dec 2023',
    type: 'Process Mapping & Documentation',
    bullets: [
      'Analyzed the existing cashier-management process and organized its activities into a four-page flowchart covering ticket encoding, record verification, and cash remittance.',
      'Mapped staff responsibilities, handoffs between roles, and discrepancy-handling steps to make the workflow easier to follow and review.',
      'Prepared process documentation as a reference for standardized procedures and future work instructions, applying Industrial Engineering process-mapping skills.',
    ],
  },
];

export const skillGroups = [
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

export const sampleProjects = [
  {
    id: 'suweco-portal',
    title: 'Suweco Energy Portal',
    category: 'Operations & workflow design',
    status: 'Proposed company system',
    icon: LayoutDashboard,
    description: 'A proposed digital workspace shaped by my experience as a Project Coordinator at Suweco Tablas Energy Corp.',
    tags: ['Workflow Design', 'Project Coordination', 'Operations Monitoring'],
    url: 'https://suweco-energy-portal.vercel.app/',
    demoNote: 'The company website is public; monitoring tools require sign-in.',
    stories: [
      {
        label: 'Context',
        title: 'Start with the way the team works.',
        text: 'When I joined the company, the team used Google Workspace and did not yet have an independent digital system. This inspired a proposal to bring project information and monitoring into one workspace.',
      },
      {
        label: 'My contribution',
        title: 'Turn everyday coordination into a system proposal.',
        text: 'I created a proposed company website and monitoring workspace connecting project schedules, task tracking, procurement, budgets, fuel monitoring, and reports. The system is presented for company consideration.',
      },
      {
        label: 'IE approach',
        title: 'Connect the work, people, and information.',
        text: 'I approached the portal as a workflow-design problem: how requests, records, and updates move between people. The intended value is clearer visibility and more consistent follow-ups across project activities.',
      },
    ],
  },
  {
    id: 'solar-solutions',
    title: 'Solar Solutions',
    category: 'Interactive website & assessment',
    status: 'Personal project',
    icon: Sun,
    description: 'A personal project exploring how Claude AI can help turn an idea into an interactive website and a guided solar assessment system.',
    tags: ['Systems Thinking', 'Interactive Experience', 'Claude AI'],
    url: 'https://solar-solutions-ph.vercel.app/',
    demoNote: 'Explore the 3D walkthrough, then start the solar assessment.',
    stories: [
      {
        label: 'Context',
        title: 'Learn by building something people can explore.',
        text: 'An opportunity to explore Claude AI became a hands-on personal project: create a website and system that explain solar energy and guide visitors through the information needed for a proposal.',
      },
      {
        label: 'My contribution',
        title: 'Bring the explanation and assessment together.',
        text: 'I developed the project with Claude AI assistance. It combines an interactive 3D solar walkthrough with a step-by-step assessment and proposal experience covering property information, energy needs, system options, and proposal review.',
      },
      {
        label: 'IE approach',
        title: 'Make a complex service easier to navigate.',
        text: 'The project applies systems thinking and information organization: break a complex service into clear steps, collect relevant inputs, and help users understand their options. The focus is the digital experience and workflow; final solar design requires a site assessment and qualified engineering review.',
      },
    ],
  },
];


export const services = [
  {
    label: 'Project & admin support',
    title: 'Keep the details moving.',
    description: 'Practical support for busy teams managing requests, documents, follow-ups, and day-to-day project priorities.',
    tasks: ['Procurement, budget, and delivery monitoring', 'Document routing and status follow-ups', 'Meeting minutes, reports, and presentations'],
    evidence: 'Built on my Project Coordinator experience at Suweco Tablas Energy Corp., using company-provided tracking templates.',
    link: '#experience', linkLabel: 'Explore my coordination experience',
  },
  {
    label: 'Process documentation',
    title: 'Make the next step clear.',
    description: 'Turn an existing workflow into a clear reference that shows who does what, which records are needed, and where decisions happen.',
    tasks: ['Current-process mapping', 'Role and handoff documentation', 'Flowcharts and references for work instructions'],
    evidence: 'Learn about the cashier-workflow documentation I prepared during my Business Process Analyst internship.',
    link: '#cashier-workflow', linkLabel: 'View my internship contribution',
  },
  {
    label: 'Bookkeeping support',
    title: 'Give every transaction a place.',
    description: 'Support for categorizing transactions and organizing expense records so information is easier to find and review.',
    tasks: ['Transaction and expense categorization', 'Organized financial records', 'Basic QuickBooks bookkeeping support'],
    evidence: 'Built on my part-time bookkeeping experience from October 2024 to April 2025.',
    link: '#bookkeeping-experience', linkLabel: 'Explore my bookkeeping experience',
  },
  {
    label: 'Digital workflow exploration',
    title: 'Explore a useful way forward.',
    description: 'I explore AI tools, automation ideas, and website-based workflows that could help teams organize their work.',
    tasks: ['Workflow ideas and early prototypes', 'Guided website experiences', 'Practical exploration of AI tools and workspaces'],
    evidence: 'My proposed company portal and personal solar project show this exploration in practice. Any new prototype starts with an agreed scope.',
    link: '#projects', linkLabel: 'Explore my digital projects',
  },
];

export const monitoring = [
  { label: 'Procurement', text: 'Monitor procurement requests and coordinate follow-ups with purchasing staff and project teams.', record: 'Purchase requests, supporting documents, and approval status.' },
  { label: 'Budget', text: 'Use the existing project budget tracker and support payment and cash-advance follow-ups.', record: 'Project budget records and related transaction documents.' },
  { label: 'Deliveries', text: 'Monitor material delivery status and coordinate updates with site teams and internal departments.', record: 'Delivery updates and outstanding material requests.' },
];

export const clientSteps = [
  { label: 'Understand', title: 'Start with your priorities.', action: 'Discuss the task, current challenges, intended users, and what a useful result would look like.', need: 'Your goals, context, timeline, and any existing materials.', receive: 'A clear task brief with agreed priorities and scope.' },
  { label: 'Map', title: 'See how the work happens.', action: 'Walk through the current process, including roles, handoffs, records, and tools.', need: 'A walkthrough of the current workflow and examples I can review.', receive: 'A process map or structured description of the current workflow.' },
  { label: 'Identify', title: 'Find practical improvements.', action: 'Review unclear steps, repeated work, and missing information, then discuss possible improvements.', need: 'Feedback from the people doing the work and any operating constraints.', receive: 'Prioritized findings and recommendations for your review.' },
  { label: 'Support', title: 'Put agreed changes into practice.', action: 'Help prepare the approved documentation, checklists, or digital prototype within the agreed scope.', need: 'Approval of the approach, required access, and a point of contact.', receive: 'The agreed documentation or working materials, ready for team review.' },
  { label: 'Refine', title: 'Review it with your team.', action: 'Check whether the output fits the actual workflow and make agreed refinements.', need: 'Feedback from testing or using the output.', receive: 'Updated materials, a progress summary, and clear next steps.' },
];

export const research = [
  { title: 'Product feasibility', detail: 'Academic projects exploring product ideas and their feasibility, connecting a proposed concept with practical considerations.' },
  { title: 'Project design', detail: 'Academic work identifying a problem in a company and developing a proposed solution.' },
  { title: 'Operations research', detail: 'Coursework and research projects using analytical thinking to explore efficiency and support decision-making.' },
];

export const inquiryTopics = ['Project & administrative support', 'Process documentation', 'Bookkeeping support', 'Digital workflow collaboration', 'Volunteer opportunity', 'General inquiry'];
