import { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';

const STAGE_DURATION = 2700;

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
  const [completed, setCompleted] = useState(false);
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

  const finished = completed || reducedMotion;
  const playing = inView && pageVisible && !finished;

  // Advance once through all four stages. Leaving the viewport pauses the
  // countdown without resetting progress; after completion it never loops.
  useEffect(() => {
    if (!playing) return;
    const timeout = window.setTimeout(() => {
      if (active === stages.length - 1) setCompleted(true);
      else setActive(current => current + 1);
    }, STAGE_DURATION);
    return () => window.clearTimeout(timeout);
  }, [active, playing]);

  const nodeClass = (index: number) =>
    'awf-node' +
    ((finished ? index === stages.length - 1 : index === active)
      ? ' is-active' : '');

  const connectionClass = (destination: number) =>
    'awf-edge' + (playing && active === destination ? ' is-flowing' : '');

  const replay = () => {
    setActive(0);
    setCompleted(false);
  };

  return (
    <div
      ref={sectionRef}
      className={'awf-story' + (playing ? ' is-playing' : '') + (finished ? ' is-complete' : '')}
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

            <g className={nodeClass(0)}>
              <rect className="awf-shape" x="16" y="77" width="166" height="70" rx="11" />
              <text className="awf-node-text" x="99" y="107" textAnchor="middle">Record</text>
              <text className="awf-node-text" x="99" y="127" textAnchor="middle">intake</text>
            </g>
            <g className={nodeClass(1)}>
              <rect className="awf-shape" x="223" y="77" width="174" height="70" rx="11" />
              <text className="awf-node-text" x="310" y="117" textAnchor="middle">
                Verification
              </text>
            </g>
            <g className={nodeClass(2)}>
              <path className="awf-shape" d="M517 37 L600 111 L517 185 L434 111 Z" />
              <text className="awf-node-text" x="517" y="106" textAnchor="middle">Records</text>
              <text className="awf-node-text" x="517" y="125" textAnchor="middle">match?</text>
            </g>
            <g className={nodeClass(3)}>
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
              className={'awf-mobile-node' +
                ((finished ? index === stages.length - 1 : index === active)
                  ? ' is-active' : '') +
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
          <span className="awf-step-number">{finished ? '✓' : String(active + 1).padStart(2, '0')}</span>
          <div key={finished ? 'complete' : active} className="awf-step-copy">
            <h4>{finished ? 'Workflow overview complete' : stages[active].title}</h4>
            <p>
              {finished
                ? 'The full process connects inputs, verification, decisions, and role handoffs.'
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
              ? 'Complete workflow · Reduced motion enabled'
              : completed
                ? 'Walkthrough complete · Replay anytime'
                : playing
                  ? 'Playing once · Step ' + (active + 1) + ' of 4'
                  : active > 0
                    ? 'Walkthrough continues when visible'
                    : 'Walkthrough starts when visible'}
          </p>
          {completed && !reducedMotion && (
            <button
              type="button"
              className="awf-control"
              aria-label="Replay workflow animation"
              onClick={replay}
            >
              <RotateCcw size={16} aria-hidden="true" />
              Replay
            </button>
          )}
        </div>
        <p className="awf-disclaimer">
          Illustrative overview of process-mapping principles, not the full company procedure.
        </p>
      </div>
    </div>
  );
}
