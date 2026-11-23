import { useEffect, useRef, useState } from 'react';

// An illustrative Industrial Engineering approach, not confidential procedures.
const stages = [
  {
    label: 'Understand',
    title: 'Understand the process',
    detail: 'Define scope, people, and inputs.',
  },
  {
    label: 'Gather',
    title: 'Gather information',
    detail: 'Organize tasks, records, and roles.',
  },
  {
    label: 'Map',
    title: 'Map the AS-IS',
    detail: 'Visualize steps, decisions, and handoffs.',
  },
  {
    label: 'Analyze',
    title: 'Review gaps',
    detail: 'Look for rework and unclear handoffs.',
  },
  {
    label: 'Standardize',
    title: 'Document the process',
    detail: 'Support future procedures and training.',
  },
];

export default function AnimatedWorkflow() {
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [active, setActive] = useState(0);
  const [compact, setCompact] = useState(
    () => window.matchMedia('(max-width: 920px)').matches
  );

  useEffect(() => {
    const media = window.matchMedia('(max-width: 920px)');
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    let frame: number | null = null;

    // The nearest narrative step to the viewport's reading line determines
    // the highlighted shape. Scrolling upward reverses the same sequence.
    // No timers, automatic playback, or click-to-advance controls.
    const measure = () => {
      frame = null;
      const readingLine = window.innerHeight * (compact ? 0.52 : 0.46);
      let nearest = 0;
      let nearestDistance = Infinity;

      stepRefs.current.forEach((element, index) => {
        if (!element) return;
        const bounds = element.getBoundingClientRect();
        const center = bounds.top + bounds.height / 2;
        const distance = Math.abs(center - readingLine);
        if (distance < nearestDistance) {
          nearest = index;
          nearestDistance = distance;
        }
      });

      setActive(current => current === nearest ? current : nearest);
    };

    const requestMeasure = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', requestMeasure, { passive: true });
    window.addEventListener('resize', requestMeasure);
    requestMeasure();

    return () => {
      window.removeEventListener('scroll', requestMeasure);
      window.removeEventListener('resize', requestMeasure);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [compact]);

  const nodeClass = (index: number) =>
    'awf-node' +
    (index < active ? ' is-done' : '') +
    (index === active ? ' is-active' : '');

  const arrowClass = (destination: number) =>
    'awf-arrow' + (active >= destination ? ' is-done' : '');

  const shapeDescription =
    'Five-step IE process mapping flowchart: start with understanding, gather information, map the AS-IS process, review gaps, and document for standardization. A dashed route shows possible refinement.';

  return (
    <section className="awf-story" aria-labelledby="awf-method-label">
      <div className="awf-meta">
        <h3 id="awf-method-label" className="workflow-case-label">
          01 / MY PROCESS MAPPING APPROACH
        </h3>
        <span>Scroll to explore · {String(active + 1).padStart(2, '0')} / 05</span>
      </div>

      {compact ? (
        <ol className="awf-mobile-sequence" aria-label="IE process mapping steps">
          {stages.map((stage, index) => (
            <li
              key={stage.label}
              ref={element => { stepRefs.current[index] = element; }}
              className={nodeClass(index)}
              aria-current={index === active ? 'step' : undefined}
            >
              <svg viewBox="0 0 200 80" aria-hidden="true" focusable="false">
                {index === 0 && (
                  <rect className="awf-shape" x="13" y="7" width="174" height="64" rx="32" />
                )}
                {(index === 1 || index === 2) && (
                  <rect className="awf-shape" x="13" y="7" width="174" height="64" rx="7" />
                )}
                {index === 3 && (
                  <path className="awf-shape" d="M100 2 L181 40 L100 78 L19 40 Z" />
                )}
                {index === 4 && (
                  <path
                    className="awf-shape"
                    d="M13 7 H187 V65 Q145 51 100 65 Q56 79 13 65 Z"
                  />
                )}
                <text className="awf-node-text" x="100" y="44" textAnchor="middle">
                  {index === 2 ? 'Map AS-IS' :
                    index === 3 ? 'Review gaps?' :
                    index === 4 ? 'Document' : stage.label}
                </text>
              </svg>
              <div className="awf-mobile-copy">
                <h4>{stage.title}</h4>
                <p>{stage.detail}</p>
              </div>
              {index < stages.length - 1 && (
                <span className="awf-mobile-connector" aria-hidden="true">↓</span>
              )}
            </li>
          ))}
        </ol>
      ) : (
        <div className="awf-scroll-layout">
          <div className="awf-sticky-diagram" role="img" aria-label={shapeDescription}>
            <svg className="awf-desktop-svg" viewBox="0 0 960 210" aria-hidden="true" focusable="false">
              <defs>
                <marker id="awf-forward-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <path d="M0 0 L7 3.5 L0 7 Z" fill="#aab6c6" />
                </marker>
              </defs>
              <path className={arrowClass(1)} d="M155 87 H210" markerEnd="url(#awf-forward-arrow)" />
              <path className={arrowClass(2)} d="M350 87 H400" markerEnd="url(#awf-forward-arrow)" />
              <path className={arrowClass(3)} d="M540 87 H585" markerEnd="url(#awf-forward-arrow)" />
              <path className={arrowClass(4)} d="M735 87 H790" markerEnd="url(#awf-forward-arrow)" />
              <path
                className={'awf-arrow awf-return' + (active === 3 ? ' is-reviewing' : '')}
                d="M660 158 V175 H470 V128"
                markerEnd="url(#awf-forward-arrow)"
              />

              <g className={nodeClass(0)}>
                <rect className="awf-shape" x="12" y="49" width="143" height="76" rx="38" />
                <text className="awf-node-text" x="83.5" y="92" textAnchor="middle">Understand</text>
              </g>
              <g className={nodeClass(1)}>
                <rect className="awf-shape" x="210" y="49" width="140" height="76" rx="7" />
                <text className="awf-node-text" x="280" y="92" textAnchor="middle">Gather</text>
              </g>
              <g className={nodeClass(2)}>
                <rect className="awf-shape" x="400" y="49" width="140" height="76" rx="7" />
                <text className="awf-node-text" x="470" y="92" textAnchor="middle">Map AS-IS</text>
              </g>
              <g className={nodeClass(3)}>
                <path className="awf-shape" d="M660 16 L735 87 L660 158 L585 87 Z" />
                <text className="awf-node-text" x="660" y="84" textAnchor="middle">Review</text>
                <text className="awf-node-text" x="660" y="103" textAnchor="middle">gaps?</text>
              </g>
              <g className={nodeClass(4)}>
                <path
                  className="awf-shape"
                  d="M790 49 H941 V128 Q903 111 865 128 Q828 145 790 128 Z"
                />
                <text className="awf-node-text" x="866" y="84" textAnchor="middle">Document</text>
                <text className="awf-node-text" x="866" y="103" textAnchor="middle">standards</text>
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
            <p className="awf-sticky-hint">The highlighted step follows your scroll.</p>
          </div>
          <ol className="awf-scroll-steps" aria-label="Five IE methodology steps">
            {stages.map((stage, index) => (
              <li
                key={stage.label}
                ref={element => { stepRefs.current[index] = element; }}
                className={index === active ? 'is-active' : ''}
                aria-current={index === active ? 'step' : undefined}
              >
                <span className="awf-scroll-number">{String(index + 1).padStart(2, '0')}</span>
                <h4>{stage.title}</h4>
                <p>{stage.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
      <p className="awf-method-note">
        An illustrative IE method, not a reproduction of company procedures.
      </p>
    </section>
  );
}
