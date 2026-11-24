import { useEffect, useRef, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import type { projectWalkthroughs } from './portfolioData';

type ProjectWalkthroughProps = { walkthrough: (typeof projectWalkthroughs)[number] };

export default function ProjectWalkthrough({ walkthrough }: ProjectWalkthroughProps) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hash = window.location.hash.slice(1);
    return hash === walkthrough.id || hash.startsWith(`${walkthrough.id}-scene-`);
  });
  const toggleRef = useRef<HTMLButtonElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const storyRefs = useRef<Array<HTMLElement | null>>([]);
  const { id, steps, icon: Icon } = walkthrough;

  useEffect(() => {
    // Project card links still open the appropriate walkthrough automatically.
    const followProjectLink = () => {
      const hash = window.location.hash.slice(1);
      if (hash === id || hash.startsWith(`${id}-scene-`)) setExpanded(true);
    };
    window.addEventListener('hashchange', followProjectLink);
    followProjectLink();
    return () => window.removeEventListener('hashchange', followProjectLink);
  }, [id]);

  function closeWalkthrough() {
    // Avoid leaving visitors partway down a section that is about to shrink.
    rootRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
    setExpanded(false);
    toggleRef.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    if (!expanded) return;
    let frame: number | null = null;
    const navigation = navigationRef.current;
    const root = rootRef.current;
    if (!navigation || !root) return;

    const measure = () => {
      frame = null;
      const navigationBottom = navigation.getBoundingClientRect().bottom;
      const readingLine = Math.min(window.innerHeight * .65, Math.max(0, navigationBottom) + 140);
      let next = 0;
      storyRefs.current.forEach((story, index) => {
        if (story && story.getBoundingClientRect().top <= readingLine) next = index;
      });
      setActive(current => current === next ? current : next);
    };
    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure);
    };
    const resize = new ResizeObserver(() => {
      root.style.setProperty('--walkthrough-nav-height', `${navigation.offsetHeight}px`);
      schedule();
    });
    resize.observe(navigation);
    storyRefs.current.forEach(story => { if (story) resize.observe(story); });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    schedule();
    return () => {
      resize.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [steps, expanded]);

  function renderFigure(step: typeof steps[number], inline = false) {
    return <figure className={`walkthrough-figure${inline ? ' walkthrough-inline-figure' : ''}`}>
      <div className="walkthrough-map">
        <div className="walkthrough-map-hub">
          <Icon size={22} aria-hidden="true" />
          <div><span>{step.hubLabel}</span><strong>{step.hub}</strong></div>
        </div>
        <div className="walkthrough-map-connection"><span>{step.connection}</span></div>
        <ul className={`walkthrough-map-nodes${step.nodes.length === 1 ? ' is-single' : ''}`} aria-label={step.nodesLabel}>
          {step.nodes.map(node => <li key={node.title}><strong>{node.title}</strong><span>{node.detail}</span></li>)}
        </ul>
      </div>
      <figcaption>{step.caption}</figcaption>
    </figure>;
  }

  return <section className={`project-walkthrough${expanded ? ' is-expanded' : ''}`} id={id} ref={rootRef} aria-labelledby={`${id}-title`}>
    <header className="project-walkthrough-heading">
      <div>
        <p className="section-label">{walkthrough.label}</p>
        <h3 id={`${id}-title`}>{walkthrough.title}</h3>
        <p>{walkthrough.introduction}</p>
      </div>
      <span className="walkthrough-status">{walkthrough.status}</span>
    </header>

    <button
      type="button"
      ref={toggleRef}
      className="walkthrough-expand-button"
      aria-expanded={expanded}
      aria-controls={`${id}-content`}
      onClick={() => expanded ? closeWalkthrough() : setExpanded(true)}
    >
      <span>{expanded ? 'Close walkthrough' : 'Explore interactive walkthrough'}</span>
      <ChevronDown size={18} aria-hidden="true" />
    </button>

    <div className="walkthrough-expandable" id={`${id}-content`} hidden={!expanded}>
    <nav className="walkthrough-navigation" ref={navigationRef} aria-label={`${walkthrough.projectTitle} walkthrough steps`}>
      <div className="walkthrough-scroll-hint">
        <span>Scroll to explore</span>
        <span>Step {active + 1} of {steps.length}</span>
        <button type="button" className="walkthrough-close-inline" onClick={closeWalkthrough}>
          Close <X size={15} aria-hidden="true" />
        </button>
      </div>
      <ol className="walkthrough-step-list">
        {steps.map((step, index) => <li key={step.label}>
          <a href={`#${id}-scene-${index}`} aria-current={active === index ? 'step' : undefined}>
            <span className="walkthrough-step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <span>{step.label}</span>
          </a>
        </li>)}
      </ol>
    </nav>

    <div className="walkthrough-story-layout">
      <div className="walkthrough-stories">
        {steps.map((step, index) => <section key={step.label} id={`${id}-scene-${index}`}
          ref={node => { storyRefs.current[index] = node; }} tabIndex={-1}
          aria-labelledby={`${id}-scene-title-${index}`} className={`walkthrough-story-step${active === index ? ' is-active' : ''}`}>
          <div className="walkthrough-scene-copy">
            <p className="walkthrough-scene-kicker">{String(index + 1).padStart(2, '0')} / {step.eyebrow}</p>
            <h4 id={`${id}-scene-title-${index}`}>{step.title}</h4>
            <p>{step.description}</p>
            <div className="walkthrough-design-note"><span>{step.noteLabel}</span><p>{step.note}</p></div>
          </div>
          {renderFigure(step, true)}
        </section>)}
      </div>
      <div className="walkthrough-sticky-visual" aria-hidden="true">
        {renderFigure(steps[active])}
        <p className="walkthrough-diagram-label">{String(active + 1).padStart(2, '0')} / {steps[active].label}</p>
      </div>
    </div>

    <p className="walkthrough-scope-note">{walkthrough.scopeNote}</p>
    </div>
  </section>;
}
