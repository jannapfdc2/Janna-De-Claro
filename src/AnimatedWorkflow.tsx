import { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';

const STAGE_DURATION = 2500;

// An illustrative IE methodology, not a transcription of confidential
// operational instructions or a claim that an SOP was implemented.
const stages = [
  {
    label: 'Understand',
    short: 'Define scope',
    subtitle: 'Inputs & people',
    title: 'Understand the current process',
    description: 'Define the process boundaries, people involved, inputs, and expected outputs.',
  },
  {
    label: 'Gather',
    short: 'Collect details',
    subtitle: 'Tasks & records',
    title: 'Gather and organize information',
    description: 'Organize the activities, records, and responsibilities that shape the existing workflow.',
  },
  {
    label: 'Map',
    short: 'Draw the AS-IS',
    subtitle: 'Steps & decisions',
    title: 'Create the AS-IS process map',
    description: 'Turn the current sequence into a visual map of activities, decision points, and role handoffs.',
  },
  {
    label: 'Review',
    short: 'Review the flow',
    subtitle: 'Gaps & rework',
    title: 'Analyze opportunities for improvement',
    description: 'Review the map for unclear handoffs, repeated checks, possible rework, or process gaps.',
  },
  {
    label: 'Document',
    short: 'Support standards',
    subtitle: 'Consistent reference',
    title: 'Support process standardization',
    description: 'Organize the documented workflow into a reference that can inform consistent work instructions.',
  },
];

const benefits = [
  {
    title: 'Clearer task sequence',
    description: 'A shared visual reference makes it easier to follow how activities connect.',
  },
  {
    title: 'Visible responsibilities',
    description: 'Documented handoffs can help teams understand who handles each stage.',
  },
  {
    title: 'Foundation for SOPs',
    description: 'An AS-IS flowchart can support reviews, work instructions, and future improvements.',
  },
];

export default function AnimatedWorkflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.18 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => setPageVisible(document.visibilityState === 'visible');
    update();
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);

  const finished = completed || reducedMotion;
  const playing = inView && pageVisible && !finished;

  // Play once. Leaving the viewport pauses the sequence without resetting it.
  useEffect(() => {
    if (!playing) return;

    const timer = window.setTimeout(() => {
      if (active === stages.length - 1) setCompleted(true);
      else setActive(current => current + 1);
    }, STAGE_DURATION);

    return () => window.clearTimeout(timer);
  }, [active, playing]);

  const nodeClass = (index: number) =>
    'awf-node' + (active === index && !finished ? ' is-active' : '');

  const connectorClass = (destination: number) =>
    'awf-connector' + (playing && active === destination ? ' is-flowing' : '');

  function replay() {
    setActive(0);
    setCompleted(false);
  }

  return (
    <div
      ref={sectionRef}
      className={'awf-story' + (playing ? ' is-playing' : '') + (finished ? ' is-complete' : '')}
    >
      <section className="awf-card" aria-labelledby="awf-method-title">
        <p className="awf-eyebrow">INDUSTRIAL ENGINEERING · PROCESS MAPPING</p>
        <h3 id="awf-method-title" className="awf-heading">
          How I approach process mapping
        </h3>
        <p className="awf-lead">
          From understanding the current workflow to creating a clearer reference for standardization.
        </p>

        <div
          className="awf-visual"
          role="img"
          aria-label="Five-stage Industrial Engineering process mapping approach: understand the process, gather information, create an AS-IS map, review opportunities, and document for standardization."
        >
          <svg viewBox="0 0 1110 174" focusable="false" aria-hidden="true">
            <defs>
              <marker id="awf-arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0 0 L7 3.5 L0 7 Z" fill="#9b9f9f" />
              </marker>
            </defs>
            {stages.slice(1).map((stage, index) => (
              <path
                key={stage.label}
                className={connectorClass(index + 1)}
                d={'M' + (198 + index * 220) + ' 80 H' + (238 + index * 220)}
                markerEnd="url(#awf-arrowhead)"
              />
            ))}
            {stages.map((stage, index) => {
              const x = 16 + index * 220;
              return (
                <g key={stage.label} className={nodeClass(index)}>
                  <rect className="awf-shape" x={x} y={30} width={182} height={100} rx={12} />
                  <circle className="awf-stage-number" cx={x + 24} cy={53} r={14} />
                  <text className="awf-stage-digit" x={x + 24} y={58} textAnchor="middle">
                    {index + 1}
                  </text>
                  <text className="awf-node-label" x={x + 16} y={84}>
                    {stage.short}
                  </text>
                  <text className="awf-node-detail" x={x + 16} y={107}>
                    {stage.subtitle}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <ol className="awf-mobile-flow">
          {stages.map((stage, index) => (
            <li
              key={stage.label}
              className={'awf-mobile-node' + (index === active && !finished ? ' is-active' : '')}
            >
              <span className="awf-mobile-marker">{String(index + 1).padStart(2, '0')}</span>
              <span>{stage.title}</span>
            </li>
          ))}
        </ol>

        <div className="awf-explanation" aria-live="off">
          <span className="awf-step-number">
            {finished ? '✓' : String(active + 1).padStart(2, '0')}
          </span>
          <div key={finished ? 'complete' : active} className="awf-step-copy">
            <h4>{finished ? 'From current state to a clearer process' : stages[active].title}</h4>
            <p>
              {finished
                ? 'The method links process understanding, AS-IS documentation, review, and standardization.'
                : stages[active].description}
            </p>
          </div>
        </div>

        <div className="awf-progress" aria-hidden="true">
          {stages.map((stage, index) => (
            <span
              key={stage.label}
              className={'awf-progress-track' +
                (finished || index < active ? ' is-done' : '') +
                (!finished && index === active ? ' is-current' : '')}
            >
              <span className="awf-progress-fill" />
            </span>
          ))}
        </div>

        <div className="awf-footer">
          <p>
            {reducedMotion
              ? 'Complete overview · Reduced motion enabled'
              : completed
                ? 'Methodology overview complete'
                : playing
                  ? 'Playing once · Step ' + (active + 1) + ' of 5'
                  : active > 0
                    ? 'Continues when visible'
                    : 'Starts when visible'}
          </p>
          {completed && !reducedMotion && (
            <button type="button" className="awf-control" onClick={replay}>
              <RotateCcw size={16} aria-hidden="true" />
              Replay
            </button>
          )}
        </div>
        <p className="awf-disclaimer">
          An illustrative IE methodology—not a step-by-step reproduction of a company procedure.
        </p>
      </section>

      <section className="awf-impact" aria-labelledby="awf-impact-title">
        <p className="awf-eyebrow">INTERNSHIP APPLICATION · FIVE STAR BUS CO.</p>
        <h3 id="awf-impact-title">From analysis to a documented workflow.</h3>
        <p className="awf-case-intro">
          As a Business Process Analyst Intern, I created a four-page cashier-management
          process flowchart that documented the sequence of activities, verification
          points, decisions, and handoffs. The output offers a structured view of the
          existing process.
        </p>

        <h4 className="awf-benefits-heading">
          How process documentation can support standardization
        </h4>
        <div className="awf-benefit-grid">
          {benefits.map((benefit, index) => (
            <article key={benefit.title} className="awf-benefit">
              <span className="awf-benefit-number">0{index + 1}</span>
              <h5>{benefit.title}</h5>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
        <p className="awf-impact-note">
          These are potential uses of the documentation, not measured improvements
          or a claim that new procedures were formally implemented.
        </p>
      </section>
    </div>
  );
}
