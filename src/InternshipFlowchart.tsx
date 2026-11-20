import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const pages = [
  '/internship/cashier-workflow-page-1.png',
  '/internship/cashier-workflow-page-2.png',
  '/internship/cashier-workflow-page-3.png',
  '/internship/cashier-workflow-page-4.png',
];

export default function InternshipFlowchart() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const next = () => setPage(p => (p + 1) % pages.length);
  const previous = () =>
    setPage(p => (p - 1 + pages.length) % pages.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setPage(p => (p + 1) % pages.length);
      }
      if (event.key === 'ArrowLeft') {
        setPage(p => (p - 1 + pages.length) % pages.length);
      }
    };

    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [open]);

  return (
    <div className="internship-gallery">
      <button
        type="button"
        className="internship-preview"
        aria-haspopup="dialog"
        onClick={() => {
          setPage(0);
          setOpen(true);
        }}
      >
        <img
          src={pages[0]}
          alt="Cashier management workflow preview"
          loading="lazy"
        />
        <span>
          <Maximize2 size={18} />
          View full process flowchart — 4 pages
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="internship-modal"
        aria-label="Cashier management flowchart gallery"
        onClose={() => setOpen(false)}
        onClick={event => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
      >
        <div className="internship-modal-content">
          <div className="internship-modal-header">
            <div>
              <h2>Cashier Management Workflow</h2>
              <p>Five Star Bus Company, Inc.</p>
            </div>

            <button
              type="button"
              aria-label="Close flowchart"
              onClick={() => dialogRef.current?.close()}
            >
              <X size={22} />
            </button>
          </div>

          <div className={`internship-modal-image ${zoomed ? 'is-zoomed' : ''}`}>
            <img
              src={pages[page]}
              alt={`Cashier workflow flowchart, page ${page + 1}`}
            />
          </div>

          <div className="internship-modal-controls">
            <button type="button" onClick={previous}>
              <ChevronLeft size={18} />
              Previous
            </button>

            <span aria-live="polite">
              Page {page + 1} of {pages.length}
            </span>

            <button type="button" onClick={next}>
              Next
              <ChevronRight size={18} />
            </button>
          </div>
      
            <a
            href="/internship/cashier-management-workflow.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="internship-fullsize"
            >
            <Maximize2 size={16} />
            View Full Document (PDF)
            </a>
        </div>
      </dialog>
    </div>
  );
}
