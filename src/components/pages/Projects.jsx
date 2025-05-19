

// import viewOfProject from './pageAssets/ViewOfProject.jpeg';

// export default function Projects() {
//   return (
//     <div className='projectsPage container '>
//       <h1 className="">Projects</h1>

//       {/* Display Project Cards on Main Page - FIRST CARD */}
//       <div className='row flex-wrap p-4 m-2 '>
//         {/* First Card */}
//         <div className='col-12 col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-white rounded'>
//           <div className='card'>
//             <a href="https://cmsify.onrender.com" target="_blank" rel="noopener noreferrer">
//               <img src={viewOfProject} alt='CMSify Project Image of Website' className="card-img-top" />
//               Click here to view
//             </a>
//             <div className='card-body'>
//               <h4 className='card-title'>Project One (title)</h4>
//               <div className="modal-footer">

//                 <button
//                   type="button"
//                   className="btn btn-primary mt-4"
//                   data-toggle="modal"
//                   data-target="#exampleModalScrollable"
//                 >
//                   Keep me
//                 </button>


// {/* POP UP MODAL */}
//                 {/* Scrollable Modal for Short Descriptions */}
//                 <div
//                   className="modal fade"
//                   id="exampleModalScrollable"
//                   tabIndex={-1}
//                   role="dialog"
//                   aria-labelledby="exampleModalScrollableLabel"
//                   aria-hidden="true"
//                 >
//                   <div className="modal-dialog modal-dialog-scrollable" role="document">
//                     <div className="modal-content">
//                       <div className="modal-header">
//                         <h5 className="modal-title" id="exampleModalScrollableLabel">
//                           Project Description
//                         </h5>
//                         <button
//                           type="button"
//                           className="close"
//                           data-dismiss="modal"
//                           aria-label="Close"
//                         >
//                           <span aria-hidden="true">×</span>
//                         </button>
//                       </div>
//                       <div className="modal-body">
//                         <div className='projContainer'>
//                           <div className='row g-3'>

//                             {/* First Description */}
//                             <div className='col-12'>
//                               <div className='card'>
//                                 <div className='card-body'>
//                                   <h4 className='card-title'>Project One (title)</h4>
//                                   <p className='card-text'>This is where a short description will go thank yu for being here thank yu for being here</p>
//                                 </div>
//                               </div>
//                             </div>

//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>


//         {/* SECOND CARD */}

//           {/* First Card */}
//           <div className='col-12 col-md-6 col-lg-4'>
//             <div className='card'>
//               <a href="https://cmsify.onrender.com" target="_blank" rel="noopener noreferrer">
//                 <img src={viewOfProject} alt='CMSify Project Image of Website' className="card-img-top" />
//                 Click here to view
//               </a>
//               <div className='card-body'>
//                 <h4 className='card-title'>Project Two (title)</h4>
//                 <div className="modal-footer">

//                   <button
//                     type="button"
//                     className="btn btn-primary mt-4"
//                     data-toggle="modal"
//                     data-target="#exampleModalScrollable"
//                   >
//                     Keep me
//                   </button>


// {/* POP UP MODAL */}

//                   {/* Scrollable Modal for Short Descriptions */}
//                   <div
//                     className="modal fade"
//                     id="exampleModalScrollable"
//                     tabIndex={-1}
//                     role="dialog"
//                     aria-labelledby="exampleModalScrollableLabel"
//                     aria-hidden="true"
//                   >
//                     <div className="modal-dialog modal-dialog-scrollable" role="document">
//                       <div className="modal-content">
//                         <div className="modal-header">
//                           <h5 className="modal-title" id="exampleModalScrollableLabel">
//                             Project Description
//                           </h5>
//                           <button
//                             type="button"
//                             className="close"
//                             data-dismiss="modal"
//                             aria-label="Close"
//                           >
//                             <span aria-hidden="true">×</span>
//                           </button>
//                         </div>
//                         <div className="modal-body">
//                           <div className='projContainer'>
//                             <div className='row g-3'>

//                               {/* First Description */}
//                               <div className='col-12'>
//                                 <div className='card'>
//                                   <div className='card-body'>
//                                     <h4 className='card-title'>Project Two (title)</h4>
//                                     <p className='card-text'>This is where a short description will go thank yu for being here thank yu for being here</p>
//                                   </div>
//                                 </div>
//                               </div>

//                             </div>
//                           </div>
//                         </div>
//                       </div>


//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>


//         {/* THIRD CARD */}
//           {/* First Card */}
//           <div className='col-12 col-md-6 col-lg-4'>
//             <div className='card'>
//               <a href="https://cmsify.onrender.com" target="_blank" rel="noopener noreferrer">
//                 <img src={viewOfProject} alt='CMSify Project Image of Website' className="card-img-top" />
//                 Click here to view
//               </a>
//               <div className='card-body'>
//                 <h4 className='card-title'>Project Three (title)</h4>
//                 <div className="modal-footer">

//                   <button
//                     type="button"
//                     className="btn btn-primary mt-4"
//                     data-toggle="modal"
//                     data-target="#exampleModalScrollable"
//                   >
//                     Keep me
//                   </button>



// {/* POP UP MODAL */}
//                   {/* Scrollable Modal for Short Descriptions */}
//                   <div
//                     className="modal fade"
//                     id="exampleModalScrollable"
//                     tabIndex={-1}
//                     role="dialog"
//                     aria-labelledby="exampleModalScrollableLabel"
//                     aria-hidden="true"
//                   >
//                     <div className="modal-dialog modal-dialog-scrollable" role="document">
//                       <div className="modal-content">
//                         <div className="modal-header">
//                           <h5 className="modal-title" id="exampleModalScrollableLabel">
//                             Project Description
//                           </h5>
//                           <button
//                             type="button"
//                             className="close"
//                             data-dismiss="modal"
//                             aria-label="Close"
//                           >
//                             <span aria-hidden="true">×</span>
//                           </button>
//                         </div>
//                         <div className="modal-body">
//                           <div className='projContainer'>
//                             <div className='row g-3'>

//                               {/* First Description */}
//                               <div className='col-12'>
//                                 <div className='card'>
//                                   <div className='card-body'>
//                                     <h4 className='card-title'>Project Three (title)</h4>
//                                     <p className='card-text'>This is where a short description will go thank yu for being here thank yu for being here</p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div><p>To be CHANGED: Copied from presentations</p>
          
// <p>ReciPlace <br></br><br></br>
// A group project web service designed to find and be inspired by new recipes and places in common with the cuisine. 
// RECIPLACE aims to cater to individuals seeking meal options by providing both recipe inspiration and restaurant recommendations. Users can search for recipes or restaurants based on their preferences. Meal Inspiration, Convenience, Time-saving, Decision-making, Personalisation. This is an application where users can search for recipe inspiration, make choices exploring through a list of recipes and discover nearby restaurant locations. Motivation for development, The Meal DB seemed like an easy API to work with, Link with Restaurant searches. design: Created a carousel of recipes. Technologies used: Bulma CSS, The Meal DB, Google Places API. User experience: Clean and Polished Interface, Convenience and Responsiveness, Time-saving Functionality, Decision-making, Personalisation, Accessibility.
// <br></br><br></br>
// RequestDJ <br></br><br></br>
// A group project web service that allows users to find and explore DJ’s in their area and requests their song via the app. Requests DJ is a song request management app for DJs and party guests, DJs create events and guests make song requests for the event, visible any time before or during the event! Our project is a website app created to add, manage, and edit events through collaborative music curation and voting, allowing attendees to enjoy a tailored party atmosphere. Enhanced the traditional nightlife experience by delivering a more personalized music experience that caters to the tastes of the audience. User Experience, Straightforward and user-friendly experience, Effortlessly browse events, Sign up and creating a profile. Add songs and participate in enhancing our website goals. Funky design inspired by a vibrant color palette from Coolors website, Logo designed in Canva, Google Icons, and animations powered by CodePen and the GSAP library. Technologies used - postgreSQL, handlebars, tailwind CSS, date FNS, with Auth, sequelize.
// </p>
          
//           </div>

// </div>
// </div>


//   );
// }


import viewOfProject from './pageAssets/ViewOfProject.jpeg';

const projects = [
  {
    id: 1,
    title: 'CMSify',
    image: viewOfProject,
    url: 'https://cmsify.onrender.com',
    description:
      'CMSify is a content management system for developers. It allows users to create, update, and manage blog posts in a structured format, following the MVC architecture. Built with Node.js, Express, MySQL, and Handlebars.',
  },
  {
    id: 2,
    title: 'ReciPlace',
    image: viewOfProject,
    url: '#',
    description:
      'ReciPlace is a web service designed to find recipes and restaurants based on cuisine. Users can search for meals or dining spots nearby using APIs like The Meal DB and Google Places. Features a carousel UI, personalized suggestions, and built with Bulma CSS.',
  },
  {
    id: 3,
    title: 'RequestDJ',
    image: viewOfProject,
    url: '#',
    description:
      'RequestDJ is a collaborative music event app where DJs manage events and attendees submit song requests. Built with PostgreSQL, Handlebars, Tailwind CSS, and features animations using GSAP. Designed for an engaging and personalized music experience.',
  },
];

export default function Projects() {
  return (
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
  );
}