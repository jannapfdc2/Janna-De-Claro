import { useEffect, useRef, useState } from 'react';
import { Globe, Maximize2, X } from 'lucide-react';

type ProjectPreviewProps = {
  project: { id: string; title: string; url: string; demoNote: string };
};

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  const [visible, setVisible] = useState(false);
  const [scale, setScale] = useState(0);
  const [open, setOpen] = useState(false);
  const [cardLoaded, setCardLoaded] = useState(false);
  const [dialogLoaded, setDialogLoaded] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const hostname = new URL(project.url).hostname;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const resize = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / 1200));
    const intersection = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (!entry.isIntersecting) setCardLoaded(false);
    }, { rootMargin: '150px' });
    resize.observe(stage);
    intersection.observe(stage);
    return () => { resize.disconnect(); intersection.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  function openPreview() {
    setDialogLoaded(false);
    setCardLoaded(false);
    setOpen(true);
  }

  function finishClosing() {
    setOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }

  return <>
    <div className="project-preview">
      <div className="project-preview-address" aria-hidden="true"><Globe size={15} /><span>{hostname}</span></div>
      <div className="project-preview-stage" ref={stageRef}>
        <div className="project-preview-placeholder" aria-hidden="true"><Globe size={30} /><span>{project.title}</span><small>Website preview</small></div>
        <div className="project-preview-visual" aria-hidden="true" inert>
          {visible && !open && scale > 0 && <iframe
            className={cardLoaded ? 'project-preview-thumbnail is-loaded' : 'project-preview-thumbnail'}
            src={project.url}
            title={`${project.title} thumbnail`}
            tabIndex={-1}
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="no-referrer"
            style={{ transform: `scale(${scale})` }}
            onLoad={() => setCardLoaded(true)}
          />}
        </div>
        <button className="project-preview-trigger" type="button" ref={triggerRef}
          aria-label={`Preview ${project.title}`} aria-haspopup="dialog"
          aria-controls={`${project.id}-preview`} onClick={openPreview}>
          <span><Maximize2 size={17} aria-hidden="true" />Preview website</span>
        </button>
      </div>
    </div>

    <dialog className="project-preview-dialog" id={`${project.id}-preview`} ref={dialogRef}
      aria-labelledby={`${project.id}-preview-title`} aria-describedby={`${project.id}-preview-note`}
      onClose={finishClosing}
      onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
      {open && <div className="project-preview-content">
        <header className="project-preview-header">
          <div><h2 id={`${project.id}-preview-title`}>{project.title}</h2><p>{hostname}</p></div>
          <button className="project-preview-close" type="button" autoFocus
            aria-label={`Close ${project.title} preview`} onClick={() => dialogRef.current?.close()}><X size={22} aria-hidden="true" /></button>
        </header>
        <div className="project-preview-live">
          {!dialogLoaded && <p className="project-preview-loading" role="status">Loading website preview…</p>}
          <iframe src={project.url} title={`${project.title} interactive website preview`}
            sandbox="allow-scripts allow-same-origin" referrerPolicy="no-referrer"
            onLoad={() => setDialogLoaded(true)} />
        </div>
        <footer className="project-preview-footer">
          <div><p id={`${project.id}-preview-note`}>{project.demoNote}</p><p>For the complete experience, open the full website.</p></div>
          <a className="btn btn-primary" href={project.url} target="_blank" rel="noopener noreferrer"
            aria-label={`View full ${project.title} website (opens in a new tab)`}>View full website<span>Opens in a new tab</span></a>
        </footer>
      </div>}
    </dialog>
  </>;
}
