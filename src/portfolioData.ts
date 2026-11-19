import { ClipboardList, BriefcaseBusiness, Workflow, Monitor } from 'lucide-react';

export const experiences = [
  {
    position: 'Project Coordinator',
    organization: 'Suweco Tablas Energy Corp.',
    period: 'May 2025 — Present',
    type: 'Project Operations',
    bullets: [
      'Coordinate project timelines, deliverables, and stakeholder communication.',
      'Coordinate procurement requests, material deliveries, and payment follow-ups to support daily project operations.',
      'Route documents and approvals for purchase requests, cash advances, diesel requests, and other transactions.',
      'Use company-provided tracking templates to monitor procurement, project budgets, and delivery status in support of daily project coordination.',
      'Prepare weekly reports, meeting minutes, and presentations.',
      'Work with site teams, purchasing staff, and internal departments to keep information and requests moving.',
    ],
  },
  {
    position: 'Bookkeeper',
    organization: 'Part-time',
    period: 'Oct 2024 — Apr 2025',
    type: 'Finance & Records',
    bullets: [
      'Categorized and organized client transactions and expenses, maintaining clear financial records.',
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
      'Prepared a four-page cashier-management process flowchart covering ticket encoding, record verification, and cash remittance.',
      'Documented role handoffs and discrepancy-handling steps as a reference for standardized procedures and future work instructions.',
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
    title: 'SUNWARD Solar Website',
    category: 'Website design',
    image: '/projects/sunward-solar.jpg',
    alt: 'SUNWARD Solar homepage with a warm cream-and-gold design and an interactive solar installation section.',
    description: 'A solar business website that introduces solar energy through an interactive installation journey, system planning, and clear service information.',
    tags: ['Website Design', 'Interactive Experience'],
    caption: 'Homepage and solar installation experience from my SUNWARD Solar personal project.',
  },
  {
    title: 'STEC Solar Proposal Tool',
    category: 'Workflow & planning',
    image: '/projects/stec-solar-proposal.jpg',
    alt: 'STEC Solar Proposal Tool showing the system configuration step, proposal options, and a project summary with sample data.',
    description: 'A guided solar proposal workflow that brings client information, energy needs, system options, and financial comparisons into one organized experience.',
    tags: ['Workflow Design', 'Proposal Planning'],
    caption: 'System configuration screen from my STEC Solar Proposal personal project, shown with sample data.',
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
    evidence: 'See the cashier-management flowchart I prepared during my Business Process Analyst internship.',
    link: '#cashier-workflow', linkLabel: 'Explore the workflow case study',
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
    evidence: 'My personal projects show this exploration in practice. Any new prototype starts with an agreed scope.',
    link: '#projects', linkLabel: 'View my personal project samples',
  },
];

export const monitoring = [
  { label: 'Procurement', text: 'Monitor procurement requests and coordinate follow-ups with purchasing staff and project teams.', record: 'Purchase requests, supporting documents, and approval status.' },
  { label: 'Budget', text: 'Use the existing project budget tracker and support payment and cash-advance follow-ups.', record: 'Project budget records and related transaction documents.' },
  { label: 'Deliveries', text: 'Monitor material delivery status and coordinate updates with site teams and internal departments.', record: 'Delivery updates and outstanding material requests.' },
];

export const cashierStages = [
  {
    label: 'Ticket encoding', roles: ['Crew', 'Issuer', 'Typist'],
    title: 'From returned tickets to recorded entries.',
    summary: 'The crew returns tickets. The issuer counts and records used tickets, then passes them to the typist for encoding.',
    steps: ['Crew returns tickets to the issuer.', 'Issuer records used tickets in the bus crew booklet and hands the tickets to the typist.', 'Typist encodes used and unused tickets in the Ticket Transmittal, then used tickets in the Ticket Entry System.'],
    input: 'Returned tickets and the bus crew booklet',
    output: 'Ticket Transmittal and Ticket Entry System records',
    handoff: 'Crew → Issuer → Typist',
  },
  {
    label: 'Record validation', roles: ['Typist', 'Crew'],
    title: 'Check that the records agree.',
    summary: 'The typist compares the Ticket Entry System, Trip Operations Report, and tally sheet before preparing the Summary Collection.',
    steps: ['Check encoded ticket information against the Trip Operations Report and tally sheet.', 'Verify the tally and recheck calculations when needed.', 'Print the Summary Collection after the required checks and discrepancy steps.'],
    input: 'Encoded ticket data, Trip Operations Report, and tally sheet',
    output: 'Summary Collection; agreement letter where the discrepancy path requires it',
    handoff: 'Typist ↔ Crew',
  },
  {
    label: 'Cash remittance', roles: ['Typist', 'Crew', 'Cashier'],
    title: 'Bring cash and records together.',
    summary: 'The crew submits the cash and attachments to the cashier, who counts the cash and verifies the ticket-entry information.',
    steps: ['Typist signs the Trip Operations Report and provides the Summary Collection to the crew.', 'Crew submits the cash, Trip Operations Report, tally sheet, and Summary Collection.', 'Cashier counts the cash, checks the ticket entry, and records dispatch date and amount received when the information matches.'],
    input: 'Cash and supporting trip and collection documents',
    output: 'Verified remittance details recorded in the system',
    handoff: 'Typist → Crew → Cashier',
  },
  {
    label: 'Documentation', roles: ['Cashier', 'Crew'],
    title: 'Acknowledge, sign, and file.',
    summary: 'The cashier acknowledges the ticket in the system and prepares the Bus Remittance Form for the crew to sign.',
    steps: ['Cashier acknowledges the ticket and prints the Bus Remittance Form.', 'Crew signs the form and returns it to the cashier.', 'Cashier gives the crew its copy and attaches the other copy to the Trip Operations Report.'],
    input: 'Verified ticket entry and remittance details',
    output: 'Signed Bus Remittance Form copies and completed trip documentation',
    handoff: 'Cashier ↔ Crew',
  },
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
