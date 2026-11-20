import { useEffect, useRef, useState } from 'react';

const STAGE_DURATION = 2300;

// An illustrative IE methodology, not internal company operating instructions.
const stages = [
  {
    label: 'Understand',
    title: 'Understand the current process',
    detail: 'Define scope, people, and inputs.',
  },
  {
    label: 'Gather',
    title: 'Gather process information',
    detail: 'Organize tasks, records, and roles.',
  },
  {
    label: 'Map',
    title: 'Create the AS-IS map',
    detail: 'Visualize steps, decisions, and handoffs.',
  },
  {
    label: 'Analyze',
    title: 'Review improvement opportunities',
    detail: 'Review gaps, rework, and unclear flow.',
  },
  {
    label: 'Standardize',
    title: 'Support standardization',
    detail: 'Create a reference for future procedures.',
  },
];

export default function AnimatedWorkflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isObservingInView = useRef(false);
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [narrowScreen, setNarrowScreen] = useState(() => window.matchMedia('(max-width: 540px)').matches);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 540px)');
    const update = () => setNarrowScreen(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    // Scroll-triggered replay, without a button. Entering the viewport starts
    // a fresh walkthrough; leaving it fully resets for the next visit.
    // Different enter/exit thresholds avoid resets from tiny scroll movements.
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        if (!isObservingInView.current && ratio >= 0.28) {
          isObservingInView.current = true;
          setActive(0);
          setCompleted(false);
          setInView(true);
        } else if (isObservingInView.current && ratio < 0.06) {
          isObservingInView.current = false;
          setInView(false);
          setActive(0);
          setCompleted(false);
        }
      },
      { threshold: [0, 0.06, 0.28] }
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

  // Plays once per viewport entry. Scroll away and return to replay.
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
    (finished || index < active ? ' is-done' : '') +
    (!finished && index === active ? ' is-active' : '');

  const arrowClass = (destination: number) =>
    'awf-arrow' +
    (finished || destination < active ? ' is-done' : '') +
    (playing && destination === active ? ' is-flowing' : '');

  return (
    <div
      ref={sectionRef}
      className={'awf-story' + (finished ? ' is-complete' : '')}
    >
      <div className="awf-meta">
        <p className="workflow-case-label">01 / MY PROCESS MAPPING APPROACH</p>
        <span>{finished ? 'Scroll away & back to replay' : playing ? 'Playing once' : 'Scroll to play'}</span>
      </div>

      <div
        className="awf-diagram"
        role="img"
        aria-label="Illustrative Industrial Engineering process map: start by understanding the process, gather information, map the AS-IS process, review gaps at a decision point, then document a reference for standardization. The decision can return to the mapping step for refinement."
      >
        {!narrowScreen && <svg className="awf-desktop-svg" viewBox="0 0 960 210" aria-hidden="true" focusable="false" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <defs>
            <marker
              id="awf-forward-arrow"
              markerWidth="7"
              markerHeight="7"
              refX="6"
              refY="3.5"
              orient="auto"
            >
              <path d="M0 0 L7 3.5 L0 7 Z" fill="#aab6c6" />
            </marker>
          </defs>

          <path className={arrowClass(1)} d="M155 87 H210" markerEnd="url(#awf-forward-arrow)" fill="none" stroke="#aab6c6" strokeWidth="2.5" />
          <path className={arrowClass(2)} d="M350 87 H400" markerEnd="url(#awf-forward-arrow)" fill="none" stroke="#aab6c6" strokeWidth="2.5" />
          <path className={arrowClass(3)} d="M540 87 H585" markerEnd="url(#awf-forward-arrow)" fill="none" stroke="#aab6c6" strokeWidth="2.5" />
          <path className={arrowClass(4)} d="M735 87 H790" markerEnd="url(#awf-forward-arrow)" fill="none" stroke="#aab6c6" strokeWidth="2.5" />
          <path
            className={'awf-arrow awf-return' + (playing && active === 3 ? ' is-flowing' : '')}
            d="M660 158 V175 H470 V128"
            markerEnd="url(#awf-forward-arrow)" fill="none" stroke="#aab6c6" strokeWidth="2.5"
          />

          <g className={nodeClass(0)}>
            <rect className="awf-shape" fill="#26354d" stroke="#8998af" strokeWidth="2" x="12" y="49" width="143" height="76" rx="38" />
            <text className="awf-node-text" fill="#f4f1eb" x="83.5" y="92" textAnchor="middle">Understand</text>
          </g>
          <g className={nodeClass(1)}>
            <rect className="awf-shape" fill="#26354d" stroke="#8998af" strokeWidth="2" x="210" y="49" width="140" height="76" rx="7" />
            <text className="awf-node-text" fill="#f4f1eb" x="280" y="92" textAnchor="middle">Gather</text>
          </g>
          <g className={nodeClass(2)}>
            <rect className="awf-shape" fill="#26354d" stroke="#8998af" strokeWidth="2" x="400" y="49" width="140" height="76" rx="7" />
            <text className="awf-node-text" fill="#f4f1eb" x="470" y="92" textAnchor="middle">Map AS-IS</text>
          </g>
          <g className={nodeClass(3)}>
            <path className="awf-shape" fill="#26354d" stroke="#8998af" strokeWidth="2" d="M660 16 L735 87 L660 158 L585 87 Z" />
            <text className="awf-node-text" fill="#f4f1eb" x="660" y="84" textAnchor="middle">Review</text>
            <text className="awf-node-text" fill="#f4f1eb" x="660" y="103" textAnchor="middle">gaps?</text>
          </g>
          <g className={nodeClass(4)}>
            <path
              className="awf-shape" fill="#26354d" stroke="#8998af" strokeWidth="2"
              d="M790 49 H941 V128 Q903 111 865 128 Q828 145 790 128 Z"
            />
            <text className="awf-node-text" fill="#f4f1eb" x="866" y="84" textAnchor="middle">Document</text>
            <text className="awf-node-text" fill="#f4f1eb" x="866" y="103" textAnchor="middle">standards</text>
          </g>

          <g className="awf-shape-captions" textAnchor="middle">
            <text x="83.5" y="148">START</text>
            <text x="280" y="148">PROCESS</text>
            <text x="470" y="148">PROCESS</text>
            <text x="660" y="196">DECISION</text>
            <text x="866" y="163">DOCUMENT</text>
          </g>
          <text className="awf-return-caption" x="554" y="192" textAnchor="middle">
            Refine if needed
          </text>
        </svg>}

        {narrowScreen && <ol className="awf-mobile-diagram">
          {stages.map((stage, index) => (
            <li key={stage.label} className={nodeClass(index)}>
              <svg viewBox="0 0 200 80" aria-hidden="true" focusable="false">
                {index === 0 && <rect className="awf-shape" fill="#26354d" stroke="#8998af" strokeWidth="2" x="13" y="7" width="174" height="64" rx="32" />}
                {(index === 1 || index === 2) &&
                  <rect className="awf-shape" fill="#26354d" stroke="#8998af" strokeWidth="2" x="13" y="7" width="174" height="64" rx="7" />}
                {index === 3 &&
                  <path className="awf-shape" fill="#26354d" stroke="#8998af" strokeWidth="2" d="M100 2 L181 40 L100 78 L19 40 Z" />}
                {index === 4 &&
                  <path className="awf-shape" fill="#26354d" stroke="#8998af" strokeWidth="2" d="M13 7 H187 V65 Q145 51 100 65 Q56 79 13 65 Z" />}
                <text className="awf-node-text" fill="#f4f1eb" x="100" y="44" textAnchor="middle">
                  {stage.label === 'Standardize' ? 'Document' :
                    stage.label === 'Analyze' ? 'Review gaps?' :
                    stage.label === 'Map' ? 'Map AS-IS' : stage.label}
                </text>
              </svg>
              <span className="awf-mobile-stage-caption">{stage.title}</span>
              {index < stages.length - 1 && <span className="awf-mobile-connector" aria-hidden="true">↓</span>}
            </li>
          ))}
        </ol>}
      </div>

      <div className="awf-detail">
        <div key={finished ? 'complete' : active} className="awf-detail-copy" aria-live="off">
          <h3>{finished ? 'Process mapping overview complete' : stages[active].title}</h3>
          <p>
            {finished
              ? 'From understanding the current state to clearer documentation.'
              : stages[active].detail}
          </p>
        </div>
      </div>
    </div>
  );
}
