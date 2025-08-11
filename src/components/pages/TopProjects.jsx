import { projects } from '../pages/data/projectsData';

export default function TopProjects() {
  const featured = projects.slice(0, 3); // first 3

  return (
    <div className="Featuredcontainer my-5">
      <h2 className="mb-4 text-center">FEATURED PROJECTS</h2>
      <div className="row flex-wrap p-4 m-2">
        {featured.map((project) => (
          <div key={project.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={project.image} alt={`${project.title} screenshot`} className="card-img-top project-thumb" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">{project.title}</h4>
                <div className="mt-auto d-flex gap-2">
                  {project.url !== '#' && (
                    <a href={project.url} className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
                      Visit site
                    </a>
                  )}
                  <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#projectModal${project.id}`}>
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id={`projectModal${project.id}`} tabIndex={-1} aria-labelledby={`projectModalLabel${project.id}`} aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id={`projectModalLabel${project.id}`}>{project.title}</h5>
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
  );
}
