import { useEffect, useRef, useState } from 'react';

// A visual guide to IE process mapping, not an internal company procedure.
const stages = [
  { label: 'Understand', title: 'Understand the process', detail: 'Define scope, people, and inputs.' },
  { label: 'Gather', title: 'Gather information', detail: 'Organize tasks, records, and roles.' },
  { label: 'Map AS-IS', title: 'Map the AS-IS process', detail: 'Visualize activities, decisions, and handoffs.' },
  { label: 'Review', title: 'Review process gaps', detail: 'Identify unclear steps and rework.' },
  { label: 'Document', title: 'Document the workflow', detail: 'Create a reference for future standardization.' },
];

const nodeCenters = [83.5, 280, 470, 660, 866];

export default function AnimatedWorkflow() {
  const frameRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame: number | null = null;

    // Actual page scroll controls the selected step in both directions.
    // The sticky diagram stays readable while short milestones pass below it.
    const measure = () => {
      frame = null;
      const container = frameRef.current;
      const sticky = stickyRef.current;
      if (!container || !sticky) return;

      const top = container.getBoundingClientRect().top;
      const range = Math.max(1, container.offsetHeight - sticky.offsetHeight);
      const startLine = window.innerHeight * 0.58;
      const fraction = Math.max(0, Math.min(1, (startLine - top) / range));
      const next = Math.min(stages.length - 1, Math.round(fraction * (stages.length - 1)));

      setActive(current => current === next ? current : next);
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    // On narrow screens, keep the active shape in view without requiring
    // visitors to swipe a long horizontal diagram as they page-scroll.
    const viewport = viewportRef.current;
    if (!viewport || viewport.scrollWidth <= viewport.clientWidth + 1) return;

    const svgWidth = viewport.scrollWidth;
    const target = nodeCenters[active] / 960 * svgWidth - viewport.clientWidth / 2;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    viewport.scrollTo({
      left: Math.max(0, Math.min(target, viewport.scrollWidth - viewport.clientWidth)),
      behavior: reduceMotion ? 'instant' : 'smooth',
    });
  }, [active]);

  const nodeClass = (index: number) =>
    'awf-node' +
    (index < active ? ' is-done' : '') +
    (index === active ? ' is-active' : '');

  const arrowClass = (destination: number) =>
    'awf-arrow' + (active >= destination ? ' is-done' : '');

  return (
    <section className="awf-story" aria-labelledby="awf-method-label">
      <div className="awf-meta">
        <h3 id="awf-method-label" className="workflow-case-label">
          01 / MY PROCESS MAPPING APPROACH
        </h3>
        <span>Scroll to explore · {String(active + 1).padStart(2, '0')} / 05</span>
      </div>

      <div className="awf-scroll-frame" ref={frameRef}>
        <div className="awf-sticky-panel" ref={stickyRef}>
          <div
            className="awf-flow-viewport"
            ref={viewportRef}
            role="img"
            aria-label="Straight five-stage IE process map: understand, gather, map AS-IS, review gaps at a decision, and document. The dashed route shows refinement if required."
          >
            <svg className="awf-flow-svg" viewBox="0 0 960 210" aria-hidden="true" focusable="false">
              <defs>
                <marker id="awf-forward-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <path d="M0 0 L7 3.5 L0 7 Z" fill="#aab6c6" />
                </marker>
              </defs>

              <path className={arrowClass(1)} d="M155 87 H210" markerEnd="url(#awf-forward-arrow)" stroke="#aab6c6" fill="none" />
              <path className={arrowClass(2)} d="M350 87 H400" markerEnd="url(#awf-forward-arrow)" stroke="#aab6c6" fill="none" />
              <path className={arrowClass(3)} d="M540 87 H585" markerEnd="url(#awf-forward-arrow)" stroke="#aab6c6" fill="none" />
              <path className={arrowClass(4)} d="M735 87 H790" markerEnd="url(#awf-forward-arrow)" stroke="#aab6c6" fill="none" />
              <path
                className={'awf-arrow awf-return' + (active === 3 ? ' is-reviewing' : '')}
                d="M660 158 V175 H470 V128"
                markerEnd="url(#awf-forward-arrow)"
                stroke="#aab6c6"
                fill="none"
              />

              <g className={nodeClass(0)}>
                <rect className="awf-shape" x="12" y="49" width="143" height="76" rx="38" fill="#26354d" stroke="#8998af" />
                <text className="awf-node-text" x="83.5" y="92" textAnchor="middle" fill="#f4f1eb">Understand</text>
              </g>
              <g className={nodeClass(1)}>
                <rect className="awf-shape" x="210" y="49" width="140" height="76" rx="7" fill="#26354d" stroke="#8998af" />
                <text className="awf-node-text" x="280" y="92" textAnchor="middle" fill="#f4f1eb">Gather</text>
              </g>
              <g className={nodeClass(2)}>
                <rect className="awf-shape" x="400" y="49" width="140" height="76" rx="7" fill="#26354d" stroke="#8998af" />
                <text className="awf-node-text" x="470" y="92" textAnchor="middle" fill="#f4f1eb">Map AS-IS</text>
              </g>
              <g className={nodeClass(3)}>
                <path className="awf-shape" d="M660 16 L735 87 L660 158 L585 87 Z" fill="#26354d" stroke="#8998af" />
                <text className="awf-node-text" x="660" y="84" textAnchor="middle" fill="#f4f1eb">Review</text>
                <text className="awf-node-text" x="660" y="103" textAnchor="middle" fill="#f4f1eb">gaps?</text>
              </g>
              <g className={nodeClass(4)}>
                <path className="awf-shape" d="M790 49 H941 V128 Q903 111 865 128 Q828 145 790 128 Z" fill="#26354d" stroke="#8998af" />
                <text className="awf-node-text" x="866" y="84" textAnchor="middle" fill="#f4f1eb">Document</text>
                <text className="awf-node-text" x="866" y="103" textAnchor="middle" fill="#f4f1eb">process</text>
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
            </svg>
          </div>

          <div className="awf-live-description" aria-live="off">
            <span className="awf-description-number">{String(active + 1).padStart(2, '0')} / 05</span>
            <div key={active} className="awf-description-copy">
              <h4>{stages[active].title}</h4>
              <p>{stages[active].detail}</p>
            </div>
          </div>
          <div className="awf-step-progress" aria-hidden="true">
            {stages.map((stage, index) => (
              <span key={stage.label} className={index <= active ? 'is-reached' : ''} />
            ))}
          </div>
        </div>

        <ol className="awf-scroll-cues" aria-label="Scroll through the five process mapping stages">
          {stages.map((stage, index) => (
            <li
              key={stage.label}
              className={index === active ? 'is-active' : ''}
              aria-current={index === active ? 'step' : undefined}
            >
              <span className="awf-cue-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{stage.label}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="awf-method-note">
        Illustrative IE methodology, not a reproduction of company procedures.
      </p>
    </section>
  );
}
