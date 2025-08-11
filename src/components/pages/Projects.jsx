import { useMemo, useState } from 'react';
import PageWrapper from '../pages/UI/PageWrapper';
import { projects } from './data/projectsData';

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All');

  // Build a unique tag list from your data
  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach(p => p.tags?.forEach(t => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => p.tags?.includes(activeTag));

  return (
    <PageWrapper>
      <div className="projectsPage container p-5 m-5">
        <h2 className="display-5 fw-bold mb-3">Projects</h2>

        {/* Filter Bar */}
     {/* Filter Bar */}
<nav className="filters d-flex flex-wrap gap-2 mb-4" aria-label="Filter projects">
  {allTags.map(tag => (
    <button
      key={tag}
      type="button"
      className={`filter-btn ${activeTag === tag ? 'is-active' : ''}`}
      onClick={() => setActiveTag(tag)}
      aria-pressed={activeTag === tag}
    >
      {tag}
    </button>
  ))}
</nav>


        {/* Grid */}
        <div className="row flex-wrap p-2 m-0">
          {filtered.map(project => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4 mb-4">
<div className="card h-100 shadow-sm project-card">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="card-img-top project-thumb"
                />
                <div className="card-body d-flex flex-column">
<h4 className="card-title">
  <span className="project-dot"></span>{project.title}
</h4>

                  {/* Tag pills */}
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {project.tags?.map(tag => (
                      <span key={tag} className="badge tag-pill">{tag}</span>
                    ))}
                  </div>

                  <p className="card-text small flex-grow-1">{project.description}</p>

                  <div className="mt-auto d-flex gap-2">
                    {project.url !== '#' && (
                      <a
                        href={project.url}
                        className="btn btn-outline-dark btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit site
                      </a>
                    )}
                    <button
                      className="btn btn-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target={`#projectModal${project.id}`}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal */}
              <div
                className="modal fade"
                id={`projectModal${project.id}`}
                tabIndex={-1}
                aria-labelledby={`projectModalLabel${project.id}`}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id={`projectModalLabel${project.id}`}>
                        {project.title}
                      </h5>
                      <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Modal */}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
