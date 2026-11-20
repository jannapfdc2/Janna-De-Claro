import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const STAGE_DURATION = 3800;

// An illustrative overview: company-specific operating details remain in
// the separate source document, subject to publication permission.
const stages = [
  {
    label: 'Record intake',
    title: 'Identify process inputs',
    description: 'Understand the records, documents, and information entering a workflow.',
  },
  {
    label: 'Verification',
    title: 'Verify information',
    description: 'Show how information is checked before the process moves forward.',
  },
  {
    label: 'Decision',
    title: 'Map decision points',
    description: 'Illustrate the option to recheck information when an exception appears.',
  },
  {
    label: 'Handoff',
    title: 'Document role handoffs',
    description: 'Make clear how a completed activity connects to the next responsible role.',
  },
];

export default function AnimatedWorkflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => setPageVisible(document.visibilityState === 'visible');
    update();
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);

  const playing = inView && pageVisible && !paused && !reducedMotion;

  useEffect(() => {
    if (!playing) return;
    const interval = window.setInterval(
      () => setActive(current => (current + 1) % stages.length),
      STAGE_DURATION
    );
    return () => window.clearInterval(interval);
  }, [playing]);

  const connectionClass = (destination: number) =>
    'awf-edge' + (playing && active === destination ? ' is-flowing' : '');

  return (
    <div
      ref={sectionRef}
      className={'awf-story' + (playing ? ' is-playing' : '')}
    >
      <div className="awf-card">
        <p className="awf-eyebrow">PROCESS MAPPING IN ACTION</p>
        <h3 className="awf-heading">A workflow, made clear.</h3>
        <p className="awf-lead">
          A visual introduction to activities, decisions, and handoffs.
        </p>

        <div
          className="awf-visual"
          role="img"
          aria-label="Illustrative workflow: record intake, verification, a decision about whether records match, and a handoff. Information can return for additional checking."
        >
          <svg viewBox="0 0 820 260" aria-hidden="true" focusable="false">
            <defs>
              <marker
                id="awf-arrowhead"
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="4"
                orient="auto"
              >
                <path d="M0 0 L8 4 L0 8 Z" fill="#8b95a2" />
              </marker>
            </defs>

            <path
              className={connectionClass(1)}
              d="M182 111 H223"
              markerEnd="url(#awf-arrowhead)"
            />
            <path
              className={connectionClass(2)}
              d="M397 111 H434"
              markerEnd="url(#awf-arrowhead)"
            />
            <path
              className={connectionClass(3)}
              d="M600 111 H645"
              markerEnd="url(#awf-arrowhead)"
            />
            <path
              className={'awf-edge awf-return' + (playing && active === 2 ? ' is-flowing' : '')}
              d="M517 185 V222 H311 V148"
              markerEnd="url(#awf-arrowhead)"
            />

            <text className="awf-route-label" x="610" y="90">
              Continue
            </text>
            <text className="awf-route-label" x="415" y="244" textAnchor="middle">
              Recheck if needed
            </text>

            <g className={'awf-node' + (active === 0 ? ' is-active' : '')}>
              <rect className="awf-shape" x="16" y="77" width="166" height="70" rx="11" />
              <text className="awf-node-text" x="99" y="107" textAnchor="middle">Record</text>
              <text className="awf-node-text" x="99" y="127" textAnchor="middle">intake</text>
            </g>
            <g className={'awf-node' + (active === 1 ? ' is-active' : '')}>
              <rect className="awf-shape" x="223" y="77" width="174" height="70" rx="11" />
              <text className="awf-node-text" x="310" y="117" textAnchor="middle">
                Verification
              </text>
            </g>
            <g className={'awf-node' + (active === 2 ? ' is-active' : '')}>
              <path className="awf-shape" d="M517 37 L600 111 L517 185 L434 111 Z" />
              <text className="awf-node-text" x="517" y="106" textAnchor="middle">Records</text>
              <text className="awf-node-text" x="517" y="125" textAnchor="middle">match?</text>
            </g>
            <g className={'awf-node' + (active === 3 ? ' is-active' : '')}>
              <rect className="awf-shape" x="645" y="77" width="160" height="70" rx="11" />
              <text className="awf-node-text" x="725" y="117" textAnchor="middle">
                Handoff
              </text>
            </g>
          </svg>
        </div>

        <ol className="awf-mobile-flow" aria-hidden="true">
          {stages.map((stage, index) => (
            <li
              key={stage.label}
              className={'awf-mobile-node' + (index === active ? ' is-active' : '') +
                (index === 2 ? ' is-decision' : '')}
            >
              <span className="awf-mobile-marker">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{stage.label}</span>
            </li>
          ))}
        </ol>

        <div className="awf-explanation" aria-live="off">
          <span className="awf-step-number">{String(active + 1).padStart(2, '0')}</span>
          <div key={active} className="awf-step-copy">
            <h4>{stages[active].title}</h4>
            <p>{stages[active].description}</p>
          </div>
        </div>

        <div className="awf-progress" aria-hidden="true">
          {stages.map((stage, index) => (
            <span
              key={stage.label}
              className={'awf-progress-track' +
                (index < active ? ' is-done' : '') +
                (index === active ? ' is-current' : '')}
            >
              <span className="awf-progress-fill" />
            </span>
          ))}
        </div>

        <div className="awf-footer">
          <p>
            {reducedMotion
              ? 'Reduced-motion mode · Use Next step'
              : paused
                ? 'Animation paused'
                : playing
                  ? 'Auto-playing · Step ' + (active + 1) + ' of 4'
                  : 'Animation plays when visible'}
          </p>
          <button
            type="button"
            className="awf-control"
            aria-label={
              reducedMotion ? 'Show next workflow step' :
                paused ? 'Resume workflow animation' : 'Pause workflow animation'
            }
            aria-pressed={reducedMotion ? undefined : paused}
            onClick={() => {
              if (reducedMotion) {
                setActive(current => (current + 1) % stages.length);
              } else {
                setPaused(current => !current);
              }
            }}
          >
            {reducedMotion || paused
              ? <Play size={16} aria-hidden="true" />
              : <Pause size={16} aria-hidden="true" />}
            {reducedMotion ? 'Next step' : paused ? 'Resume' : 'Pause'}
          </button>
        </div>
        <p className="awf-disclaimer">
          Illustrative overview of process-mapping principles, not the full company procedure.
        </p>
      </div>
    </div>
  );
}
