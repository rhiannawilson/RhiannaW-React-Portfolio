// src/components/pages/TopProjects.jsx
import viewOfProject from './pageAssets/ViewOfProject.jpeg';
import '../pages/styles/pages.css'; // Adjust path if needed

const projects = [
  {
    id: 1,
    title: 'CMSify',
    image: viewOfProject,
    url: 'https://cmsify.onrender.com',
    description:
      'CMSify is a content management system for developers...',
  },
  {
    id: 2,
    title: 'ReciPlace',
    image: viewOfProject,
    url: '#',
    description:
      'ReciPlace is a web service designed to find recipes...',
  },
  {
    id: 3,
    title: 'RequestDJ',
    image: viewOfProject,
    url: '#',
    description:
      'RequestDJ is a collaborative music event app...',
  },
];

export default function TopProjects() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Featured Projects</h2>
      <div className="row flex-wrap p-4 m-2">
        {projects.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="col-12 col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-white rounded"
          >
            <div className="card">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={`${project.title} Project Screenshot`}
                  className="card-img-top"
                />
                Click here to view
              </a>
              <div className="card-body">
                <h4 className="card-title">{project.title}</h4>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary mt-4"
                    data-bs-toggle="modal"
                    data-bs-target={`#projectModal${project.id}`}
                  >
                    Read more
                  </button>

                  <div
                    className="modal fade"
                    id={`projectModal${project.id}`}
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby={`projectModalLabel${project.id}`}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id={`projectModalLabel${project.id}`}>
                            {project.title} Description
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
