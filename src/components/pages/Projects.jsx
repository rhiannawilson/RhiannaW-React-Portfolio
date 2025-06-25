
import ViewOfProject from './pageAssets/ViewOfProject.jpeg';
import PageWrapper from '../pages/UI/PageWrapper';

const projects = [
  {
    id: 1,
    title: 'CMSify',
    image: ViewOfProject,
    url: 'https://cmsify.onrender.com',
    description:
      'CMSify is a content management system for developers. It allows users to create, update, and manage blog posts in a structured format, following the MVC architecture. Built with Node.js, Express, MySQL, and Handlebars.',
  },
  {
    id: 2,
    title: 'ReciPlace',
    image: ViewOfProject,
    url: '#',
    description:
      'ReciPlace is a web service designed to find recipes and restaurants based on cuisine. Users can search for meals or dining spots nearby using APIs like The Meal DB and Google Places. Features a carousel UI, personalized suggestions, and built with Bulma CSS.',
  },
  {
    id: 3,
    title: 'RequestDJ',
    image: ViewOfProject,
    url: '#',
    description:
      'RequestDJ is a collaborative music event app where DJs manage events and attendees submit song requests. Built with PostgreSQL, Handlebars, Tailwind CSS, and features animations using GSAP. Designed for an engaging and personalized music experience.',
  },
  {
    id: 4,
    title: 'UI/UX Tips',
    image: ViewOfProject,
    url: 'https://firstrenderweb-om91.onrender.com/',
    description:
      'UI/UX Tips is a community-driven Q&A platform for junior developers. Users can post questions, share answers, and upvote content. Features include authentication, upvoting, and markdown formatting. Built with MERN stack and styled using Bootstrap and custom SCSS.',
  }
];


export default function Projects() {
  return (
 <PageWrapper>    
    <div className="projectsPage container">
      <h1 className="mb-4">Projects</h1>
      <div className="row flex-wrap p-4 m-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-12 col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-white rounded"
          >
            <div className="card">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
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

                  {/* Modal */}
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
                          <h5
                            className="modal-title"
                            id={`projectModalLabel${project.id}`}
                          >
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
                  {/* End Modal */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </PageWrapper>
  );
}