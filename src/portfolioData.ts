import { ClipboardList, BriefcaseBusiness, Workflow, Monitor, LayoutDashboard, Sun } from 'lucide-react';

export const experiences = [
  {
    position: 'Project Coordinator',
    roleSummary: 'I coordinate project schedules, deliverables, and day-to-day updates with site teams and internal departments. My role includes following up on procurement requests, material deliveries, payment status, and document approvals to keep project information organized. I also update company-provided trackers and prepare meeting minutes, weekly reports, and presentations to support team coordination.',
    keyResponsibilities: [
      'Project schedules and stakeholder updates',
      'Procurement, delivery, and payment follow-ups',
      'Document approvals, reports, and meeting minutes',
    ],
    outputs: [
      'Organized project monitoring records',
      'Cross-team status coordination',
      'Weekly reports and presentations',
    ],
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
    roleSummary: 'As a part-time bookkeeper, I organized client financial records by categorizing transactions and expenses. I used QuickBooks for basic bookkeeping and maintained clear supporting documentation for review. This role strengthened my attention to detail and my approach to consistent recordkeeping.',
    keyResponsibilities: [
      'Categorize client transactions and expenses',
      'Maintain QuickBooks bookkeeping records',
    ],
    outputs: [
      'Organized financial records',
      'Bookkeeping documentation',
    ],
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
    roleSummary: 'During my internship, I analyzed the existing cashier-management workflow to understand how tasks and records moved between staff. I mapped activities, verification points, responsibilities, and discrepancy-handling steps into a four-page process flowchart. The documentation provided a structured reference for workflow review and could support future standardized procedures and work instructions.',
    keyResponsibilities: [
      'Review encoding, verification, and remittance',
      'Map staff roles and process handoffs',
      'Document discrepancy-handling steps',
    ],
    outputs: [
      'Four-page cashier-management flowchart',
      'Reference for future SOP review',
    ],
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

export const suwecoWalkthrough = [
  {
    label: 'Starting point',
    eyebrow: 'The context',
    title: 'Start with the way the team works.',
    description: 'When I joined as Project Coordinator, the team used Google Workspace and did not yet have an independent digital system.',
    noteLabel: 'What prompted the idea',
    note: 'I saw an opportunity to explore a dedicated workspace for project information and monitoring.',
    hubLabel: 'Existing tools',
    hub: 'Google Workspace',
    connection: 'supports',
    nodesLabel: 'Existing work context',
    nodes: [{ title: 'Project coordination', detail: 'Day-to-day project work' }],
    caption: 'Google Workspace was the existing setup when I joined the company.',
  },
  {
    label: 'Coordination needs',
    eyebrow: 'The design question',
    title: 'What information needs to come together?',
    description: 'My proposal focuses on schedules, tasks, resources, and updates—the information that helps a coordinator follow project activities.',
    noteLabel: 'My IE perspective',
    note: 'Think through how requests, records, and updates connect across the work.',
    hubLabel: 'Design focus',
    hub: 'Project coordination',
    connection: 'brings together',
    nodesLabel: 'Areas considered in the proposal',
    nodes: [
      { title: 'Work', detail: 'Schedules & tasks' },
      { title: 'Resources', detail: 'Procurement & fuel' },
      { title: 'Updates', detail: 'Budgets & reports' },
    ],
    caption: 'Three groups make the scope easier to understand: work, resources, and updates.',
  },
  {
    label: 'System proposal',
    eyebrow: 'My contribution',
    title: 'Translate the idea into a proposed portal.',
    description: 'I created a company website and monitoring workspace that brings these project areas into one proposed system.',
    noteLabel: 'What visitors can explore',
    note: 'The company website is public. The monitoring workspace requires sign-in.',
    hubLabel: 'Proposed workspace',
    hub: 'Suweco Energy Portal',
    connection: 'connects',
    nodesLabel: 'Proposed monitoring modules',
    nodes: [
      { title: 'Schedules', detail: 'Project planning' },
      { title: 'Tasks', detail: 'Activity tracking' },
      { title: 'Procurement', detail: 'Materials monitoring' },
      { title: 'Budgets', detail: 'Budget monitoring' },
      { title: 'Fuel', detail: 'Fuel monitoring' },
      { title: 'Reports', detail: 'Project updates' },
    ],
    caption: 'The proposal connects six monitoring areas within a dedicated workspace.',
  },
  {
    label: 'Intended value',
    eyebrow: 'The purpose',
    title: 'Make the next coordination step clearer.',
    description: 'The intended value is clearer project visibility and more consistent follow-ups across project activities.',
    noteLabel: 'Current status',
    note: 'A proposed system for company consideration. The intended benefits still need validation.',
    hubLabel: 'The idea',
    hub: 'Connected project information',
    connection: 'aims to support',
    nodesLabel: 'Intended benefits to evaluate',
    nodes: [
      { title: 'Visibility', detail: 'See project status' },
      { title: 'Follow-ups', detail: 'Keep updates consistent' },
      { title: 'Coordination', detail: 'Connect project activities' },
    ],
    caption: 'These are intended benefits to evaluate, rather than measured results.',
  },
];

const solarWalkthrough = [
  {
    label: 'Personal exploration',
    eyebrow: 'The starting point',
    title: 'Learn by turning an idea into something usable.',
    description: 'An opportunity to explore Claude AI became a personal project: build a website that explains solar energy and guides visitors through a solar assessment.',
    noteLabel: 'My contribution',
    note: 'I developed the website and guided experience with Claude AI assistance, exploring how an idea can become a working prototype.',
    hubLabel: 'My exploration',
    hub: 'Building with Claude AI',
    connection: 'helped me develop',
    nodesLabel: 'Parts of the personal project',
    nodes: [
      { title: 'Explain', detail: 'Solar concepts' },
      { title: 'Explore', detail: 'Interactive website' },
      { title: 'Guide', detail: 'Assessment steps' },
    ],
    caption: 'One personal project brings learning, interaction, and a guided workflow together.',
  },
  {
    label: 'Solar walkthrough',
    eyebrow: 'The interactive experience',
    title: 'Help visitors explore how solar works.',
    description: 'The interactive 3D walkthrough introduces solar concepts through a house and its system components, giving visitors a visual way to explore the topic.',
    noteLabel: 'My design focus',
    note: 'Connect the explanation to something visitors can explore, so the components have a clear place in the bigger picture.',
    hubLabel: 'Visitor experience',
    hub: 'Interactive 3D solar guide',
    connection: 'explains',
    nodesLabel: 'Solar concepts in the walkthrough',
    nodes: [
      { title: 'Generation', detail: 'Solar panels' },
      { title: 'Conversion', detail: 'Inverter' },
      { title: 'Storage', detail: 'Battery' },
    ],
    caption: 'The guide helps visitors connect solar components with their roles in the system.',
  },
  {
    label: 'Guided assessment',
    eyebrow: 'The system experience',
    title: 'Break the assessment into manageable steps.',
    description: 'I developed a guided assessment and proposal experience covering property information, energy needs, site details, system options, estimates, and review.',
    noteLabel: 'My workflow focus',
    note: 'Organize the relevant inputs and choices into a sequence that visitors can work through.',
    hubLabel: 'Guided workflow',
    hub: 'Solar assessment & proposal',
    connection: 'organizes',
    nodesLabel: 'Information covered by the assessment',
    nodes: [
      { title: 'Property', detail: 'Client & property details' },
      { title: 'Energy use', detail: 'Energy profile' },
      { title: 'Site details', detail: 'Technical inspection inputs' },
      { title: 'System options', detail: 'Configuration' },
      { title: 'Estimates', detail: 'Proposal inputs' },
      { title: 'Review', detail: 'Proposal summary' },
    ],
    caption: 'The assessment gathers information for a proposal; final design needs qualified review.',
  },
  {
    label: 'IE approach',
    eyebrow: 'The thinking behind it',
    title: 'Make a complex service easier to navigate.',
    description: 'I applied systems thinking and information organization: break the experience into steps, collect relevant inputs, and help visitors understand their options.',
    noteLabel: 'Project scope',
    note: 'This is an AI-assisted personal project focused on the digital experience and workflow.',
    hubLabel: 'My IE perspective',
    hub: 'Structure the user journey',
    connection: 'aims to support',
    nodesLabel: 'Design goals for the experience',
    nodes: [
      { title: 'Clear inputs', detail: 'What information is needed' },
      { title: 'Clear steps', detail: 'What comes next' },
      { title: 'Clear choices', detail: 'What options to explore' },
    ],
    caption: 'These are design goals for the experience, not measured user outcomes.',
  },
];

export const projectWalkthroughs = [
  {
    id: 'suweco-walkthrough',
    projectTitle: 'Suweco Energy Portal',
    label: 'Inside the Suweco proposal',
    title: 'From daily coordination to a system idea.',
    introduction: 'Explore the context, the proposal, and the thinking behind my work.',
    status: 'Proposed company system',
    icon: LayoutDashboard,
    steps: suwecoWalkthrough,
    scopeNote: 'Conceptual overview of my proposal. Intended benefits are not measured outcomes.',
  },
  {
    id: 'solar-walkthrough',
    projectTitle: 'Solar Solutions',
    label: 'Inside Solar Solutions',
    title: 'From a learning opportunity to an interactive experience.',
    introduction: 'Explore how I brought a solar guide and assessment workflow together with Claude AI assistance.',
    status: 'Personal project',
    icon: Sun,
    steps: solarWalkthrough,
    scopeNote: 'Personal project developed with Claude AI assistance. Final solar design requires a site assessment and qualified engineering review.',
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
    walkthroughId: 'suweco-walkthrough',
    walkthroughLabel: 'Explore the system proposal',
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
    walkthroughId: 'solar-walkthrough',
    walkthroughLabel: 'Explore the project walkthrough',
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
