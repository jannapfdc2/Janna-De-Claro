import { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';

const STAGE_DURATION = 2300;

// General Industrial Engineering methodology, not internal company procedures.
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
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.18 }
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

  // Walk through the methodology once. Pauses offscreen without resetting.
  useEffect(() => {
    if (!playing) return;

    const timeout = window.setTimeout(() => {
      if (active === stages.length - 1) setCompleted(true);
      else setActive(current => current + 1);
    }, STAGE_DURATION);

    return () => window.clearTimeout(timeout);
  }, [active, playing]);

  function replay() {
    setActive(0);
    setCompleted(false);
  }

  return (
    <div
      ref={sectionRef}
      className={'awf-story' + (playing ? ' is-playing' : '') + (finished ? ' is-complete' : '')}
    >
      <div className="awf-meta">
        <p className="workflow-case-label">01 / MY PROCESS MAPPING APPROACH</p>
        <span>{finished ? 'Complete' : playing ? 'Playing once' : 'Five-step methodology'}</span>
      </div>

      <ol className="awf-timeline" aria-label="Five steps in IE process mapping">
        <span className="awf-timeline-track" aria-hidden="true" />
        <span
          className="awf-timeline-progress"
          style={{ width: ((finished ? 1 : active / (stages.length - 1)) * 80) + '%' }}
          aria-hidden="true"
        />
        {stages.map((stage, index) => (
          <li
            key={stage.label}
            className={'awf-stage' +
              (finished || index < active ? ' is-done' : '') +
              (!finished && index === active ? ' is-active' : '')}
            aria-current={!finished && index === active ? 'step' : undefined}
          >
            <span className="awf-dot" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="awf-stage-label">{stage.label}</span>
          </li>
        ))}
      </ol>

      <div className="awf-detail">
        <div key={finished ? 'complete' : active} className="awf-detail-copy" aria-live="off">
          <h3>{finished ? 'Process mapping overview complete' : stages[active].title}</h3>
          <p>
            {finished
              ? 'From understanding the current state to clearer documentation.'
              : stages[active].detail}
          </p>
        </div>
        {completed && !reducedMotion && (
          <button type="button" className="awf-control" onClick={replay}>
            <RotateCcw size={16} aria-hidden="true" />
            Replay
          </button>
        )}
      </div>
    </div>
  );
}
